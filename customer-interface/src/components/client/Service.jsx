import React from 'react';
import '../../styles/client/Service.scss';
import { useNavigate } from 'react-router-dom';

const Service = () => {
    const navigate = useNavigate();
    const handleViewMore = () => {
        navigate('/dich-vu');
    }
        return(
            <div className="service-container">
                <div className="head">
                        <h>Dịch vụ <span>tiêu biểu</span></h>
                </div>
                <div className="body">
                    <div className="service-card">
                        <div className="service-card-head">
                            <div className="card-logo">
                                <i class="fa-solid fa-gavel"></i>
                            </div>
                            <h1>Dịch vụ tư vấn pháp lý</h1>
                        </div>
                        <div className="service-card-body">
                            -Tư vấn luật doanh nghiệp <br/>
                            -Tư vấn luật đất đai, bất động sản <br/>
                            -Tư vấn luật hôn nhân & gia đình <br/>
                            -Tư vấn luật lao động <br/>
                            - Tư vấn luật thuế và tài chính <br/>
                            -... <br/>
                        </div>
                        <div className="service-card-footer">
                            <button>Xem thêm</button>
                        </div>
                    </div>
                    <div className="service-card">
                        <div className="service-card-head">
                            <div className="card-logo">
                            <i class="fa-solid fa-user-tie"></i>                            
                            </div>
                            <h1>Dịch vụ đại diện pháp lý</h1>
                        </div>
                        <div className="service-card-body">
                            -Đại diện đàm phán hợp đồng, giải quyết tranh chấp thương mại <br/>
                            -Đại diện khách hàng trong các vụ kiện dân sự, hình sự, hành chính <br/>
                            -... <br/>
                        </div>
                        <div className="service-card-footer">
                            <button>Xem thêm</button>
                        </div>
                    </div>
                    <div className="service-card">
                        <div className="service-card-head">
                            <div className="card-logo">
                            <i class="fa-solid fa-landmark"></i>                            
                            </div>
                            <h1> Dịch vụ tranh tụng tại tòa án</h1>
                        </div>
                        <div className="service-card-body">
                            -Luật sư bào chữa trong các vụ án hình sự <br/>
                            -Luật sư bảo vệ quyền lợi trong các vụ án hành chính <br/>
                            
                            -... <br/>
                        </div>
                        <div className="service-card-footer">
                            <button>Xem thêm</button>
                        </div>
                    </div>
                    <div className="service-card">
                        <div className="service-card-head">
                            <div className="card-logo">
                            <i class="fa-solid fa-book-open"></i>
                            </div>
                            <h1>Dịch vụ soạn thảo và rà soát hợp đồng, văn bản pháp lý</h1>
                        </div>
                        <div className="service-card-body">
                            -Soạn thảo hợp đồng thương mại, hợp đồng lao động, hợp đồng thuê nhà… <br/>
                            -Soạn thảo đơn từ pháp lý  <br/>
                          
                            -... <br/>
                        </div>
                        <div className="service-card-footer">
                            <button>Xem thêm</button>
                        </div>
                    </div>
                    <div className="service-card">
                        <div className="service-card-head">
                            <div className="card-logo">
                            <i class="fa-solid fa-industry"></i>                            
                            </div>
                            <h1>Dịch vụ pháp lý cho doanh nghiệp</h1>
                        </div>
                        <div className="service-card-body">
                            -Thành lập, giải thể, mua bán, sáp nhập doanh nghiệp <br/>
                            -Xây dựng điều lệ công ty, nội quy lao động, quy chế hoạt động <br/>
                           
                            -... <br/>
                        </div>
                        <div className="service-card-footer">
                            <button>Xem thêm</button>
                        </div>
                    </div>
                    <div className="service-card">
                        <div className="service-card-head">
                            <div className="card-logo">
                            <i class="fa-solid fa-envelope"></i>                            
                            </div>
                            <h1>Dịch vụ hỗ trợ thủ tục hành chính</h1>
                        </div>
                        <div className="service-card-body">
                            -Đăng ký kinh doanh, giấy phép đầu tư, giấy phép lao động cho người nước ngoài <br/>
                            -Đăng ký nhãn hiệu, bản quyền, sáng chế <br/>   
                            -... <br/>
                        </div>
                        <div className="service-card-footer">
                            <button>Xem thêm</button>
                        </div>
                    </div>
                    <div className="service-card">
                        <div className="service-card-head">
                            <div className="card-logo">
                            <i class="fa-solid fa-user"></i>
                            </div>
                            <h1>Dịch vụ Luật sư Riêng cho Cá nhân</h1>
                        </div>
                        <div className="service-card-body">
                            -Hỗ trợ pháp lý cá nhân về các vấn đề như thừa kế, hôn nhân gia đình, tranh chấp tài sản và các vấn đề dân sự.<br/>
                            -... <br/>
                        </div>
                        <div className="service-card-footer">
                            <button>Xem thêm</button>
                        </div>
                    </div>
                    <div className="service-card">
                        <div className="service-card-head">
                            <div className="card-logo">
                            <i class="fa-solid fa-users"></i>
                            </div>
                            <h1>Dịch vụ Luật sư Riêng cho Doanh nghiệp</h1>
                        </div>
                        <div className="service-card-body">
                            -Cung cấp giải pháp pháp lý cho doanh nghiệp, bao gồm tư vấn hợp đồng, thuế, sở hữu trí tuệ và xử lý tranh chấp kinh doanh.<br/>
                            -... <br/>
                        </div>
                        <div className="service-card-footer">
                            <button>Xem thêm</button>
                        </div>
                    </div>
                </div>
                <div className="footer">
                        <button className="footer-view-all" onClick={handleViewMore}>Xem tất cả</button>
                </div>
            </div>
        )
    }
export default Service;