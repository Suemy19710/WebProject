import React from 'react'; 
import '../../styles/client/RegisterForm.scss'; 
import ladyJustice from '../../assets/feature/3.png'; 

const RegisterForm = () => {
    return(
        <div className="register-form-container">
            <div className="register-form-background"></div>
            <div className="form-left">
                <h2>Đăng ký tư vấn</h2>
                <form>
                    <div className="form-group">
                        {/* <label htmlFor="name">Họ và tên</label> */}
                        <input type="text" id="name" placeholder="Họ và tên" />
                    </div>
                    <div className="form-group">
                        {/* <label htmlFor="phone">Phone</label> */}
                        <input type="tel" id="phone" placeholder="Phone" />
                    </div>
                    <div className="form-group">
                        {/* <label htmlFor="email">Email</label> */}
                        <input type="email" id="email" placeholder="Email" />
                    </div>
                    <div className="form-group">
                        {/* <label htmlFor="content">Nội dung</label> */}
                        <textarea id="content" placeholder="Nội dung"></textarea>
                    </div>
                    <button type="submit">Đăng ký</button>
                </form>
            </div>
            <div className="form-right">
                <img src={ladyJustice} alt="Lady Justice" />
            </div>
        </div>
    )
}
export default RegisterForm; 