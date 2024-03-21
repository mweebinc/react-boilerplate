import GetAllSchemasUseCase from './GetAllSchemasUseCase';
import AddSchemaUseCase from './AddSchemaUseCase';
import UpdateSchemaUseCase from './UpdateSchemaUseCase';
import DeleteSchemaUseCase from './DeleteSchemaUseCase';
export function getAllSchemasUseCase(){
    return new GetAllSchemasUseCase();
}
export function addSchemaUseCase(){
    return new AddSchemaUseCase();
}
export function updateSchemaUseCase(){
    return new UpdateSchemaUseCase();
}
export function deleteSchemaUseCase(){
    return new DeleteSchemaUseCase();
}
