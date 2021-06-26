import  mongoose  from "mongoose";
import BlogMessage from "../models/BlogMessage.js"

export const getBlogs = async (req, res) => {
    try {
        const blogMessages = await BlogMessage.find();

        res.status(200).json(blogMessages);

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


export const createBlog = async (req, res) => {
    const blog = req.body;

    const newBlog = new BlogMessage(blog);

    try {
        await newBlog.save();
        res.status(201).json(newBlog);

    } catch (error) {
        res.status(409).json({ message: error.message });
        
    }
}

export const deleteBlog = async (req, res) => {
    const { id:_id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("no blog with that id");

    await BlogMessage.findByIdAndRemove(_id);

    res.json({ message: "Blog deleted successfully"});
}