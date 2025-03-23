import React , {useEffect} from 'react'; 
import Header from '../../../components/client/Header';
import LuatSuDetail from '../../../components/client/Lawyer/LuatSuDetail';  
import '../../../styles/client/LuatSuPage.scss'; 

const LuatSuPage = () => {
     useEffect(() => {
            window.scrollTo(0,0)
        }, []); 
    return(
        <div className="luatSuPage-container">
            <div className="background"></div>
            <div className="content">
                <Header/>
                <LuatSuDetail/>
            </div>
        </div>
    )
}
export default LuatSuPage; 