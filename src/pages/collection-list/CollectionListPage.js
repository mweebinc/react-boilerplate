import React from 'react';
import CollectionListPresenter from './CollectionListPresenter';
import {Button, dialog, InfiniteScroll, Progress, Table} from "nq-component";
import {addSchemaUseCase, deleteSchemaUseCase, updateSchemaUseCase} from '../../usecases/schema/usecases';
import {countObjectUseCase, deleteObjectUseCase, findObjectUseCase, upsertUseCase} from '../../usecases/object';
import {exportCSVUseCase} from '../../usecases/csv/usecases';
import withRouter from "../../withRouter";
import Search from "../../components/Search";
import BaseListPage from "../../base/BaseListPage";
import NavBar from "../../components/Navbar";
import InputFactory from "../../components/InputFactory";
import {toDisplayCase} from "nq-component";

class CollectionListPage extends BaseListPage {
    constructor(props) {
        super(props);
        this.presenter = new CollectionListPresenter(
            this,
            findObjectUseCase(),
            countObjectUseCase(),
            deleteObjectUseCase(),
            upsertUseCase(),
            exportCSVUseCase(),
            addSchemaUseCase(),
            updateSchemaUseCase(),
            deleteSchemaUseCase(),
        );
    }

    /*when class change*/
    componentDidUpdate(prevProps, prevState) {
        this.presenter.componentDidUpdate(prevProps, prevState);
    }

    closeDialog() {
        dialog.close();
    }

    onClickImport() {
        this.presenter.onClickImport();
    }

    onClickExport() {
        this.presenter.onClickExport();
    }

    onChangeFilter(type, value, field) {
        const where = {};
        switch (type) {
            case "Pointer":
                if (Object.keys(value).length > 0) {
                    where[field] = {id: value.id};
                }
                break;
            case "Boolean":
                where[field] = value;
                break;
            default:
                where[field] = {$regex: value, $options: "i"};
        }
        this.searchSubmit(where);
    }


    render() {
        const schema = this.getSchema(this.getCollectionName());
        const {objects, selected, count, progress} = this.state;
        if (!schema) return <Progress/>;
        return (
            <>
                <NavBar
                    action={() => (
                        <div className="dropdown dropstart d-inline-block">
                            <i role="button" data-bs-toggle="dropdown" className="bi bi-three-dots-vertical"></i>
                            <div className="dropdown-menu fs-xs">
                                <button
                                    onClick={this.onClickImport.bind(this)}
                                    className="dropdown-item py-3">
                                    <i className='bi bi-arrow-down-square pe-2'/>Import Data
                                </button>
                                <button
                                    onClick={this.onClickExport.bind(this)}
                                    disabled={selected.length < 1}
                                    className="dropdown-item py-3">
                                    <i className='bi bi-arrow-up-square pe-2'/>Export Data
                                </button>

                            </div>
                        </div>
                    )}/>
                <div className="overflow-auto">
                    <InfiniteScroll
                        className="h-100"
                        loadMore={this.loadMore.bind(this)}
                        hasMore={(!progress && count > objects.length)}>
                        <div className="p-3 p-lg-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <h1 className="fw-bold text-capitalize">{schema.label || toDisplayCase(this.getCollectionName())}</h1>
                                <div className="text-nowrap">
                                    <span className="ms-2">{selected.length > 0 ? 'Selected: ' : 'Total: '}</span>
                                    <span className="fs-sm text-nowrap">{selected.length > 0 ? selected.length : objects.length}</span>
                                    <span className="ms-1">of </span>
                                    <span className="fs-sm text-nowrap">{count}</span>
                                </div>
                            </div>
                            <div className="d-flex mt-3">
                                {
                                    Object.keys(schema.filters || {}).map(field => {
                                        let {type, ...options} = schema.filters[field];
                                        return <InputFactory
                                            key={field}
                                            className="ms-1"
                                            type={type}
                                            field={field}
                                            where={{}}
                                            onChange={this.onChangeFilter.bind(this, type)}
                                            {...options}
                                        />
                                    })
                                }
                            </div>
                            <Search
                                schemas={this.getSchemas()}
                                className="mt-3"
                                onSubmit={this.searchSubmit.bind(this)}
                                fields={schema.fields}/>
                            <Table
                                fields={schema.fields}
                                objects={objects}
                                selectable
                                collapsable
                                excludeFields={
                                    Object.keys(schema.fields)
                                        .reduce((acc, key) => {
                                            const options = schema.fields[key];
                                            if (options.read === false) {
                                                acc.push(key);
                                            }
                                            switch (options._type || options.type) {
                                                case 'Relation':
                                                case 'Array':
                                                case 'Object':
                                                case 'File':
                                                    acc.push(key);
                                                    break;
                                                default:
                                            }
                                            return acc;
                                        }, ['acl', 'password'])
                                }
                                selected={selected}
                                onSelect={this.onSelect.bind(this)}
                                onSelectAll={this.onSelectAll.bind(this)}
                                progress={progress}
                                onClickItem={this.onClickItem.bind(this)}
                                className="mt-3"
                            />
                        </div>
                    </InfiniteScroll>
                </div>
                <div className="position-fixed bottom-0 end-0 m-4">
                    <Button
                        className="btn btn-primary shadow-sm bg-primary"
                        onClick={this.onClickAdd.bind(this)}
                        style={{width: '50px', height: '50px', borderRadius: '25px'}}>
                        <i className="bi bi-plus-lg"/>
                    </Button>
                </div>
            </>
        );
    }
}

export default withRouter(CollectionListPage);