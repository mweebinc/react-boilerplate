import React from "react";
import BasePage from "../../base/BasePage";
import SignInPresenter from "./SignInPresenter";
import {signInUseCase} from "../../domain/user";
import {Button} from "nq-component";
import {Link} from "react-router-dom";
import withRouter from "../../withRouter";
import {InputString,InputPassword} from "nq-component";

class SignInPage extends BasePage {
    constructor() {
        super();
        this.presenter = new SignInPresenter(this, signInUseCase());
        this.state = {user: {}, progress: false};
    }

    formSubmit(e) {
        e.preventDefault();
        this.presenter.submit(this.state.user);
    }

    getMasterKey() {
        return this.props.params && this.props.params.masterKey;
    }

    showProgress() {
        this.setState({progress: true});
    }

    hideProgress() {
        this.setState({progress: false});
    }

    render() {
        const {user} = this.state;
        return (
            <div className="vh-100">
                <div className="container d-flex h-100">
                    <div className="bg-white shadow rounded m-auto">
                        <div className="p-4 p-lg-5">
                            <div className="text-center py-4">
                                <img src="/assets/images/logo.svg" alt="logo" width="175px"/>
                            </div>
                            <form className="mb-4" onSubmit={this.formSubmit.bind(this)}>
                                <div className="row g-3 mb-3">
                                    <div className="col-md-12">
                                        <label className="form-label fs-sm">Email Address</label>
                                        <InputString
                                            required
                                            type="email"
                                            autoComplete="nope"
                                            className="form-control"
                                            placeholder="Email Address"
                                            field="email"
                                            object={user}/>
                                    </div>
                                    <div className="col-md-12">
                                        <label className="form-label fs-sm">Password</label>
                                        <InputPassword
                                            required
                                            className="form-control"
                                            placeholder="Password"
                                            field="password"
                                            object={user}
                                        />
                                    </div>
                                </div>
                                <div className="mb-3 text-end">
                                    <Link className="fs-sm ms-2"
                                          to={{
                                              pathname: "/forgot",
                                              state: {transition: "slide-left"}
                                          }}>Forgot your password?</Link>
                                </div>
                                <div className="text-center">
                                    <Button
                                        progress={this.state.progress}
                                        type="submit"
                                        className="btn-primary w-50">
                                        {this.state.progress ? 'Please wait...' : 'LOGIN'}
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(SignInPage);
