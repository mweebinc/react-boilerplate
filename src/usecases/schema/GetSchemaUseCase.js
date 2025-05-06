import Queue from 'nq';

class GetSchemaUseCase {
    execute(name) {
        return new Queue.Schema().get(name);
    }
}

export default GetSchemaUseCase;
