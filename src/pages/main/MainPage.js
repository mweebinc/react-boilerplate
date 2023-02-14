import React from 'react';
import BasePage from "../../base/BasePage";
import {Menu} from "nq-component";
import {OffCanvas} from 'nq-component';
import {Layout} from "nq-component";
import HomePage from "../home/HomePage";


const employeeMenus = [
    {
        name: "Employees",
        route: '/employees'
    },
    {
        name: "Positions",
        route: '/employees'
    }
];
const userMenus = [
    {
        name: "Users",
        route: '/users'
    },
    {
        name: "Roles",
        route: '/employees'
    }
];

const menus = [
    {
        name: "Dashboard",
        icon: 'bi bi-layout-text-window-reverse',
        route: '/dashboard'
    },
    {
        name: "User Management",
        icon: "bi bi-person-lines-fill",
        route: userMenus,
    },
    {
        name: "Employee Management",
        icon: "bi bi-people-fill",
        route: employeeMenus,
    },
];

class MainPage extends BasePage {
    constructor(props) {
        super(props);
    }

    signOutClick() {

    }

    render() {
        const user = {name: 'Juan Dela Cruz', email: 'juan.dela.cruz@yahoo.com'};
        return (
            <Layout>
                <Layout.Context.Consumer>
                    {
                        (value =>
                                <OffCanvas
                                    onSetShow={value.setCollapse}
                                    show={value.collapsed}>
                                    <div className="offcanvas-body">
                                        <nav className="navbar-dark">
                                            <div className="d-flex p-2">
                                                <img className="w-100 h-auto img-fluid"
                                                     style={{filter: 'invert(100%)'}} src="/assets/images/logo.svg"/>
                                                <div className="p-2 text-white w-75">
                                                    <h6 className="m-0 text-truncate">{user.name}</h6>
                                                    <p className="text-truncate m-0">
                                                        {user.email}
                                                    </p>
                                                </div>
                                            </div>
                                            <hr className="dropdown-divider bg-white"/>
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
                        )
                    }
                </Layout.Context.Consumer>

                <main className="vh-100 d-flex flex-column">
                    <HomePage></HomePage>
                </main>
            </Layout>
        )
    }
}

export default MainPage;
