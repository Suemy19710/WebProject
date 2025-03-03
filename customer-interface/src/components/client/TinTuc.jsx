import React, {useEffect, useState} from 'react';
import '../../styles/client/TinTuc.scss';
import { useNavigate } from 'react-router-dom';
import { createSlugTitle } from '../../utils/slugUtils';
import event from  '../../assets/event.png';

const TinTuc = () => {
    const[posts, setPosts] = useState([]);
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
                // console.log("Response Status:", res.status);
                return res.json();
            })
            .then((data) => {
                // console.log("Data received:", data); // Check if data is being received
                setPosts(data);
            })
            .catch((err) => console.log('Error fetching post: ', err));
    }, [])
    return(
        <div className="tinTuc-container">
            <div className="tinTuc-device">
            <div className="head">
                <div className="head-bg"></div>
                    <h1>Tin tức <span> & Sự kiện</span></h1>
            </div>
            <div className="body">
                {posts.length > 0 ? (
                    posts.map((post) => {
                        const postDate = new Date(post.createdAt);
                        const formattedDate = !isNaN(postDate.getTime()) 
                            ? `${String(postDate.getDate()).padStart(2, '0')}/${String(postDate.getMonth() + 1).padStart(2, '0')}/${postDate.getFullYear()}`
                            : 'Invalid date';  
                        
                        // console.log("Parsed Date:", postDate, "Formatted Date:", formattedDate); // Debugging
                        return (
                            <div key={post._id}>
                                <div className="news-card">
                            <div className="news-card-head">
                               {/* {post.image ? (
                                    <img src={post.image} alt="event"/>
                                ) : (
                                    <img src={event} alt="event"/>
                                )} */}
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
            </div>
          
        </div>
    );
}
export default TinTuc;
