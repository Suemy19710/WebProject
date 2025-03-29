const mongoose = require('mongoose');
const SoHuuTritueSchema = new mongoose.Schema({
    content: {type:String, require: true},
});
module.exports = mongoose.model('SoHuuTriTue', SoHuuTritueSchema);