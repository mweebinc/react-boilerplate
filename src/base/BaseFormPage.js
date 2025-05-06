import BasePage from "./BasePage";

class BaseFormPage extends BasePage {
    state = {
        loading:true,
        object: {},
        change: {},
        advanced: false
    };

    componentDidMount() {
        this.presenter.componentDidMount();
    }

    getCollectionName() {
        return this.props.params.name;
    }

    getObjectId() {
        return this.props.params && this.props.params.id;
    }

    onSubmitForm(e) {
        e.preventDefault();
        this.presenter.submit();
    }

    onClickBack() {
        this.presenter.onClickBack();
    }

    setObject(object) {
        this.setState({object});
    }

    setChange(change) {
        this.setState({change});
    }

    onChangeObject(object) {
        this.presenter.onChangeObject(object);

    }
    onChange(value, field) {
        this.presenter.onChange(value, field);
    }

    onClickAdvance() {
        this.setState({advanced: !this.state.advanced});
    }

    getOptions() {
        return {includes: ["all"]};
    }
}

export default BaseFormPage;
