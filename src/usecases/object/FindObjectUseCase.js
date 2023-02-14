import Queue from 'nq';

class FindObjectUseCase {
    execute(collection, query, session) {
        return new Queue.Document().find(collection, query, session);
    }
}

export default FindObjectUseCase;
