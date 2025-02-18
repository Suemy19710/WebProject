import React, {useEffect, useState} from 'react';
import '../../styles/admin/AdminHeader.scss';
import logo from '../../assets/logo.png';
import {Link, NavLink, Navigate} from "react-router-dom";

const AdminHeader = () => {
    return(
      <div className="sidebar">
        <div className="logo">
          <img src={logo}/>
          <span>Admin</span>
        </div>
        <ul className="menu">
          <NavLink to ="/admin/dashboard" activeClassName="active">
            <li className="menu-item">
                <i class="fa-solid fa-house"></i>            
                <span>Dashboard</span>
            </li>
          </NavLink>
          <NavLink to ="/admin/thong-bao" activeClassName="active">
          <li className="menu-item">
            <i class="fa-solid fa-comment-dots"></i>            
            <span>Thông báo</span>
          </li>
          </NavLink>
          <NavLink to ="/admin/post-news" activeClassName="active">
            <li className="menu-item">
              <i class="fa-solid fa-file"></i>            
              <span>Tin Tức & Sự Kiện </span>
            </li>
          </NavLink>
          <li className="menu-item">
            <i class="fa-solid fa-folder"></i>            
            <span>Sở Hữu Trí Tuệ</span>
          </li>
          <NavLink to ="/admin/dan-su" activeClassName="active">
          <li className="menu-item">
            <i class="fa-solid fa-folder"></i>            
            <span>Dân Sự</span>
          </li>
          </NavLink>
          <NavLink to ="/admin/hinh-su" activeClassName="active">
          <li className="menu-item">
            <i class="fa-solid fa-folder"></i>            
            <span>Hình Sự</span>
          </li>
          </NavLink>
          <li className="menu-item">
            <i class="fa-solid fa-folder"></i>            
            <span>Hành Chính</span>
          </li>
        </ul>
    </div>
  
    )
}
export default AdminHeader;