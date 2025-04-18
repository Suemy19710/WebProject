import React, {useEffect} from 'react'; 
import Header from '../../components/client/Header';
import HanhChinh from '../../components/client/HanhChinh';  
import '../../styles/client/DanSuPage.scss'; 
import RegisterForm from '../../components/client/RegisterForm';   
import Footer from '../../components/client/Footer';

const HanhChinhPage = () => {
    useEffect(()=>{
            window.scrollTo(0,0);
        }, []); 
    return(
        <div className="danSuPage-container">
            <div className="background"></div>
            <div className="content">
                <Header/>
                <HanhChinh/>
                <RegisterForm/>
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
    )
}
export default HanhChinhPage; 