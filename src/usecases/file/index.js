import SaveImageUseCase from './SaveImageUseCase';
import SaveFileUseCase from './SaveFileUseCase';
import DeleteFileUseCase from "./DeleteFileUseCase";

export function saveFileUseCase() {
    return new SaveFileUseCase();
}

export function saveImageUseCase() {
    return new SaveImageUseCase();
}
export function deleteFileUseCase() {
    return new DeleteFileUseCase();
}

