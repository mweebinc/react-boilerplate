import Queue from 'nq';
<<<<<<<< HEAD:src/usecases/schema/GetAllSchemasUseCase.js

class GetAllSchemasUseCase {

========
class GetAllSchemasUseCase {
>>>>>>>> master:src/usecases/schema/usecases/GetAllSchemasUseCase.js
    execute() {
        return new Queue.Schema().find();
    }
}

export default GetAllSchemasUseCase;
