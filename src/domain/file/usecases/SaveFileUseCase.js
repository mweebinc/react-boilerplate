import Queue from 'nq';

class SaveFileUseCase {
    execute(blob, session) {
        return Queue.File.save(blob, session);
    }
}

export default SaveFileUseCase;
