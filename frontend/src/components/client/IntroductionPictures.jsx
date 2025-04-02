import React from 'react'; 
import "../../styles/client/IntroductionPictures.scss"; 
import pic1 from '../../assets/intro-pics/1.jpg'; 
import pic2 from '../../assets/intro-pics/2.jpg'; 
import pic3 from '../../assets/intro-pics/3.jpg'; 
import pic4 from '../../assets/intro-pics/4.jpg'; 
import pic5 from '../../assets/intro-pics/5.jpg'; 

const IntroductionPictures = () => {
    return(
        <section className="intro-pictures">
            <div className="intro-pictures__overlay">
                <p>Với đội ngũ luật sư giàu kinh nghiệm và tận tâm, Luật Kim Ngọc cam kết cung cấp những dịch vụ pháp lý chất lượng cao, bảo vệ quyền lợi tối đa cho khách hàng. Chúng tôi luôn nỗ lực mang đến những giải pháp pháp lý toàn diện, giúp khách hàng an tâm vượt qua mọi thử thách pháp lý trong cuộc sống và công việc.</p>
            </div>
            <div className="intro-pictures__grid">
                <div className="intro-pictures__item">
                    <img src={pic3} alt="Introduction 1" />
                </div>
                <div className="intro-pictures__item">
                    <img src={pic2} alt="Introduction 2" />
                </div>
                <div className="intro-pictures__item">
                    <img src={pic4} alt="Introduction 3" />
                </div>
                <div className="intro-pictures__item">
                    <img src={pic1} alt="Introduction 4" />
                </div>
                <div className="intro-pictures__item">
                    <img src={pic5} alt="Introduction 5" />
                </div>
            </div>
        </section>
    ); 
}; 
export default IntroductionPictures; 