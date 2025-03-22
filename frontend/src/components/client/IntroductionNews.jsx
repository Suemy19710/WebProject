import React from 'react'; 
import '../../styles/client/IntroductionNews.scss'; 
import news1 from '../../assets/news1.jpg'; 
import '@fortawesome/fontawesome-free/css/all.min.css';
const News = () =>{
    return(
        <section className="news">
            <h2>Tin tức & sự kiện</h2>
            <div className="news__grid">
                <div className="news__card">
                    <img src={news1} alt="News 1" />
                    <p className="news__date">20/05/2020</p>
                    <h3>A pandemic may cause life insurance coverage</h3>
                    <p className="news__excerpt">In the aftermath of the Covid epidemic, life insurance firms have been more cautious and have tightened </p>
                    <i class="fa-solid fa-arrow-right"></i>
                </div>
                <div className="news__card">
                    <img src={news1} alt="News 1" />
                    <p className="news__date">20/05/2020</p>
                    <h3>A pandemic may cause life insurance coverage</h3>
                    <p className="news__excerpt">In the aftermath of the Covid epidemic, life insurance firms have been more cautious and have tightened </p>
                    <i class="fa-solid fa-arrow-right"></i>
                </div>
                <div className="news__card">
                    <img src={news1} alt="News 1" />
                    <p className="news__date">20/05/2020</p>
                    <h3>A pandemic may cause life insurance coverage</h3>
                    <p className="news__excerpt">In the aftermath of the Covid epidemic, life insurance firms have been more cautious and have tightened </p>
                    <i class="fa-solid fa-arrow-right"></i>
                </div>
                <div className="news__card">
                    <img src={news1} alt="News 1" />
                    <p className="news__date">20/05/2020</p>
                    <h3>A pandemic may cause life insurance coverage</h3>
                    <p className="news__excerpt">In the aftermath of the Covid epidemic, life insurance firms have been more cautious and have tightened </p>
                    <i class="fa-solid fa-arrow-right"></i>
                </div>
                
            </div>
            <div className="news__footer">
                <button className="news__more">Xem thêm</button>
            </div>
        </section>
    ); 
}; 
export default News; 