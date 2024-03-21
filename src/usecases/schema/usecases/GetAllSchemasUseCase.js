import Queue from 'nq';

class GetAllSchemasUseCase {

    execute() {
        return new Queue.Schema().find();
    }
}

export default GetAllSchemasUseCase;
