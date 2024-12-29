import { Post, Comment } from './../models';

const posts: Array<Post> = [];
const comments: Array<Post> = [];

const getPosts = (): Array<Post> => {
    return posts;
}

const getPost = (_:any, { id }: any, context: any) => {
    return posts.find((post:Post) => post.id === id);
}

const addPost = (_:any, { input }:any, context: any): Post => {
    //Authorization need to implement here

    const id:number = posts.length + 1;
    const { title, content } = input;
    const post: Post = {
        id,
        title,
        content,
        author: "User 1",
        comments: []
    };
    posts.push(post);
    return post;
}

const addComment = (_:any, { postId, content }:any, context:any) => {
    //Authorization need to implement here
    const post: Post | undefined = posts.find((post) => post.id === postId);
    if(!post) {
        throw new Error("Post not found!");
    }
    const comment = { 
        id: comments.length+1,
        content,
        author: "User 1"
    }
    post.comments.push(comment);
    return comment;
}

const deletePost = (_:any, { postId }:any, context:any): string => {
    //Authorization need to implement here

    const postIndex = posts.findIndex((post) => post.id === postId);
    if(postId === -1) {
        throw new Error('Post not found');
    }

    posts.splice(postIndex, 1);

    return 'Post deleted!'
}

export {
    getPost,
    getPosts,
    addPost,
    addComment,
    deletePost
}