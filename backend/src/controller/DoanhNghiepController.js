const DoanhNghiepService = require('../services/DoanhNghiepService');

const uploadDocument = async (req, res) => {
    const { content } = req.body;
    if (!content) {
        return res.status(400).send('No content provided.');
    }
    try {
        const savedDocument = await DoanhNghiepService.saveDocument(content);
        res.status(200).send({ message: 'Document saved', documentId: savedDocument._id });
    } catch (error) {
        console.log('Error saving document: ', error);
        res.status(500).send('Error saving document');
    }
};

const getAllDocument = async (req, res) => {
    try {
        const documents = await DoanhNghiepService.getAllDocuments();
        res.status(200).send(documents);
    } catch (error) {
        console.error('Error fetching documents:', error);
        res.status(500).send('Error fetching documents');
    }
};

const getDocument = async (req, res) => {
    const { id } = req.params;
    try {
        const document = await DoanhNghiepService.getDocumentById(id);
        res.status(200).send({ content: document.content });
    } catch (error) {
        console.error('Error fetching document:', error);
        res.status(404).send('Document not found');
    }
};

module.exports = {
    uploadDocument,
    getAllDocument,
    getDocument,
};