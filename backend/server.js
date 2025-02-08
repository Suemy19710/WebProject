const cors = require('cors'); // import cors middleware
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const connectDB = require('./src/config/database');
const blogRoutes = require('./src/routes/BlogRoutes');
const Blog = require('./src/models/BlogModel');

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

connectDB();
app.use('/api/blogs', blogRoutes);

app.get('/', (req, res) => {
    res.send('API is running...');
});
app.get('/api/blogs', async(req, res) => {
    try{
        const {slug} = req.query;
        let blogPosts = slug ? await Blog.find({ slug }) : await Blog.find();

        if (blogPosts.length === 0) {
            return res.status(404).send('No blog posts found');
        }
        res.json(blogPosts);
    } catch(err) {
        res.status(500),json({error: 'Server error'});
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

