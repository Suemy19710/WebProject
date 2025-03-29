const express = require('express');
const DanSuController = require('../controller/DanSuController');

const router = express.Router();
router.post('/', DanSuController.uploadDocument);
router.get('/', DanSuController.getAllDocument);
router.get('/document/:id', DanSuController.getDocument);

module.exports = router;