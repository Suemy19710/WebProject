const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    nameCustomer: {
        type: String,
        // required: [true, 'Vui lòng điền tên!'],
    },
    emailCustomer: {
        type: String,
        // required: [true, 'Vui lòng điền địa chỉ email!'],
        // match: [/.+\@.+\..+/, 'Vui lòng điền địa chỉ email!'], // Basic email regex validation
    },
    phoneCustomer: {
        type: String,
        // required: [true, 'Vui lòng điền số điện thoại!'],
    },
    contentCustomer: {
        type: String,
        // required: [true, 'Vui lòng điền nội dung bạn cần tư vấn!'],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    isRead: {
        type: Boolean, 
        default: false
    }
});
// customerSchema.pre('save', function(next) {
// })
module.exports = mongoose.model('Customer', customerSchema);