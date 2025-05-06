import Queue from 'nq';

class DeleteObjectUseCase {
    execute(collection, object, options) {
        return new Queue.Document().delete(collection, object, options);
    }
}

export default DeleteObjectUseCase;
