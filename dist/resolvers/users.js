"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = exports.getUser = void 0;
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
];
const getUser = (_, { id }, context) => {
    const user = users.find((user) => user.id === id);
    if (!user) {
        throw new Error('User not found!');
    }
    return user;
};
exports.getUser = getUser;
const getUsers = (_, __, context) => {
    return users;
};
exports.getUsers = getUsers;
