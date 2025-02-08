const express = require('express');
const router = express.Router();
const {createBlogPost, getAllBlogPost, deleteBlogPost, getBlogPostById} = require('../services/BlogService');

// route to create a new blog post 
router.post('/', async(req, res) => {
    try{
        const newPost = await createBlogPost(req.body);
        res.status(201).json(newPost);
    } catch(error) {
        res.status(400).json({error: error.message});
    }
});

// route to get all blog posts
router.get('/', async(req, res) => {
    try{
        const allPosts = await getAllBlogPost();
        res.json(allPosts);
    }catch(error){
        res.status(500).json({error:error.message});
    }
});

//route to get a single blog postf by id 
router.get('/:id', async(req, res) => {
    try{
        const post = await getBlogPostById(req.params.id);  // Get post by ID
        if (!post) {
            return res.status(404).json({error: 'Post not found'});
        }
        res.json(post);
    } catch(error) {
        res.status(500).json({error: error.message});
    }
});

// Route to delete a blog post by ID
router.delete('/:id', async(req, res) => {
    try{
        await deleteBlogPost(req.params.id);
        res.json({message: 'Post deleted'});
    } catch(error) {
        res.status(500).json({error: error.message});
    }
});

module.exports = router;