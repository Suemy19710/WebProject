
const express = require('express');
const router = express.Router();
const customerController = require('../controller/CustomerController');

router.post('/', customerController.registerCustomer);
router.get('/', customerController.getAllCustomer);
router.put('/:customerId/read-status', customerController.updateReadStatus);
module.exports = router;