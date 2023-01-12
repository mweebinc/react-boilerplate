import SaveObjectUseCase from './SaveObjectUseCase';
import FindObjectUseCase from './FindObjectUseCase';
import UpdateObjectUseCase from './UpdateObjectUseCase';
import DeleteObjectUseCase from "./DeleteObjectUseCase";


export  function saveObjectUseCase() {
    return new SaveObjectUseCase();
}

export function findObjectUseCase() {
    return new FindObjectUseCase();
}

export function updateObjectUseCase() {
    return new UpdateObjectUseCase();
}
export function deleteObjectUseCase() {
    return new DeleteObjectUseCase();
}
