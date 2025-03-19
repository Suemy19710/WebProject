import React, {useEffect} from 'react';
import TopNavigation from '../../components/client/TopNavigation';
import Header from '../../components/client/Header';
import TinTucDetail from '../../components/client/TinTucDetail';
import News from '../../components/client/News';
import RegisterForm from '../../components/client/RegisterForm';
import Footer from '../../components/client/Footer';

function TinTucDetailPage() {
    useEffect(() => {
                      window.scrollTo(0,0);
                  });
    return(
        <>
            <TopNavigation/>
            <Header/>
            <TinTucDetail/>
            <News/>
            <RegisterForm/>
            <Footer/>
        </>
    )
}
export default TinTucDetailPage;