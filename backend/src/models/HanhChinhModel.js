const mongoose = require('mongoose');
const HanhChinhSchema = new mongoose.Schema({
    content: {type:String, require: true},
});
module.exports = mongoose.model('HanhChinh', HanhChinhSchema);