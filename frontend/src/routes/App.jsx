import React from 'react';
import ReactDOM from 'react-dom'; 
import Slider from 'react-slick';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from '../pages/client/Homepage';
import GioithieuYNghiaPage from '../pages/client/GioiThieuYNghiaPage';
import LuatSuPage from '../pages/client/LuatSuPage';
import TinTucPage from '../pages/client/TinTucPage';  
import TinTucDetailPage from '../pages/client/TinTucDetailPage';  
import DanSu from '../pages/client/DanSuPage';  
import HinhSu from '../pages/client/HinhSuPage';  
import HanhChinh from '../pages/client/HanhChinhPage';  
import SoHuuTriTue from '../pages/client/SoHuuTriTuePage';  
import LuatSuDetailPage from '../pages/client/Lawyer/LuatSuDetailPage'; 
import DichVuPage from '../pages/client/DichVuPage'; 

import AdminNotificationCustomerPage from '../pages/admin/AdminNotificationCustomerPage';
import AdminDanSuPage from '../pages/admin/AdminDanSuPage';
import AdminHinhSuPage from '../pages/admin/AdminHinhSuPage';
import AdminHanhChinhPage from '../pages/admin/AdminHanhChinhPage';
import AdminSoHuuTriTuePage from '../pages/admin/AdminSoHuuTriTuePage';
import AdminPreview from '../pages/admin/AdminPreviewPage';
import AdminLogin from '../components/admin/AdminLogin';
import AdminDashboard from '../pages/admin/AdminDashboardPage';
import AdminNewsPage from '../pages/admin/AdminNewsPage';
import AdminTinTucPage from '../pages/admin/AdminTinTucPage'; 


function App() {
  return (
    <Router>
      <Routes>
        {/* Client Routes */}
        <Route path="/" element={<Homepage/>}/>
        <Route path="/gioi-thieu" element={<GioithieuYNghiaPage/>}/>
        <Route path="/luat-su" element={<LuatSuPage/>}/>
        <Route path="/tin-tuc" element={<TinTucPage/>}/>
        <Route path="/tin-tuc/:title" element={<TinTucDetailPage/>}/>
        <Route path="/dan-su" element={<DanSu/>}/>
        <Route path="/hinh-su" element={<HinhSu/>}/>
        <Route path="/hanh-chinh" element={<HanhChinh/>}/>
        <Route path="/so-huu-tri-tue" element={<SoHuuTriTue/>}/>
        <Route path="/gioi-thieu/luat-su-vu-duy-nam" element={<LuatSuDetailPage/>}/>
        <Route path="/dich-vu" element={<DichVuPage/>}/>




        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLogin/>}/>
        <Route path="/admin/dashboard" element={<AdminDashboard/>}/>
        <Route path="/admin/thong-bao" element={<AdminNotificationCustomerPage/>}/>
        <Route path ="/admin/dan-su" element={<AdminDanSuPage/>}/>
        <Route path ="/admin/hinh-su" element={<AdminHinhSuPage/>}/>
        <Route path ="/admin/hanh-chinh" element={<AdminHanhChinhPage/>}/>
        <Route path ="/admin/so-huu-tri-tue" element={<AdminSoHuuTriTuePage/>}/>
        <Route path="/admin/xem-truoc" element={<AdminPreview/>}/>
        <Route path="/admin/tin-tuc" element={<AdminNewsPage/>} /> 
        <Route path="/admin/tin-tuc-&-su-kien" element={<AdminTinTucPage/>}/>
        {/* <Route path='/admin/blog' element={<AdminBlog/>}/> */}

      </Routes>
    </Router>

  )
}
export default App;
