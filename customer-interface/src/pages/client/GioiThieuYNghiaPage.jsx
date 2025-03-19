import React, {useEffect} from 'react';
import Header from '../../components/client/Header';
import GioiThieu from '../../components/client/GioiThieu';
import TopNavigation from '../../components/client/TopNavigation';
import Footer from '../../components/client/Footer';

function GioiThieuYNghiaPage() {
    useEffect(() => {
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 100);    }, []);
    return (
        <>
            <TopNavigation/>
            <Header/>
            <GioiThieu/>
            <Footer/>
        </>
    )
}
export default GioiThieuYNghiaPage;