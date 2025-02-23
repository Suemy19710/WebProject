const mongoose = require('mongoose');
const PreviewSchema = new mongoose.Schema({
    content: {type:String},
});
module.exports = mongoose.model('Preview', PreviewSchema);