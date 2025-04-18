import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import news1 from '../../assets/news1.jpg';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../../styles/client/TinTucDetail.scss';

const TinTucDetail = () => {
    const { title } = useParams(); 
    const [post, setPost] = useState(null); 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();


    const createSlugTitle = (title) => {
        if (!title) return '';
        return title
            .toLowerCase()
            .trim()
            .replace(/[\s+]/g, '-') // Replace spaces with hyphens
            .replace(/[^a-z0-9-]/g, '') // Remove non-alphanumeric characters except hyphens
            .replace(/-+/g, '-'); // Replace multiple hyphens with a single hyphen
    };
    
    useEffect(() => {
        setLoading(true);
        fetch('https://luatkimngoc-vn.onrender.com/api/tin-tuc-&-su-kien')
            .then((res) => res.json())
            .then((data) => {
                if (Array.isArray(data) && data.length > 0) {
                    const matchedPost = data.find((item) => 
                        (item.slug && item.slug === title) || 
                        (item.title && createSlugTitle(item.title) === title)
                    );
                    if (matchedPost) {
                        setPost(matchedPost);
                    } else {
                        setError('Bài viết không tồn tại.');
                        setPost(null);
                    }
                } else {
                    setError('Không có dữ liệu bài viết.');
                }
                setLoading(false);
            })
            .catch((err) => {
                console.error('Error fetching posts:', err);
                setError('Không thể tải bài viết.');
                setLoading(false);
            });
    }, [title]);

    const formattedDate = post?.createdAt
        ? (() => {
            const postDate = new Date(post.createdAt);
            return !isNaN(postDate.getTime())
                ? `${String(postDate.getDate()).padStart(2, '0')}/${String(postDate.getMonth() + 1).padStart(2, '0')}/${postDate.getFullYear()}`
                : 'Invalid date';
        })()
        : 'N/A';

    if (loading) {
        return (
            <div className="tinTucDetail-container">
                <p>Đang tải...</p>
            </div>
        );
    }

    if (error || !post) {
        return (
            <div className="tinTucDetail-container">
                <p>{error || 'Bài viết không tồn tại.'}</p>
            </div>
        );
    }

    return (
        <div className="tinTucDetail-container">
            <div className="tinTucDetail-device">
                <div className="container-header">
                    <div className="container-header-bg"></div>
                    <div className="container-header-content">
                        <h1>Tin tức & Sự kiện</h1>
                    </div>
                </div>
                <div className="container-body">
                    <div className="container-body-bg"></div>
                    <div className="container-body-content">
                        <div className="content">
                            <div className="title">{post.title}</div>
                            <div className="dateOfRelease">
                                {/* <i className="fa-regular fa-clock"></i> */}
                                <div className="date">Đăng bài: {formattedDate}</div>
                            </div>
                            <div className="body">
                                {/* {post.image && (
                                    <img
                                        src={`https://luatkimngoc-vn.onrender.com/uploads/${post.image}`}
                                        alt={post.title}
                                        onError={(e) => (e.target.src = news1)} // Fallback image
                                    />
                                )} */}
                                <div dangerouslySetInnerHTML={{ __html: post.content }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TinTucDetail;