import React, {useState} from 'react';
import '../../../styles/client/LuatSuDetail.scss';
import pic_3 from '../../../assets/pic_3.jpg';


const LuatSuDetail = () => {
    return(
        <div className="luatSuDetail-container">
            <div className="luatSuDetailCard">
                <div className="luatSuDetailCard-right">
                    <img src={pic_3} alt="Luật sư Đặng Như Bảo Châu" />
                </div>
                <div className="luatSuDetailCard-left">
                    <div className="luatSuDetailCard-left-head">
                        <div className="luatSuDetailCard-left-head-name">Luật sư Đặng Như Bảo Châu</div>
                        <div className="luatSuDetailCard-left-head-title">Luật sư & Thạc Sĩ</div>
                        <div className="luatSuDetailCard-left-head-description">
                            <div className="phone">
                                <i class="fa-solid fa-phone"></i>
                                <p>---</p>
                            </div>
                            <div className="email">
                                <i class="fa-regular fa-envelope"></i>
                                <p>chaudnb@gmail.com</p>
                            </div>
                           
                        </div>
                    </div>
                    <div className="luatSuDetailCard-left-body">
                        <div className="chuyenMon">
                            <div className="chuyenMon-title">
                                Chuyên Môn
                            </div>
                            <div className="chuyeMon-body">
                            •	Thạc sĩ Quản trị kinh doanh, tài chính kế toán <br/>
                            •	Cử nhân Luật<br/>
                            •	Cử nhân Anh văn<br/>
                            •	Luật sư Đoàn Luật sư TP.Hồ Chí Minh<br/>
                            </div>
                        </div>
                        <div className="kinhNghiem">
                            <div className="kinhNghiem-title">
                                Kinh nghiệm
                            </div>
                            <div className="kinhNghiem-body">
                            - Tư vấn cơ cấu tổ chức doanh nghiệp, soạn thảo quy chế tài chính và các văn bản quy định nội bộ doanh nghiệp, quản trị về lao động. <br/>                          
                            - Tư vấn và tiến hành thủ tục cấp Giấy chứng nhận đầu tư và giấy chứng nhận đăng ký kinh doanh tại cơ quan có thẩm quyền Việt Nam. <br/>
                            - Xem xét và tư vấn thu xếp vốn đầu tư, quản trị doanh nghiệp, nhân sự, hành chính, quản trị tài chính, thuế, các hoạt động kinh doanh tại Việt Nam của nhà đầu tư nước ngoài tại Việt Nam.  <br/>
                            - Chuyên gia đàm phán, soạn thảo và rà soát các hợp đồng kinh tế, thương mại, hợp đồng vay, bảo đảm, phát hành trái phiếu, cổ phiếu và mua bán, sáp nhập doanh nghiệp, mua bán quốc tế, thay mặt và/hoặc cùng với khách hàng tham gia đàm phán và ký kết các hợp đồng.  <br/>
                            - Có kinh nghiệm tham gia trong các vụ án kinh tế, kinh doanh thương mại. Đại diện khách hàng giải quyết tranh chấp thông qua thương lượng, hoà giải hoặc xét xử tại Trọng tài, Toà án`.  <br/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default LuatSuDetail;