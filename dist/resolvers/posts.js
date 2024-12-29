"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePost = exports.addComment = exports.addPost = exports.getPosts = exports.getPost = void 0;
const posts = [];
const comments = [];
const getPosts = () => {
    return posts;
};
exports.getPosts = getPosts;
const getPost = (_, { id }, context) => {
    return posts.find((post) => post.id === id);
};
exports.getPost = getPost;
const addPost = (_, { input }, context) => {
    //Authorization need to implement here
    const id = posts.length + 1;
    const { title, content } = input;
    const post = {
        id,
        title,
        content,
        author: "User 1",
        comments: []
    };
    posts.push(post);
    return post;
};
exports.addPost = addPost;
const addComment = (_, { postId, content }, context) => {
    //Authorization need to implement here
    const post = posts.find((post) => post.id === postId);
    if (!post) {
        throw new Error("Post not found!");
    }
    const comment = {
        id: comments.length + 1,
        content,
        author: "User 1"
    };
    post.comments.push(comment);
    return comment;
};
exports.addComment = addComment;
const deletePost = (_, { postId }, context) => {
    //Authorization need to implement here
    const postIndex = posts.findIndex((post) => post.id === postId);
    if (postId === -1) {
        throw new Error('Post not found');
    }
    posts.splice(postIndex, 1);
    return 'Post deleted!';
};
exports.deletePost = deletePost;
