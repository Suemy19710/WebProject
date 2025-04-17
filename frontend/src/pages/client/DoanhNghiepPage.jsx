import React, {useEffect} from 'react'; 
import Header from '../../components/client/Header';
import DoanhNghiep from '../../components/client/DoanhNghiep';  
import '../../styles/client/DanSuPage.scss'; 
import RegisterForm from '../../components/client/RegisterForm';   
import Footer from '../../components/client/Footer';

const DoanhNghiepPage = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    }, []); 
    return(
        <div className="danSuPage-container">
            <div className="background"></div>
            <div className="content">
                <Header/>
                <DoanhNghiep/>
                <RegisterForm/>
                <Footer/>
            </div>
        </div>
    )
}
export default DoanhNghiepPage; 