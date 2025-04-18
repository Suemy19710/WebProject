import React, {useEffect} from 'react'; 
import Header from '../../components/client/Header';
import DanSu from '../../components/client/DanSu';  
import '../../styles/client/DanSuPage.scss'; 
import RegisterForm from '../../components/client/RegisterForm';   
import Footer from '../../components/client/Footer';

const DanSuPage = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    }, []); 
    return(
        <div className="danSuPage-container">
            <div className="background"></div>
            <div className="content">
                <Header/>
                <div className="body">
                    <DanSu/>
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
    )
}
export default DanSuPage; 