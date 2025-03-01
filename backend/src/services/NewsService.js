const mammoth = require('mammoth');
const NewsModel = require('../models/NewsModel');

const createNews = async(title, contentBuffer, imageFile) => {
    try{
        const result = await mammoth.convertToHtml({buffer: contentBuffer });
        const content = result.value; 

        // if image file provided
        let imageData = null;
        if (imageFile) {
            imageData = {
                data: imageFile.buffer, 
                contentType: imageFile.mimetype
            };
        }

        const newDocument = new NewsModel({
            title, 
            content, 
            image: imageData, 
            imageName: imageFile ? imageFile.originalname: null
        });
        const savedDocument = await newDocument.save();
        return savedDocument;
    }
    catch(error) {
        throw new Error('Error parsing file');
    }
    
};
const getAllNews = async() => {
    try{
        return await NewsModel.find().sort({createdAt: -1});
    } catch(error) {
        throw error;
    }
};
const getNewsById =async(id) => {
    try {
        return await NewsModel.findById(id);
    } catch(error) {
        throw error;
    }
};
const deleteNewsById = async(id) => {
    try{
        return await NewsModel.findByIdAndDelete(id);
    }catch(error) {
        throw error;
    }

}

module.exports = {
    createNews, 
    getAllNews, 
    getNewsById, 
    deleteNewsById, 
}
