import React from 'react';
import Slider from 'react-slick';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../pages/client/Home';
import TinTuc from '../pages/client/TinTucPage';
import GioiThieu from '../pages/client/GioiThieu';
import LienHe from '../pages/client/LienHe';
import DichVu from '../pages/client/DichVu';
import TinTucCardPage from '../pages/client/TinTucCardPage';

import AdminPostNews from '../pages/admin/AdminPostNews';
import PreviewPostNews from '../components/admin/PreviewPostNews';


function App() {
  return (
    <Router>
      <Routes>
        {/* Client Routes */}
        <Route path="/" element={<Home/>}/>
        <Route path="/gioi-thieu" element={<GioiThieu/>}/>
        <Route path="/tin-tuc" element={<TinTuc/>}/>
        <Route path="/tin-tuc/card" element={<TinTucCardPage/>}/>
        <Route path="/lien-he" element={<LienHe/>}/>
        <Route path="/dich-vu" element={<DichVu/>}/>

        {/* Admin Routes */}
        <Route path="/admin/post-news" element={<AdminPostNews/>}/>
        <Route path="/admin/preview" element={<PreviewPostNews/>}/>
      </Routes>
    </Router>

  )
}
export default App;
