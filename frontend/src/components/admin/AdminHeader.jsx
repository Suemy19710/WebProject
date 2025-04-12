import React from 'react';
import '../../styles/admin/AdminHeader.scss';
import logo from '../../assets/logo.png';
import { NavLink } from "react-router-dom";

const AdminHeader = () => {
  console.log("AdminHeader is rendering");
  return (
    <div className="adminHeader-container">
      <div className="logo">
        <img src={logo} alt="Logo" />
        <span>Admin</span>
      </div>
      <ul className="menu">
        <li>
          <NavLink
            to="/admin/dashboard"
            className={({ isActive }) => (isActive ? "menu-item active" : "menu-item")}
          >
            <i className="fa-solid fa-house"></i>
            <span>Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admin/thong-bao"
            className={({ isActive }) => (isActive ? "menu-item active" : "menu-item")}
          >
            <i className="fa-solid fa-comment-dots"></i>
            <span>Thông báo</span>
          </NavLink>
        </li>
        {/* <li>
          <NavLink
            to="/admin/post-news"
            className={({ isActive }) => (isActive ? "menu-item active" : "menu-item")}
          >
            <i className="fa-solid fa-file"></i>
            <span>Tin Tức & Sự Kiện</span>
          </NavLink>
        </li> */}
        {/* <li>
          <NavLink
            to="/admin/tin-tuc"
            className={({ isActive }) => (isActive ? "menu-item active" : "menu-item")}
          >
            <i className="fa-solid fa-file"></i>
            <span>Tin Tức & Sự Kiện</span>
          </NavLink>
        </li> */}
         <li>
          <NavLink
            to="/admin/list-luat-su"
            className={({ isActive }) => (isActive ? "menu-item active" : "menu-item")}
          >
            <i className="fa-solid fa-file"></i>
            <span>List Luật Sư</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admin/luat-su"
            className={({ isActive }) => (isActive ? "menu-item active" : "menu-item")}
          >
            <i className="fa-solid fa-file"></i>
            <span>Luật Sư</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admin/list-tin-tuc"
            className={({ isActive }) => (isActive ? "menu-item active" : "menu-item")}
          >
            <i className="fa-solid fa-file"></i>
            <span>List Tin Tức</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admin/tin-tuc-&-su-kien"
            className={({ isActive }) => (isActive ? "menu-item active" : "menu-item")}
          >
            <i className="fa-solid fa-file"></i>
            <span>Tin Tức</span>
          </NavLink>
        </li>
        {/* <li>
          <NavLink
            to="/admin/xem-truoc"
            className={({ isActive }) => (isActive ? "menu-item active" : "menu-item")}
          >
            <i className="fa-solid fa-file-pdf"></i>
            <span>Xem trước</span>
          </NavLink>
        </li> */}
        <li>
          <NavLink
            to="/admin/so-huu-tri-tue"
            className={({ isActive }) => (isActive ? "menu-item active" : "menu-item")}
          >
            <i className="fa-solid fa-folder"></i>
            <span>Sở Hữu Trí Tuệ</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admin/dan-su"
            className={({ isActive }) => (isActive ? "menu-item active" : "menu-item")}
          >
            <i className="fa-solid fa-folder"></i>
            <span>Dân Sự</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admin/hinh-su"
            className={({ isActive }) => (isActive ? "menu-item active" : "menu-item")}
          >
            <i className="fa-solid fa-folder"></i>
            <span>Hình Sự</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admin/hanh-chinh"
            className={({ isActive }) => (isActive ? "menu-item active" : "menu-item")}
          >
            <i className="fa-solid fa-folder"></i>
            <span>Hành Chính</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AdminHeader;