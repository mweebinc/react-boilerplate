import React from 'react';
import {Link} from "react-router-dom";

class NotFoundPage extends React.Component {
    render() {
        return (
            <div className="vh-100 d-flex align-items-center">
                <div className="container text-center">
                    <i className="bi bi-cone-striped display-1"></i>
                    <h2 className="mt-3 fw-bold">This page is under construction.</h2>
                    <p>
                        We're working on it!
                    </p>
                    <Link className="btn btn-primary btn-sm" to="/categories">GOTO HOME</Link>
                </div>
            </div>
        );
    }
}

export default NotFoundPage;
