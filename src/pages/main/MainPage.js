import React from "react";
import BasePage from "../../base/BasePage";
import { Layout, OffCanvas, Loader, LogoHolder } from "nq-component";
import HomePage from "../home/HomePage";
import { getCurrentUserUseCase, signOutUseCase } from "../../usecases/user";
import { getAllSchemasUseCase } from "../../usecases/schema/";
import MainPagePresenter from "./MainPagePresenter";
import menus from "./menus.js";
import filterAccess from "./filterAccess.js";
import withRouter from "../../withRouter";
import { Routes, Route } from "react-router-dom";
import NotFoundPage from "../notfound";
import Menus from "./menus.js";
import Menu from "../../components/Menu/index.js";

class MainPage extends BasePage {
  constructor(props) {
    super(props);
    this.presenter = new MainPagePresenter(
      this,
      getCurrentUserUseCase(),
      signOutUseCase(),
      getAllSchemasUseCase()
    );
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
          <Loader />
        </div>
      );
    }
    return (
      <Layout>
        <Layout.Context.Consumer>
          {(value) => (
            <OffCanvas onSetShow={value.setCollapse} show={value.collapsed}>
              <div className="offcanvas-body">
                <nav className="navbar-dark">
                  <div className="text-center">
                    <LogoHolder
                      className="bg-white"
                      textClassName="text-dark"
                      logo={user.picture}
                      name={user.username}
                    />
                    <p className="text-white mt-3">
                      {user.name || user.username}
                    </p>
                  </div>
                  <hr className="dropdown-divider bg-light" />
                  <Menu
                    onClickItem={this.onClickMenu.bind(this)}
                    menus={menus}
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
            </OffCanvas>
          )}
        </Layout.Context.Consumer>
        <main className="vh-100 d-flex flex-column">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/users" element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </Layout>
    );
  }
}

export default withRouter(MainPage);
