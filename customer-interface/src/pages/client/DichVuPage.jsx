import React, {useEffect} from 'react';
import Header from '../../components/client/Header';
import TopNavigation from '../../components/client/TopNavigation';
import Footer from '../../components/client/Footer';
import ServiceDetail from '../../components/client/ServiceDetail';
function DichVuPage() {
    useEffect(() => {
                      window.scrollTo(0,0);
                  });
    return (
        <>
            <TopNavigation/>
            <Header/>
            <ServiceDetail/>
            <Footer/>
        </>
    )
}
export default DichVuPage;