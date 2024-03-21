import Queue from 'nq';

class UpdateSchemaUseCase {
    execute(schema) {
        return new Queue.Schema().update(schema);
    }
}

export default UpdateSchemaUseCase;
