const express = require('express');
const multer = require('multer');
const path = require('path');
const NewsController = require('../controller/NewsController');

// const storage = multer.memoryStorage();
// const upload = multer ({storage: storage});
// const upload = multer({storage: multer.memoryStorage()});

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Ensure this folder exists
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Unique file name
    }
});
const upload = multer({ storage: storage });

const router = express.Router();
router.post('/', upload.fields([
    {name: 'content', maxCount: 1}, 
    {name: 'image', maxCount: 1}
]), NewsController.createNews);
router.get('/', NewsController.getAllNews);
router.delete('/:id', NewsController.deleteNewsById);
router.get('/:slug', NewsController.getNewsBySlug);

module.exports = router;
