import React from 'react';
import logo from '../../assets/logo.png';
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"/>;
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"/>;
import '../../styles/client/Footer.scss';

const Footer = ()=>{
    return(
        <div className="footer-container">
            <div className="footer-right">
                <img src={logo}/>
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
    );
};
export default Footer;
