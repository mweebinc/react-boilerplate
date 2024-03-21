import Queue from 'nq';

class DeleteFileUseCase {
    execute(filename) {
        return new Queue.File().delete(filename);
    }
}

export default DeleteFileUseCase;
