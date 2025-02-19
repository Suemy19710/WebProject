const mongoose = require('mongoose');
const SoHuuTritueSchema = new mongoose.Schema({
    content: {type:String},
});
module.exports = mongoose.model('SoHuuTriTue', SoHuuTritueSchema);