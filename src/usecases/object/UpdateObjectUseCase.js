import Queue from 'nq';

class UpdateObjectUseCase {
    execute(collection, document, options) {
        return new Queue.Document().update(collection, document, options);
    }
}

export default UpdateObjectUseCase;
