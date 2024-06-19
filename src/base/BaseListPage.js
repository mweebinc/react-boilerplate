import BasePage from "./BasePage";

class BaseListPage extends BasePage {
    state = {
        objects: [],
        selected: [],
        loading: true,
        progress: 0,
        total: 0,
        count: 0
    };

    getCollectionName() {
        return this.props.params.name;
    }

    componentDidMount() {
        this.presenter.componentDidMount();
    }

    onClickAdd() {
        this.presenter.onClickAdd();
    }

    onClickDeleteSelected() {
        this.presenter.onClickDeleteSelected();
    }

    getSelected() {
        return this.state.selected;
    }

    setSelected(selected) {
        this.setState({selected});
    }

    setObjects(objects) {
        this.setState({objects});
    }

    getObjects() {
        return this.state.objects;
    }

    loadMore() {
        this.presenter.loadMore();
    }

    searchSubmit(where, merge) {
        this.presenter.searchSubmit(where, merge);
    }

    setCount(count) {
        this.setState({count});
    }

    setTotal(total) {
        this.setState({total});
    }

    onSelect(index) {
        this.presenter.onSelect(index);
    }

    onSelectAll(checked) {
        this.presenter.onSelectAll(checked);
    }

    onClickItem(index, field) {
        this.presenter.onClickItem(index, field);
    }

    // get only the readable fields
    getKeys() {
        const schema = this.getSchema(this.getCollectionName());
        if (!schema) return [];
        return Object.keys(schema.fields)
            .filter(key => {
                const properties = schema.fields[key];
                if (properties.read === false) {
                    return false;
                }
                switch (properties._type || properties.type) {
                    case 'Relation':
                    case 'Array':
                    case 'Object':
                    case 'File':
                        return false;
                        break;
                    default:
                }
                return true;
            });
    }

    onChangeFilter(type, value, field) {
        const where = {};
        switch (type) {
            case "Pointer":
                if (Object.keys(value).length > 0) {
                    where[field] = {id: value.id};
                }
                break;
            case "Boolean":
                where[field] = value;
                break;
            default:
                where[field] = {$regex: value, $options: "i"};
        }
        this.presenter.filterSubmit(where, value, field);
    }

}

export default BaseListPage;