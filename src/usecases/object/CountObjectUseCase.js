import Queue from 'nq';

class CountObjectUseCase {
    execute(collection, query, options) {
        this.rest = new Queue.Document();
        return this.rest.count(collection, query, options);
    }

    abort() {
        if (this.rest) {
            this.rest.abort();
        }
    }
}

export default CountObjectUseCase;
