const fs = require('fs');
const path = require('path');
const sanitizeHtml = require('sanitize-html');
const cloudinary = require('cloudinary').v2;

const TinTucService = require('../services/TinTucServices');

// Create a new news article
const createNews = async (req, res) => {
  try {
    // Log incoming data for debugging
    console.log('Request body:', req.body);
    console.log('Request files:', req.files);
    
    // Enhanced validation with clearer error responses
    if (!req.body.title) {
      return res.status(400).json({ error: 'Title is required.' });
    }
    
    if (!req.body.content) {
      return res.status(400).json({ error: 'Content is required.' });
    }
    
    if (!req.files || !req.files.image) {
      return res.status(400).json({ error: 'Image is required.' });
    }

    const imageFile = req.files.image;
    
    // Log file details for debugging
    console.log('Image file details:', {
      name: imageFile.name,
      size: imageFile.size,
      mimetype: imageFile.mimetype,
      hasTempFilePath: !!imageFile.tempFilePath
    });
    
    // Upload to Cloudinary with proper error handling
    let imageResult;
    try {
      imageResult = await cloudinary.uploader.upload(imageFile.tempFilePath, {
        folder: 'tin-tuc',
        use_filename: true,
        unique_filename: true,
      });
      console.log('Cloudinary upload successful:', imageResult.secure_url);
    } catch (cloudinaryError) {
      console.error('Cloudinary upload error:', cloudinaryError);
      return res.status(500).json({ error: 'Error uploading image to Cloudinary: ' + cloudinaryError.message });
    }

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
    const includeDrafts = req.query.includeDrafts === 'true';
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
    // Get the news article to extract the image URL
    const newsToDelete = await TinTucService.getNewsById(req.params.id);
    
    // If the news has an image URL from Cloudinary, extract the public_id to delete it
    if (newsToDelete && newsToDelete.image) {
      const imageUrl = newsToDelete.image;
      // Extract public_id from Cloudinary URL (usually after the last '/' and before the file extension)
      const publicIdMatch = imageUrl.match(/\/v\d+\/(.+?)\.\w+/);
      if (publicIdMatch && publicIdMatch[1]) {
        const publicId = publicIdMatch[1];
        // Delete the image from Cloudinary
        try {
          await cloudinary.uploader.destroy(publicId);
          console.log('Image deleted from Cloudinary:', publicId);
        } catch (cloudinaryError) {
          console.error('Error deleting image from Cloudinary:', cloudinaryError);
          // Continue with news deletion even if image deletion fails
        }
      }
    }
    
    const news = await TinTucService.deleteNewsById(req.params.id);
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