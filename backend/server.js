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

// Load environment variables
dotenv.config();

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
// Configure express-fileupload with proper options
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

// Connect to MongoDB
connectDB();

// API Routes
app.use('/api/customers', CustomerRoutes);
app.use('/api/dan-su', DanSuRoutes);
app.use('/api/hinh-su', HinhSuRoutes);
app.use('/api/hanh-chinh', HanhChinhRoutes);
app.use('/api/so-huu-tri-tue', SoHuuTriTueRoutes);
app.use('/api/preview', PreviewRoutes);
app.use('/api/tin-tuc', NewsRoutes);
app.use('/api/tin-tuc-&-su-kien', TinTucRoutes);
app.use('/api/luat-su', LuatSuRoutes);

// JWT Secret
const JWT_SECRET = process.env.JWT_SECRET || 'your_very_long_random_secret_key';

// Admin user credentials
// EMAIL_USER='nguyennhatkhanhlinh0710@gmail.com'; 
// EMAIL_PASS='lqze mqfw rxnm nbht'; 
// const adminUser = {
//   username: 'nguyennhatkhanhlinh0710@gmail.com',
//   password: bcrypt.hashSync('lqze mqfw rxnm nbht', 10),
// };
const adminUser = {
  username: process.env.ADMIN_USERNAME,
  // You should hash this password and store it
  password: bcrypt.hashSync(process.env.ADMIN_PASSWORD, 10)
};

// Login Endpoint
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
    const token = jwt.sign({ username: adminUser.username }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ success: true, message: 'Login successful! Welcome to the admin dashboard.', token });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Middleware to Verify JWT Token
const verifyToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
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

// Admin routes
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'AdminLogin.jsx'));
});

app.get('/api/admin/dashboard', verifyToken, (req, res) => {
  res.json({ message: 'Welcome to the admin dashboard' });
});

// API health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok',
    timestamp: new Date(),
    cloudinary: {
      configured: !!process.env.CLOUDINARY_CLOUD_NAME || !!cloudinary.config().cloud_name
    }
  });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Global error:', err);
  res.status(500).json({ 
    error: 'Server error', 
    message: process.env.NODE_ENV === 'development' ? err.message : 'An unexpected error occurred'
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});