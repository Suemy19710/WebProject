import React, {useEffect} from "react";
import Slider from 'react-slick';
import Header from '../../components/client/Header';
import TopNavigation from '../../components/client/TopNavigation';
import ResponsiveCarousel from '../../components/client/ResponsiveCarousel';
import AboutCompany from '../../components/client/AboutCompany';
// import OfferService from '../../components/client/OfferService';
import RegisterForm from '../../components/client/RegisterForm';
import Footer from '../../components/client/Footer';
import DoiNguLuatSu from '../../components/client/DoiNguLuatSu';
import Service from '../../components/client/Service';
import News from '../../components/client/News';

function Home() {
    useEffect(() => {
              window.scrollTo(0,0);
          });
  return (
    <>
      {/* <TopNavigation/> */}
      <Header/>
      {/* <ResponsiveCarousel/> */}
      <AboutCompany/>
      <Service/>
      <DoiNguLuatSu/>
      <News/>
      <RegisterForm/>
      <Footer/>
    </>
  );
}
export default Home;
