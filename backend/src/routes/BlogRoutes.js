const express = require('express');
const router = express.Router();
const {createBlogPost, getAllBlogPost, deleteBlogPost} = require('../services/BlogService');

router.post('/', async(req, res) => {
    try{
        const newPost = await createBlogPost(req.body);
        res.status(201).json(newPost);
    } catch(error) {
        res.status(400).json({error: error.message});
    }
});

router.get('/', async(req, res) => {
    try{
        const allPosts = await getAllBlogPost();
        res.json(allPosts);
    }catch(error){
        res.status(500).json({error:error.message});
    }
});

router.get('/:id', async(req, res) => {
    try{
        const post = await deleteBlogPost(req.params.id);
        res.json({message: 'Post deleted'});
    } catch(error) {
        res.status(500).json({error: error.message});
    }
});

module.exports = router;