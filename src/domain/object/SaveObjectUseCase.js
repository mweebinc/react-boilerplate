import Queue from 'nq';

class SaveObjectUseCase {
    execute(collection, object, session) {
        return Queue.Document.create(collection, object, session);
    }
}

export default SaveObjectUseCase;
