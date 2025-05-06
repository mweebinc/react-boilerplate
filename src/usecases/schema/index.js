import GetAllSchemasUseCase from './GetAllSchemasUseCase';
import GetSchemaUseCase from './GetSchemaUseCase';

export function getAllSchemasUseCase() {
    return new GetAllSchemasUseCase();
}

export function getSchemaUseCase() {
    return new GetSchemaUseCase();
}

