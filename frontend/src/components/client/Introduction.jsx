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
                    <h3>Đồng hành cùng bạn, bảo vệ quyền lợi suốt đời.</h3>
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
                </div>
        </div>
    )
}
export default Introduction; 