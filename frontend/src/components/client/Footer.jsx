import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/client/Footer.scss';
import logo from '../../assets/logo-3.png';
import zalo from '../../assets/Zalo-Logo.png'; 
import facebook from '../../assets/facebook-logo.png'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__background"></div>
      <div className="footer__container">
        <div className="footer__left">
          <div className="footer__logo">
            <img src={logo} alt="Công Ty Luật Kim Ngọc Logo" />
            <h3>Công Ty Luật Kim Ngọc</h3>
          </div>
          <p className="footer__description">Pháp lý vững chắc - Cuộc sống bình yên</p>
          <p className="footer__info">
            <i className="fa-solid fa-location-dot"></i> 244/31/14 ht17, khu phố 2 (nay là khu phố 36), phường Hiệp Thành, Quận 12, Thành phố Hồ Chí Minh, Việt Nam
          </p>
          <p className="footer__info">
            <i className="fa-solid fa-phone"></i>
            <a href="tel:+0919146222">0919.146.222</a>
          </p>
          <p className="footer__info">
            <i className="fa-solid fa-envelope"></i>
            <a href="mailto:luatkimngoc@gmail.com">luatkimngoc@gmail.com</a>
          </p>
          <div className="footer__social">
            <a 
              href="https://www.facebook.com/your-facebook-page" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Follow us on Facebook"
            >
              <img src={facebook} alt="Facebook" className="social-icon" />
            </a>
            <a 
              href="https://zalo.me/your-zalo-id" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Contact us on Zalo"
            >
              <img src={zalo} alt="Zalo" className="social-icon zalo" />
            </a>
          </div>
        </div>
        <div className="footer__middle">
          <h3>Dịch Vụ</h3>
          <ul className="footer__links">
            <li>
              <NavLink to="/dich-vu">Tư vấn pháp lý</NavLink>
            </li>
            <li>
              <NavLink to="/dich-vu">Tranh tụng tại tòa án</NavLink>
            </li>
            <li>
              <NavLink to="/dich-vu">Soạn thảo hợp đồng</NavLink>
            </li>
            <li>
              <NavLink to="/dich-vu">Pháp lý doanh nghiệp</NavLink>
            </li>
            <li>
              <NavLink to="/dich-vu">Thủ tục hành chính</NavLink>
            </li>
            <li>
              <NavLink to="/dich-vu">Luật sư riêng</NavLink>
            </li>
            <li>
              <NavLink to="/dich-vu">Đại diện pháp lý</NavLink>
            </li>
          </ul>
        </div>
        <div className="footer__right">
          <h3>Liên Hệ Chúng Tôi</h3>
          <ul className="footer__links">
            <li>
              <NavLink to="/" activeClassName="active">
                Trang chủ
              </NavLink>
            </li>
            <li>
              <NavLink to="/gioi-thieu" activeClassName="active">
                Giới thiệu
              </NavLink>
            </li>
            <li>
              <NavLink to="/tin-tuc" activeClassName="active">
                Tin tức & Sự kiện
              </NavLink>
            </li>
            <li>
              <NavLink to="/dan-su" activeClassName="active">
                Dân sự
              </NavLink>
            </li>
            <li>
              <NavLink to="/hinh-su" activeClassName="active">
                Hình sự
              </NavLink>
            </li>
            <li>
              <NavLink to="/hanh-chinh" activeClassName="active">
                Hành chính
              </NavLink>
            </li>
            <li>
              <NavLink to="/so-huu-tri-tue" activeClassName="active">
                Sở hữu trí tuệ
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <p>@LuatSuKimNgoc.CopyRight</p>
      </div>
    </footer>
  );
};

export default Footer;