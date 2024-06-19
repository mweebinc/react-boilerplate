import Queue from 'nq';

class DeleteObjectUseCase {
<<<<<<< HEAD
    execute(collection, id, options) {
        return new Queue.Document().delete(collection, id, options);
=======
    execute(collection, object, options) {
        return new Queue.Document().delete(collection, object, options);
>>>>>>> master
    }
}

export default DeleteObjectUseCase;
