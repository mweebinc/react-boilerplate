class UpdateUserUseCase {
    constructor(repository) {
        this.repository = repository;
    }

    execute(user) {
        return this.repository.updateUser(user);
    }
}

export default UpdateUserUseCase;
