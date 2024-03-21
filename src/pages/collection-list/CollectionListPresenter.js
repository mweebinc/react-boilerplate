import browseFile from "../../browseFile";
import csvToJson from "../../csvToJson";
import {unflatten} from "nq";
import jsonToObject from "../../jsonToObject";
import BaseListPresenter from "../../base/BaseListPresenter";

class CollectionListPresenter extends BaseListPresenter {
    constructor(view,
                findObjectUseCase,
                deleteObjectUseCase,
                upsertUseCase,
                exportCSVUseCase,
                addSchemaUseCase,
                updateSchemaUseCase,
                deleteSchemaUseCase) {
        super(view, findObjectUseCase, deleteObjectUseCase);
        this.upsertUseCase = upsertUseCase;
        this.exportCSVUseCase = exportCSVUseCase;
        this.addSchemaUseCase = addSchemaUseCase;
        this.updateSchemaUseCase = updateSchemaUseCase;
        this.deleteSchemaUseCase = deleteSchemaUseCase;
    }


    componentDidUpdate(prevProps) {
        const prevClassName = prevProps.params.name;
        const newClassName = this.view.getCollectionName();
        //if collection change
        if (prevClassName !== newClassName) {
            this.init();
            this.getObjects();
        }
    }

    onClickImport() {
        const schema = this.view.getSchema(this.view.getCollectionName());
        browseFile('text/csv')
            .then(files => csvToJson(files[0]))
            .then(objects => unflatten(objects))
            .then(objects => objects.map(o => jsonToObject(o, schema.fields)))
            .then(async objects => {
                for (const obj of objects) {
                    const object = await this.upsertUseCase.execute(schema.collection, obj);
                    this.objects.push(object);
                    this.view.setObjects(this.objects);
                }
            })
            .catch(error => {
                this.view.hideProgress();
                this.view.showError(error);
            });
    }

    onClickExport() {
        const objects = this.view.getSelected();
        const collection = this.view.getCollectionName();
        this.exportCSVUseCase.execute(objects, collection)
            .then(() => {
                //hide progress
            });
    }


    onSubmitDeleteField(field) {
        const collection = this.view.getCollectionName();
        const schema = this.view.getSchema(collection);
        delete schema['fields'][field];
        this.updateSchemaUseCase.execute(schema)
            .then(() => {
                this.view.forceUpdate();
                this.view.closeDialog();
            })
            .catch(error => {
                this.view.showError(error);
            });
    }

    onSubmitAddCollection(schema) {
        this.view.closeDialog();
        this.addSchemaUseCase.execute(schema)
            .then(schema => {
                const schemas = this.view.getSchemas();
                schemas.push(schema);
                this.view.setSchemas(schemas);
                this.view.navigateTo("/collection/" + schema.collection);
            })
            .catch(error => {
                this.view.showError(error);
            });
    }

    onSubmitEditCollection(schema) {
        this.view.closeDialog();
        this.updateSchemaUseCase.execute(schema)
            .then(schema => {
                const schemas = this.view.getSchemas();
                const index = schemas.findIndex((s) => s.collection === schema.collection);
                schemas[index] = schema;
                this.view.setSchemas(schemas);
            })
            .catch(error => {
                this.view.showError(error);
            });
    }

    onSubmitDeleteCollection(collection) {
        if (collection !== this.view.getCollectionName()) {
            this.view.closeDialog();
            this.view.showError('Please enter correct Class name');
            return;
        }
        this.deleteSchemaUseCase.execute(collection)
            .then(() => {
                this.view.closeDialog();
                const schemas = this.view.getSchemas();
                const index = schemas.findIndex(s => s.collection === collection);
                schemas.splice(index, 1);
                this.view.setSchemas(schemas);
                this.view.navigateTo('/collection/' + schemas[0].collection);
            })
            .catch(error => {
                this.view.closeDialog();
                this.view.showError(error);
            });
    }

    onSubmitAccess(acl) {
        const selected = this.view.getSelected();
        const collection = this.view.getCollectionName();
        const promises = selected.map(o => {
            const change = {id: o.id, acl};
            o.acl = acl;// mutate the object
            return this.upsertUseCase.execute(collection, change);
        });
        Promise.all(promises)
            .then(() => {
                this.view.closeDialog();
            })
            .catch(error => {
                this.view.closeDialog();
                this.view.showError(error);
            });
    }
}

export default CollectionListPresenter;
