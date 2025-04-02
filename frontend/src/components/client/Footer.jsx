import React from 'react';
import {NavLink} from 'react-router-dom'; 
import '../../styles/client/Footer.scss';
import logo from '../../assets/logo.png'; 
// import footer from '../../assets/footer.jpg';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__background"></div>
      <div className="footer__container">
        <div className="footer__left">
          <div className="footer__logo">
            <img src={logo} alt="Logo Icon" />
            <h3>Công Ty Luật Kim Ngọc</h3>
          </div>
          <p className="footer__description">Pháp lý vững chắc - Cùng bạn vươn lên</p>
          <p className="footer__info">
            <i className="fa-solid fa-location-dot"></i> 2100 W 5th Oxford Ave #127, Park Hills, MO 48304
          </p>
          <p className="footer__info">
            <i className="fa-solid fa-phone"></i> 089 037 466803
          </p>
          <p className="footer__info">
            <i className="fa-solid fa-envelope"></i> scrumbledgg@gmail.com
          </p>
        </div>
        <div className="footer__right">
          <h3>Liên hệ chúng tôi</h3>
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