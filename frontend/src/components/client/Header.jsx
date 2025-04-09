import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo-3.png';
import '../../styles/client/Header.scss';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-logo">
          <img src={logo} alt="Logo" />
        </div>
        
        <button className="menu-toggle" onClick={toggleSidebar}>
          <i className={`fa ${isSidebarOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
        
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
              <NavLink to="/dich-vu" activeClassName="active">
                Dịch vụ
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

      {/* Sidebar for mobile */}
      <div className={`sidebar ${isSidebarOpen ? 'active' : ''}`}>
        <div className="sidebar-header">
          <button className="close-btn" onClick={toggleSidebar}>
            <i className="fa fa-times"></i>
          </button>
        </div>
        <ul className="sidebar-menu">
          <li>
            <NavLink to="/" onClick={toggleSidebar}>
              <i className="fa fa-home"></i> Trang chủ
            </NavLink>
          </li>
          <li>
            <NavLink to="/gioi-thieu" onClick={toggleSidebar}>
              <i className="fa fa-info-circle"></i> Giới thiệu
            </NavLink>
          </li>
          <li>
            <NavLink to="/luat-su" onClick={toggleSidebar}>
              <i className="fa fa-user"></i> Luật sư
            </NavLink>
          </li>
          <li>
            <NavLink to="/dich-vu" onClick={toggleSidebar}>
              <i className="fa fa-briefcase"></i> Dịch vụ
            </NavLink>
          </li>
          <li>
            <NavLink to="/tin-tuc" onClick={toggleSidebar}>
            <i class="fa-solid fa-newspaper"></i> Tin tức & Sự kiện
            </NavLink>
          </li>
          <li>
            <NavLink to="/dan-su" onClick={toggleSidebar}>
              <i className="fa fa-users"></i> Dân sự
            </NavLink>
          </li>
          <li>
            <NavLink to="/hinh-su" onClick={toggleSidebar}>
              <i className="fa fa-gavel"></i> Hình sự
            </NavLink>
          </li>
          <li>
            <NavLink to="/hanh-chinh" onClick={toggleSidebar}>
              <i className="fa fa-university"></i> Hành chính
            </NavLink>
          </li>
          <li>
            <NavLink to="/so-huu-tri-tue" onClick={toggleSidebar}>
            <i class="fa-solid fa-lightbulb"></i> Sở hữu trí tuệ
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Overlay for dimming background */}
      <div
        className={`overlay ${isSidebarOpen ? 'active' : ''}`}
        onClick={toggleSidebar}
      ></div>
    </>
  );
};

export default Header;