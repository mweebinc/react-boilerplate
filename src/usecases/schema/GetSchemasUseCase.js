import Queue from 'nq';

class GetSchemasUseCase {

    execute() {
        return new Queue.Schema().find();
    }
}

export default GetSchemasUseCase;
