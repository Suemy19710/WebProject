const mongoose = require('mongoose'); 
const LuatSuSchema = new mongoose.Schema({
    name: {type: String, required: true}, 
    title: {type: String, required: true}, 
    phone: { type: String, required: true },
    email: { type: String, required: true },
    image: { type: String, required: true }, 
    expertise: { type: String, required: true },
    experience: { type: String, required: true },
    slug: { type: String, required: true, unique: true }, 

}); 
module.exports = mongoose.model('LuatSu', LuatSuSchema); 