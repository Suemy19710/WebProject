const HinhSuService = require('../services/HinhSuService');
const uploadDocument = async(req, res) =>{
    const file = req.file; 
    if (!file) {
        return res.status(400).send('No file uploaded.');
    }
    try{
        const savedDocument = await HinhSuService.parseAndSaveDocument(file.buffer);
        res.status(200).send({message: 'File uploaded and saved', documentId: savedDocument._id});
    } catch(error) {
        console.log('Error uploading file: ', error);
        res.status(500).send('Error uploading document');
    }
}
const getAllDocument = async(req, res) => {
    try {
        const documents = await HinhSuService.getAllDocuments();
        res.status(200).send(documents);
    } catch (error) {
        console.error('Error fetching documents:', error);
        res.status(500).send('Error fetching documents');
    }
}
const getDocument = async(req, res) =>{
    const {id} = req.params;
    try{
        const document = await HinhSuService.getDocumentById(id);
        res.status(200).send({ content: document.content });
    } catch (error) {
      console.error('Error fetching document:', error);
      res.status(404).send('Document not found');
    }
    
}
module.exports = {
    uploadDocument, 
    getDocument, 
    getAllDocument
}