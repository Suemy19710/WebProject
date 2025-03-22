import React from 'react'; 
import '../../styles/client/IntroductionLawyers.scss'; 
import lawyer1 from '../../assets/lawyers/Luat-Su-Van.jpg'; 
import lawyer2 from '../../assets/lawyers/Luat-Su-Vu-Duy-Nam.jpg'; 
import lawyer3 from '../../assets/lawyers/Luat-Su-Dang-Nhu-Bao-Chau.jpg'; 

const IntroductionLawyers = () => {
    return(
        <section className="intro-lawyers">
            <h2>Đội ngũ luật sư</h2>
            <div className="intro-lawyers__grid">
                <div className="intro-lawyers__card">
                    <img src={lawyer1} alt="Lawyer 1" />
                    <h3>Luật sư - ThS Thái Thanh Vân</h3>
                    <div className="short-description">
                        <p>SDT: 091855555</p>
                        <p>Email: thaithanhvan@gmail.com</p>
                    </div>
                    
                    <button>Xem thêm</button>
                </div>
                <div className="intro-lawyers__card">
                    <img src={lawyer2} alt="Lawyer 2" />
                    <h3>Luật sư - ThS Vũ Duy Nam</h3>
                    <div className="short-description">
                        <p>SDT: 091855555</p>
                        <p>Email: thaithanhvan@gmail.com</p>
                    </div>
                    <button>Xem thêm</button>
                </div>
                <div className="intro-lawyers__card">
                    <img src={lawyer3} alt="Lawyer 2" />
                    <h3>Luật sư - ThS Đặng Như Bảo Châu</h3>
                    <div className="short-description">
                        <p>SDT: 091855555</p>
                        <p>Email: thaithanhvan@gmail.com</p>
                    </div>                    
                    <button>Xem thêm</button>
                </div>
             
            </div>
            <div className="intro-lawyers__footer">
                <button>Xem thêm luật sư</button>
            </div>
        </section>
    )
}
export default IntroductionLawyers; 