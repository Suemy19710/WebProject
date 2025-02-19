const mammoth = require('mammoth');
const SoHuuTriTueModel = require('../models/SoHuuTriTueModel');

const parseAndSaveDocument = async(fileBuffer) => {
    try{
        const deleteResult =  await SoHuuTriTueModel.deleteMany({});
        console.log('Delete result: ', deleteResult);
        const result = await mammoth.convertToHtml({buffer: fileBuffer});
        const content = result.value;

        const newDocument = new SoHuuTriTueModel({content});
        const savedDocument = await newDocument.save();

        return savedDocument;
    } catch(error) {
        throw new Error('Error parsing file');
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