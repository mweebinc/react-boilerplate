class ResetPasswordUseCase {

    constructor(repository) {
        this.repository = repository;

    }

    execute(user) {
        return this.repository.resetPassword(user);
    }

}

export default ResetPasswordUseCase;
