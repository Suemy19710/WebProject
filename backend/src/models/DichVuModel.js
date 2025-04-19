const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  content: { type: String, default: '<p>Chi tiết dịch vụ...</p>' },
  category: { type: String, required: true },
});

module.exports = mongoose.model('Service', ServiceSchema);