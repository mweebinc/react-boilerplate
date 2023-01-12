import Queue from 'nq';

class SignInUseCase {
    execute(user) {
        return Queue.User.signIn(user);
    }
}

export default SignInUseCase;
