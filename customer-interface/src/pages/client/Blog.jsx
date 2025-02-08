import React from 'react';
import Header from '../../components/client/Header';
import SmallPost from '../../components/client/SmallPost';
import TopNavigation from '../../components/client/TopNavigation';

function Blog() {
    return(
        <>
            <TopNavigation/>
            <Header/>
            <SmallPost/>
        </>
    )
}
export default Blog;