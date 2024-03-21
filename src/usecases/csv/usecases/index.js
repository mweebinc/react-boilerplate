import ExportCSVUseCase from './ExportCSVUseCase';
import ImportCSVUseCase from './ImportCSVUseCase';

export function exportCSVUseCase() {
    return new ExportCSVUseCase()
}

export function importCSVUseCase() {
    return new ImportCSVUseCase()
}
