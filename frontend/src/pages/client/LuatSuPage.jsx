import React from 'react'; 
import Header from '../../components/client/Header';
import LuatSu from '../../components/client/LuatSu';  
import '../../styles/client/LuatSuPage.scss'; 

const LuatSuPage = () => {
    return(
        <div className="luatSuPage-container">
            <div className="background"></div>
            <div className="content">
                <Header/>
                <LuatSu/>
            </div>
        </div>
    )
}
export default LuatSuPage; 