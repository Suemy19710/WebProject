import React, {useEffect} from 'react';
import Header from '../../../components/client/Header';
import TopNavigation from '../../../components/client/TopNavigation';
import LuatSuDetail2 from '../../../components/client/Lawyer/LuatSuDetail2';
import Footer from '../../../components/client/Footer';

const LuatSuDetailPage = () => {
    useEffect(() => {
                      window.scrollTo(0,0);
                  });
    return (
        <>
            <TopNavigation/>
            <Header/>
            <LuatSuDetail2/>
           <Footer/>
        </>
    )
}
export default LuatSuDetailPage;