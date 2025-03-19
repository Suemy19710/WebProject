import React, {useEffect} from 'react';
import Header from '../../components/client/Header';
import TopNavigation from '../../components/client/TopNavigation';
import ServicePartDetail from '../../components/client/ServicePartDetail';
import Footer from '../../components/client/Footer';

const ServicePartDetailPage = () => {
    useEffect(() => {
                      window.scrollTo(0,0);
                  });
    return (
        <>
            <TopNavigation/>
            <Header/>
            <ServicePartDetail/>
           <Footer/>
        </>
    )
}
export default ServicePartDetailPage;