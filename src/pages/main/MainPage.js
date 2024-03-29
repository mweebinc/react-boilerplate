import React from 'react';
import BasePage from "../../base/BasePage";
import {Layout, OffCanvas, Menu, Progress} from "nq-component";
import HomePage from "../home/HomePage";
import {getCurrentUserUseCase, signOutUseCase} from "../../usecases/user";
import {getAllSchemasUseCase} from "../../usecases/schema";
import MainPagePresenter from "./MainPagePresenter";


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
        this.state = {progress: true};
        this.presenter = new MainPagePresenter(this, getCurrentUserUseCase(), signOutUseCase(), getAllSchemasUseCase());
    }

    componentDidMount() {
        // this.presenter.componentDidMount();
    }

    signOutClick() {
        this.presenter.signOutClick();
    }

    render() {
        const user = {name: 'Juan Dela Cruz', email: 'juan.dela.cruz@yahoo.com'};
        // const user = this.getCurrentUser();
        if (!user) {
            return (
                <Progress/>
            )
        }
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
                                            <div className="text-center p-2">
                                                <img
                                                    className="w-50"
                                                    src="/assets/images/logo.svg"
                                                    style={{filter: 'invert(100%)'}}/>
                                                <div className="p-2 text-white">
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
