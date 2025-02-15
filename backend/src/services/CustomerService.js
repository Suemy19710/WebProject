const CustomerModel = require('../models/CustomerModel');
const createCustomer = async(customerData) => {
    try{
        const newCustomer = new CustomerModel(customerData);
        await newCustomer.save();
        return newCustomer;
    } catch(error) {
        throw new Error("Error saving customer: " + error.message);
    }

}
const getAllCustomer = async() =>{
    try{
        const allCustomers = await CustomerModel.find();
        return allCustomers;

    } catch(error) {
        throw new Error("Error fetching customers: " + error.message);
    }
}
module.exports = {
    createCustomer,
    getAllCustomer,
}
