import React from 'react';
import '../styles/TopNavigation.scss';

import logo from '../assets/logo.png'
 
class TopNavigation extends React.Component {
    render() {
        return (
            <div className="topnav">
                <div class="topnav-left">
                    <img src={logo} alt="Logo"/>
                </div>
                <div class="topnav-right">
                    <a class="active" href="#home">Trang chủ</a>
                    <a href="#news">Giới thiệu</a>
                    <a href="#contact">Doanh Nghiệp</a>
                    <a href="#about">Sở hữu trí tuệ</a>
                    <a href="#news">Dân sự</a>
                    <a href="#contact">Hình sự</a>
                    <a href="#about">Hành Chính</a>
                </div>
            </div>
        )
    }
}
 export default TopNavigation;