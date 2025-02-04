import React from 'react';
import '../../styles/client/News.scss';
import event from '../../assets/event.png';
import {Navigate} from 'react-router-dom';

class News extends React.Component {
    state = {
        redirectToCardPage: false,  // State to control redirection
    };

    handleViewMore = () => {
        this.setState({ redirectToCardPage: true });  // Set the state to trigger redirection
    };
    render() {
        if (this.state.redirectToCardPage) {
            // If the state is set to true, navigate to the /tin-tuc/card route
            return <Navigate to="/tin-tuc/card" />;
        }

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
                                    <img src={event} alt="event" />
                                </div>
                                <div className="news-card-body">
                                    <div className="time-post">
                                        <i className="fa-regular fa-clock"></i>
                                        <div className="date">27/10/2015</div>
                                    </div>
                                    <div className="news-card-body-title">Khi nào cần tìm luật sư?</div>
                                    <div className="news-card-body-description">
                                        Lorem ipsum dolor sit amet. Ut quas internos 33 beatae temporibus et molestiae quisquam non rerum inventore!
                                    </div>
                                </div>
                                <div className="news-card-footer">
                                    <button className="view-more" onClick={() => this.handleViewMore()}>Xem thêm</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="footer">
                        <button className="footer-view-all">Xem tất cả</button>
                    </div>
                </div>
            </>
        );
    }
}

export default News;
