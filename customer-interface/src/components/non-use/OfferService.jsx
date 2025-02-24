import React from 'react';
import '../../styles/client/OfferService.scss';
import pic from '../../assets/okay.jpg';

class OfferService extends React.Component {
    render() {
        return (
            <>
                <div className="background">
                    <div className="head-title">
                        <h>Dịch vụ <span>tiêu biểu</span></h>
                    </div>
                    {/* Body with service cards */}
                    <div className="body">
                        {[...Array(10)].map((_, index) => (
                            <div key={index} className="service-card">
                                <div className="service-card-head">
                                    <img src={pic}/>
                                </div>
                                <div className="service-card-body">
                                    <div className="service-card-body-title">Mua bán & Sáp Nhập</div>
                                    <div className="service-card-body-description">
                                    Lorem ipsum dolor sit amet. Ut quas internos 33 beatae temporibus et molestiae quisquam non rerum inventore!                                 
                                    </div>                            
                                </div>
                                <div className="service-card-footer">
                                    <button className="view-more">Xem thêm</button>
                                </div>
                         </div>
                        ))}
                       
                    </div>
                    <div className="footer">
                        <button className="footer-view-all">Xem tất cả</button>
                    </div>
                </div>

            </>
        )
    }
}
export default OfferService;