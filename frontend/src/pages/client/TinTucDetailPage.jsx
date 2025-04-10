import React, {useEffect} from 'react'; 
import Header from '../../components/client/Header';
import TinTucDetail from '../../components/client/TinTucDetail';  
import '../../styles/client/TinTucDetailPage.scss'; 
import RegisterForm from '../../components/client/RegisterForm';   
import Footer from '../../components/client/Footer';

const TinTucDetailPage = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return(
        <div className="tinTucDetailPage-container">
            <div className="background"></div>
            <div className="content">
                <Header/>
                <TinTucDetail/>
                <RegisterForm/>
                <Footer/>
            </div>
        </div>
    )
}
export default TinTucDetailPage; 