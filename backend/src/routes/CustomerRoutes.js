
const express = require('express');
const router = express.Router();
const customerController = require('../controller/CustomerController');

router.post('/', customerController.registerCustomer);
router.get('/', customerController.getAllCustomer);
module.exports = router;