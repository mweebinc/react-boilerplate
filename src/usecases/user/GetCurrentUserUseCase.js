import Queue from 'nq';

class GetCurrentUserUseCase {
    constructor() {
    }

    execute() {
        return new Queue.User().getCurrentUser();
    }
}

export default GetCurrentUserUseCase;
