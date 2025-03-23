import React, {useEffect} from 'react'; 
import Header from '../../components/client/Header';
import TinTuc from '../../components/client/TinTuc';  
import '../../styles/client/TinTucPage.scss'; 
import RegisterForm from '../../components/client/RegisterForm';   
import Footer from '../../components/client/Footer';

const TinTucPage = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return(
        <div className="tinTucPage-container">
            <div className="background"></div>
            <div className="content">
                <Header/>
                <TinTuc/>
                <RegisterForm/>
                <Footer/>
            </div>
        </div>
    )
}
export default TinTucPage; 