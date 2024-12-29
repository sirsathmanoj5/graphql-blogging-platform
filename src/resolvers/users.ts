import { User } from "../models"

const users = [
    {
        "id": 1,
        "username": "user-1",
        "role": 'USER'
    },
    {
        "id": 2,
        "username": "admin",
        "role": "ADMIN"
    }
]


const getUser = (_:any, { id }: any, context:any): User => {
    const user: User | undefined = users.find((user) => user.id === id);
    if(!user) {
        throw new Error('User not found!');
    }

    return user;
}

const getUsers = (_:any, __:any, context: any): Array<User> => {
    return users;
}

export {
    getUser,
    getUsers
}