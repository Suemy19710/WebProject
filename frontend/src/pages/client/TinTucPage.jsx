import React from 'react'; 
import Header from '../../components/client/Header';
import TinTuc from '../../components/client/TinTuc';  
import '../../styles/client/TinTucPage.scss'; 

const TinTucPage = () => {
    return(
        <div className="tinTucPage-container">
            <div className="background"></div>
            <div className="content">
                <Header/>
                <TinTuc/>
            </div>
        </div>
    )
}
export default TinTucPage; 