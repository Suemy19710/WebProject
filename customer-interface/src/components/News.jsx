import React from 'react';
import '../styles/News.scss';
import event from '../assets/event.png';

class News extends React.Component {
     render() {
            return (
                <>
                    <div className="page">
                        <div className="head">
                            <h>Tin tức <span>& Sự kiện</span></h>
                        </div>
                        {/* Body with service cards */}
                        <div className="body">
                            {[...Array(4)].map((_, index) => (
                                <div key={index} className="news-card">
                                    <div className="news-card-head">
                                        <img src={event}/>
                                    </div>
                                    <div className="news-card-body">
                                        <div className="time-post">
                                            <i class="fa-regular fa-clock"></i>
                                            <div className="date">27/10/2015</div>
                                        </div>
                                        <div className="news-card-body-title">Khi nào cần tìm luật sư?</div>
                                        <div className="news-card-body-description">
                                        Lorem ipsum dolor sit amet. Ut quas internos 33 beatae temporibus et molestiae quisquam non rerum inventore!                                 
                                        </div>                            
                                    </div>
                                    <div className="news-card-footer">
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
export default News;