const express = require('express');
const multer = require('multer');
const HinhSuController = require('../controller/HinhSuController');

const storage = multer.memoryStorage();
const upload = multer({ storage});

const router = express.Router();
router.post('/', upload.single('file'), HinhSuController.uploadDocument);
router.get('/', HinhSuController.getAllDocument);
router.get('/document/:id', HinhSuController.getDocument);

module.exports = router;