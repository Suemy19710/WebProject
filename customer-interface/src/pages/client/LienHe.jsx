import React, {useEffect} from 'react';
import Header from '../../components/client/Header';
import TopNavigation from '../../components/client/TopNavigation';

function LienHe() {
    useEffect(() => {
                  window.scrollTo(0,0);
              });
    return (
        <>
            <TopNavigation/>
            <Header/>
           <div>This is Lien He Page</div>
        </>
    )
}
export default LienHe;