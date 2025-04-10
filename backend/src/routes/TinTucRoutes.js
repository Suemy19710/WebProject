const express = require('express');
const cloudinary = require('cloudinary').v2;
const TinTucController = require('../controller/TinTucController');

const router = express.Router();

// Main CRUD routes
router.post('/', TinTucController.createNews);
router.get('/', TinTucController.getAllNews);
router.get('/:slug', TinTucController.getNewsBySlug);
router.delete('/:id', TinTucController.deleteNewsById);

// Separate route for editor image uploads
router.post('/upload-image', async (req, res) => {
  try {
    // Check if files exist in request
    if (!req.files || !req.files.image) {
      return res.status(400).json({ message: 'No image file provided' });
    }

    const file = req.files.image;
    
    // Log details for debugging
    console.log('Upload image file details:', {
      name: file.name,
      size: file.size,
      mimetype: file.mimetype,
      hasTempFilePath: !!file.tempFilePath
    });

    // Upload to Cloudinary
    const result = await cloudinary.uploader.upload(file.tempFilePath, {
      folder: 'tin-tuc',
      use_filename: true,
      unique_filename: true,
    });
    
    console.log('Image uploaded to Cloudinary:', result.secure_url);
    res.json({ url: result.secure_url });
  } catch (error) {
    console.error('Cloudinary upload error:', error);
    res.status(500).json({ message: 'Error uploading image to Cloudinary: ' + error.message });
  }
});

module.exports = router;