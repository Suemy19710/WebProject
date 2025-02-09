import React from 'react';
import Header from '../../components/client/Header';
import SmallPost from '../../components/client/SmallPost';
import TopNavigation from '../../components/client/TopNavigation';
import Footer from '../../components/client/Footer';

function Blog() {
    return(
        <>
            <TopNavigation/>
            <Header/>
            <SmallPost/>
            <Footer/>
        </>
    )
}
export default Blog;