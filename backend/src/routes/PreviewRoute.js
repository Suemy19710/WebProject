const express = require('express');
const multer = require('multer');
const PreviewController = require('../controller/PreviewController');

const storage = multer.memoryStorage();
const upload = multer({ storage});

const router = express.Router();
router.post('/', upload.single('file'), PreviewController.uploadDocument);
router.get('/', PreviewController.getAllDocument);
router.get('/document/:id', PreviewController.getDocument);

module.exports = router;