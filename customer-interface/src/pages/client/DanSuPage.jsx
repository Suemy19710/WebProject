import React, {useEffect} from 'react';
import Header from '../../components/client/Header';
import TopNavigation from '../../components/client/TopNavigation';
import DanSu from '../../components/client/DanSu';
import Footer from '../../components/client/Footer';
function DanSuPage() {
    useEffect(() => {
                      window.scrollTo(0,0);
                  });
    return (
        <>
            <TopNavigation/>
            <Header/>
            <DanSu/>
            <Footer/>
           {/* <div>This is Dan Su Page</div> */}
        </>
    )
}
export default DanSuPage;