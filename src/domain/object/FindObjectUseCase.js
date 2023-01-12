import Queue from 'nq';

class FindObjectUseCase {
    execute(collection, query, session) {
        return Queue.Document.find(collection, query, session);
    }
}

export default FindObjectUseCase;
