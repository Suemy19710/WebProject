const express = require('express');
const HanhChinhController = require('../controller/HanhChinhController');

const router = express.Router();
router.post('/',HanhChinhController.uploadDocument);
router.get('/', HanhChinhController.getAllDocument);
router.get('/document/:id', HanhChinhController.getDocument);

module.exports = router;