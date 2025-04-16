
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
import TopBar from '../../components/client/TopBar'; 
import ReponsiveCarousel from '../../components/client/ReponsiveCarousel'; 
function Homepage() {
  useEffect(()=>{
          window.scrollTo(0,0);
      }, []); 
  return (
    <div className="homepage-container">
      <div className="background"></div>
      <div className="content">
        <TopBar/>
        <Header />
        <ReponsiveCarousel/>
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
      <div className="floating-buttons">
        <a
          href="https://zalo.me/0617746736"
          target="_blank"
          rel="noopener noreferrer"
          className="btn chat-btn"
          aria-label="Chat with us on Zalo"
        >
          <i className="fas fa-comment"></i>
        </a>
        <a
          href="tel:+31617746736"
          className="btn call-btn"
          aria-label="Call us"
        >
          <i className="fas fa-phone"></i>
        </a>

      </div>
    </div>
  );
}

export default Homepage;