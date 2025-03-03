const mammoth = require('mammoth');
const NewsModel = require('../models/NewsModel');

const createNews = async (req, res) => {
    try {
        const result = await mammoth.convertToHtml({ buffer: fileBuffer});
        const content = result.value;
        const newNews = new NewsModel({
            title: req.body.title,
            slug: slug,
            content: content,
            image: req.files['image'][0].filename,
        });

        const postNews = await newNews.save();

        return postNews;
    } catch (error) {
        console.error('Error creating news:', error);
        res.status(500).json({ error: 'Server error' });
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
