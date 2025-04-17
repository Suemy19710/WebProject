const express = require('express');
const DoanhNghiepController = require('../controller/DoanhNghiepController');

const router = express.Router();
router.post('/',DoanhNghiepController.uploadDocument);
router.get('/', DoanhNghiepController.getAllDocument);
router.get('/document/:id', DoanhNghiepController.getDocument);

module.exports = router;