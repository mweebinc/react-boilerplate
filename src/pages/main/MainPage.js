import React from 'react';
import BasePage from "../../base/BasePage";
import {Menu} from "nq-component";
import {OffCanvas} from 'nq-component';
import {Layout} from "nq-component";
import HomePage from "../home/HomePage";

class MainPage extends BasePage {
    constructor(props) {
        super(props);
    }

    signOutClick() {

    }

    t() {
        return 'TEST';
    }

    render() {
        const menus = [
            {
                name: 'dashboard',
                icon: 'bi bi-graph-up',
                route: '/dashboard'
            },
        ];
        return (
            <Layout>
                <OffCanvas>
                    <div className="offcanvas-body">
                        <nav className="navbar-dark">
                            <hr className="dropdown-divider bg-light"/>
                            <Menu
                                menus={menus}/>
                        </nav>
                    </div>
                    <div className="my-2">
                        <button
                            className="nav-link text-muted btn btn-link"
                            onClick={this.signOutClick.bind(this)}>
                            <i className="bi bi-power"></i>
                            <span className="ms-2 fw-bold small">Log out</span>
                        </button>
                    </div>
                </OffCanvas>

                <main className="vh-100 d-flex flex-column">
                    <HomePage></HomePage>
                </main>
            </Layout>
        )
    }
}

export default MainPage;
