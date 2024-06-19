import Queue from 'nq';

class SaveObjectUseCase {
    execute(collection, object, options) {
        return new Queue.Document().create(collection, object, options);
    }
}

export default SaveObjectUseCase;
