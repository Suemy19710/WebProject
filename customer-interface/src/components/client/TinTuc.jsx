import React from 'react';
import "../../styles/client/TinTuc.scss";
import event from "../../assets/event.png";
import {Navigate, redirect} from 'react-router-dom';

class TinTuc extends React.Component{
    state={
        redirectToCardPage: false,
    };
    handleViewMore = () => {
        this.setState({redirectToCardPage: true});
    };
    render() {
        if (this.state.redirectToCardPage) {
            return <Navigate to ="/tin-tuc/card"/>;
        }
        return (
            <div className="body-page">
                <div className="body-head">
                    <p>Tin tức & Sự kiện </p>
                </div>
                <div className="body">
                      {[...Array(10)].map((_, index) => (
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
                                <button className="view-more" onClick={() => this.handleViewMore()}>Xem thêm</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}
export default TinTuc;