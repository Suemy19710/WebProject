const cors = require('cors'); // import cors middleware
 const dotenv = require('dotenv');
 const mongoose = require('mongoose');
 const path = require('path');
 const express = require('express');
 const bodyParser = require('body-parser');
 const connectDB = require('./src/config/database');
 const jwt = require('jsonwebtoken'); 
 const bcrypt = require('bcryptjs'); 
 const nodemailer = require('nodemailer'); 
 const CustomerRoutes = require('./src/routes/CustomerRoutes');
 const DanSuRoutes = require('./src/routes/DanSuRoutes');
 const HinhSuRoutes = require('./src/routes/HinhSuRoute');
 const HanhChinhRoutes = require('./src/routes/HanhChinhRoutes');
 const SoHuuTriTueRoutes = require('./src/routes/SoHuuTriTueRoute');
 const PreviewRoutes = require('./src/routes/PreviewRoute');
 const NewsRoutes = require('./src/routes/NewsRoutes');
 const TinTucRoutes = require('./src/routes/TinTucRoutes'); 
 const LuatSuRoutes = require('./src/routes/LuatSuRoutes'); 
 
 dotenv.config();
 const app = express();
 app.use(express.json());
 app.use(cors({
     origin: ['https://luatkimngoc.onrender.com', 'https://luatkimngoc-6de87.web.app', 'http://localhost:3000'],
     credentials: true
 }));
 // app.use(cors());
 // app.use(cors({
 //     origin: 'https://luatkimngoc-6de87.web.app', 
 //     methods: ['GET', 'POST', 'PUT', 'DELETE'],
 //     allowedHeaders: ['Content-Type', 'Authorization'],
 // }));
 
 connectDB();
 app.use('/api/customers', CustomerRoutes);
 app.use('/api/dan-su', DanSuRoutes);
 app.use('/api/hinh-su', HinhSuRoutes);
 app.use('/api/hanh-chinh', HanhChinhRoutes);
 app.use('/api/so-huu-tri-tue',SoHuuTriTueRoutes );
 app.use('/api/preview', PreviewRoutes);
 app.use('/api/tin-tuc', NewsRoutes);
 app.use('/api/tin-tuc-&-su-kien', TinTucRoutes); 
 app.use('/api/luat-su', LuatSuRoutes); 
 
 app.use('/api/uploads', express.static(path.join(__dirname, 'uploads')));
 app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
 
 app.use(express.static(path.join(__dirname, 'public')));
 // app.use(express.static(path.join(__dirname, 'public')));
 app.use(bodyParser.urlencoded({extended: true}));
 
 const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-here'; 
 const adminUser = {
     username: process.env.ADMIN_USERNAME,
     // You should hash this password and store it
     password: bcrypt.hashSync(process.env.ADMIN_PASSWORD, 10)
 };
 
 app.post('/api/login', async (req, res) => {
     const { username, password } = req.body;
 
     try {
         // Check if username matches
         if (username !== adminUser.username) {
             return res.status(401).json({ 
                 success: false, 
                 message: 'Invalid credentials' 
             });
         }
 
         // Verify password
         const isPasswordValid = await bcrypt.compare(password, adminUser.password);
         if (!isPasswordValid) {
             return res.status(401).json({ 
                 success: false, 
                 message: 'Invalid credentials' 
             });
         }
 
         // Create JWT token
         const token = jwt.sign(
             { username: adminUser.username },
             JWT_SECRET,
             { expiresIn: '1h' } // Token expires in 1 hour
         );
 
         res.json({ 
             success: true, 
             message: 'Login successful! Welcome to the admin dashboard.',
             token: token 
         });
     } catch (error) {
         console.error('Login error:', error);
         res.status(500).json({ 
             success: false, 
             message: 'Server error' 
         });
     }
 });
 
 // Middleware to verify JWT token
 const verifyToken = (req, res, next) => {
     const token = req.headers['authorization']?.split(' ')[1]; // Expecting "Bearer TOKEN"
 
     if (!token) {
         return res.status(401).json({ message: 'No token provided' });
     }
 
     jwt.verify(token, JWT_SECRET, (err, decoded) => {
         if (err) {
             return res.status(401).json({ message: 'Invalid token' });
         }
         req.user = decoded;
         next();
     });
 };
 
 app.get('/admin',  (req, res) => {
     res.sendFile(path.join(__dirname, 'public', 'admin.html'));
 });
 
 app.get('/api/admin/dashboard', verifyToken, (req, res) => {
     res.json({ message: 'Welcome to the admin dashboard' });
 });
 
 // app.get('*', (req, res) => {
 //     res.sendFile(path.join(__dirname, 'public', 'index.html'));
 // });
 app.get('/', (req, res) => {
     // Redirect to Firebase hosting
     res.redirect('https://luatkimngoc-6de87.web.app');
 });
 const PORT = process.env.PORT || 5000;
 app.listen(PORT, () => {
     console.log(`Server running on port ${PORT}`);
 });
 