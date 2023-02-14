import Queue from 'nq';

class SignInUseCase {
    execute(user) {
        return new Queue.User().signIn(user);
    }
}

export default SignInUseCase;
