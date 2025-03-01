const NewsModel = require("../models/NewsModel");
const NewsService = require("../services/NewsService");

const createNews = async(req, res) => {
    try {
        if (!req.body.title || !req.body.slug || !req.files['content'] || !req.files['image']){
            return res.status(400).json({error: 'Title, slug, content file and image are required.'});
        }
        const slug = req.body.slug || req.body.title.toLowerCase().replace(/\s+/g, '-');

        const newNews = new NewsModel({
            title: req.body.title, 
            slug: req.body.slug, 
            content: req.files['content'][0].filename, 
            image: req.files['image'][0].filename, 
        });

        await newNews.save();
        res.json({ message: 'News created successfully!', news: newNews});
    } catch(error) {
        console.error('Error creating news:', error);
        res.status(500).json({ error: 'Server error' });
    }
};

const getAllNews = async(req, res) => {
    try{
        const news = await NewsService.getAllNews();
        if (news.length === 0) {
            return res.status(404).json({ error: 'News article not found' });
        }
        res.status(200).send(news);    
    } catch(error) {
        console.error('Error fetching documents:', error); 
        res.status(500).send('Error fetching documents');
        // res.status(500).json({error:error.message});

    }
};
// const getNewsById = async(req, res) => {
//     const {id} = req.params; 
//     try{
//         // const news = await NewsService.getNewsById(id); 
//         const news = await NewsService.getNewsById(req.params.id); 
//         if (!news) {
//             return res.status(404).json('News article not found');
//         }

//         // Convert image buffer to Base64
//         if (news.image) {
//             news.image = news.image.toString('base64');
//         }
//         res.status(200).send(news); 
//     } catch(error) {
//         console.error('Error fetching news:', error);
//         res.status(500).send('News article not found');
//         // res.status(500).json({error: error.message});
//     }
// };

const getNewsBySlug = async(req, res) => {
    try{
        const {slug} = req.params;
        // const news = slug ? await NewsModel.findOne({slug}) : await NewsModel.find();
        const news = await NewsModel.findOne({slug});

        if (!news){
            return res.status(404).json({ error: 'No blog posts found' });
        }
            res.json(news);
            // res.status(200).send(news);
        }
        catch(err) {
            // res.status(500),json({error: 'Server error'});
            console.error('Error fetching documents:', error); 
            res.status(500).send('Error fetching documents');
        }
}

const deleteNewsById = async(req, res) => {
    const {id} = req.params;
    try {
        await NewsService.deleteNewsById(id);
        // res.status(200).json({message: 'Post deleted'});
        res.status(200).send({ message: 'News article deleted successfully' });
    } catch (error) {
        console.error('Error deleting news:', error);
        res.status(500).send('News article not found');     
        // res.status(500).json({error: error.message});

    }
};
module.exports = {
    createNews, 
    getAllNews, 
    deleteNewsById, 
    getNewsBySlug
}