import Queue from 'nq';

class DeleteObjectUseCase {
    execute(collection, id, options) {
        return new Queue.Document().delete(collection, id, options);
    }
}

export default DeleteObjectUseCase;
