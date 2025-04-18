const CustomerService = require('../services/CustomerService');
const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail', // Use 'gmail' instead of 'true'
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  }
});

transporter.verify((error, success) => {
  if (error) {
    console.error('Transporter verification failed:', error.message);
  } else {
    console.log('Transporter is ready to send emails');
  }
});

const registerCustomer = async (req, res) => {
  const { nameCustomer, emailCustomer, phoneCustomer, contentCustomer } = req.body;

  if (!nameCustomer || !emailCustomer || !phoneCustomer || !contentCustomer) {
    return res.status(400).json({ message: "All fields are required!" });
  }

  try {
    const newCustomer = await CustomerService.createCustomer({
      nameCustomer,
      emailCustomer,
      phoneCustomer,
      contentCustomer,
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'luatkimngoc@gmail.com',
      subject: `Thông báo yêu cầu tư vấn khách hàng từ ${nameCustomer}`,
      html: `
        <h2>Yêu cầu tư vấn khách hàng mới</h2>
        <p><strong>Họ và tên:</strong> ${nameCustomer}</p>
        <p><strong>Email:</strong> ${emailCustomer}</p>
        <p><strong>Số điện thoại:</strong> ${phoneCustomer}</p>
        <p><strong>Nội dung yêu cầu:</strong> ${contentCustomer}</p>
        <p><strong>Thời gian nhận yêu cầu:</strong> ${new Date().toLocaleString()}</p>
      `,
    };
    

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent successfully:', info.response);
      res.status(201).json({
        message: "Customer registered and email sent successfully!",
        customer: newCustomer,
      });
    } catch (emailError) {
      console.error('Email sending failed:', emailError.message);
      res.status(201).json({
        message: "Customer registered but email failed to send",
        customer: newCustomer,
        emailError: emailError.message, 
      });
    }
  } catch (error) {
    console.error('Database error:', error.message);
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

const getAllCustomer = async (req, res) => {
  try {
    const customers = await CustomerService.getAllCustomer();
    res.status(200).json(customers);
  } catch (error) {
    console.error('Error fetching customers:', error.message);
    res.status(500).json({ message: "Failed to fetch customers", error: error.message });
  }
};

const updateReadStatus = async (req, res) => {
  try {
    const { customerId } = req.params;
    const { isRead } = req.body;
    const updatedCustomer = await CustomerService.updateCustomerReadStatus(customerId, isRead);
    res.status(200).json({
      message: "Customer status updated successfully",
      customer: updatedCustomer,
    });
  } catch (error) {
    console.error('Error updating customer status:', error.message);
    res.status(500).json({ message: "Failed to update customer status", error: error.message });
  }
};

module.exports = {
  registerCustomer,
  getAllCustomer,
  updateReadStatus,
};