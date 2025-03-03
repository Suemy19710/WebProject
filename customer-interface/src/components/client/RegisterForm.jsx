    import React, {useState, useEffect} from "react";
    import '../../styles/client/RegisterForm.scss';
    
    const RegisterForm = () => {
        const [formData, setFormData] = useState({
            nameCustomer: "", 
            emailCustomer: "", 
            phoneCustomer: "", 
            contentCustomer: "",
        });
        const handleChange = (e) => {
            const {name, value} = e.target;
            setFormData((prevData) => ({
                ...prevData, 
                [name]: value, 
            }));
        };
        const handleSubmit = async(e) => {
             e.preventDefault();
             try{
                const response = await fetch('http://localhost:5000/api/customers',  {
                    method: 'POST', 
                    headers: {'Content-Type' : 'application/json'}, 
                    body: JSON.stringify(formData), 
                });
                const result = await response.json();
                if(response.ok) {
                    alert("Đăng ký thành công!");
                } else {
                    alert(`Lỗi: ${result.message || "Không thể đăng ký"}!`);
                  }
             } catch(err) {
                alert("Có lỗi xảy ra. Vui lòng thử lại!");
             }

        }
        return (
          <div className="register-form">
            <div className="register-form-device">
            <h2 className="form-title">Đăng ký tư vấn</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Họ và tên: </label>
                    <input type="text" 
                    placeholder="Nhập họ và tên"
                    name="nameCustomer"
                    value={formData.nameCustomer}
                    onChange={handleChange}
                    required
                     />
                </div>
                <div className="form-group-row">
                    <div className="col">
                        <label>Email: </label>
                        <input type="email" 
                        placeholder="Nhập email" 
                        name="emailCustomer"
                        value={formData.emailCustomer}
                        onChange={handleChange}
                        required
                        />
                    </div>
                    <div className="col">
                        <label>Số điện thoại: </label>
                        <input type="text" 
                        placeholder="Nhập số điện thoại" 
                        name="phoneCustomer"
                        value={formData.phoneCustomer}
                        onChange={handleChange}
                        required
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label>Nội dung: </label>
                    <textarea 
                    placeholder="Nhập nội dung tư vấn"
                    name="contentCustomer"
                    value={formData.contentCustomer}
                    onChange={handleChange}
                    required
                    ></textarea>
                    </div>
                <div className="footer">
                    <button type="submit" className="submit-btn">Đăng ký</button>
                </div>
            </form>
            </div>
           
            </div>  
        );
      }
    
    export default RegisterForm;
    

// export default RegisterForm;