import React, {useEffect} from 'react';
import Header from '../../components/client/Header';
import TopNavigation from '../../components/client/TopNavigation';
import DoiNguLuatSuGioiThieu from '../../components/client/DoiNguLuatSuGioiThieu';
import Footer from '../../components/client/Footer';
function GioiThieuLuatSuPage() {
      useEffect(() => {
                window.scrollTo(0,0);
            });
    return (
        <>
            <TopNavigation/>
            <Header/>
            <DoiNguLuatSuGioiThieu/>
            <Footer/>
        </>
    )
}
export default GioiThieuLuatSuPage;