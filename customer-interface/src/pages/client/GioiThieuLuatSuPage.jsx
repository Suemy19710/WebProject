import React, {useEffect} from 'react';
import Header from '../../components/client/Header';
import TopNavigation from '../../components/client/TopNavigation';

function GioiThieuLuatSuPage() {
      useEffect(() => {
                window.scrollTo(0,0);
            });
    return (
        <>
            <TopNavigation/>
            <Header/>
           <div>This is GioiThieuLuatSuPage Page</div>
        </>
    )
}
export default GioiThieuLuatSuPage;