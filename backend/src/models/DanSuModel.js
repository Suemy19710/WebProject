const mongoose = require('mongoose');
const DanSuSchema = new mongoose.Schema({
    content: {type:String, require: true},
});
module.exports = mongoose.model('DanSu', DanSuSchema);