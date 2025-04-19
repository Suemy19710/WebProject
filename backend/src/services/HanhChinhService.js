const HanhChinhModel = require('../models/HanhChinhModel');
const redis = require('redis');
const client = redis.createClient();

const saveDocument = async (content) => {
    try {
        await HanhChinhModel.deleteMany({}); 
        const newDocument = new HanhChinhModel({ content });
        const savedDocument = await newDocument.save();
        return savedDocument;
    } catch (error) {
        throw new Error('Error saving document');
    }
};
// const getAllDocuments = async () => {
//     try {
//         // Get the first document (most recent or first based on your needs)
//         const document = await HanhChinhModel.findOne();
//         return document ? [document] : []; // Return an array for frontend consistency
//     } catch (error) {
//         throw new Error('Error fetching document');
//     }
// };

const getAllDocuments = async () => {
    try {
        const cacheKey = 'hanh-chinh-documents';
        
        // Check if the data is in the cache
        return new Promise((resolve, reject) => {
            client.get(cacheKey, async (err, cachedData) => {
                if (err) reject(err);
                if (cachedData) {
                    // If data is cached, return it immediately
                    console.log('Returning cached data');
                    return resolve(JSON.parse(cachedData));
                } else {
                    // Fetch from DB if not cached
                    const documents = await HanhChinhModel.find();
                    if (!documents || documents.length === 0) {
                        return resolve([]);
                    }
                    
                    // Cache the response for 1 hour (3600 seconds)
                    client.setex(cacheKey, 3600, JSON.stringify(documents)); // Cache for 1 hour
                    
                    resolve(documents);
                }
            });
        });
    } catch (error) {
        throw new Error('Error fetching documents');
    }
};

//oldest version
// const getAllDocuments = async () => {
//     try {
//         const documents = await HanhChinhModel.find();
//         return documents;
//     } catch (error) {
//         throw new Error('Error fetching documents');
//     }
// };

const getDocumentById = async (id) => {
    try {
        const document = await HanhChinhModel.findById(id);
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