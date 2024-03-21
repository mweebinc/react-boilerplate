import Queue from 'nq';

class AddSchemaUseCase {
    execute(schema) {
        return new Queue.Schema().create(schema);
    }
}

export default AddSchemaUseCase;
