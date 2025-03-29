const DanSuModel = require('../models/DanSuModel');

const saveDocument = async (content) => {
    try {
        await DanSuModel.deleteMany({}); 
        const newDocument = new DanSuModel({ content });
        const savedDocument = await newDocument.save();
        return savedDocument;
    } catch (error) {
        throw new Error('Error saving document');
    }
};

const getAllDocuments = async () => {
    try {
        const documents = await DanSuModel.find();
        return documents;
    } catch (error) {
        throw new Error('Error fetching documents');
    }
};

const getDocumentById = async (id) => {
    try {
        const document = await DanSuModel.findById(id);
        if (!document) {
            throw new Error('Document not found');
        }
        return document;
    } catch (error) {
        throw new Error('Error fetching document');
    }
};

module.exports = {
    saveDocument,
    getAllDocuments,
    getDocumentById,
};