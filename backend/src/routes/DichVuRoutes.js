const express = require('express');
const ServiceController = require('../controller/DichVuController');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

const router = express.Router();

router.post('/', ServiceController.uploadService);
router.get('/', ServiceController.getAllServices);
router.get('/:id', ServiceController.getService);
router.put('/:id', ServiceController.updateService);
router.delete('/:id', ServiceController.deleteService);
router.post('/upload-image', upload.single('image'), ServiceController.uploadImage);

module.exports = router;