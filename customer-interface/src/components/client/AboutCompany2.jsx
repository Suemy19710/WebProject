import React, {useEffect} from 'react'; 
import '../../styles/client/AboutCompany2.scss'; 
import {Link, useNavigate} from 'react-router-dom'; 

const AboutCompany2 = () => {
    const navigate = useNavigate(); 
    const handleViewMore = () => { 
        navigate('/gioi-thieu/y-nghia'); 
    }
    return(
        <div className="about-company-2">
            <div className="about-company-device">
                <div className="background-container">
                    {/* <h1 className="title">Công ty <span> Luật Kim Ngọc</span></h1> */}

                </div>
            </div>
            
        </div>
    )
}
export default AboutCompany2; 