import React, {useEffect} from 'react';
import Header from '../../components/client/Header';
import TopNavigation from '../../components/client/TopNavigation';
import SoHuuTriTue from '../../components/client/SoHuuTriTue';
import Footer from '../../components/client/Footer';
function SoHuuTriTuePage() {
    useEffect(() => {
                      window.scrollTo(0,0);
                  });
    return (
        <>
            <TopNavigation/>
            <Header/>
            <SoHuuTriTue/>
            <Footer/>
        </>
    )
}
export default SoHuuTriTuePage;