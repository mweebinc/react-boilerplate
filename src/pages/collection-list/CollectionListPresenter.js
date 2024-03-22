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

}

export default CollectionListPresenter;
