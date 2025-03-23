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
            <i class="fa-solid fa-gavel"></i>
          </div>
          <h3 onClick={() => handleClick('/dich-vu')}>Dịch vụ tư vấn pháp lý</h3>          
          <div className="services__description">
              -Tư vấn luật doanh nghiệp <br/>
              -Tư vấn luật đất đai, bất động sản <br/>
              -Tư vấn luật hôn nhân & gia đình <br/>
              -Tư vấn luật lao động <br/>
              - Tư vấn luật thuế và tài chính <br/>
              -... <br/>
          </div>
        </div>
        <div className="services__card">
          <div className="services__icon">
          <i class="fa-solid fa-landmark"></i>                
            </div>
          <h3 onClick={() => handleClick('/dich-vu')}> Dịch vụ tranh tụng tại tòa án</h3>
          <div className="services__description">
              -Luật sư bào chữa trong các vụ án hình sự <br/>
              -Luật sư bảo vệ quyền lợi trong các vụ án hành chính <br/>
              
              -... <br/>
          </div>
        </div>
        <div className="services__card">
          <div className="services__icon">
          <i class="fa-solid fa-book-open"></i>
            </div>
          <h3 onClick={() => handleClick('/dich-vu')}>Dịch vụ soạn thảo và rà soát hợp đồng, văn bản pháp lý</h3>
          <div className="services__description">
          -Soạn thảo hợp đồng thương mại, hợp đồng lao động, hợp đồng thuê nhà… <br/>
          -Soạn thảo đơn từ pháp lý  <br/>

          </div>
        </div>
        <div className="services__card">
          <div className="services__icon">
          <i class="fa-solid fa-industry"></i>         
            </div>
          <h3 onClick={() => handleClick('/dich-vu')}>Dịch vụ pháp lý cho doanh nghiệp</h3>
          <div className="services__description">
          -Thành lập, giải thể, mua bán, sáp nhập doanh nghiệp <br/>
          -Xây dựng điều lệ công ty, nội quy lao động, quy chế hoạt động <br/>
          
          -... <br/>
          </div>
        </div>
        <div className="services__card">
          <div className="services__icon">
          <i class="fa-solid fa-envelope"></i>           
            </div>
          <h3 onClick={() => handleClick('/dich-vu')}>Dịch vụ hỗ trợ thủ tục hành chính</h3>
          <div className="services__description">
              -Đăng ký kinh doanh, giấy phép đầu tư, giấy phép lao động cho người nước ngoài <br/>
              -Đăng ký nhãn hiệu, bản quyền, sáng chế <br/>   
              -... <br/>
          </div>
        </div>
        <div className="services__card">
          <div className="services__icon">
          <i class="fa-solid fa-user"></i>
            </div>
          <h3 onClick={() => handleClick('/dich-vu')}>Dịch vụ Luật sư Riêng cho Cá nhân</h3>
          <div className="services__description">
          -Hỗ trợ pháp lý cá nhân về các vấn đề như thừa kế, hôn nhân gia đình, tranh chấp tài sản và các vấn đề dân sự.<br/>
          -... <br/>
          </div>
        </div>
        <div className="services__card">
          <div className="services__icon">
          <i class="fa-solid fa-users"></i>
            </div>
          <h3 onClick={() => handleClick('/dich-vu')}>Dịch vụ Luật sư Riêng cho Doanh nghiệp</h3>
          <div className="services__description">
          -Cung cấp giải pháp pháp lý cho doanh nghiệp, bao gồm tư vấn hợp đồng, thuế, sở hữu trí tuệ và xử lý tranh chấp kinh doanh.<br/>
          -... <br/>
          </div>
        </div>
        <div className="services__card">
          <div className="services__icon">
          <i class="fa-solid fa-user-tie"></i>
            </div>
          <h3 onClick={() => handleClick('/dich-vu')}>Dịch vụ đại diện pháp lý</h3>
          <div className="services__description">
            -Đại diện đàm phán hợp đồng, giải quyết tranh chấp thương mại <br/>
            -Đại diện khách hàng trong các vụ kiện dân sự, hình sự, hành chính <br/>
            -... <br/>
          </div>
        </div>


      </div>
    </section>
  );
};

export default IntroductionService;