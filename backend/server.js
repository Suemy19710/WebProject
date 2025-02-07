const cors = require('cors'); // import cors middleware
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const connectDB = require('./src/config/database');
const blogRoutes = require('./src/routes/BlogRoutes');

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

connectDB();
app.use('/api/blogs', blogRoutes);

app.get('/', (req, res) => {
    res.send('API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

