import React from 'react';
import TopNavigation from '../../components/client/TopNavigation';
import Header from '../../components/client/Header';
import TinTucCard from '../../components/client/TinTucCard';
import PostDetail from '../../components/client/PostDetail';
import News from '../../components/client/News';
import RegisterForm from '../../components/client/RegisterForm';

function TinTucCardPage() {
    return(
        <>
            <TopNavigation/>
            <Header/>
            {/* <TinTucCard/> */}
            <PostDetail/>
            <News/>
            <RegisterForm/>
        </>
    )
}
export default TinTucCardPage;