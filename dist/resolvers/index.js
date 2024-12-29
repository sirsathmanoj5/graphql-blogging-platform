"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const posts_1 = require("./posts");
const users_1 = require("./users");
const comments_1 = require("./comments");
const resolvers = {
    Query: {
        posts: posts_1.getPosts,
        post: posts_1.getPost
    },
    Mutation: {
        createPost: posts_1.addPost,
        addComment: posts_1.addComment,
        deletePost: posts_1.deletePost
    },
    Post: {
        author: users_1.getUser,
        comments: comments_1.getPostComments
    },
    Comment: {
        author: users_1.getUser
    }
};
exports.default = resolvers;
