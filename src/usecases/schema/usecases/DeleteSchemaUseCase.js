import Queue from 'nq';

class DeleteSchemaUseCase {
    execute(collection) {
        return new Queue.Schema().delete(collection);
    }
}

export default DeleteSchemaUseCase;
