import React from 'react';
import Header from '../../components/client/Header';
import GioiThieu from '../../components/client/GioiThieu';
import TopNavigation from '../../components/client/TopNavigation';
import Footer from '../../components/client/Footer';

function GioiThieuPage() {
    return (
        <>
            <TopNavigation/>
            <Header/>
            <GioiThieu/>
            <Footer/>
        </>
    )
}
export default GioiThieuPage;