const Blog = require('../models/BlogModel');

const createBlogPost = async(postData) => {
    try{
        const createPost = new Blog(postData);
        return await createPost.save();
    } catch (error){
        throw error;
    }
};

const getAllBlogPost = async() => {
    try{
        return await Blog.find().sort({createdAt: -1});
    } catch(error) {
        throw error;
    }
}
const deleteBlogPost = async(id) => {
    try{
        return await Blog.findByIdAndDelete(id);
    } catch(error) {
        throw error;
    }
}
const getBlogPostById =async(id) => {
    return await Blog.findById(id);
}
module.exports = {
    createBlogPost, 
    getAllBlogPost, 
    deleteBlogPost, 
    getBlogPostById
}