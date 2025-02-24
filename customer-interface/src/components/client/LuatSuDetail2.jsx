import React, {useState} from 'react';
import '../../styles/client/LuatSuDetail.scss';
import pic_2 from '../../assets/pic_2.jpg';


const LuatSuDetail = () => {
    return(
        <div className="luatSuDetail-container">
            <div className="luatSuDetailCard">
                <div className="luatSuDetailCard-right">
                    <img src={pic_2} alt="Luật sư Thái Thanh Vân" />
                </div>
                <div className="luatSuDetailCard-left">
                    <div className="luatSuDetailCard-left-head">
                        <div className="luatSuDetailCard-left-head-name">Luật sư Thái Thanh Vân</div>
                        <div className="luatSuDetailCard-left-head-title">Luật sư & Thạc Sĩ</div>
                        <div className="luatSuDetailCard-left-head-description">
                            <div className="phone">
                                <i class="fa-solid fa-phone"></i>
                                <p>0937 363 438</p>
                            </div>
                            <div className="email">
                                <i class="fa-regular fa-envelope"></i>
                                <p>luatsuthaithanhvan@gmail.com</p>
                            </div>
                           
                        </div>
                    </div>
                    <div className="luatSuDetailCard-left-body">
                        <div className="chuyenMon">
                            <div className="chuyenMon-title">
                                Chuyên Môn
                            </div>
                            <div className="chuyeMon-body">
                            •	Thạc sĩ Luật Kinh tế <br/>
                            •	Cử nhân Quản trị Kinh doanh<br/>
                            •	Cử nhân Anh văn<br/>
                            •	Kỹ sư Hóa<br/>
                            </div>
                        </div>
                        <div className="kinhNghiem">
                            <div className="kinhNghiem-title">
                                Kinh nghiệm
                            </div>
                            <div className="kinhNghiem-body">
                            •	Hơn 2 năm hành nghề luật sư, tham gia tranh tụng trong các vụ án dân sự, kinh doanh – thương mại, hành chính và hình sự. <br/>
                            •	Đại diện sở hữu công nghiệp trong các lĩnh vực: nhãn hiệu, chỉ dẫn địa lý, tên thương mại, chống cạnh tranh không lành mạnh, bảo vệ bí mật kinh doanh. <br/>
                            •	Tư vấn chuyên sâu về doanh nghiệp, lao động, thương mại, sở hữu trí tuệ, đầu tư, phát triển và mua bán dự án. <br/>
                            •	Chuyên gia đàm phán, soạn thảo và rà soát hợp đồng: thương mại, dân sự, môi trường, vay vốn, hóa chất. <br/>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default LuatSuDetail;