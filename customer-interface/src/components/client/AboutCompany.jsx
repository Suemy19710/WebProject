import React, {useEffect} from 'react';
import '../../styles/client/AboutCompany.scss';
import pic from '../../assets/about-company.png';
import { Link, useNavigate} from 'react-router-dom';

const AboutCompany = () => {
    const navigate = useNavigate();
    const handleViewMore = () => {
        navigate('/gioi-thieu/y-nghia');
    }
        return (
            <>
                <div className="about-company">
                    <div className="about-company-device">
                        <div className="about-company-content">
                            <h1 className="title">Công ty <span> Luật Kim Ngọc</span></h1>
                            <h className="description">
                            Công ty Luật Kim Ngọc không chỉ đơn thuần là một công ty cung cấp dịch vụ pháp lý mà còn là người bạn đồng hành tin cậy của cộng đồng. Công ty cam kết phục vụ khách hàng dựa trên những nguyên tắc về minh bạch, trung thực và chính xác, đảm bảo rằng mọi quyết định và hành động của mình đều hướng tới công lý và sự chính xác cao nhất.                            </h>
                            <br></br>
                            <button className="view-more-introduction" onClick={handleViewMore}>
                                Tổng quan công ty Luật Kim Ngọc
                            </button>
                        </div>
                        <div className="about-company-right">
                            <div className="pic-background">
                                <img src ={pic} className="about-company-pic"/>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
export default AboutCompany;