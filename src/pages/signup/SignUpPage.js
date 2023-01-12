import React from "react";
import BasePage from "../../base/BasePage";
import {Link} from "react-router-dom";
import SignUpPresenter from "./SignUpPresenter";
import {signUpUseCase} from "../../domain/user";
import {Button} from "nq-component";
import {InputString, InputPassword} from "nq-component";

class SignUpPage extends BasePage {
    constructor(props) {
        super(props);
        this.presenter = new SignUpPresenter(this, signUpUseCase());
        this.state = {user: {}, progress: false};
    }

    showProgress() {
        this.setState({progress: true});
    }

    hideProgress() {
        this.setState({progress: false});
    }

    formSubmit(e) {
        e.preventDefault();
        this.presenter.submit(this.state.user);
    }

    render() {
        const {user} = this.state;
        return (
            <div className="vh-100">
                <div className="container d-flex h-100">
                    <div className="bg-white shadow rounded m-auto">
                        <div className="p-4 p-lg-5">
                            <div className="text-center py-4">
                                <img src="/assets/images/logo.svg" width="175px"/>
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
                                    <div className="col-md-12">
                                        <label className="form-label fs-sm">Confirm Password</label>
                                        <InputPassword
                                            required
                                            className="form-control"
                                            placeholder="Password"
                                            field="confirmPassword"
                                            object={user}
                                        />
                                    </div>
                                </div>
                                <div className="text-center">
                                    <Button
                                        progress={this.state.progress}
                                        type="submit"
                                        className="btn-primary w-50">
                                        {this.state.progress ? 'Please wait...' : 'SIGNUP'}
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

export default SignUpPage;
