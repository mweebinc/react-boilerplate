import Queue from 'nq';

class SignInUseCase {
    execute(user, options) {
        return new Queue.User().signIn(user, options);
    }
}

export default SignInUseCase;
