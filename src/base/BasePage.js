import React from "react";
import {createPromise} from "nq";
import Context from "../AppContext";
import {dialog} from "nq-component";
import ProgressDialog from "./ProgressDialog";
import ConfirmDialog from "./ConfirmDialog";

/**
 * responsible for global function use for all components
 */

class BasePage extends React.Component {

    state = {
        loading: true,
        progress: 0
    };

    showLoading() {
        this.setState({loading: true});
    }

    hideLoading() {
        this.setState({loading: false});
    }

    setProgress(progress) {
        this.setState({progress});
    }

    // @deprecated
    showProgress() {
        this.setState({progress: 1, loading: true});
    }

    // @deprecated
    hideProgress() {
        this.setState({progress: 0, loading: false});
    }

    submitting() {
        this.setState({submitting: true});
    }

    submissionSuccess() {
        this.setState({submitting: false});
    }

    submissionError() {
        this.setState({submitting: false});
    }

    // block the UI to show the loading dialog
    showProgressDialog() {
        const promise = createPromise();
        dialog.fire({
            component: <ProgressDialog/>,
            footer: false,
        });
        return promise;
    }

    hideProgressDialog() {
        dialog.close();
    }

    showError(error, title) {
        if (error instanceof Object) {
            return this.showError(error.message, title);
        }
        if (typeof error === "string") {
            const options = {
                title: title || "Error",
                message: error,
                icon: "bi bi-x-circle",
                type: "danger",
                positiveButton: "OKAY",
                negativeButton: false,
            };
            return this.showDialog(options);
        }
    }

    // show success dialog
    showSuccess(message, title) {
        const options = {
            title: title || "Success",
            message: message,
            icon: "bi bi-check-circle",
            type: "success",
            positiveButton: "OKAY",
            negativeButton: false,
        };
        return this.showDialog(options);
    }

    // show confirm dialog
    showConfirmDialog(message, title, positiveButton, negativeButton) {
        const options = {
            title: title || "Are you sure?",
            message: message,
            icon: "bi bi-exclamation-triangle",
            type: "warning",
            positiveButton: positiveButton || "OKAY",
            negativeButton: negativeButton || "CANCEL",
        };
        return this.showDialog(options);
    }

    // the generic popup dialog
    showDialog({title, message, icon, type, ...options}) {
        const promise = createPromise();
        dialog.fire({
            component: (<ConfirmDialog
                icon={icon}
                title={title}
                message={message}
                type={type}
            />), onPositiveClick: () => {
                promise.resolve();
            }, onNegativeClick: () => {
                promise.reject();
            }, ...options,
        });
        return promise;
    }

    closeDialog() {
        dialog.close();
    }

    // show timeout dialog
    showSuccessSnackbar(message) {
        this.showSuccess(message);
    }

    setCurrentUser(user) {
        this.context.setGlobalState({user});
    }

    getCurrentUser() {
        return this.context.user;
    }

    setCurrentRoles(roles) {
        this.context.setGlobalState({roles});
    }

    setGlobalState(state) {
        this.context.setGlobalState(state);
    }

    getGlobalState(key) {
        return key ? this.context[key] : this.context;
    }

    getCurrentRoles() {
        return this.context.roles;
    }

    setSchemas(schemas) {
        this.context.setGlobalState({schemas});
    }

    getSchemas() {
        return this.context.schemas;
    }

    getSchema(collection) {
        const schemas = this.getSchemas();
        if (schemas) {
            return schemas.find((s) => s.collection === collection);
        }
    }

    setStatePromise(object) {
        const promise = createPromise();
        this.setState(object, promise.resolve);
        return promise;
    }

    navigateTo(path, argument, options) {
        const navigate = this.props.navigate;
        if (navigate) {
            navigate(path, {state: argument, ...options});
        } else {
            const params = new URLSearchParams(argument).toString();
            if (window.location.pathname !== path) {
                document.location.href = `${path}?${params}`;
            }
        }
    }

    /**
     * Get the object pass from navigate
     * @returns {*}
     */
    getArgument() {
        const location = this.props.location;
        if (location) {
            return this.props.location.state;
        }
    }

    /**
     * Get the value of parameter from URL
     * @returns {*}
     */
    getParams() {
        return this.props.params;
    }

    /**
     * Get the value of search params from query string in URL
     * @returns {*}
     */
    getSearch() {
        return this.props.search;
    }

    navigateBack() {
        this.navigateTo(-1);
    }

    reload() {
        window.location.reload();
    }

    isMobile() {
        return window.innerWidth <= 768;
    }

    redirect(url) {
        window.location.href = url;
    }
}

BasePage.contextType = Context;
export default BasePage;
