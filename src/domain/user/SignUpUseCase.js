import Queue from 'nq';
class SignUpUseCase {

    execute(user) {
        return Queue.User.signUp(user);
    }
}

export default SignUpUseCase;
