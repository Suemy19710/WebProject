const mammoth = require('mammoth');
const fs = require('fs');
const path = require('path');
const NewsModel = require("../models/NewsModel");
const NewsService = require("../services/NewsService");

// const createNews = async (req, res) => {
//     try {
//         if (!req.body.title || !req.body.slug || !req.files['content'] || !req.files['image']) {
//             return res.status(400).json({ error: 'Title, slug, content file, and image are required.' });
//         }
        
//         const slug = req.body.slug || req.body.title.toLowerCase().replace(/\s+/g, '-');
//         fs.readFile(req.files['content'][0].path, async function(err, data) {
//             if (err) {
//                 console.error('Error reading file:', err);
//                 return res.status(500).json({ error: 'Error processing content file' });
//             }

//             // convert to html
//             const result = await mammoth.convertToHtml({ buffer: data});
//             const content = result.value;

//             const newNews = new NewsModel({
//                 title: req.body.title,
//                 slug: slug,
//                 content: content,
//                 image: req.files['image'][0].filename,
//             });

//             await newNews.save();
//             res.json({ message: 'News created successfully!', news: newNews });
//         });
//     } catch (error) {
//         console.error('Error creating news:', error);
//         res.status(500).json({ error: 'Server error' });
//     }
// };

const createNews = async (req, res) => {
    try {
        if (!req.body.title || !req.body.slug || !req.files['content'] || !req.files['image']) {
            return res.status(400).json({ error: 'Title, slug, content file, and image are required.' });
        }
        
        const slug = req.body.slug || req.body.title.toLowerCase().replace(/\s+/g, '-');
        const contentPath = req.files['content'][0].path;
        fs.readFile(contentPath, async function(err, data) {
            if (err) {
                console.error('Error reading file:', err);
                return res.status(500).json({ error: 'Error processing content file' });
            }
            try{
                const result = await mammoth.convertToHtml({
                    buffer: data, 
                    convertImage: mammoth.images.imgElement(function(image) {
                        return image.read("base64").then(function(imageBuffer) {
                            // Save image to uploads folder or return base64
                            const imageName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${image.contentType.split('/')[1]}`;
                            const imagePath = path.join(__dirname, '../uploads', imageName);
                            
                            fs.writeFileSync(imagePath, Buffer.from(imageBuffer, 'base64'));
                            
                            return {
                                src: `/uploads/${imageName}`
                            };
                        });
                    })
                });
                const content = result.value;
                const newNews = new NewsModel({
                    title: req.body.title,
                    slug: slug,
                    content: content,
                    image: req.files['image'][0].filename,
                });
                await newNews.save();
                res.json({ message: 'News created successfully!', news: newNews });
            }catch (conversionError) {
                console.error('Error converting document:', conversionError);
                res.status(500).json({ error: 'Error converting document' });
            }
        });
    } catch (error) {
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




// const createNews = async(req, res) => {
//     try {
//         if (!req.body.title || !req.body.slug || !req.files['content'] || !req.files['image']){
//             return res.status(400).json({error: 'Title, slug, content file and image are required.'});
//         }
//         const slug = req.body.slug || req.body.title.toLowerCase().replace(/\s+/g, '-');

//         const newNews = new NewsModel({
//             title: req.body.title, 
//             slug: req.body.slug, 
//             content: req.files['content'][0].filename, 
//             image: req.files['image'][0].filename, 
//         });

//         await newNews.save();
//         res.json({ message: 'News created successfully!', news: newNews});
//     } catch(error) {
//         console.error('Error creating news:', error);
//         res.status(500).json({ error: 'Server error' });
//     }
// };

// const createNews = async (req, res) => {
//     try {
//         if (!req.body.title || !req.body.slug || !req.files['content'] || !req.files['image']) {
//             return res.status(400).json({ error: 'Title, slug, content file, and image are required.' });
//         }
        
//         const slug = req.body.slug || req.body.title.toLowerCase().replace(/\s+/g, '-');
//         fs.readFile(req.files['content'][0].path, async function(err, data) {
//             if (err) {
//                 console.error('Error reading file:', err);
//                 return res.status(500).json({ error: 'Error processing content file' });
//             }
            
//             // convert to html
//             const { value: htmlContent } = await mammoth.convertToHtml({ buffer: data });

//             const newNews = new NewsModel({
//                 title: req.body.title,
//                 slug: slug,
//                 content: htmlContent, // Store the HTML content
//                 image: req.files['image'][0].filename,
//             });

//             await newNews.save();
//             res.json({ message: 'News created successfully!', news: newNews });
//         });
//     } catch (error) {
//         console.error('Error creating news:', error);
//         res.status(500).json({ error: 'Server error' });
//     }
// };