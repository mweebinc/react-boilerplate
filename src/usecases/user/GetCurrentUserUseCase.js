import Queue from 'nq';

class GetCurrentUserUseCase {
    execute() {
        return new Queue.User().getCurrentUser();
    }
}

export default GetCurrentUserUseCase;
