import Queue from 'nq';
class DeleteObjectUseCase {
    execute(collection, id,session) {
        return new Queue.Document().delete(collection, id, session);
    }
}

export default DeleteObjectUseCase;
