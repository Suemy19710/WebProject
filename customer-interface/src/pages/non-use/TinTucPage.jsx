import React from 'react';
import TinTuc from '../../components/non-use/TinTuc';
import Header from '../../components/client/Header';
import TopNavigation from '../../components/client/TopNavigation';

function TinTucPage() {
    return (
        <>
            <TopNavigation/>
            <Header/>
            <TinTuc/>
        </>
    )
}
export default TinTucPage;