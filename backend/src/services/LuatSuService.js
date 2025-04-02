const LuatSuModel = require('../models/LuatSuModel'); 

const createSlugName= (name) => {
    return name 
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-') // Replace spaces with single hyphen
        .replace(/[^a-z0-9-]+/g, '') // Remove non-alphanumeric chars except hyphens
        .replace(/--+/g, '-'); // Replace multiple hyphens with single hyphen
}; 

const createLuatSu = async(data) => {
    try{
        const slug = createSlugName(data.name); 
        const newLuatSu = new LuatSuModel({ ...data, slug });        
        const savedLuatSu = await newLuatSu.save(); 
        return savedLuatSu; 
    } catch(error){
        throw new Error('Error creating lawyer profile'); 
    }
};
const getAllLuatSu = async() => {
    try{
        const lawyers = await LuatSuModel.find(); 
        return lawyers; 
    } catch(error) {
        throw new Error('Error fetching lawyers'); 
    }
}

const getLuatSuBySlug = async(slug) => {
    try{
        const lawyer = await LuatSuModel.findOne({slug}); 
        if (!lawyer) {
            throw new Error('Lawyer not found'); 
        }
        return lawyer; 
    } catch(error) {
        throw new Error('Error fetching laywer by slug'); 
    }
}

const updateLuatSu = async (id, data) => {
    try {
        if (data.name) {
            data.slug = createSlugName(data.name); // Update slug if name changes
        }
        const updatedLuatSu = await LuatSuModel.findByIdAndUpdate(id, data, { new: true });
        if (!updatedLuatSu) {
            throw new Error('Lawyer not found');
        }
        return updatedLuatSu;
    } catch (error) {
        throw new Error('Error updating lawyer');
    }
};
const getLuatSuById = async (id) => {
    try {
        const lawyer = await LuatSuModel.findById(id);
        if (!lawyer) {
            throw new Error('Lawyer not found');
        }
        return lawyer;
    } catch (error) {
        throw new Error('Error fetching lawyer');
    }
};
const deleteLuatSu = async (id) => {
    try {
        const deletedLuatSu = await LuatSuModel.findByIdAndDelete(id);
        if (!deletedLuatSu) {
            throw new Error('Lawyer not found');
        }
        return deletedLuatSu;
    } catch (error) {
        throw new Error('Error deleting lawyer');
    }
};
module.exports = {
    createLuatSu,
    getAllLuatSu,
    getLuatSuById,
    getLuatSuBySlug, 
    updateLuatSu,
    deleteLuatSu,
}