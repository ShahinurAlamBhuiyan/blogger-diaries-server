import  mongoose  from "mongoose";

const blogSchema = mongoose.Schema({
    author: String,
    title: String,
    content: String,
    selectedFile: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const BlogMessage = mongoose.model('BlogMessage', blogSchema);

export default BlogMessage;