import Queue from 'nq';

class SignOutUseCase {
    execute() {
        return new Queue.User().signOut();
    }
}

export default SignOutUseCase;
