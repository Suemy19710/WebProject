import React, {useEffect} from 'react'; 
import Header from '../../components/client/Header';
import HinhSu from '../../components/client/HinhSu';  
import '../../styles/client/DanSuPage.scss'; 
import RegisterForm from '../../components/client/RegisterForm';   
import Footer from '../../components/client/Footer';

const HinhSuPage = () => {
    useEffect(()=>{
            window.scrollTo(0,0);
        }, []); 
    return(
        <div className="danSuPage-container">
            <div className="background"></div>
            <div className="content">
                <Header/>
                <HinhSu/>
                <RegisterForm/>
                <Footer/>
            </div>
        </div>
    )
}
export default HinhSuPage; 