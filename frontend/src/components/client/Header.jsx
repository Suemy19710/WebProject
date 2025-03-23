import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import '../../styles/client/Header.scss';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Trigger after scrolling 50px
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav className="header-nav">
        <ul>
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
            <NavLink to="/luat-su" activeClassName="active">
              Luật sư
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
      </nav>
    </header>
  );
};

export default Header;