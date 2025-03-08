import React, { useState } from 'react';
import '../../styles/client/Header.scss';
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from '../../assets/logo.png';

const Header = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const navigate = useNavigate();

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const handleLogo = () => {
        navigate('/');
    };

    const toggleDropDown = () => {
        setDropdownOpen(prevState => !prevState);
    };

    return (
        <>
            <div className="topnav">
                <div className="topnav-left">
                    <img src={logo} alt="Logo" onClick={handleLogo} />
                </div>
                <button className="menu-toggle" onClick={toggleSidebar}>
                    <i className={`fa ${isSidebarOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </button>
                <div className={`topnav-right ${isSidebarOpen ? 'active' : ''}`}>
                    <NavLink to="/" activeClassName="active" exact="true">
                        Trang chủ
                    </NavLink>
                    <div className="gioithieu">
                        <button className="dropbtn" onClick={toggleDropDown}>
                            Giới thiệu
                            <i className="fa fa-caret-down"></i>
                        </button>
                        {dropdownOpen && (
                            <div className="dropdown-content">
                                <NavLink to="/gioi-thieu/luat-su" activeClassName="active">
                                    Đội Ngũ Luật sư
                                </NavLink>
                                <NavLink to="/gioi-thieu/y-nghia" activeClassName="active">
                                    Về Công ty
                                </NavLink>
                            </div>
                        )}
                    </div>
                    <NavLink to="/dich-vu" activeClassName="active">
                        Dịch vụ
                    </NavLink>
                    <NavLink to="/tin-tuc" activeClassName="active">
                        Tin tức & Sự kiện
                    </NavLink>
                    <NavLink to="/so-huu-tri-tue" activeClassName="active">
                        Sở hữu trí tuệ
                    </NavLink>
                    <NavLink to="/dan-su" activeClassName="active">
                        Dân sự
                    </NavLink>
                    <NavLink to="/hinh-su" activeClassName="active">
                        Hình sự
                    </NavLink>
                    <NavLink to="/hanh-chinh" activeClassName="active">
                        Hành chính
                    </NavLink>
                    {/* <NavLink to="/lien-he" activeClassName="active">
                        Liên hệ
                    </NavLink> */}
                </div>
            </div>

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
                    <li className="gioithieu">
                        <button className="dropbtn" onClick={toggleDropDown}>
                            <i className="fa fa-info-circle"></i> Giới thiệu
                            <i className="fa fa-caret-down"></i>
                        </button>
                        {dropdownOpen && (
                            <div className="dropdown-content">
                                <NavLink to="/gioi-thieu/luat-su" onClick={toggleSidebar}>
                                    Đội Ngũ Luật sư
                                </NavLink>
                                <NavLink to="/gioi-thieu/y-nghia" onClick={toggleSidebar}>
                                    Về Công ty
                                </NavLink>
                            </div>
                        )}
                    </li>
                    <li>
                        <NavLink to="/dich-vu" onClick={toggleSidebar}>
                            <i className="fa fa-briefcase"></i> Dịch vụ
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/tin-tuc" onClick={toggleSidebar}>
                            <i className="fa fa-newspaper-o"></i> Tin tức & Sự kiện
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/so-huu-tri-tue" onClick={toggleSidebar}>
                            <i className="fa fa-lightbulb-o"></i> Sở hữu trí tuệ
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
                    {/* <li>
                        <NavLink to="/lien-he" onClick={toggleSidebar}>
                            <i className="fa fa-envelope"></i> Liên hệ
                        </NavLink>
                    </li> */}
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


