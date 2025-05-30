import Queue from 'nq';

class UpsertObjectUseCase {
    execute(collection, object) {
        if (object.id) {
            const options = {params: {upsert: true}};
            return new Queue.Document().update(collection, object, options);
        } else {
            return new Queue.Document().create(collection, object);
        }
    }
}

export default UpsertObjectUseCase;
