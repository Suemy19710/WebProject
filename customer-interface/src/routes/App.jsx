import React from 'react';
import Slider from 'react-slick';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../pages/client/Home';
import GioiThieu from '../pages/client/GioiThieuPage';
import LienHe from '../pages/client/LienHe';
import DichVu from '../pages/client/DichVu';
import TinTucCardPage from '../pages/client/TinTucCardPage';
import Blog from '../pages/client/Blog';
// import PostDetail from '../components/client/PostDetail';
// import SmallPost from '../components/client/SmallPost';
// import ClientBlog from '../pages/client/ClientBlog';

import AdminPostNews from '../pages/admin/AdminPostNews';
import PreviewPostNews from '../components/admin/PreviewPostNews';
// import AdminBlog from '../pages/admin/AdminBlog';


function App() {
  return (
    <Router>
      <Routes>
        {/* Client Routes */}
        <Route path="/" element={<Home/>}/>
        <Route path="/gioi-thieu" element={<GioiThieu/>}/>
        <Route path="/tin-tuc" element={<Blog/>}/>
        <Route path="/tin-tuc/:title" element={<TinTucCardPage/>}/>
        <Route path="/lien-he" element={<LienHe/>}/>
        <Route path="/dich-vu" element={<DichVu/>}/>

        {/* Admin Routes */}
        <Route path="/admin/post-news" element={<AdminPostNews/>}/>
        <Route path="/admin/preview" element={<PreviewPostNews/>}/>
        {/* <Route path='/admin/blog' element={<AdminBlog/>}/> */}

      </Routes>
    </Router>

  )
}
export default App;
