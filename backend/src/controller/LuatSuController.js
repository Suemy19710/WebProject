const LuatSuService = require('../services/LuatSuService');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadDir = 'uploads/luatsu-images';
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({ storage });

const createLuatSu = async (req, res) => {
    const { name, title, phone, email, expertise, experience } = req.body;
    if (!req.file || !name || !title || !phone || !email || !expertise || !experience) {
        return res.status(400).json({ error: 'All fields and image are required' });
    }

    const image = `/uploads/luatsu-images/${req.file.filename}`;
    try {
        const savedLuatSu = await LuatSuService.createLuatSu({
            name,
            title,
            phone,
            email,
            image,
            expertise,
            experience,
        });
        res.status(201).json({ message: 'Lawyer created', lawyer: savedLuatSu });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAllLuatSu = async (req, res) => {
    try {
        const lawyers = await LuatSuService.getAllLuatSu();
        res.status(200).json(lawyers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getLuatSuById = async (req, res) => {
    const { id } = req.params;
    try {
        const lawyer = await LuatSuService.getLuatSuById(id);
        res.status(200).json(lawyer);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

const getLuatSuBySlug = async (req, res) => {
    try {
        const { slug } = req.params;
        console.log('Requested slug:', slug);
        const lawyer = await LuatSuService.getLuatSuBySlug(slug);
        res.status(200).json(lawyer);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

const updateLuatSu = async (req, res) => {
    const { id } = req.params;
    const { name, title, phone, email, expertise, experience } = req.body;
    const updateData = { name, title, phone, email, expertise, experience };
    if (req.file) {
        updateData.image = `/uploads/luat-su-images/${req.file.filename}`;
    }
    try {
        const updatedLuatSu = await LuatSuService.updateLuatSu(id, updateData);
        res.status(200).json({ message: 'Lawyer updated', lawyer: updatedLuatSu });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteLuatSu = async (req, res) => {
    const { id } = req.params;
    try {
        await LuatSuService.deleteLuatSu(id);
        res.status(200).json({ message: 'Lawyer deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createLuatSu,
    getAllLuatSu,
    getLuatSuById,
    getLuatSuBySlug, // Add this export
    updateLuatSu,
    deleteLuatSu,
    upload,
};