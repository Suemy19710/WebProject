const DoanhNghiepModel = require('../models/DoanhNghiepModel');

const saveDocument = async (content) => {
    try {
        await DoanhNghiepModel.deleteMany({}); 
        const newDocument = new DoanhNghiepModel({ content });
        const savedDocument = await newDocument.save();
        return savedDocument;
    } catch (error) {
        throw new Error('Error saving document');
    }
};

const getAllDocuments = async () => {
    try {
        const documents = await DoanhNghiepModel.find();
        return documents;
    } catch (error) {
        throw new Error('Error fetching documents');
    }
};

const getDocumentById = async (id) => {
    try {
        const document = await DoanhNghiepModel.findById(id);
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