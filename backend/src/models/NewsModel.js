const mongoose = require('mongoose');

const createSlugTitle = (title) => {
    return title 
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-') 
    .replace(/[^a-z0-9-]+/g, '') 
    .replace(/--+/g, '-'); 
};

const NewsSchema = new mongoose.Schema({
    content: {type:String}, 
    image: {type: String}, 
    title: {type: String, required: true},
    slug: {type: String, required: true}, 
    createdAt: {type: Date, default: Date.now}
}); 

NewsSchema.pre('save', function(next){
    this.slug = createSlugTitle(this.title), 
    next();
})
module.exports = mongoose.model('News', NewsSchema);