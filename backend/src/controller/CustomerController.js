// const { register } = require('module');
const CustomerService = require('../services/CustomerService');

const registerCustomer = async(req, res) => {
    const {nameCustomer, emailCustomer, phoneCustomer, contentCustomer} = req.body;

    if (!nameCustomer || !emailCustomer || !phoneCustomer || !contentCustomer) {
        return res.status(400).json({ message: "All fields are required!" });
    }
    try{
        const newCustomer = await CustomerService.createCustomer({
            nameCustomer, 
            emailCustomer, 
            phoneCustomer, 
            contentCustomer,
        });
        res.status(201).json({
            message:"Customer registered successfully!", 
            customer: newCustomer,
        });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });

    }
}
const getAllCustomer = async(req, res) => {
    try{
        const customers = await CustomerService.getAllCustomer();
        res.status(200).json(customers);
    } catch(error) {
        res.status(500).json({ message: "Failed to fetch customers", error: error.message });
    }
}
module.exports = {
    registerCustomer, 
    getAllCustomer,
}