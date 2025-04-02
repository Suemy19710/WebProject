const express = require('express');
const LuatSuController = require('../controller/LuatSuController');

const router = express.Router();

router.post('/', LuatSuController.upload.single('image'), LuatSuController.createLuatSu);
router.get('/', LuatSuController.getAllLuatSu);
router.get('/:id', LuatSuController.getLuatSuById);
router.get('/:slug', LuatSuController.getLuatSuBySlug);
router.put('/:id', LuatSuController.upload.single('image'), LuatSuController.updateLuatSu);
router.delete('/:id', LuatSuController.deleteLuatSu);

module.exports = router;