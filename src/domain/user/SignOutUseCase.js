import Queue from 'nq';

class SignOutUseCase {
    execute() {
        return Queue.User.signOut();
    }
}

export default SignOutUseCase;
