import React, {useEffect, useState} from 'react';
import '../../styles/client/News.scss';
import event from '../../assets/event.png';
import { useNavigate} from 'react-router-dom';
import { createSlugTitle } from '../../utils/slugUtils';


const News = () => {
    const [news , setNews] = useState([]);
    const truncateText = (text, length) => {
        if (text.length > length) {
            return text.substring(0, length) + '...';
        }
        return text;
    };
    const navigate = useNavigate();
    const handleClick = (postId, postTitle) => {
        const slugifiedTitle = createSlugTitle(postTitle);
        navigate(`/tin-tuc/${slugifiedTitle}`);
    };
    
    useEffect(() => {
        fetch('http://localhost:5000/api/tin-tuc')
            .then((res) => {
                // console.log("Response Status:", res.status); // Check if status is OK
                return res.json();
            })
            .then((data) => {
                // console.log("Data received:", data); // Check if data is being received
                setNews(data);
            })
            .catch((err) => console.log('Error fetching post: ', err));
    }, []);

    const handleViewMore = () => {
       navigate(`/tin-tuc`); 
    };
        return (
            <div className="news-container">
                <div className="head">
                    <h1>Tin tức <span>& Sự kiện</span></h1>
                </div>
                    <div className="body">
                        {news.length > 0 ? (
                            news.slice(0, 4).map((post) => {
                                const postDate = new Date(post.createdAt);
                                // Check if date is valid before formatting
                                const formattedDate = !isNaN(postDate.getTime()) 
                                    ? `${String(postDate.getDate()).padStart(2, '0')}/${String(postDate.getMonth() + 1).padStart(2, '0')}/${postDate.getFullYear()}`
                                    : 'Invalid date';  
                                
                                // console.log("Parsed Date:", postDate, "Formatted Date:", formattedDate); // Debugging
                                return (
                                    <div key={post._id}>
                                        <div className="news-card">
                                    <div className="news-card-head">
                                        {post.image ? (
                                            <img src={`http://localhost:5000/uploads/${post.image}`} alt="event"/>
                                        ) : (
                                            <img src={event} alt="event"/>
                                        )}
                                    </div>
                                    <div className="news-card-body">
                                        <div className="time-post">
                                            <i className="fa-regular fa-clock"></i>
                                            <div className="date"><em>{formattedDate}</em></div>
                                        </div>
                                        <div className="news-card-body-title">{truncateText(post.title, 60)}</div>
                                        <div className="news-card-body-description">{truncateText(post.content, 100)}</div>
                                    </div>
                                    <div className="news-card-footer">
                                        <button className="view-more" onClick={() => handleClick(post._id, post.title)}>Xem thêm</button>
                                    </div>
                                </div>
                                </div>
                                )
                            })
        
                        ) : (
                            <p>No blog posts available.</p>
                        )}
                    </div>

                <div className="footer">
                    <button className="footer-view-all" onClick={handleViewMore}>Xem tất cả</button>
                </div>
            </div>
    );
}


export default News;