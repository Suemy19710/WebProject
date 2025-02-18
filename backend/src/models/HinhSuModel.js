const mongoose = require('mongoose');
const HinhSuSchema = new mongoose.Schema({
    content: {type:String},
});
module.exports = mongoose.model('HinhSu', HinhSuSchema);