import Queue from 'nq';

class GetObjectUseCase {
    execute(collection, id, options) {
        this.rest = new Queue.Document();
        return this.rest.get(collection, id, options);
    }

    abort() {
        if (this.rest) {
            this.rest.abort();
        }
    }
}

export default GetObjectUseCase;
