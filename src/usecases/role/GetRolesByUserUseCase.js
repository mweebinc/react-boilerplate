import Queue from 'nq';

class GetRolesByUserUseCase {
    execute(user, session) {
        const query = {where: {users: [{id: user.id}]}};
        return Queue.Document.find('roles', query, session);
    }
}

export default GetRolesByUserUseCase;
