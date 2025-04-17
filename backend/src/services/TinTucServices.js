const TinTucModel = require('../models/TinTucModel');

const createNews = async (newsData) => {
    try {
        const newNews = new TinTucModel(newsData);
        const savedNews = await newNews.save();
        return savedNews;
    } catch (error) {
        throw new Error(`Error creating news: ${error.message}`);
    }
};

const getAllNews = async (includeDrafts = false) => {
    try {
        const query = includeDrafts ? {} : { status: 'publish' };
        return await TinTucModel.find(query).sort({ createdAt: -1 }); // Newest first
    } catch (error) {
        throw new Error(`Error fetching news: ${error.message}`);
    }
};
const getNewsBySlug = async (slug) => {
    try {
        const news = await TinTucModel.findOne({ slug });
        if (!news) throw new Error('News article not found');
        return news;
    } catch (error) {
        throw new Error(`Error fetching news by slug: ${error.message}`);
    }
};
const getNewsById = async(id) => {
    try{
        const news = await TinTucModel.findById(id); 
        if (!news) {
            throw new Error('Error fetching news by Id: '+error.message); 
        }
        return news; 
    }
    catch(error){
        throw new Error('Error fetching news by ID: ' + error.message);
    }
}
const deleteNewsById = async (id) => {
    try {
        const deletedNews = await TinTucModel.findByIdAndDelete(id);
        if (!deletedNews) throw new Error('News article not found');
        return deletedNews;
    } catch (error) {
        throw new Error(`Error deleting news: ${error.message}`);
    }
};
const updateNews = async (id, updateData) => {
    try {
      const news = await TinTuc.findByIdAndUpdate(id, updateData, { new: true });
      if (!news) {
        throw new Error('News article not found');
      }
      return news;
    } catch (error) {
      throw new Error('Error updating news: ' + error.message);
    }
  };module.exports = {
    createNews,
    getAllNews,
    getNewsBySlug,
    deleteNewsById, 
    updateNews, 
    getNewsById
};