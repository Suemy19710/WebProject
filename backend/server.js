const cors = require('cors'); // import cors middleware
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./src/config/database');
// const Blog = require('./src/models/BlogModel');
// const BlogRoutes = require('./src/routes/BlogRoutes');
const CustomerRoutes = require('./src/routes/CustomerRoutes');
const DanSuRoutes = require('./src/routes/DanSuRoutes');
const HinhSuRoutes = require('./src/routes/HinhSuRoute');
const HanhChinhRoutes = require('./src/routes/HanhChinhRoutes');
const SoHuuTriTueRoutes = require('./src/routes/SoHuuTriTueRoute');
const PreviewRoutes = require('./src/routes/PreviewRoute');
const NewsRoutes = require('./src/routes/NewsRoutes');

const ADMIN_USERNAME = process.env.ADMIN_USERNAME;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

connectDB();
// app.use('/api/blogs', BlogRoutes);
app.use('/api/customers', CustomerRoutes);
app.use('/api/dan-su', DanSuRoutes);
app.use('/api/hinh-su', HinhSuRoutes);
app.use('/api/hanh-chinh', HanhChinhRoutes);
app.use('/api/so-huu-tri-tue',SoHuuTriTueRoutes );
app.use('/api/preview', PreviewRoutes);
app.use('/api/tin-tuc', NewsRoutes);

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// middileware for login
app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static(path.join(__dirname, 'public')));

app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'AdminLogin.jsx'));
});

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {
        res.json({ success: true, message: 'Login successful! Welcome to the admin dashboard.' });
    } else {
        res.status(401).json({ success: false, message: 'Invalid credentials, please try again.' });
    }
});

// app.get('/api/blogs', async(req, res) => {
//     try{
//         const {slug} = req.query;
//         const blogPosts = slug ? await Blog.findOne({ slug }) : await Blog.find();

//         if (!blogPosts) {
//             return res.status(404).json({ error: 'No blog posts found' });
//         }
//         res.json(blogPosts);
//     } catch(err) {
//         res.status(500).json({error: 'Server error'});
//     }
// });



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

