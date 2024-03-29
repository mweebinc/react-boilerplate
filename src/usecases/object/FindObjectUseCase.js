import Queue from 'nq';

class FindObjectUseCase {
    execute(collection, query, options) {
        this.rest = new Queue.Document();
        return this.rest.find(collection, query, options);
    }

    abort() {
        if (this.rest) {
            this.rest.abort();
        }
    }
}

export default FindObjectUseCase;
