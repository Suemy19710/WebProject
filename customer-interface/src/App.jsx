import React from 'react';
import Slider from 'react-slick';
import Header from './components/Header';
import TopNavigation from './components/TopNavigation';
import ResponsiveCarousel from './components/ResponsiveCarousel';
import AboutCompany from './components/AboutCompany';
import OfferService from './components/OfferService';
// import { BrowserRouter } from 'react-router-dom';
import './styles/Header.scss';
import './styles/TopNavigation.scss';
import './styles/ResponsiveCarousel.scss';
import './styles/AboutCompany.scss';
import'./styles/OfferService.scss';

function App() {
  return (
    <>
      <Header/>
      <TopNavigation/>
      <ResponsiveCarousel/>
      <AboutCompany/>
      <OfferService/>
    </>
  )
}
export default App;
