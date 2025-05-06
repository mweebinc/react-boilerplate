import Queue from 'nq';
class SignUpUseCase {

    execute(user,options) {
        return new Queue.User().signUp(user,options);
    }
}

export default SignUpUseCase;
