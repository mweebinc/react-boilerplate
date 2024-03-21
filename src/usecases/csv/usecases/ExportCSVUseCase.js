import Papa from 'papaparse';
import {flatten} from 'nq';
import saveAs from '../../../saveAs';

const MIMEType = {type: "text/csv;chartset=utf-8"};
const excludeKeys = ['createdAt', 'updatedAt'];

function map(object, fields, excludes = []) {
    const newObject = {};
    for (let key in object) {
        const options = fields[key];
        if (!options || excludes.includes(key)) continue;
        const value = object[key];

        switch (options.type) {
            case 'Pointer':
                newObject[key] = {id: value.id};
                break;
            case 'ACL':
                // no need to add
                break;
            default:
                newObject[key] = value;
        }
    }
    return newObject;
}

class ExportCSVUseCase {
    execute(schema, objects, filename) {
        return new Promise((resolve, reject) => {
            try {
                const flat = objects.map(o => map(o, schema.fields, excludeKeys)).reduce((acc, cur) => {
                    acc.push(...flatten(cur));
                    return acc;
                }, []);
                const data = Papa.unparse(flat);
                const blob = new Blob([data], MIMEType);
                saveAs(blob, filename);
                resolve();
            } catch (error) {
                reject(error);
            }
        });
    }
}

export default ExportCSVUseCase;
