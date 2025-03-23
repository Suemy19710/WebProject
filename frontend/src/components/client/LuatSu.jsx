import React from 'react'; 
import {useNavigate } from 'react-router-dom'; 
import '../../styles/client/LuatSu.scss'; 
import lawyer1 from '../../assets/lawyers/Luat-Su-Van.jpg'; 
import lawyer2 from '../../assets/lawyers/Luat-Su-Vu-Duy-Nam.jpg'; 
import lawyer3 from '../../assets/lawyers/Luat-Su-Dang-Nhu-Bao-Chau.jpg'; 

const LuatSu = () => {
    const navigate = useNavigate(); 
    const handleClick=(url) => {navigate(url)}; 
    return(
        <div className="luatSu-container">
                <div className="luatSu-device">
                    <div className="container-header">
                        <div className="container-header-bg"></div>
                        <div className="container-header-content">
                            <h1>Luật Sư</h1>
                        </div>
                    </div>
                    <div className="container-body">
                        <div className="container-body-content">
                              <div className="intro-lawyers__grid">
                                    <div className="intro-lawyers__card">
                                        <img src={lawyer1} alt="Lawyer 1" />
                                        <h3>Luật sư - ThS Thái Thanh Vân</h3>
                                        <div className="short-description">
                                            <p>SDT: 091855555</p>
                                            <p>Email: thaithanhvan@gmail.com</p>
                                        </div>
                                                                            </div>
                                    <div className="intro-lawyers__card">
                                        <img src={lawyer2} alt="Lawyer 2" />
                                        <h3 onClick={() => handleClick('/gioi-thieu/luat-su-vu-duy-nam')}>Luật sư - ThS Vũ Duy Nam</h3>
                                        <div className="short-description">
                                            <p>SDT: 091855555</p>
                                            <p>Email: thaithanhvan@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className="intro-lawyers__card">
                                        <img src={lawyer3} alt="Lawyer 2" />
                                        <h3>Luật sư - ThS Đặng Như Bảo Châu</h3>
                                        <div className="short-description">
                                            <p>SDT: 091855555</p>
                                            <p>Email: thaithanhvan@gmail.com</p>
                                        </div>                                                        </div>
                                    
                                </div>
                        </div>
                    </div>
                </div>
            </div>
    )
    
}
export default LuatSu; 