class BaseListPresenter {
    constructor(view, findObjectUseCase, countObjectUseCase, deleteObjectUseCase) {
        this.view = view;
        this.findObjectUseCase = findObjectUseCase;
        this.countObjectUseCase = countObjectUseCase;
        this.deleteObjectUseCase = deleteObjectUseCase;
    }

    componentDidMount() {
        this.init();
        return this.getObjects();
    }

    init() {
        this.limit = 0;
        this.where = {}; // Always use in query
        this.search = {}; // Use in search input
        this.filter = {}; // Use in filter dropdown
        this.includes = ['all'];
        this.keys = undefined; // if keys are specified, only those keys will be returned
        this.sort = {createdAt: -1};
        this.loading = true;
        this.reset();
    }

    reset() {
        this.objects = [];
        this.count = 0;
        this.current = 1;
        this.view.setObjects([]);
        this.view.setSelected([]);
        this.view.setCount(0);
        this.view.setTotal(0);
    }

    async getObjects() {
        this.reset();
        await this.countObjects();
        await this.findObjects();
    }

    async countObjects() {
        try {
            this.showLoading();
            const collection = this.view.getCollectionName();
            const query = this.createQuery();
            const {count} = await this.countObjectUseCase.execute(collection, {where: query.where});
            this.count = count;
            this.view.setCount(this.count);
        } catch (error) {
            this.hideLoading();
            this.view.showError(error);
        }

    }

    createQuery() {
        const skip = (this.current - 1) * this.limit;
        const query = {
            limit: this.limit,
            skip: skip,
            where: {...this.where, ...this.search, ...this.filter},
            includes: this.includes
        };
        if (this.sort) {
            query.sort = this.sort;
        }
        const keys = this.keys || this.view.getKeys() || [];
        if (keys.length > 0) {
            query.keys = keys;
        }
        return query;
    }

    async findObjects() {
        const collection = this.view.getCollectionName();
        const query = this.createQuery();
        try {
            this.showLoading();
            this.findObjectUseCase.abort();
            const objects = await this.findObjectUseCase.execute(collection, query);
            this.objects = this.objects.concat(objects);
            this.view.setTotal(this.objects.length);
            this.view.setObjects(this.objects);
            this.hideLoading();
        } catch (error) {
            this.hideLoading();
            this.view.showError(error);
        }
        this.loading = false;
    }

    onSelect(index) {
        const selectedObjects = this.view.getSelected();
        const selected = this.objects[index];
        const i = selectedObjects.indexOf(selected);
        if (i > -1) {
            selectedObjects.splice(i, 1);
        } else {
            selectedObjects.push(selected);
        }
        this.view.setSelected(selectedObjects);
    }

    searchSubmit(search) {
        this.reset();
        this.search = {...this.search, ...search};
        Object.keys(this.search).forEach(key => {
            if (this.search[key] === undefined) {
                delete this.search[key];
            }
        })
        this.getObjects();
    }

    filterSubmit(where) {
        this.reset();
        this.filter = where;
        this.getObjects();
    }

    loadMore() {
        if (!this.loading) {
            this.current++;
            this.findObjects();
        }
    }

    onSelectAll(checked) {
        if (checked) {
            this.view.setSelected([...this.objects]);
        } else {
            this.view.setSelected([]);
        }
    }

    onClickItem(index) {
        const object = this.objects[index];
        const collection = this.view.getCollectionName();
        this.view.navigateTo("/collection/" + collection + "/form/" + object.id);
    }

    onClickAdd() {
        const collection = this.view.getCollectionName();
        this.view.navigateTo("/collection/" + collection + "/form");
    }

    async onClickDeleteSelected() {
        const selected = this.view.getSelected();
        const collection = this.view.getCollectionName();
        try {
            await this.view.showDialog({title: 'Delete Data?', message: 'Are you sure you want to delete?'});
            for (const obj of selected) {
                await this.deleteObjectUseCase.execute(collection, obj.id);
                const index = this.objects.indexOf(obj);
                this.objects.splice(index, 1);
                this.view.setObjects(this.objects);
            }
            this.view.setSelected([]);
        } catch (error) {
            this.view.hideLoading();
            this.view.showError(error);
        }
    }

    showLoading() {
        this.loading = true;
        this.view.showLoading();
    }

    hideLoading() {
        this.loading = false;
        this.view.hideLoading();
    }
}

export default BaseListPresenter;