import React, {useEffect} from 'react';
import ReactDOM from 'react-dom'; 
import Slider from 'react-slick';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { verifyToken } from '../utils/api';
import Homepage from '../pages/client/Homepage';
import GioithieuYNghiaPage from '../pages/client/GioiThieuYNghiaPage';
import LuatSuPage from '../pages/client/LuatSuPage';
import TinTucPage from '../pages/client/TinTucPage';  
import TinTucDetailPage from '../pages/client/TinTucDetailPage';  
import DanSu from '../pages/client/DanSuPage';  
import HinhSu from '../pages/client/HinhSuPage';  
import HanhChinh from '../pages/client/HanhChinhPage';  
import SoHuuTriTue from '../pages/client/SoHuuTriTuePage';  
// import LuatSuDetailPage from '../pages/client/Lawyer/LuatSuDetailPage'; 
import DichVuPage from '../pages/client/DichVuPage'; 
import LuatSuDetailPage from '../pages/client/LuatSuDetailPage'; 

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
import AdminLuatSuPage from '../pages/admin/AdminLuatSuPage'; 
import AdminListLuatSuPage from '../pages/admin/AdminListLuatSuPage'; 
import AdminEditLuatSuPage from '../pages/admin/AdminEditLuatSuPage'; 
import AdminListTinTucPage from '../pages/admin/AdminListTinTucPage';
import AdminEditTinTucPage from '../pages/admin/AdminEditTinTucPage';
import PrivateRoute from '../components/admin/PrivateRoute'; 

function App() {
  useEffect(() => {
    // Check token validity when app loads
    const checkAuthStatus = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          await verifyToken();
          // Token is valid
        } catch (error) {
          // Token is invalid or expired
          localStorage.removeItem('token');
          // If on a protected route, this will redirect to login
          if (window.location.pathname.startsWith('/admin/')) {
            window.location.href = '/admin';
          }
        }
      }
    };
    
    checkAuthStatus();
  }, []);
  return (
    <Router>
      <Routes>
        {/* Client Routes */}
        <Route path="/" element={<Homepage/>}/>
        <Route path="/gioi-thieu" element={<GioithieuYNghiaPage/>}/>
        <Route path="/luat-su" element={<LuatSuPage/>}/>
        <Route path="/luat-su/:slug" element={<LuatSuDetailPage/>}/>
        <Route path="/tin-tuc" element={<TinTucPage/>}/>
        <Route path="/tin-tuc/:title" element={<TinTucDetailPage/>}/>
        <Route path="/dan-su" element={<DanSu/>}/>
        <Route path="/hinh-su" element={<HinhSu/>}/>
        <Route path="/hanh-chinh" element={<HanhChinh/>}/>
        <Route path="/so-huu-tri-tue" element={<SoHuuTriTue/>}/>
        {/* <Route path="/gioi-thieu/luat-su-vu-duy-nam" element={<LuatSuDetailPage/>}/> */}
        <Route path="/dich-vu" element={<DichVuPage/>}/>




        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLogin/>}/>
        <Route path="/admin/dashboard" element={<PrivateRoute><AdminDashboard /></PrivateRoute>} />
        <Route path="/admin/thong-bao" element={<PrivateRoute><AdminNotificationCustomerPage /></PrivateRoute>} />
        <Route path="/admin/dan-su" element={<PrivateRoute><AdminDanSuPage /></PrivateRoute>} />
        <Route path="/admin/hinh-su" element={<PrivateRoute><AdminHinhSuPage /></PrivateRoute>} />
        <Route path="/admin/hanh-chinh" element={<PrivateRoute><AdminHanhChinhPage /></PrivateRoute>} />
        <Route path="/admin/so-huu-tri-tue" element={<PrivateRoute><AdminSoHuuTriTuePage /></PrivateRoute>} />
        <Route path="/admin/xem-truoc" element={<PrivateRoute><AdminPreview /></PrivateRoute>} />
        <Route path="/admin/tin-tuc" element={<PrivateRoute><AdminNewsPage /></PrivateRoute>} />
        <Route path="/admin/luat-su" element={<PrivateRoute><AdminLuatSuPage /></PrivateRoute>} />
        <Route path="/admin/list-luat-su" element={<PrivateRoute><AdminListLuatSuPage /></PrivateRoute>} />
        <Route path="/admin/edit-luat-su/:id" element={<PrivateRoute><AdminEditLuatSuPage /></PrivateRoute>} />
        <Route path="/admin/list-tin-tuc" element={<PrivateRoute><AdminListTinTucPage /></PrivateRoute>} />
        <Route path="/admin/edit-tin-tuc/:id" element={<PrivateRoute><AdminEditTinTucPage /></PrivateRoute>} />
        <Route path="/admin/tin-tuc-&-su-kien" element={<PrivateRoute><AdminTinTucPage /></PrivateRoute>} />
        
        {/* <Route path='/admin/blog' element={<AdminBlog/>}/> */}

      </Routes>
    </Router>

  )
}
export default App;
