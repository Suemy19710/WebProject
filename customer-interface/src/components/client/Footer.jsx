import React from 'react';
import logo from '../../assets/logo.png';
import '../../styles/client/Footer.scss';

const Footer = ()=>{
    return(
        <div className="footer-container">
            <div className="footer-right">
                <img src={logo}/>
                {/* <h4>Đại diện bởi: Luật sư </h4> */}
            </div>
            <div className="footer-middle">
                <h2>CÔNG TY LUẬT KIM NGỌC</h2>
                <h5>Địa chỉ: luatkimngocluatkimngoc</h5>
                <h5>Điện thoại: 091234567 - Email:luatsuKimNgoc@gmail.com</h5> 
                <h5>Website: luatkimngocluatkimngoc</h5>
            </div>
            <div className="footer-left">
                <h2>LIÊN KẾT VỚI CHÚNG TÔI</h2>
                <div className="social-links">
                    <a href="#" className="social-icon facebook">Facebook</a>
                    <a href="#" className="social-icon linkedin">LinkedIn</a>
                    <a href="#" className="social-icon youtube">YouTube</a>
                </div>
            </div>
        </div>
    )
};
export default Footer;
