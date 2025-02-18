const cors = require('cors'); // import cors middleware
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const connectDB = require('./src/config/database');
const Blog = require('./src/models/BlogModel');
const BlogRoutes = require('./src/routes/BlogRoutes');
const CustomerRoutes = require('./src/routes/CustomerRoutes');
const DanSuRoutes = require('./src/routes/DanSuRoutes');
const HinhSuRoutes = require('./src/routes/HinhSuRoute');

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

connectDB();
app.use('/api/blogs', BlogRoutes);
app.use('/api/customers', CustomerRoutes);
app.use('/api/dan-su', DanSuRoutes);
app.use('/api/hinh-su', HinhSuRoutes);

app.get('/', (req, res) => {
    res.send('API is running...');
});
app.get('/api/blogs', async(req, res) => {
    try{
        const {slug} = req.query;
        const blogPosts = slug ? await Blog.findOne({ slug }) : await Blog.find();

        if (!blogPosts) {
            return res.status(404).json({ error: 'No blog posts found' });
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

