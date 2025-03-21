import React, {useEffect, useState} from 'react';
import '../../styles/client/DoiNguLuatSu.scss';
import pic_1 from '../../assets/Luat-Su-Vu-Duy-Nam.jpg';
import pic_2 from '../../assets/pic_2.jpg';
import pic_3 from '../../assets/pic_3.jpg';
import {useNavigate} from 'react-router-dom';
import { createSlugTitle } from '../../utils/slugUtils';
const DoiNguLuatSu = () => {
    const navigate = useNavigate();
    // const handleClick = () => {
    //     navigate(`/gioi-thieu/luat-su/detail`);
    // }
    const handleClick = (url) => {
        navigate (url);
    }
    return(
        <div className="doiNguLuatSu-container">
            <div className="head">
                <h1>Đội Ngũ<span> Luật Sư</span></h1>
                <div className="body">
                    {/* {[...Array(4)].map((_, index) => ( */}
                        {/* <div key={index} className="luatSu-card"> */}
                        <div className="luatSu-card">
                            <div className="luatSu-card-head">
                                <img src={pic_1} alt="Luật sư Vũ Duy Nam" />
                            </div>
                            <div className="luatSu-card-body">
                                <div className="luatSu-card-body-name" onClick={() => handleClick('/gioi-thieu/luat-su-vu-duy-nam')}>Luật sư - ThS. Vũ Duy Nam</div>
                                <div className="luatSu-card-body-title">Luật sư</div>
                                <div className="luatSu-card-body-description">
                                    <div>Phone: 091234567</div>
                                    <div>Email: vuduynam@gmail.com</div>
                                </div>
                            </div>
                      </div>
                      <div className="luatSu-card">
                            <div className="luatSu-card-head">
                                <img src={pic_2} alt="Luật sư Thái Thanh Vân" />
                            </div>
                            <div className="luatSu-card-body">
                                <div className="luatSu-card-body-name" onClick={() => handleClick('/gioi-thieu/luat-su-thai-thanh-van')}>Luật sư – ThS. Thái Thanh Vân</div>
                                <div className="luatSu-card-body-title">Luật sư</div>
                                <div className="luatSu-card-body-description">
                                    <div>Phone: 0937 363 438</div>
                                    <div>Email: luatsuthaithanhvan@gmail.com</div>
                                </div>
                            </div>
                      </div>
                      <div className="luatSu-card">
                            <div className="luatSu-card-head">
                                <img src={pic_3} alt="Luật sư Đặng Như Bảo Châu" />
                            </div>
                            <div className="luatSu-card-body">
                                <div className="luatSu-card-body-name" onClick={() => handleClick('/gioi-thieu/luat-su-dang-nhu-bao-chau')}>Luật sư – ThS. Đặng Như Bảo Châu</div>
                                <div className="luatSu-card-body-title">Luật sư</div>
                                <div className="luatSu-card-body-description">
                                    <div>Phone: ---</div>
                                    <div>Email: chaudnb@gmail.com</div>
                                </div>
                            </div>
                      </div>
                    {/* ))} */}
                  
                </div>
            </div>
        </div>
    );

}
export default DoiNguLuatSu;