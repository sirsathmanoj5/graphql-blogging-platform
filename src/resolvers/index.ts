
import { getPosts, getPost, addPost, addComment, deletePost } from "./posts";
import { getUser } from "./users";
import { getPostComments } from "./comments";

const resolvers = {
    Query: {
        posts: getPosts,
        post: getPost
    },
    Mutation: {
        createPost: addPost,
        addComment,
        deletePost
    },
    Post: {
        author: getUser,
        comments: getPostComments
    },
    Comment: {
        author: getUser
    }
}

export default resolvers;