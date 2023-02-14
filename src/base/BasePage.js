import React from 'react';
import Context from "../AppContext";
import {dialog} from "nq-component";
import createPromise from "../createPromise";
import ProgressDialog from "./ProgressDialog";
import ConfirmDialog from "./ConfirmDialog";

/**
 * responsible for global function use for all components
 */

class BasePage extends React.Component {

    showProgress() {
        this.setState({progress: true});
    }

    hideProgress() {
        this.setState({progress: false});
    }

    showProgressDialog() {
        const promise = createPromise();
        dialog.fire({
                html: (
                    <ProgressDialog/>
                ),
                footer: false,
            }
        );
        return promise;
    }

    hideProgressDialog() {
        dialog.close();
    }

    showError(error, title) {
        if (error instanceof Object) {
            return this.showError(error.message, title);
        }
        if (typeof error === 'string') {
            const options = {
                title: title || "Error",
                message: error,
                icon: 'bi bi-x-circle',
                type: 'danger',
                positiveButton: 'OKAY',
                negativeButton: false,
            };
            return this.showDialog(options)
        }
    }

    showSuccess(message, title) {
        const options = {
            title: title || "Success",
            message: message,
            icon: 'bi bi-check-circle',
            type: 'success',
            positiveButton: 'OKAY',
            negativeButton: false,
        };
        return this.showDialog(options);
    }

    showDialog({title, message, icon, type, ...options}) {
        const promise = createPromise();
        dialog.fire({
                html: (
                    <ConfirmDialog
                        icon={icon}
                        title={title}
                        message={message}
                        type={type}/>
                ),
                onPositiveClick: () => {
                    promise.resolve();
                },
                onNegativeClick: () => {
                    promise.reject();
                },
                ...options
            }
        );
        return promise;
    }

    getSchemas() {
        return this.context.schemas;
    }

    getSchema(collection) {
        const schemas = this.getSchemas();
        if (schemas) {
            return schemas.find(s => s.collection === collection);
        }
    }

    setSchemas(schemas) {
        this.context.setGlobalState({schemas});
    }

    setCurrentUser(user) {
        this.context.setGlobalState({user});
    }
    setCurrentRoles(roles) {
        this.context.setGlobalState({roles});
    }
    getCurrentUser() {
        return this.context.user;
    }
    getCurrentRoles() {
        return this.context.roles;
    }

    setStatePromise(state) {
        const promise = createPromise();
        this.setState(state, promise.resolve);
        return promise
    }

    navigateTo(url, argument, options) {
        const navigate = this.props.navigate;
        if (navigate) {
            navigate(url, {state: argument, ...options});
        } else {
            const params = new URLSearchParams(argument).toString();
            document.location.href = url;
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

    navigateBack() {
        this.navigateTo(-1);
    }

    reload() {
        window.location.reload();
    }
}

BasePage.contextType = Context;
export default BasePage;
