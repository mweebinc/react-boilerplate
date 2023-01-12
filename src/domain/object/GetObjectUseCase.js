class GetObjectUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    
    execute(className, id) {
        return this.repository.getObject(className, id);
    }
}

export default GetObjectUseCase;
