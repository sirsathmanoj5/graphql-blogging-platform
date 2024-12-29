"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPostComments = void 0;
const comments = [];
// const addComment = (_:any, { postId, content }, context:any): Comment => {
//     const post = p
//     return [];
// }
const getPostComments = (_, { post }, context) => {
    return post.comments;
};
exports.getPostComments = getPostComments;
