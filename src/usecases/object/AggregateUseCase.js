import Queue from 'nq';

class AggregateUseCase {
    execute(collection, pipeline, options) {
        return new Queue.Document().aggregate(collection, pipeline, options);
    }
}

export default AggregateUseCase;
