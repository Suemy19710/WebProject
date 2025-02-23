import React from 'react';
import Slider from 'react-slick';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../pages/client/Home';
import GioiThieuYNghia from '../pages/client/GioiThieuYNghiaPage';
import GioiThieuLuatSu from '../pages/client/GioiThieuLuatSuPage';
import LienHe from '../pages/client/LienHe';
import DichVu from '../pages/client/DichVu';
import TinTucCardPage from '../pages/client/TinTucCardPage';
import Blog from '../pages/client/Blog';
import SoHuuTriTuePage from '../pages/client/SoHuuTriTuePage';
import DanSuPage from '../pages/client/DanSuPage';
import HinhSuPage from '../pages/client/HinhSuPage';
import HanhChinhPage from '../pages/client/HanhChinhPage';
import LuatSuDetailPage from '../pages/client/LuatSuDetailPage'; 

import AdminPostNews from '../pages/admin/AdminPostNews';
import PreviewPostNews from '../components/admin/PreviewPostNews';
import AdminNotificationCustomerPage from '../pages/admin/AdminNotificationCustomerPage';
import AdminDanSuPage from '../pages/admin/AdminDanSuPage';
import AdminHinhSuPage from '../pages/admin/AdminHinhSuPage';
import AdminHanhChinhPage from '../pages/admin/AdminHanhChinhPage';
import AdminSoHuuTriTuePage from '../pages/admin/AdminSoHuuTriTuePage';
import AdminPreview from '../pages/admin/AdminPreviewPage';
// import AdminDashboard from '../components/admin/AdminDashboard';



function App() {
  return (
    <Router>
      <Routes>
        {/* Client Routes */}
        <Route path="/" element={<Home/>}/>
        <Route path="/gioi-thieu/y-nghia" element={<GioiThieuYNghia/>}/>
        <Route path="/gioi-thieu/luat-su" element={<GioiThieuLuatSu/>}/>
        <Route path="/gioi-thieu/luat-su/detail" element={<LuatSuDetailPage/>}/>
        <Route path="/tin-tuc" element={<Blog/>}/>
        <Route path="/tin-tuc/:title" element={<TinTucCardPage/>}/>
        <Route path="/lien-he" element={<LienHe/>}/>
        <Route path="/dich-vu" element={<DichVu/>}/>
        <Route path="/so-huu-tri-tue" element={<SoHuuTriTuePage/>}/>
        <Route path="/dan-su" element={<DanSuPage/>}/>
        <Route path="/hinh-su" element={<HinhSuPage/>}/>
        <Route path="/hanh-chinh" element={<HanhChinhPage/>}/>


        {/* Admin Routes */}
        <Route path="/admin/thong-bao" element={<AdminNotificationCustomerPage/>}/>
        <Route path ="/admin/dan-su" element={<AdminDanSuPage/>}/>
        <Route path ="/admin/hinh-su" element={<AdminHinhSuPage/>}/>
        <Route path ="/admin/hanh-chinh" element={<AdminHanhChinhPage/>}/>
        <Route path ="/admin/so-huu-tri-tue" element={<AdminSoHuuTriTuePage/>}/>
        <Route path="/admin/post-news" element={<AdminPostNews/>}/>
        <Route path="/admin/preview" element={<PreviewPostNews/>}/>
        <Route path="/admin/xem-truoc" element={<AdminPreview/>}/>
        {/* <Route path='/admin/blog' element={<AdminBlog/>}/> */}

      </Routes>
    </Router>

  )
}
export default App;
