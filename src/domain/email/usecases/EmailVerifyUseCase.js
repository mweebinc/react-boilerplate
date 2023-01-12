class EmailVerifyUseCase {
    constructor(repository) {
        this.repository = repository;
    }

    execute() {
        return this.repository.verify();
    }
}

export default EmailVerifyUseCase;
