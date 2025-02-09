import React from "react";
import Slider from 'react-slick';
import Header from '../../components/client/Header';
import TopNavigation from '../../components/client/TopNavigation';
import ResponsiveCarousel from '../../components/client/ResponsiveCarousel';
import AboutCompany from '../../components/client/AboutCompany';
import OfferService from '../../components/client/OfferService';
import News from '../../components/client/News';
import RegisterForm from '../../components/client/RegisterForm';
import Footer from '../../components/client/Footer';

// import { BrowserRouter } from 'react-router-dom';
// import '../styles/client/Header.scss';
// import '../styles/client/TopNavigation.scss';
// import '../styles/client/ResponsiveCarousel.scss';
// import '../styles/client/AboutCompany.scss';
// import'../styles/client/OfferService.scss';
// import '../styles/client/News.scss';
// import '../styles/client/RegisterForm.scss';


function Home() {
  return (
    <>
      <TopNavigation/>
      <Header/>
      <ResponsiveCarousel/>
      <AboutCompany/>
      <OfferService/>
      <News/>
      <RegisterForm/>
      <Footer/>
    </>
  );
}
export default Home;
