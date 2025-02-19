const express = require('express');
const multer = require('multer');
const SoHuuTriTueController = require('../controller/SoHuuTriTueController');

const storage = multer.memoryStorage();
const upload = multer({ storage});

const router = express.Router();
router.post('/', upload.single('file'), SoHuuTriTueController.uploadDocument);
router.get('/', SoHuuTriTueController.getAllDocument);
router.get('/document/:id', SoHuuTriTueController.getDocument);

module.exports = router;