const mammoth = require('mammoth');
const DanSuModel = require('../models/DanSuModel');

const parseAndSaveDocument = async(fileBuffer) => {
    try{
        const result = await mammoth.convertToHtml({buffer: fileBuffer});
        const content = result.value;

        const newDocument = new DanSuModel({content});
        const savedDocument = await newDocument.save();

        return savedDocument;
    } catch(error) {
        throw new Error('Error parsing file');
    }
}
const getAllDocuments = async () => {
    try {
        const documents = await DanSuModel.find();
        return documents;
    } catch (error) {
        throw new Error('Error fetching documents');
    }
};

const getDocumentById = async(id) => {
    try{
        const document = await Document.findById(id);
        if (!document) {
            throw new Error('Document not found');
        }
        return document;
    } catch(error) {
        throw new Error ('Error fetching document');
    }
}
module.exports = {
    parseAndSaveDocument,
    getDocumentById, 
    getAllDocuments
 }