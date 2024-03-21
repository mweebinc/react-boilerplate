import SaveObjectUseCase from './SaveObjectUseCase';
import FindObjectUseCase from './FindObjectUseCase';
import GetObjectUseCase from './GetObjectUseCase';
import UpdateObjectUseCase from './UpdateObjectUseCase';
import DeleteObjectUseCase from "./DeleteObjectUseCase";
import UpsertUseCase from "./UpsertUseCase";
import AggregateUseCase from "./AggregateUseCase";
import CountObjectUseCase from "./CountObjectUseCase";


export function saveObjectUseCase() {
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

export function upsertUseCase() {
    return new UpsertUseCase();
}

export function getObjectUseCase() {
    return new GetObjectUseCase();
}

export function aggregateUseCase() {
    return new AggregateUseCase();
}

export function countObjectUseCase() {
    return new CountObjectUseCase();
}
