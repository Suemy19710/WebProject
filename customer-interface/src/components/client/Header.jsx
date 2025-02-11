import React from 'react';
import '../../styles/client/Header.scss';
import {Link, NavLink, Navigate} from "react-router-dom";
import logo from '../../assets/logo.png'
 
class Header extends React.Component {
    state = {
        redirectToCardPage: false,
    };
    handleLogo = () => {
        this.setState({redirectToCardPage: true});
    };
    render() {
        if (this.state.redirectToCardPage) {
            return <Navigate to ="/" activeClassName="active" exact="true"/>;
        }
        return (
            <div className="topnav">
                <div class="topnav-left">
                    <img src={logo} alt="Logo" onClick={() => this.handleLogo()} />
                </div>
                <div class="topnav-right">
                    {/* <a class="active" href="#home">Trang chủ</a>
                    <a href="#gioi-thieu">Giới thiệu</a>
                    <a href="#doanh-nghiep">Doanh Nghiệp</a>
                    <a href="#tin-tuc">Tin tức & Sự Kiện </a>
                    <a href="#dich-vu">Dịch vụ </a>
                    <a href="#lien-he">Liên hệ</a> */}
                     <NavLink to="/" activeClassName="active" exact="true">
                        Trang chủ
                    </NavLink>
                    <NavLink to="/gioi-thieu" activeClassName="active">
                        Giới thiệu
                    </NavLink>  
                    <NavLink to="/dich-vu" activeClassName="active">
                        Dịch vụ
                    </NavLink>  
                    <NavLink to="/tin-tuc" activeClassName="active">
                        Tin tức & Sự kiện
                    </NavLink>  
                    <NavLink to="/lien-he" activeClassName="active">
                        Liên hệ
                    </NavLink>    
                    

                </div>
            </div>
        )
    }
}
 export default Header;