import { Comment } from './../models'

interface Post {
    id: number
    title: String
    content: String
    author: String
    comments: Array<Comment>
}

export default Post