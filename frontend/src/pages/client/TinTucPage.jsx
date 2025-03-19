import React, {useEffect} from 'react';
import Header from '../../components/client/Header';
import TinTuc from '../../components/client/TinTuc';
import TopNavigation from '../../components/client/TopNavigation';
import Footer from '../../components/client/Footer';

function TinTucPage() {
     useEffect(() => {
            window.scrollTo(0,0);
        });
    return(
        <>
            <TopNavigation/>
            <Header/>
            <TinTuc/>
            <Footer/>
        </>
    )
}
export default TinTucPage;