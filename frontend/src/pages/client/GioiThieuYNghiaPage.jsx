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
        </div>
    );
}; 
export default GioithieuYNghiaPage; 