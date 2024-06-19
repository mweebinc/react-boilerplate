import Queue from 'nq';

class DeleteFileUseCase {
<<<<<<< HEAD
    execute(filename) {
        return new Queue.File().delete(filename);
=======
    execute(path) {
        return new Queue.File().delete(path);
>>>>>>> master
    }
}

export default DeleteFileUseCase;
