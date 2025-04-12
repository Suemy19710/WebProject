import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom'; 
import '../../styles/client/IntroductionService.scss'; 

const IntroductionService = () => {
  const navigate = useNavigate(); 
  const handleClick = (url) => {navigate(url)}; 
  return (
    <section className="services">
      <h2>Dịch Vụ Tiêu Biểu</h2>
      <div className="services__grid">
        <div className="services__card">
          <div className="services__icon">                                
            <i className="fa-solid fa-gavel"></i>
          </div>
          <h3 onClick={() => handleClick('/dich-vu')}>Dịch vụ tư vấn pháp lý</h3>  
       
          <ul className="services__description">
            <li><a href="/dich-vu">Tư vấn luật doanh nghiệp</a></li>
            <li><a href="/dich-vu">Tư vấn luật đất đai, bất động sản</a></li>
            <li><a href="/dich-vu">Tư vấn luật hôn nhân & gia đình</a></li>
            <li><a href="/dich-vu">Tư vấn luật lao động</a></li>
            <li><a href="/dich-vu">Tư vấn luật thuế và tài chính</a></li>
          </ul>
        </div>
        <div className="services__card">
          <div className="services__icon">
            <i className="fa-solid fa-landmark"></i>                
          </div>
          <h3 onClick={() => handleClick('/dich-vu')}> Dịch vụ tranh tụng tại tòa án</h3>
          <ul className="services__description">
            <li><a href="/dich-vu">Luật sư bào chữa trong các vụ án hình sự</a></li>
            <li><a href="/dich-vu">Luật sư bảo vệ quyền lợi trong các vụ án hành chính</a></li>
          </ul>
        </div>
        <div className="services__card">
          <div className="services__icon">
            <i className="fa-solid fa-book-open"></i>
          </div>
          <h3 onClick={() => handleClick('/dich-vu')}>Dịch vụ soạn thảo và rà soát hợp đồng, văn bản pháp lý</h3>
          <ul className="services__description">
            <li><a href="/dich-vu">Soạn thảo hợp đồng thương mại, hợp đồng lao động, hợp đồng thuê nhà</a></li>
            <li><a href="/dich-vu">Soạn thảo đơn từ pháp lý</a></li>
          </ul>
        </div>
        <div className="services__card">
          <div className="services__icon">
            <i className="fa-solid fa-industry"></i>         
          </div>
          <h3 onClick={() => handleClick('/dich-vu')}>Dịch vụ pháp lý cho doanh nghiệp</h3>
          <ul className="services__description">
            <li><a href="/dich-vu">Thành lập, giải thể, mua bán, sáp nhập doanh nghiệp</a></li>
            <li><a href="/dich-vu">Xây dựng điều lệ công ty, nội quy lao động, quy chế hoạt động</a></li>
          </ul>
        </div>
        <div className="services__card">
          <div className="services__icon">
            <i className="fa-solid fa-envelope"></i>           
          </div>
          <h3 onClick={() => handleClick('/dich-vu')}>Dịch vụ hỗ trợ thủ tục hành chính</h3>
          <ul className="services__description">
            <li><a href="/dich-vu">Đăng ký kinh doanh, giấy phép đầu tư, giấy phép lao động cho người nước ngoài</a></li>
            <li><a href="/dich-vu">Đăng ký nhãn hiệu, bản quyền, sáng chế</a></li>
          </ul>
        </div>
        <div className="services__card">
          <div className="services__icon">
            <i className="fa-solid fa-user"></i>
          </div>
          <h3 onClick={() => handleClick('/dich-vu')}>Dịch vụ Luật sư Riêng cho Cá nhân</h3>
          <ul className="services__description">
            <li><a href="/dich-vu">Hỗ trợ pháp lý cá nhân về các vấn đề như thừa kế, hôn nhân gia đình, tranh chấp tài sản và các vấn đề dân sự</a></li>
          </ul>
        </div>
        <div className="services__card">
          <div className="services__icon">
            <i className="fa-solid fa-users"></i>
          </div>
          <h3 onClick={() => handleClick('/dich-vu')}>Dịch vụ Luật sư Riêng cho Doanh nghiệp</h3>
          <ul className="services__description">
            <li><a href="/dich-vu">Cung cấp giải pháp pháp lý cho doanh nghiệp, bao gồm tư vấn hợp đồng, thuế, sở hữu trí tuệ và xử lý tranh chấp kinh doanh</a></li>
          </ul>
        </div>
        <div className="services__card">
          <div className="services__icon">
            <i className="fa-solid fa-user-tie"></i>
          </div>
          <h3 onClick={() => handleClick('/dich-vu')}>Dịch vụ đại diện pháp lý</h3>
          <ul className="services__description">
            <li><a href="/dich-vu">Đại diện đàm phán hợp đồng, giải quyết tranh chấp thương mại</a></li>
            <li><a href="/dich-vu">Đại diện khách hàng trong các vụ kiện dân sự, hình sự, hành chính</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default IntroductionService;