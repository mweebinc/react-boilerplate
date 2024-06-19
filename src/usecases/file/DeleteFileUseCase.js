import Queue from 'nq';

class DeleteFileUseCase {
    execute(path) {
        return new Queue.File().delete(path);
    }
}

export default DeleteFileUseCase;
