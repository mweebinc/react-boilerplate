import React from "react";
import { InputJson } from "nq-component";
import CollectionFormPresenter from "./CollectionFormPresenter";
import { getObjectUseCase, upsertUseCase } from "../../usecases/object";
import withRouter from "../../withRouter";
import BaseFormPage from "../../base/BaseFormPage";
import NavBar from "../../components/Navbar";
import FormFactory from "../../components/FormFactory";
import {toDisplayCase} from "nq-component";

class CollectionFormPage extends BaseFormPage {
  constructor(props) {
    super(props);
    this.state = { object: {}, advanced: false };
    this.presenter = new CollectionFormPresenter(
      this,
      getObjectUseCase(),
      upsertUseCase()
    );
  }

  onClickAdvance() {
    this.setState({ advanced: !this.state.advanced });
  }

  render() {
    const object = this.state.object;
    const advanced = this.state.advanced;
    const schema = this.getSchema(this.getCollectionName());
    if (!schema) return <h1>no schema</h1>;
    const label = this.getObjectId() === undefined ? "Add New " : "Edit ";
    return (
      <>
        <NavBar
          action={() => (
            <div className="dropdown dropstart d-inline-block">
              <i
                role="button"
                data-bs-toggle="dropdown"
                className="bi bi-three-dots-vertical"
              ></i>
              <div className="dropdown-menu fs-xs">
                <button
                  onClick={this.onClickAdvance.bind(this)}
                  className="dropdown-item py-3"
                >
                  <i className="bi bi-gear pe-2" />
                  Toggle Advance
                </button>
              </div>
            </div>
          )}
        />
        <div className="overflow-auto">
          <div className="h-100">
            <div className="p-3 p-lg-4">
              <h1 className="fw-bold mt-3 text-capitalize">
                {label + (schema.label || toDisplayCase(this.getCollectionName()))}
              </h1>
              <div className="mt-3 bg-white shadow rounded p-3 px-lg-5 py-lg-4">
                <form onSubmit={this.onSubmitForm.bind(this)}>
                  <div className="row g-3">
                    {advanced ? (
                      <InputJson
                        defaultValue={object}
                        onChange={this.onChange.bind(this)}
                        rows="15"
                      />
                    ) : (
                      <FormFactory
                        schema={schema}
                        object={object}
                        onChange={this.onChange.bind(this)}
                      />
                    )}
                  </div>
                  <div className="mt-4">
                    <button
                      type="submit"
                      className="btn btn-primary fs-sm me-3"
                    >
                      <i className="bi bi-file-earmark-check me-2"></i>SAVE
                    </button>
                    <button
                      type="button"
                      className="btn btn-light fs-sm"
                      onClick={this.onClickBack.bind(this)}
                    >
                      GO BACK
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(CollectionFormPage);
