const fs = require('fs');
const path = require('path');
const sanitizeHtml = require('sanitize-html');
const TinTucService = require('../services/TinTucServices');

// Create a new news article
const createNews = async (req, res) => {
    try {
        if (!req.body.title || !req.body.content || !req.file) {
            return res.status(400).json({ error: 'Title, content, and image are required.' });
        }
         const imageFile = req.files.image; 
         const imageResult = await claudinary.uploader.upload(imageFile.tempFilePath, {
            folder: 'tin-tuc',
            use_filename: true,
            unique_filename: true,
         })

        const cleanContent = sanitizeHtml(req.body.content, {
            allowedTags: ['p', 'b', 'i', 'em', 'strong', 'a', 'ul', 'ol', 'li', 'h1', 'h2', 'h3', 'img', 'span', 'div'],
            allowedAttributes: {
                'a': ['href'],
                'img': ['src', 'alt', 'width', 'height', 'style'],
                '*': ['style'],
            },
            allowedStyles: {
                '*': {
                    'font-size': [/^\d+(?:px|em|rem|%)$/],
                    'font-family': [/^[\w\s,'"-]+$/],
                    'color': [/^#[0-9a-fA-F]{3,6}$/, /^rgb\(\d{1,3},\s*\d{1,3},\s*\d{1,3}\)$/],
                },
            },
        });

        const newsData = {
            title: req.body.title,
            slug: req.body.slug, // Will be overridden by pre-save hook if not provided
            content: cleanContent,
            image: imageResult.secure_url, // Store Cloudinary URL
            status: req.body.status || 'draft',
        };

        const newNews = await TinTucService.createNews(newsData);
        res.status(201).json({ message: 'News created successfully!', news: newNews });
    } catch (error) {
        console.error('Error creating news:', error);
        res.status(500).json({ error: error.message });
    }
};

// Get all news articles
const getAllNews = async (req, res) => {
    try {
        const includeDrafts = req.query.includeDrafts === 'true'; // Optional query param
        const news = await TinTucService.getAllNews(includeDrafts);
        if (!news.length) {
            return res.status(404).json({ message: 'No news articles found.' });
        }
        res.status(200).json(news);
    } catch (error) {
        console.error('Error fetching news:', error);
        res.status(500).json({ error: error.message });
    }
};

// Get a news article by slug
const getNewsBySlug = async (req, res) => {
    try {
        const news = await TinTucService.getNewsBySlug(req.params.slug);
        res.status(200).json(news);
    } catch (error) {
        console.error('Error fetching news by slug:', error);
        res.status(error.message.includes('not found') ? 404 : 500).json({ error: error.message });
    }
};

// Delete a news article by ID
const deleteNewsById = async (req, res) => {
    try {
        const news = await TinTucService.deleteNewsById(req.params.id);
        // Delete associated image file
        if (news.image) {
            const imagePath = path.join(__dirname, '../uploads', news.image);
            if (fs.existsSync(imagePath)) {
                fs.unlinkSync(imagePath);
            }
        }
        res.status(200).json({ message: 'News article deleted successfully.' });
    } catch (error) {
        console.error('Error deleting news:', error);
        res.status(error.message.includes('not found') ? 404 : 500).json({ error: error.message });
    }
};

module.exports = {
    createNews,
    getAllNews,
    getNewsBySlug,
    deleteNewsById,
};