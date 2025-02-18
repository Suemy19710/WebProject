const mongoose = require('mongoose');
const DanSuSchema = new mongoose.Schema({
    content: {type:String},
});
module.exports = mongoose.model('DanSu', DanSuSchema);