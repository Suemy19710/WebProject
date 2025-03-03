import React, {useState} from 'react';
import '../../styles/client/Header.scss';
import {Link, NavLink, Navigate, useNavigate} from "react-router-dom";
import logo from '../../assets/logo.png';
 
const Header = () =>  {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const navigate = useNavigate();

    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const toggleSidebar = () => { 
        setSidebarOpen(!isSidebarOpen);
    }
    const handleLogo = () => {
        navigate('/');
    };
    // console.log("DropDownBool:", dropdownOpen);
    const toggleDropDown = () => {
        setDropdownOpen(prevState => !prevState);
    };
    // const closeDropDown = () =>{
    //     setDropdownOpen(false);
    // };
    // render() {
    //     if (this.state.redirectToCardPage) {
    //         return <Navigate to ="/" activeClassName="active" exact="true"/>;
    //     }
        return (
            <div className="topnav">
                {/* Hamburger Menu Button */}
                {/* <div className={`hamburger-menu ${isSidebarOpen ? 'active' : ''}`} onClick={toggleSidebar}>
                    &#9776;
                </div> */}
                <div class="topnav-left">
                    <img src={logo} alt="Logo" onClick={handleLogo} />
                </div>
                <div class="topnav-right">
                    {/* <div className={`sidebar ${isSidebarOpen ? 'active' : ''}`}> */}
                        <NavLink to="/" activeClassName="active" exact="true">
                            Trang chủ
                        </NavLink>
                        <div className="gioithieu">
                            <button className="dropbtn" onClick={toggleDropDown}>Giới thiệu
                            <i class="fa fa-caret-down"></i>
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
                        <NavLink to="/lien-he" activeClassName="active">
                            Liên hệ
                        </NavLink>  
                    </div>
                </div>
            //  </div>
        )
    }

 export default Header;