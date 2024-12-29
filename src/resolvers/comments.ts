
import { Comment } from "../models";

const comments: Array<Comment> = [];


// const addComment = (_:any, { postId, content }, context:any): Comment => {
//     const post = p
//     return [];
// }

const getPostComments = (_:any, {post}: any, context: any): Array<Comment> => {
    return post.comments;
}


export {
    getPostComments
}