const express = require('express');
const HinhSuController = require('../controller/HinhSuController');

const router = express.Router();
router.post('/', HinhSuController.uploadDocument);
router.get('/', HinhSuController.getAllDocument);
router.get('/document/:id', HinhSuController.getDocument);

module.exports = router;