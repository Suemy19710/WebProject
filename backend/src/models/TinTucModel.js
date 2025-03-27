const mongoose = require('mongoose');

// Utility function to create a slug from the title
const createSlugTitle = (title) => {
    return title
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-') // Replace spaces with single hyphen
        .replace(/[^a-z0-9-]+/g, '') // Remove non-alphanumeric chars except hyphens
        .replace(/--+/g, '-'); // Replace multiple hyphens with single hyphen
};

const TinTucSchema = new mongoose.Schema({
    content: { type: String, required: true }, // Rich text content
    image: { type: String }, // Filename of the uploaded cover image
    title: { type: String, required: true }, // News title
    slug: { type: String, required: true, unique: true }, // URL-friendly slug
    status: { type: String, enum: ['draft', 'publish'], default: 'draft' }, // Draft or published
    createdAt: { type: Date, default: Date.now } // Creation timestamp
});

// Pre-save hook to generate slug from title
TinTucSchema.pre('save', function (next) {
    this.slug = createSlugTitle(this.title);
    next();
});

module.exports = mongoose.model('TinTuc', TinTucSchema);