import React, {useEffect, useState} from 'react';
import '../../styles/client/DoiNguLuatSu.scss';
import pic_1 from '../../assets/Luat-Su-Vu-Duy-Nam.jpg';
import {useNavigate} from 'react-router-dom';
import { createSlugTitle } from '../../utils/slugUtils';
const DoiNguLuatSu = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/gioi-thieu/luat-su/detail`);
    }
    return(
        <div className="doiNguLuatSu-container">
            <div className="head">
                <h1>Đội Ngũ<span> Luật Sư</span></h1>
                <div className="body">
                    {[...Array(4)].map((_, index) => (
                          <div key={index} className="luatSu-card">
                            <div className="luatSu-card-head">
                                <img src={pic_1} alt="Luật sư Vũ Duy Nam" />
                            </div>
                            <div className="luatSu-card-body">
                                <div className="luatSu-card-body-name" onClick={handleClick}>Luật sư Vũ Duy Nam</div>
                                <div className="luatSu-card-body-title">Giám đốc công ty</div>
                                <div className="luatSu-card-body-description">
                                    <div>Phone: 091234567</div>
                                    <div>Email: vuduynam@gmail.com</div>
                                </div>
                            </div>
                      </div>
                    ))}
                  
                </div>
            </div>
        </div>
    );

}
export default DoiNguLuatSu;