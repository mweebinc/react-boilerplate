import Queue from 'nq';

class UpdateObjectUseCase {
    execute(collection, document, session) {
        return Queue.Document.update(collection, document, session);
    }
}

export default UpdateObjectUseCase;
