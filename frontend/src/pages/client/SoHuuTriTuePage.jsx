import React, {useEffect} from 'react'; 
import Header from '../../components/client/Header';
import SoHuuTritue from '../../components/client/SoHuuTriTue';  
import '../../styles/client/DanSuPage.scss'; 
import RegisterForm from '../../components/client/RegisterForm';   
import Footer from '../../components/client/Footer';

const SoHuuTrituePage = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return(
        <div className="danSuPage-container">
            <div className="background"></div>
            <div className="content">
                <Header/>
                <SoHuuTritue/>
                <RegisterForm/>
                <Footer/>
            </div>
        </div>
    )
}
export default SoHuuTrituePage; 