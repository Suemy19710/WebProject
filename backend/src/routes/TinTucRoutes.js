const express = require('express');
const multer = require('multer');
const path = require('path');
const TinTucController = require('../controller/TinTucController');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); 
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); 
    },
});

const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        const filetypes = /jpeg|jpg|png/;
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = filetypes.test(file.mimetype);
        if (extname && mimetype) {
            return cb(null, true);
        }
        cb(new Error('Only JPEG and PNG images are allowed'));
    },
});

const router = express.Router();

router.post('/', upload.single('image'), TinTucController.createNews);
router.get('/', TinTucController.getAllNews);
router.get('/:slug', TinTucController.getNewsBySlug);
router.delete('/:id', TinTucController.deleteNewsById);
router.post('/upload-image', upload.single('image'), (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No image file provided.' });
        }
        const imageUrl = `/uploads/${req.file.filename}`; // Relative URL (adjust based on your server setup)
        res.status(200).json({ url: imageUrl });
    } catch (error) {
        console.error('Error uploading image:', error);
        res.status(500).json({ error: 'Error uploading image.' });
    }
});

module.exports = router;