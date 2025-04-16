const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./src/config/database');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const cloudinary = require('cloudinary').v2;
const fileUpload = require('express-fileupload');

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
const allowedOrigins = [
  'https://luatkimngoc.onrender.com', 
  'https://luatkimngoc-vn.onrender.com', 
  'https://luatkimngoc.com', 
  'https://www.luatkimngoc.com', 
  'http://localhost:5173'
];
const app = express();
app.use(express.json());
// app.use(cors());
app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Explicitly allow methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
  credentials: true, 
}));
app.use(fileUpload({
  useTempFiles: true, // Create temp files (important for Cloudinary)
  tempFileDir: '/tmp/', // Directory for temp files
  limits: { fileSize: 10 * 1024 * 1024 }, // Limit file size to 10MB
  abortOnLimit: true, // Return 413 when limit is reached
  safeFileNames: true, // Remove characters that could cause issues
  preserveExtension: true // Keep file extensions
}));
app.use(bodyParser.urlencoded({ extended: true }));

// Configure Cloudinary with environment variables
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || 'dil4dywf8',
  api_key: process.env.CLOUDINARY_API_KEY || '245178342773214',
  api_secret: process.env.CLOUDINARY_API_SECRET || 'TH5LNoGnGsuimdlSyfrDjSivFFs',
});

connectDB();

const JWT_SECRET = process.env.JWT_SECRET || 'your_very_long_random_secret_key';

// Define the token verification middleware
const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }
  
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      // Token expired or invalid
      if (err.name === 'TokenExpiredError') {
        return res.status(401).json({ message: 'Token expired' });
      }
      return res.status(401).json({ message: 'Invalid token' });
    }
    
    req.user = decoded;
    next();
  });
};

// Token verification endpoint
app.get('/api/admin/verify-token', verifyToken, (req, res) => {
  // If the middleware passes, the token is valid
  res.status(200).json({ 
    valid: true,
    user: req.user.username
  });
});

// Apply middleware to all admin API routes
const protectRoute = (route) => {
  app.use(route, verifyToken);
};

// Protect all admin routes
protectRoute('/api/admin/dashboard');
protectRoute('/api/customers');
protectRoute('/api/dan-su');
protectRoute('/api/hinh-su');
protectRoute('/api/hanh-chinh');
protectRoute('/api/so-huu-tri-tue');
protectRoute('/api/preview');
protectRoute('/api/tin-tuc');
protectRoute('/api/tin-tuc-&-su-kien');
protectRoute('/api/luat-su');

// Now register your routes
app.use('/api/customers', CustomerRoutes);
app.use('/api/dan-su', DanSuRoutes);
app.use('/api/hinh-su', HinhSuRoutes);
app.use('/api/hanh-chinh', HanhChinhRoutes);
app.use('/api/so-huu-tri-tue', SoHuuTriTueRoutes);
app.use('/api/preview', PreviewRoutes);
app.use('/api/tin-tuc', NewsRoutes);
app.use('/api/tin-tuc-&-su-kien', TinTucRoutes);
app.use('/api/luat-su', LuatSuRoutes);

const adminUser = {
  username: process.env.ADMIN_USERNAME,
  password: bcrypt.hashSync(process.env.ADMIN_PASSWORD, 10)
};

app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    if (username !== adminUser.username) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
    const isPasswordValid = await bcrypt.compare(password, adminUser.password);
    if (!isPasswordValid) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
    
    // Create token with expiration
    const token = jwt.sign(
      { username: adminUser.username }, 
      JWT_SECRET, 
      { expiresIn: '1h' }
    );
    
    res.json({ 
      success: true, 
      message: 'Login successful! Welcome to the admin dashboard.', 
      token,
      expiresIn: 3600 // 1 hour in seconds
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'AdminLogin.jsx'));
});

app.get('/api/admin/dashboard', verifyToken, (req, res) => {
  res.json({ 
    message: 'Welcome to the admin dashboard',
    user: req.user.username
  });
});

// Route to handle token refresh (optional enhancement)
app.post('/api/refresh-token', (req, res) => {
  const { token } = req.body;
  
  if (!token) {
    return res.status(400).json({ message: 'Token is required' });
  }
  
  try {
    // Verify the existing token
    const decoded = jwt.verify(token, JWT_SECRET);
    
    // Create a new token
    const newToken = jwt.sign(
      { username: decoded.username },
      JWT_SECRET,
      { expiresIn: '1h' }
    );
    
    res.json({
      success: true,
      token: newToken,
      expiresIn: 3600
    });
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
});

app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok',
    timestamp: new Date(),
    cloudinary: {
      configured: !!process.env.CLOUDINARY_CLOUD_NAME || !!cloudinary.config().cloud_name
    }
  });
});

// Handle 404 routes for admin pages
app.use('/admin/*', (req, res, next) => {
  // If it's an API request, pass to the next handler
  if (req.path.startsWith('/api/')) {
    return next();
  }
  
  // For direct client routes, send the main app
  // Your frontend router will handle the actual route
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Global error:', err);
  
  // Handle CORS errors specifically
  if (err.message === 'Not allowed by CORS') {
    return res.status(403).json({
      error: 'CORS error',
      message: 'Origin not allowed'
    });
  }
  
  res.status(500).json({ 
    error: 'Server error', 
    message: process.env.NODE_ENV === 'development' ? err.message : 'An unexpected error occurred'
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});