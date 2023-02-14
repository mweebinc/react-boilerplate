import React from "react";
import {Link} from "react-router-dom";
import SignInPresenter from "./SignInPresenter";
import {signInUseCase} from "../../usecases/user";
import {Button, InputString, InputPassword} from "nq-component";
import BasePage from "../../base/BasePage";
import withRouter from "../../withRouter";

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
                <div className="d-flex h-100">
                    <div className="m-auto container p-3 px-lg-5 py-lg-4">
                        <div className="bg-white shadow rounded p-3 px-lg-5 py-lg-4">
                            <div className="row">
                                <div className="col-md-6 border-end border-1">
                                    <div className="h-100 d-flex align-items-center">
                                        <div className="text-center p-3 w-100">
                                            <img
                                                className="img-fluid login-img mb-3 w-50"
                                                src="/assets/images/logo.svg"/>
                                            <h1 className="fw-bold text-black">YOUR TITLE</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 p-3 px-lg-5 py-lg-4">
                                    <h2 className="fw-bold mb-3">Login</h2>
                                    <form onSubmit={this.formSubmit.bind(this)}>
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
                                                    object={user}
                                                />
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
                                        <div className="text-end mb-3">
                                            <div className="mb-3 text-end">
                                                <Link to="/forgot" className="fs-sm ms-2">
                                                    Forgot your password?
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="text-center mb-3">
                                            <Button
                                                progress={this.state.progress}
                                                type="submit"
                                                className="btn-primary w-50"
                                            >
                                                {this.state.progress ? "Please wait..." : "LOGIN"}
                                            </Button>
                                        </div>
                                        <div className="text-center">
                    <span className="fs-sm">
                      Don't have an account?
                      <Link to="/signup" className="ms-1">
                        Sign up
                      </Link>
                    </span>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(SignInPage);
