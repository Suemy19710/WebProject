import React, {useEffect} from 'react';
import Header from '../../../components/client/Header';
import TopNavigation from '../../../components/client/TopNavigation';
import LuatSuDetail from '../../../components/client/Lawyer/LuatSuDetail';
import Footer from '../../../components/client/Footer';

const LuatSuDetailPage = () => {
    useEffect(() => {
                      window.scrollTo(0,0);
                  });
    return (
        <>
            <TopNavigation/>
            <Header/>
            <LuatSuDetail/>
           <Footer/>
        </>
    )
}
export default LuatSuDetailPage;