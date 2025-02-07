import React, {useEffect, useState} from 'react';
import '../../styles/client/News.scss';
import event from '../../assets/event.png';
const SmallPost = () => {
    const[smallPost, setSmallPost] = useState([]);
    const truncateText = (text, length) => {
        if (text.length > length) {
            return text.substring(0, length) + '...';
        } 
        return text;
    };

    useEffect(() => {
        fetch('http://localhost:5000/api/blogs')
            .then((res) => {
                console.log("Response Status:", res.status); // Check if status is OK
                return res.json();
            })
            .then((data) => {
                console.log("Data received:", data); // Check if data is being received
                setSmallPost(data);
            })
            .catch((err) => console.log('Error fetching post: ', err));
    }, []);
    
    return(
        <div className="page">
            <div className="head">
                <h1>Tin tức <span>& Sự kiện</span></h1>
            </div>
            <div className="body">
                {smallPost.length > 0 ? (
                    smallPost.map((post) => {
                        return (
                            <div key={post._id}>
                             <div className="news-card">
                            <div className="news-card-head">
                                <img src={event} alt="event" />
                            </div>
                            <div className="news-card-body">
                                <div className="time-post">
                                    <i className="fa-regular fa-clock"></i>
                                    <div className="date"><em>{new Date(post.createdAt).toLocaleString()}</em></div>
                                </div>
                                <div className="news-card-body-title">{truncateText(post.title, 60)}</div>
                                <div className="news-card-body-description">{truncateText(post.content, 100)}</div>
                            </div>
                            <div className="news-card-footer">
                                <button className="view-more">Xem thêm</button>
                            </div>
                        </div>
                        </div>
                        )
                    })

                ) : (
                    <p>No blog posts available.</p>
                )}
            </div>
        </div>
    );
}
export default SmallPost;
