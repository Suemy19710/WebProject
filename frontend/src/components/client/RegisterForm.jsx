import React, { useState } from 'react'; // Removed unused useEffect
import '../../styles/client/RegisterForm.scss';
import ladyJustice from '../../assets/feature/3.png';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    nameCustomer: "",
    emailCustomer: "",
    phoneCustomer: "",
    contentCustomer: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/customers`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        // Check if email sending failed
        if (result.emailError) {
          alert("Đăng ký thành công nhưng gửi email thất bại! Vui lòng liên hệ hỗ trợ.");
        } else {
          alert("Đăng ký thành công! Thông tin đã được gửi đến công ty!");
        }
        // Reset form on success
        setFormData({
          nameCustomer: "",
          emailCustomer: "",
          phoneCustomer: "",
          contentCustomer: "",
        });
      } else {
        alert(`Lỗi: ${result.message || "Không thể đăng ký"}!`);
      }
    } catch (err) {
      console.error('Submission error:', err);
      alert("Có lỗi xảy ra. Vui lòng thử lại!");
    }
  };

  return (
    <div className="register-form-container">
      <div className="register-form-background"></div>
      <div className="form-left">
        <h2>Đăng ký tư vấn</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              id="name"
              placeholder="Họ và tên"
              name="nameCustomer"
              value={formData.nameCustomer}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              id="phone"
              placeholder="Phone"
              name="phoneCustomer"
              value={formData.phoneCustomer}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              placeholder="Email"
              name="emailCustomer"
              value={formData.emailCustomer}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              id="content"
              placeholder="Nội dung"
              name="contentCustomer"
              value={formData.contentCustomer}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit">Đăng ký</button>
        </form>
      </div>
      <div className="form-right">
        <img src={ladyJustice} alt="Lady Justice" />
      </div>
    </div>
  );
};

export default RegisterForm;