import Queue from 'nq';

class GetCurrentUserUseCase {
    constructor() {
    }

    execute() {
        return Queue.User.getCurrentUser();
    }
}

export default GetCurrentUserUseCase;
