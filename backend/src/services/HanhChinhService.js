const mammoth = require('mammoth');
const HanhChinhModel = require('../models/HanhChinhModel');

const parseAndSaveDocument = async(fileBuffer) => {
    try{
        const deleteResult =  await HanhChinhModel.deleteMany({});
        console.log('Delete result: ', deleteResult);
        const result = await mammoth.convertToHtml({buffer: fileBuffer});
        const content = result.value;

        const newDocument = new HanhChinhModel({content});
        const savedDocument = await newDocument.save();

        return savedDocument;
    } catch(error) {
        throw new Error('Error parsing file');
    }
};
const getAllDocuments = async () => {
    try {
        const documents = await HanhChinhModel.find();
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