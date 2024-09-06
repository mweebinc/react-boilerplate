// import Papa from 'papaparse';
// import unflatten from "../../../unflatten";
import UpdateObjectUseCase from "../../object/UpdateObjectUseCase";
import SaveObjectUseCase from "../../object/SaveObjectUseCase";
import jsonToObject from "../../../jsonToObject";

class ImportCSVUseCase {

    fileToJson(files) {
        return new Promise(resolve => {
            // for (const file of files) {
            //     Papa.parse(file, {
            //         header: true,
            //         complete: resolve
            //     });
            // }
        });
    }

    getObjects(fields, objects) {
        return objects.map(o => jsonToObject(o, fields));
    }

    async saveObjects(collection, objects) {
        const update = new UpdateObjectUseCase();
        const save = new SaveObjectUseCase();
        for (const object of objects) {
            try {
                if (object.id) {
                    const options = {upsert: true};
                    await update.execute(collection, object, options);
                } else {
                    await save.execute(collection, object);
                }
            } catch (error) {
                // ignore error
            }
        }
    }

    execute(files, schema) {
        return Promise.resolve()
            .then(() => this.fileToJson(files))
            // .then((result) => unflatten(result.data))
            .then((objects) => this.getObjects(schema.fields, objects))
            .then(objects => this.saveObjects(schema.collection, objects));
    }
}

export default ImportCSVUseCase