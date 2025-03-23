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
        </div>
    )
}
export default HanhChinhPage; 