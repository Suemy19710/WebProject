import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/client/Footer.scss';
import logo from '../../assets/logo-3.png';

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
            <i className="fa-solid fa-location-dot"></i> Ho Chi Minh City
          </p>
          <p className="footer__info">
            <i className="fa-solid fa-phone"></i> 0912345666
          </p>
          <p className="footer__info">
            <i className="fa-solid fa-envelope"></i> luatkimngoc@gmail.com
          </p>
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