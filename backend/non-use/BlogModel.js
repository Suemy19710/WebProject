const mongoose = require('mongoose');

const createSlugTitle = (title) => {
    return title 
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/[^a-z0-9-]+/g, '') // Remove special characters
    .replace(/--+/g, '-'); // Remove multiple hyphens
};

const blogSchema = new mongoose.Schema({
    title: {type: String, required: true}, 
    slug: {type: String, require: true, unique:true}, 
    content: {type: String, required: true}, 
    createdAt: {type: Date, default: Date.now}
});

blogSchema.pre('save', function(next) {
    this.slug = createSlugTitle(this.title);
    next();
})
module.exports = mongoose.model('Blog', blogSchema);