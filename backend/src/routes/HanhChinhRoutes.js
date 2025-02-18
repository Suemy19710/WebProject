const express = require('express');
const multer = require('multer');
const HanhChinhController = require('../controller/HanhChinhController');

const storage = multer.memoryStorage();
const upload = multer({ storage});

const router = express.Router();
router.post('/', upload.single('file'), HanhChinhController.uploadDocument);
router.get('/', HanhChinhController.getAllDocument);
router.get('/document/:id', HanhChinhController.getDocument);

module.exports = router;