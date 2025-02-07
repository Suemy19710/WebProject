require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const connectDB = require('./src/config/database');
const blogRoutes = require('./src/routes/BlogRoutes');

const app = express();
app.use(express.json());

connectDB();
app.use('/api/blogs', blogRoutes);

app.get('/', (req, res) => {
    res.send('API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

