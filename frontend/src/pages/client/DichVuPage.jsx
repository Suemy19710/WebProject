import React, {useEffect} from 'react'; 
import DichVu from '../../components/client/DichVu';
import Header from '../../components/client/Header';
import '../../styles/client/DichVuPage.scss';
import RegisterForm from '../../components/client/RegisterForm';   
import Footer from '../../components/client/Footer';

function DichVuPage () {
    useEffect(()=>{
        window.scrollTo(0,0);
    }, []); 
    return(
        <div className="dichVuPage-container">
            <div className="background"></div>
            <div className="content">
                <Header/>
                <DichVu/>
                <RegisterForm/>
                <Footer/>

            </div>
        </div>
    );
}; 
export default DichVuPage; 