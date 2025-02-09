import React from 'react';
import TopNavigation from '../../components/client/TopNavigation';
import Header from '../../components/client/Header';
import PostDetail from '../../components/client/PostDetail';
import News from '../../components/client/News';
import RegisterForm from '../../components/client/RegisterForm';
import Footer from '../../components/client/Footer';

function TinTucCardPage() {
    return(
        <>
            <TopNavigation/>
            <Header/>
            <PostDetail/>
            <News/>
            <RegisterForm/>
            <Footer/>
        </>
    )
}
export default TinTucCardPage;