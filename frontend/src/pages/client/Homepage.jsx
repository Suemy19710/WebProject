
import '../../styles/client/Homepage.scss'
import React, {useEffect} from 'react';
import Header from '../../components/client/Header'; 
import Introduction from '../../components/client/Introduction'; 
import IntroductionService from '../../components/client/IntroductionService';
import RegisterForm from '../../components/client/RegisterForm'; 
import IntroductionLawyers from '../../components/client/IntroductionLawyers';
import IntroductionPictures from '../../components/client/IntroductionPictures';
import IntroductionNews from '../../components/client/IntroductionNews'; 
import Footer from '../../components/client/Footer';

function Homepage() {
  useEffect(()=>{
          window.scrollTo(0,0);
      }, []); 
  return (
    <div className="homepage-container">
      <div className="background"></div>
      <div className="content">
        <Header />
        <Introduction/>
        <RegisterForm/>
        <IntroductionService />
        <div className="decoration"></div>
        <div className="decoration-circle-large"></div>
        <div className="decoration-circle-small"></div>
        <IntroductionPictures/>
        <IntroductionLawyers/>
        <IntroductionNews/>
        <Footer/>
      </div>
    </div>
  );
}

export default Homepage;