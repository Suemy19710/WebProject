import React, {useEffect} from 'react'; 
import GioiThieu from '../../components/client/GioiThieu';
import Header from '../../components/client/Header';
import '../../styles/client/GioithieuYNghiaPage.scss';
import RegisterForm from '../../components/client/RegisterForm';   
import Footer from '../../components/client/Footer';

function GioithieuYNghiaPage () {
    useEffect(()=>{
        window.scrollTo(0,0);
    }, []); 
    return(
        <div className="gioiThieuPage-container">
            <div className="background"></div>
            <div className="content">
                <Header/>
                <GioiThieu/>
                <div className="registerForm">
                    <RegisterForm/>
                </div>
                <Footer/>
            </div>
            <div className="floating-buttons">
                <a
                href="https://zalo.me/0913899933"
                target="_blank"
                rel="noopener noreferrer"
                className="btn chat-btn"
                aria-label="Chat with us on Zalo"
                >
                <i className="fas fa-comment"></i>
                </a>
                <a
                href="tel:0913899933"
                className="btn call-btn"
                aria-label="Call us"
                >
                <i className="fas fa-phone"></i>
                </a>

            </div>
        </div>
    );
}; 
export default GioithieuYNghiaPage; 