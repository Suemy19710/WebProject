const express = require('express');
const multer = require('multer');
const DanSuController = require('../controller/DanSuController');

const storage = multer.memoryStorage();
const upload = multer({ storage});

const router = express.Router();
router.post('/', upload.single('file'), DanSuController.uploadDocument);
router.get('/', DanSuController.getAllDocument);
router.get('/document/:id', DanSuController.getDocument);

module.exports = router;