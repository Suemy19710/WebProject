import React, {useEffect} from 'react';
import Header from '../../../components/client/Header';
import TopNavigation from '../../../components/client/TopNavigation';
import LuatSuDetail3 from '../../../components/client/Lawyer/LuatSuDetail3';
import Footer from '../../../components/client/Footer';

const LuatSuDetailPage = () => {
    useEffect(() => {
                      window.scrollTo(0,0);
                  });
    return (
        <>
            <TopNavigation/>
            <Header/>
            <LuatSuDetail3/>
           <Footer/>
        </>
    )
}
export default LuatSuDetailPage;