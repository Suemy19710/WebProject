import React, {useEffect} from 'react';
import Header from '../../components/client/Header';
import TopNavigation from '../../components/client/TopNavigation';
import HinhSu from '../../components/client/HinhSu';
import Footer from '../../components/client/Footer';

function HinhSuPage() {
    useEffect(() => {
                      window.scrollTo(0,0);
                  });
    return (
        <>
            <TopNavigation/>
            <Header/>
            <HinhSu/>
            <Footer/>
        </>
    )
}
export default HinhSuPage;