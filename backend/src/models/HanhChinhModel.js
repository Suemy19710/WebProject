const mongoose = require('mongoose');
const HanhChinhSchema = new mongoose.Schema({
    content: {type:String},
});
module.exports = mongoose.model('HanhChinh', HanhChinhSchema);