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
import SoHuuTriTue from '../pages/client/SoHuuTriTue';
import DanSu from '../pages/client/DanSu';
import HinhSu from '../pages/client/HinhSu';
import HanhChinh from '../pages/client/HanhChinh';
import LuatSuDetailPage from '../pages/client/LuatSuDetailPage'; 

import AdminPostNews from '../pages/admin/AdminPostNews';
import PreviewPostNews from '../components/admin/PreviewPostNews';
import AdminDashboard from '../pages/admin/AdminDashboard';




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
        <Route path="/so-huu-tri-tue" element={<SoHuuTriTue/>}/>
        <Route path="/dan-su" element={<DanSu/>}/>
        <Route path="/hinh-su" element={<HinhSu/>}/>
        <Route path="/hanh-chinh" element={<HanhChinh/>}/>


        {/* Admin Routes */}
        <Route path="/admin" element={<AdminDashboard/>}/>
        <Route path="/admin/post-news" element={<AdminPostNews/>}/>
        <Route path="/admin/preview" element={<PreviewPostNews/>}/>
        {/* <Route path='/admin/blog' element={<AdminBlog/>}/> */}

      </Routes>
    </Router>

  )
}
export default App;
