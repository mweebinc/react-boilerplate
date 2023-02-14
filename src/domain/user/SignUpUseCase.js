import Queue from 'nq';
class SignUpUseCase {

    execute(user) {
        return new Queue.User().signUp(user);
    }
}

export default SignUpUseCase;
