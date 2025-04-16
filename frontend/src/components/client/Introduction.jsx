import React from 'react'; 
import {useNavigate} from 'react-router-dom'; 
import'../../styles/client/Introduction.scss'; 
import pic2 from '../../assets/pic2.jpg'; 
import pic3 from '../../assets/pic3.jpg'; 

const Introduction = () => {
    const navigate = useNavigate(); 
    const handleClick = (() => navigate('/gioi-thieu'))
    return(
        <div className="introduction-container">
            <div className="container-left">
                <div className="container-left-background"></div>
                <div className="container-left-content">
                    <h1>Giải pháp pháp lý uy tín, <span>bảo vệ quyền lợi</span> toàn diện.</h1>
                    <h3>Pháp lý vững chắc - Cuộc sống bình an, thịnh vượng</h3>
                </div>
                <div className="container-left-button">
                    <button onClick={(handleClick)}>Giới thiệu Công ty Luật Kim Ngọc</button>
                </div>
            </div>
            <div className="container-right">
                <div className="background-shape"></div> 
                <div className="large-circle"></div>
                    <div className="pic-1">
                        <img src={pic3} alt="Courtroom" />
                    </div>
                    <div className="pic-2">
                        <img src={pic2} alt="Scales of Justice" />
                    </div>
                <div className="mobile-company-description">
                    <h3>Về Công ty Luật Kim Ngọc</h3>
                    <p>Công ty Luật Kim Ngọc là đơn vị tư vấn pháp lý hàng đầu với đội ngũ luật sư giàu kinh nghiệm. Chúng tôi chuyên cung cấp các dịch vụ pháp lý toàn diện, bảo vệ quyền lợi khách hàng trong mọi lĩnh vực pháp luật.</p>
                    <p>Với phương châm "Uy tín - Chuyên nghiệp - Hiệu quả", chúng tôi cam kết mang đến giải pháp pháp lý tối ưu cho mọi khách hàng.</p>
                </div>
        </div>
        </div>
    )
}
export default Introduction; 