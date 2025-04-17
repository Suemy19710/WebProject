const mongoose = require('mongoose');
const DoanhNghiepSchema = new mongoose.Schema({
    content: {type:String, require: true},
});
module.exports = mongoose.model('DoanhNghiep', DoanhNghiepSchema);