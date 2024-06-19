class BaseFormPresenter {
    constructor(view, getObjectUseCase, upsertUseCase) {
        this.view = view;
        this.getObjectUseCase = getObjectUseCase;
        this.upsertUseCase = upsertUseCase;
    }

    componentDidMount() {
        this.init();
        this.getObject();
    }

    init() {
        this.object = {};
        this.change = {};// when data is change
    }

    async getObject() {
        const collection = this.view.getCollectionName();
        const id = this.object.id || this.view.getObjectId();
        if (id) {
            const params = {includes: ['all']};
            try {
                this.view.showLoading();
                this.object = await this.getObjectUseCase.execute(collection, id, {params});
                this.view.hideLoading();
                this.view.setObject(this.object);
            } catch (error) {
                this.view.hideLoading();
                this.view.showError(error);
            }
        }
    }

    onChange(value, field) {
        this.change[field] = value;
        this.object[field] = value;
        this.view.setObject(this.object);
        this.view.setChange(this.change);
    }

    async save() {
        const collection = this.view.getCollectionName();
        if (this.object.id) {
            this.change.id = this.object.id;
            const schema = this.view.getSchema(collection);
            Object.keys(schema.fields).forEach(field => {
                const property = schema.fields[field];
                if (property.change) {
                    this.change[field] = this.change[field] || this.object[field];
                }
            });
        }
        try {
            const object = await this.upsertUseCase.execute(collection, this.change);
            this.object = object;
            this.change = {};
            this.view.setObject(this.object);
        } catch (error) {
            throw error; // rethrow the error to be caught by the caller
        }
    }

    async submit() {
        if (Object.values(this.change).length === 0) {
            this.view.showSuccessSnackbar("Successfully saved!");
            return;
        }
        try {
            this.view.submitting();
            await this.save();
            this.view.submissionSuccess();
            this.view.showSuccessSnackbar("Successfully saved!");
        } catch (error) {
            this.view.submissionError(error);
            this.view.showError(error);
        }
    }

    onClickBack() {
        if (Object.values(this.change).length > 0) {
            const message = 'You have unsaved changes that will be lost if you proceed. Are you sure you want to discard these changes?';
            this.view.showConfirmDialog(message, 'Discard Changes', 'DISCARD')
                .then(() => {
                    this.view.navigateBack();
                })
                .catch(() => {

                });
            return;
        }
        this.view.navigateBack();
    }
}

export default BaseFormPresenter;
