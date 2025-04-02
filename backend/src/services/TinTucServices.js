const TinTucModel = require('../models/TinTucModel');

// Create a new news article
const createNews = async (newsData) => {
    try {
        const newNews = new TinTucModel(newsData);
        const savedNews = await newNews.save();
        return savedNews;
    } catch (error) {
        throw new Error(`Error creating news: ${error.message}`);
    }
};

// Get all news articles, optionally including drafts
const getAllNews = async (includeDrafts = false) => {
    try {
        const query = includeDrafts ? {} : { status: 'publish' };
        return await TinTucModel.find(query).sort({ createdAt: -1 }); // Newest first
    } catch (error) {
        throw new Error(`Error fetching news: ${error.message}`);
    }
};

// Get a news article by slug
const getNewsBySlug = async (slug) => {
    try {
        const news = await TinTucModel.findOne({ slug });
        if (!news) throw new Error('News article not found');
        return news;
    } catch (error) {
        throw new Error(`Error fetching news by slug: ${error.message}`);
    }
};

// Delete a news article by ID
const deleteNewsById = async (id) => {
    try {
        const deletedNews = await TinTucModel.findByIdAndDelete(id);
        if (!deletedNews) throw new Error('News article not found');
        return deletedNews;
    } catch (error) {
        throw new Error(`Error deleting news: ${error.message}`);
    }
};

module.exports = {
    createNews,
    getAllNews,
    getNewsBySlug,
    deleteNewsById
};