import React from "react";
import withRouter from "../withRouter";
import InputFactory from "../components/InputFactory";
import {useNavigate} from "react-router-dom";

function AppTenantPage() {
    const [id, setId] = React.useState();
    const navigate = useNavigate();

    function formSubmit(e) {
        e.preventDefault();
        window.localStorage.setItem("APPLICATION_ID", id);
        navigate("/signin");
    }

    function onChange(value) {
        setId(value);
    }

    return (
        <div className="vh-100">
            <div className="d-flex h-100">
                <div className="m-auto container p-3 p-lg-5">
                    <div className="bg-white shadow rounded p-3 p-lg-5">
                        <div className="row">
                            <div className="col-md-6 border-end border-1">
                                <div className="h-100 d-flex align-items-center">
                                    <div className="text-center p-3 w-100">
                                        <img
                                            className="img-fluid login-img mb-3 w-50"
                                            alt="company logo"
                                            src="/logo.svg"/>
                                        <h1 className="fw-bold text-black">NQ Dashboard</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 p-3 px-lg-5 py-lg-4">
                                <h2 className="fw-bold mb-3">Enter your app ID</h2>
                                <form onSubmit={formSubmit}>
                                    <div className="row g-4">
                                        <div className="col-md-12">
                                            <label className="form-label fs-sm">Application ID</label>
                                            <InputFactory
                                                required
                                                type="String"
                                                autoComplete="nope"
                                                className="form-control"
                                                placeholder="Application ID"
                                                field="applicationId"
                                                onChange={onChange}
                                            />
                                        </div>
                                        <div className="text-center">
                                            <button
                                                type="submit"
                                                className="btn btn-primary w-50">
                                                CONTINUE
                                            </button>
                                        </div>
                                        <div className="text-center mt-3">
                                            <span className="fs-sm">
                                              Don't have an account?
                                              <a href="https://platform.innque.com" className="ms-1">
                                               <span className="text-decoration-underline">Create app</span>
                                              </a>
                                            </span>
                                        </div>
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

export default withRouter(AppTenantPage);
