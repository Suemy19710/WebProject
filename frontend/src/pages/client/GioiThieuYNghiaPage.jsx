import React from 'react'; 
import GioiThieu from '../../components/client/GioiThieu';
import Header from '../../components/client/Header';
import '../../styles/client/GioithieuYNghiaPage.scss';
import RegisterForm from '../../components/client/RegisterForm';   
import Footer from '../../components/client/Footer';

function GioithieuYNghiaPage () {
    return(
        <div className="gioiThieuPage-container">
            <div className="background"></div>
            <div className="content">
                <Header/>
                <GioiThieu/>
                <RegisterForm/>
                <Footer/>

            </div>
        </div>
    );
}; 
export default GioithieuYNghiaPage; 