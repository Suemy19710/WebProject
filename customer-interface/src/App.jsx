import React from 'react';
import Slider from 'react-slick';
import Header from './components/Header';
import TopNavigation from './components/TopNavigation';
import ResponsiveCarousel from './components/ResponsiveCarousel';

// import { BrowserRouter } from 'react-router-dom';


import './styles/Header.scss';
import './styles/TopNavigation.scss';
import './styles/ResponsiveCarousel.scss';

function App() {
  return (
    <>
      <Header/>
      <TopNavigation/>
      <ResponsiveCarousel/>
    </>
  )
}
export default App;
