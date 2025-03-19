import React, {useEffect} from 'react';
import Header from '../../components/client/Header';
import TopNavigation from '../../components/client/TopNavigation';
import Footer from '../../components/client/Footer';
import HanhChinh from '../../components/client/HanhChinh';
function HanhChinhPage() {
    useEffect(() => {
                      window.scrollTo(0,0);
                  });
    return (
        <>
            <TopNavigation/>
            <Header/>
            <HanhChinh/>
            <Footer/>
        </>
    )
}
export default HanhChinhPage;