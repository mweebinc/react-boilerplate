import React from 'react';
import BasePage from "../../base/BasePage";
import {Layout, OffCanvas, Menu, Loader,LogoHolder} from "nq-component";
import HomePage from "../home/HomePage";
import {getCurrentUserUseCase, signOutUseCase} from "../../usecases/user";
import {getAllSchemasUseCase} from "../../usecases/schema";
import MainPagePresenter from "./MainPagePresenter";
import menus from "./menus.js";
import filterAccess from "./filterAccess.js";
import withRouter from "../../withRouter";

class MainPage extends BasePage {
    constructor(props) {
        super(props);
<<<<<<< HEAD
        this.state = {progress: true};
        this.presenter = new MainPagePresenter(this, getCurrentUserUseCase(), signOutUseCase(), getAllSchemasUseCase());
=======
        this.presenter = new MainPagePresenter(this, getCurrentUserUseCase(), signOutUseCase(), getSchemasUseCase());
>>>>>>> master
    }

    componentDidMount() {
        this.presenter.componentDidMount();
    }

    onClickSignOut() {
        this.presenter.onClickSignOut();
    }


    onClickMenu(e, item) {
        e.preventDefault();
        this.navigateTo(item.route, item);
    }


    render() {
        const user = this.getCurrentUser();
        const roles = this.getCurrentRoles();
        if (this.state.loading) {
            return (
                <div className="min-vh-100 d-flex justify-content-center align-items-center ">
                    <Loader/>
                </div>
            );
        }
        return (
            <Layout>
                <Layout.Context.Consumer>
                    {(value) => (<OffCanvas onSetShow={value.setCollapse} show={value.collapsed}>
                        <div className="offcanvas-body">
                            <nav className="navbar-dark">
                                <div className="text-center">
                                    <LogoHolder
                                        className="bg-white"
                                        textClassName="text-dark"
                                        logo="/logo.svg"
                                    />
                                    <p className="text-white mt-3">
                                        {/*{user.name || user.username}*/}
                                    </p>
                                </div>
                                <hr className="bg-white"/>
                                <Menu
                                    onClickItem={this.onClickMenu.bind(this)}
                                    menus={user.isMaster ? menus : filterAccess(menus, roles)}
                                />
                            </nav>
                        </div>
                        <div className="m-3">
                            <button
                                className="nav-link text-white btn btn-link"
                                onClick={this.onClickSignOut.bind(this)}
                            >
                                <i className="bi bi-power"></i>
                                <span className="ms-2 fw-bold small">Log out</span>
                            </button>
                        </div>
                    </OffCanvas>)}
                </Layout.Context.Consumer>

                <main className="vh-100 d-flex flex-column">
                    <HomePage></HomePage>
                </main>
            </Layout>
        )
    }
}

export default withRouter(MainPage);
