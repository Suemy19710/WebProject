
import '../../styles/client/Homepage.scss'
import React from 'react';
import Header from '../../components/client/Header'; 
import Introduction from '../../components/client/Introduction'; 
import Services from '../../components/client/Service';
import RegisterForm from '../../components/client/RegisterForm'; 
function Homepage() {
  return (
    <div className="homepage-container">
      <div className="background"></div>
      <div className="content">
        <Header />
        <Introduction/>
        <RegisterForm/>
        <Services />
      </div>
    </div>
  );
}

export default Homepage;