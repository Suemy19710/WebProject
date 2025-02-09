    import React from "react";
    import '../../styles/client/RegisterForm.scss';
    
    class RegisterForm extends React.Component {
      render() {
        return (
          // <div className="container-form">
          //   <div className="text">Đăng ký tư vấn</div>
          //   <form action="#">
          //     <div className="form-row">
          //       <div className="input-data">
          //         <input type="text" required />
          //         <div className="underline"></div>
          //         <label htmlFor="">First Name</label>
          //       </div>
          //       <div className="input-data">
          //         <input type="text" required />
          //         <div className="underline"></div>
          //         <label htmlFor="">Last Name</label>
          //       </div>
          //     </div>
    
          //     <div className="form-row">
          //       <div className="input-data">
          //         <input type="email" required />
          //         <div className="underline"></div>
          //         <label htmlFor="">Email Address</label>
          //       </div>
          //       <div className="input-data">
          //         <input type="text" required />
          //         <div className="underline"></div>
          //         <label htmlFor="">Website Name</label>
          //       </div>
          //     </div>
    
          //     <div className="form-row">
          //       <div className="input-data textarea">
          //         <textarea rows="8" required></textarea>
          //         <div className="underline"></div>
          //         <label htmlFor="">Write your message</label>
          //       </div>
          //     </div>
    
          //     <div className="form-row submit-btn">
          //       <div className="input-data">
          //         <input type="submit" value="Submit" />
          //       </div>
          //     </div>
          //   </form>
          // </div>
          <div className="register-form">
            <h2 className="form-title">Đăng ký tư vấn</h2>
            <form action="#">
                <div className="form-group">
                    <label>Họ và tên: </label>
                    <input type="text" placeholder="Nhập họ và tên" />
                </div>
                <div className="form-group-row">
                    <div className="col">
                        <label>Email: </label>
                        <input type="email" placeholder="Nhập email" />
                    </div>
                    <div className="col">
                        <label>Số điện thoại: </label>
                        <input type="text" placeholder="Nhập số điện thoại" />
                    </div>
                </div>
                <div className="form-group">
                    <label>Nội dung: </label>
                    <textarea placeholder="Nhập nội dung tư vấn"></textarea>
                    </div>
                <div className="footer">
                    <button type="submit" className="submit-btn">Đăng ký</button>
                </div>
            </form>
            </div>  
        );
      }
    }
    
    export default RegisterForm;
    

// export default RegisterForm;