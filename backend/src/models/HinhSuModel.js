const mongoose = require('mongoose');
const HinhSuSchema = new mongoose.Schema({
    content: {type:String, require: true},
});
module.exports = mongoose.model('HinhSu', HinhSuSchema);