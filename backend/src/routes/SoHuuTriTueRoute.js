const express = require('express');
const SoHuuTriTueController = require('../controller/SoHuuTriTueController');

const router = express.Router();
router.post('/', SoHuuTriTueController.uploadDocument);
router.get('/', SoHuuTriTueController.getAllDocument);
router.get('/document/:id', SoHuuTriTueController.getDocument);

module.exports = router;