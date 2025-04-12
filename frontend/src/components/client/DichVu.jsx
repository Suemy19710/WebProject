import React from 'react'; 
import '../../styles/client/DichVu.scss'; 

const DichVu = () => {
    const handleNavigate = (url) => {
        window.location.href = url;
    };

    return(
        <div className="dichVu-container">
            <div className="dichVu-device">
                <div className="container-header">
                    <div className="container-header-bg"></div>
                    <div className="container-header-content">
                        <h1>Dịch Vụ</h1>
                    </div>
                </div>
                <div className="container-body">
                    <div className="container-body-bg"></div>
                    <div className="container-body-content">
                    <div className="body">
                    <div className="small-container">
                        <h1 id="tu-van-phap-ly">Dịch vụ <span>tư vấn pháp lý</span></h1>
                        <ul className="small-container-description">
                            <li><a href="/dich-vu/detail" onClick={(e) => { e.preventDefault(); handleNavigate('/dich-vu/detail'); }}>Tư vấn luật doanh nghiệp (thành lập, giải thể, thay đổi đăng ký kinh doanh, hợp đồng…)</a></li>
                            <li><a href="/dich-vu/detail">Tư vấn luật đất đai, bất động sản (mua bán, chuyển nhượng, thừa kế, tranh chấp…)</a></li>
                            <li><a href="/dich-vu/detail">Tư vấn luật hôn nhân & gia đình (ly hôn, tranh chấp tài sản, quyền nuôi con, chế độ tài sản…)</a></li>
                            <li><a href="/dich-vu/detail">Tư vấn luật lao động (hợp đồng lao động, sa thải, bảo hiểm xã hội, tranh chấp lao động…)</a></li>
                            <li><a href="/dich-vu/detail">Tư vấn luật thuế và tài chính (kê khai thuế, xử lý tranh chấp thuế, tối ưu thuế doanh nghiệp…)</a></li>
                            <li><a href="/dich-vu/detail">Tư vấn luật sở hữu trí tuệ (đăng ký nhãn hiệu, bản quyền, xử lý vi phạm…)</a></li>
                            <li><a href="/dich-vu/detail">Tư vấn luật bảo hiểm (bảo hiểm xã hội, bảo hiểm nhân thọ, tranh chấp bảo hiểm…)</a></li>
                            <li><a href="/dich-vu/detail">Tư vấn luật giao thông (tai nạn giao thông, xử phạt vi phạm hành chính…)</a></li>
                            <li><a href="/dich-vu/detail">Tư vấn luật hành chính (khiếu nại, tố cáo, thủ tục cấp giấy phép…)</a></li>
                        </ul>
                    </div>
                    <div className="small-container">
                        <h1 id="dai-dien-phap-ly">Dịch vụ <span>đại diện pháp lý</span></h1>
                        <ul className="small-container-description">
                            <li><a href="/dich-vu/detail">Đại diện đàm phán hợp đồng, giải quyết tranh chấp thương mại</a></li>    
                            <li><a href="/dich-vu/detail">Đại diện khách hàng trong các vụ kiện dân sự, hình sự, hành chính</a></li>    
                            <li><a href="/dich-vu/detail">Đại diện trước cơ quan nhà nước (tòa án, công an, thuế, sở hữu trí tuệ…)</a></li>      
                            <li><a href="/dich-vu/detail">Đại diện làm việc với ngân hàng, tổ chức tín dụng, đối tác kinh doanh</a></li>           
                        </ul>
                    </div>
                    <div className="small-container">
                        <h1 id="tranh-tung-tai-toa-an">Dịch vụ <span> tranh tụng tại tòa án</span></h1>
                        <ul className="small-container-description">
                            <li><a href="/dich-vu/detail">Luật sư bào chữa trong các vụ án hình sự</a></li> 
                            <li><a href="/dich-vu/detail">Luật sư đại diện trong các vụ án dân sự (tranh chấp hợp đồng, thừa kế, đất đai…)</a></li>
                            <li><a href="/dich-vu/detail">Luật sư bảo vệ quyền lợi trong các vụ án hành chính (khiếu kiện quyết định hành chính…)</a></li>
                            <li><a href="/dich-vu/detail">Luật sư tham gia tố tụng trong các vụ án lao động, kinh tế, thương mại</a></li>
                        </ul>
                    </div>
                    <div className="small-container">
                        <h1 id="soan-thao">Dịch vụ <span>soạn thảo và rà soát hợp đồng, văn bản pháp lý</span></h1>
                        <ul className="small-container-description">
                            <li><a href="/dich-vu/detail">Soạn thảo hợp đồng thương mại, hợp đồng lao động, hợp đồng thuê nhà…</a></li>
                            <li><a href="/dich-vu/detail">Rà soát, đánh giá rủi ro pháp lý của hợp đồng</a></li>
                            <li><a href="/dich-vu/detail">Soạn thảo đơn từ pháp lý (đơn khởi kiện, đơn khiếu nại, tố cáo, yêu cầu thi hành án…)</a></li>
                        </ul>
                    </div>
                    <div className="small-container">
                        <h1 id="phap-ly-doanh-nghiep">Dịch vụ <span>pháp lý cho doanh nghiệp</span></h1>
                        <ul className="small-container-description">
                            <li><a href="/dich-vu/detail">Thành lập, giải thể, mua bán, sáp nhập doanh nghiệp</a></li>
                            <li><a href="/dich-vu/detail">Xây dựng điều lệ công ty, nội quy lao động, quy chế hoạt động</a></li>
                            <li><a href="/dich-vu/detail">Hỗ trợ pháp lý cho doanh nghiệp trong quá trình hoạt động</a></li>
                            <li><a href="/dich-vu/detail">Dịch vụ luật sư nội bộ (theo tháng, theo vụ việc)</a></li>
                        </ul>
                    </div>
                    <div className="small-container">
                        <h1 id="ho-tro-thu-tuc">Dịch vụ <span>hỗ trợ thủ tục hành chính</span></h1>
                        <ul className="small-container-description">
                            <li><a href="/dich-vu/detail">Đăng ký kinh doanh, giấy phép đầu tư, giấy phép lao động cho người nước ngoài</a></li>
                            <li><a href="/dich-vu/detail">Đăng ký nhãn hiệu, bản quyền, sáng chế</a></li>
                            <li><a href="/dich-vu/detail">Cấp sổ đỏ, chuyển mục đích sử dụng đất, thủ tục sang tên sổ đỏ</a></li>
                        </ul>
                    </div>
                    <div className="small-container">
                        <h1 id="luat-su-rieng-ca-nhan">Dịch vụ <span>Luật sư Riêng cho Cá nhân</span></h1>
                        <ul className="small-container-description">
                            <li><a href="/dich-vu/detail">Chi tiết</a></li>
                        </ul>
                    </div>
                    <div className="small-container">
                        <h1 id="luat-su-rieng-doanh-nghiep">Dịch vụ <span>Luật sư Riêng cho Doanh nghiệp</span></h1>
                        <ul className="small-container-description">
                            <li><a href="/dich-vu/detail">Chi tiết</a></li>
                        </ul>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DichVu;