import React from 'react';
import '../../styles/client/ServiceDetail.scss';
import {useNavigate} from 'react-router-dom';
const ServiceDetail = () => {
      const navigate = useNavigate();
        const handleNavigate = (url) => {
            navigate(url);
        };
    return (
        <div className="serviceDetail-container">
            <div className="container-head">
                <div className="container-head-bg"></div>
                <h1>Dịch Vụ</h1>
            </div>
            <div className="container-body">
                <div className="body">
                    <div className="small-container">
                        <h1 id="tu-van-phap-ly">Dịch vụ <span>tư vấn pháp lý</span></h1>
                        <div className="small-container-description">
                            <p onClick={() => handleNavigate('/dich-vu/detail')}>Tư vấn luật doanh nghiệp (thành lập, giải thể, thay đổi đăng ký kinh doanh, hợp đồng…)</p>
                            <p>Tư vấn luật đất đai, bất động sản (mua bán, chuyển nhượng, thừa kế, tranh chấp…)</p>
                            <p>Tư vấn luật hôn nhân & gia đình (ly hôn, tranh chấp tài sản, quyền nuôi con, chế độ tài sản…)</p>
                            <p>Tư vấn luật lao động (hợp đồng lao động, sa thải, bảo hiểm xã hội, tranh chấp lao động…)</p>
                            <p>Tư vấn luật thuế và tài chính (kê khai thuế, xử lý tranh chấp thuế, tối ưu thuế doanh nghiệp…)</p>
                            <p>Tư vấn luật sở hữu trí tuệ (đăng ký nhãn hiệu, bản quyền, xử lý vi phạm…)</p>
                            <p>Tư vấn luật bảo hiểm (bảo hiểm xã hội, bảo hiểm nhân thọ, tranh chấp bảo hiểm…)</p>
                            <p>Tư vấn luật giao thông (tai nạn giao thông, xử phạt vi phạm hành chính…)</p>
                            <p>Tư vấn luật hành chính (khiếu nại, tố cáo, thủ tục cấp giấy phép…)</p>
                        </div>
                    </div>
                    <div className="small-container">
                        <h1 id="dai-dien-phap-ly">Dịch vụ <span>đại diện pháp lý</span></h1>
                        <div className="small-container-description">
                            <p>Đại diện đàm phán hợp đồng, giải quyết tranh chấp thương mại
                            </p>    
                            <p>Đại diện khách hàng trong các vụ kiện dân sự, hình sự, hành chính</p>    
                            <p>Đại diện trước cơ quan nhà nước (tòa án, công an, thuế, sở hữu trí tuệ…)</p>      
                            <p>Đại diện làm việc với ngân hàng, tổ chức tín dụng, đối tác kinh doanh
                            </p>           
                        </div>
                    </div>
                    <div className="small-container">
                        <h1 id="tranh-tung-tai-toa-an">Dịch vụ <span> tranh tụng tại tòa án</span></h1>
                        <div className="small-container-description">
                            <p>Luật sư bào chữa trong các vụ án hình sự                            </p> 
                            <p>Luật sư đại diện trong các vụ án dân sự (tranh chấp hợp đồng, thừa kế, đất đai…)</p>
                            <p>Luật sư bảo vệ quyền lợi trong các vụ án hành chính (khiếu kiện quyết định hành chính…)</p>
                            <p>Luật sư tham gia tố tụng trong các vụ án lao động, kinh tế, thương mại</p>
                        </div>
                    </div>
                    <div className="small-container">
                        <h1 id="soan-thao">Dịch vụ <span>soạn thảo và rà soát hợp đồng, văn bản pháp lý</span></h1>
                        <div className="small-container-description">
                         <p>Soạn thảo hợp đồng thương mại, hợp đồng lao động, hợp đồng thuê nhà…</p>
                         <p>Rà soát, đánh giá rủi ro pháp lý của hợp đồng</p>
                         <p>Soạn thảo đơn từ pháp lý (đơn khởi kiện, đơn khiếu nại, tố cáo, yêu cầu thi hành án…)</p>
                        </div>
                    </div>
                    <div className="small-container">
                        <h1 id="phap-ly-doanh-nghiep">Dịch vụ <span>pháp lý cho doanh nghiệp</span></h1>
                        <div className="small-container-description">
                            <p>Thành lập, giải thể, mua bán, sáp nhập doanh nghiệp</p>
                            <p>Xây dựng điều lệ công ty, nội quy lao động, quy chế hoạt động
                            </p>
                            <p>Hỗ trợ pháp lý cho doanh nghiệp trong quá trình hoạt động
                            </p>
                            <p>Dịch vụ luật sư nội bộ (theo tháng, theo vụ việc)
                            </p>
                        </div>
                    </div>
                    <div className="small-container">
                        <h1 id="ho-tro-thu-tuc">Dịch vụ <span>hỗ trợ thủ tục hành chính</span></h1>
                        <div className="small-container-description">
                            <p>Đăng ký kinh doanh, giấy phép đầu tư, giấy phép lao động cho người nước ngoài</p>
                            <p>Đăng ký nhãn hiệu, bản quyền, sáng chế
                            </p>
                            <p>Cấp sổ đỏ, chuyển mục đích sử dụng đất, thủ tục sang tên sổ đỏ</p>
                        </div>
                    </div>
                    <div className="small-container">
                        <h1 id="luat-su-rieng-ca-nhan">Dịch vụ <span>Luật sư Riêng cho Cá nhân</span></h1>
                        <div className="small-container-description">
                          <p>Chi tiet</p>
                        </div>
                    </div>
                    <div className="small-container">
                        <h1 id="luat-su-rieng-doanh-nghiep">Dịch vụ <span>Luật sư Riêng cho Doanh nghiệp</span></h1>
                        <div className="small-container-description">
                          <p>Chi tiet</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ServiceDetail;