import React, {useState} from 'react';
import '../../styles/client/LuatSuDetail.scss';
import pic_1 from '../../assets/Luat-Su-Vu-Duy-Nam.jpg';


const LuatSuDetail = () => {
    return(
        <div className="luatSuDetail-container">
            <div className="luatSuDetailCard">
                <div className="luatSuDetailCard-right">
                    <img src={pic_1} alt="Luật sư Vũ Duy Nam" />
                </div>
                <div className="luatSuDetailCard-left">
                    <div className="luatSuDetailCard-left-head">
                        <div className="luatSuDetailCard-left-head-name">Luật sư - ThS. Vũ Duy Nam</div>
                        <div className="luatSuDetailCard-left-head-title">Giám đốc công ty</div>
                        <div className="luatSuDetailCard-left-head-description">
                            <div className="phone">
                                <i class="fa-solid fa-phone"></i>
                                <p>0919.146.222</p>
                            </div>
                            <div className="email">
                                <i class="fa-regular fa-envelope"></i>
                                <p>luatsuduynam@gmail.com</p>
                            </div>
                           
                        </div>
                    </div>
                    <div className="luatSuDetailCard-left-body">
                        <div className="chuyenMon">
                            <div className="chuyenMon-title">
                                Chuyên Môn
                            </div>
                            <div className="chuyeMon-body">
                                Chuyên môn: Thạc sĩ luật kinh tế, cử nhân Hàng hải
                                Luật sư Đoàn Luật sư TP.Hồ Chí Minh
                            </div>
                        </div>
                        <div className="kinhNghiem">
                            <div className="kinhNghiem-title">
                                Kinh nghiệm
                            </div>
                            <div className="kinhNghiem-body">
                            -	Hơn 10 năm kinh nghiệm tham gia tranh tụng trong các vụ án dân sự, kinh doanh thương mại, hành chính và hình sự.
                        -	Đại diện sở hữu công nghiệp trong các lĩnh vực: nhãn hiệu, chỉ dẫn địa lý, tên thương mại, chống cạnh tranh không lành mạnh và bí mật kinh doanh.
                        -	Tư vấn chuyên sâu về doanh nghiệp, lao động, kinh doanh thương mại, sở hữu trí tuệ, đầu tư, phát triển và mua bán dự án.
                        -	Chuyên gia đàm phán, soạn thảo và rà soát các hợp đồng thương mại, hợp đồng dân sự, hợp đồng xây dựng, hợp đồng vay, bảo đảm, phát hành trái phiếu, cổ phiếu và mua bán, sáp nhập doanh nghiệp.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default LuatSuDetail;