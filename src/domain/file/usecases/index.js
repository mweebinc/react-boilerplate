import SaveImageUseCase from './SaveImageUseCase';
import SaveFileUseCase from './SaveFileUseCase';

export function saveFileUseCase() {
    return new SaveFileUseCase();
}

export function saveImageUseCase() {
    return new SaveImageUseCase();
}

