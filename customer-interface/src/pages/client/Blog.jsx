import React, {useEffect} from 'react';
import Header from '../../components/client/Header';
import SmallPost from '../../components/client/SmallPost';
import TopNavigation from '../../components/client/TopNavigation';
import Footer from '../../components/client/Footer';

function Blog() {
     useEffect(() => {
            window.scrollTo(0,0);
        });
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