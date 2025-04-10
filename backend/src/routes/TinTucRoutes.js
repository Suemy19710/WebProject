const express = require('express');
const cloudinary = require('cloudinary').v2; // Import cloudinary
const TinTucController = require('../controller/TinTucController');

const router = express.Router();

router.post('/', TinTucController.createNews);
router.get('/', TinTucController.getAllNews);
router.get('/:slug', TinTucController.getNewsBySlug);
router.delete('/:id', TinTucController.deleteNewsById);
router.post('/upload-image', async (req, res) => {
  try {
    const file = req.files.image;
    const result = await cloudinary.uploader.upload(file.tempFilePath || file.path, {
      folder: 'tin-tuc',
    });
    res.json({ url: result.secure_url });
  } catch (error) {
    console.error('Cloudinary upload error: ', error);
    res.status(500).json({ message: 'Error uploading image to Cloudinary' }); // Fixed typo in 'message'
  }
});

module.exports = router;