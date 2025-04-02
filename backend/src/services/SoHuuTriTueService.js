const SoHuuTriTueModel = require('../models/SoHuuTriTueModel');

const saveDocument = async (content) => {
    try {
        await SoHuuTriTueModel.deleteMany({}); 
        const newDocument = new SoHuuTriTueModel({ content });
        const savedDocument = await newDocument.save();
        return savedDocument;
    } catch (error) {
        throw new Error('Error saving document');
    }
};

const getAllDocuments = async () => {
    try {
        const documents = await SoHuuTriTueModel.find();
        return documents;
    } catch (error) {
        throw new Error('Error fetching documents');
    }
};

const getDocumentById = async (id) => {
    try {
        const document = await SoHuuTriTueModel.findById(id);
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