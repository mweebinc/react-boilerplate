import Queue from 'nq';

class SaveObjectUseCase {
    execute(collection, object, session) {
        return new Queue.Document().create(collection, object, session);
    }
}

export default SaveObjectUseCase;
