import React from 'react';
import TopNavigation from '../../components/client/TopNavigation';
import Header from '../../components/client/Header';
import PostDetail from '../../components/client/PostDetail';
import News from '../../components/client/News';
import RegisterForm from '../../components/client/RegisterForm';

function TinTucCardPage() {
    return(
        <>
            <TopNavigation/>
            <Header/>
            <PostDetail/>
            <News/>
            <RegisterForm/>
        </>
    )
}
export default TinTucCardPage;