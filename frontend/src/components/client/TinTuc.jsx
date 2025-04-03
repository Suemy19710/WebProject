import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createSlugTitle } from '../../utils/slugUtils';
import '../../styles/client/TinTuc.scss';
import news1 from '../../assets/news1.jpg';

const TinTuc = () => {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    
    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;
    const totalPages = Math.ceil(posts.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = posts.slice(startIndex, endIndex);

    const truncateText = (text, length) => {
        if (text.length > length) {
            return text.substring(0, length) + '...';
        }
        return text;
    };

    const handleClick = (postId, postTitle) => {
        const slugifiedTitle = createSlugTitle(postTitle);
        navigate(`/tin-tuc/${slugifiedTitle}`);
    };

    useEffect(() => {
        fetch(`${API_URL}/tin-tuc-&-su-kien`)
            .then((res) => res.json())
            .then((data) => setPosts(data))
            .catch((err) => console.log('Error fetching posts: ', err));
    }, []);

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const goToPage = (page) => {
        setCurrentPage(page);
    };

    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

    return (
        <div className="tinTuc-container">
            <div className="tinTuc-device">
                <div className="container-header">
                    <div className="container-header-bg"></div>
                    <div className="container-header-content">
                        <h1>Tin tức & Sự kiện</h1>
                    </div>
                </div>
                <div className="container-body">
                    <div className="container-body-content">
                        <div className="news__grid">
                            {posts.length > 0 ? (
                                <>
                                    {currentItems.map((post) => {
                                        const postDate = new Date(post.createdAt);
                                        const formattedDate = !isNaN(postDate.getTime())
                                            ? `${String(postDate.getDate()).padStart(2, '0')}/${String(postDate.getMonth() + 1).padStart(2, '0')}/${postDate.getFullYear()}`
                                            : 'Invalid date';
                                        return (
                                            <div 
                                                className="news__card" 
                                                key={post._id}
                                                onClick={() => handleClick(post._id, post.title)}
                                            >
                                                <div className="news__img">
                                                    {post.image ? (
                                                        <img src={`${API_URL}/uploads/${post.image}`} alt="event" />
                                                    ) : (
                                                        <img src={news1} alt="news1" />
                                                    )}
                                                </div>
                                                <div className="news__date">
                                                    <i className="fa-regular fa-clock"></i>
                                                    <div className="date"><em>{formattedDate}</em></div>
                                                </div>
                                                <div className="news__title">{truncateText(post.title, 60)}</div>
                                                <div className="news__excerpt">
                                                    <div dangerouslySetInnerHTML={{ __html: truncateText(post.content, 200) }}></div>
                                                </div>
                                                <div className="news__footer">
                                                    <i class="fa-solid fa-arrow-right" onClick={() => handleClick(post._id, post.title)}></i>
                                                </div>
                                            </div>
                                        );
                                    })}
                                    <div className="pagination">
                                        <button
                                            onClick={goToPreviousPage}
                                            disabled={currentPage === 1}
                                            className="pagination__button"
                                        >
                                            <i className="fa-solid fa-arrow-left"></i>
                                        </button>
                                        <div className="pagination__numbers">
                                            {pageNumbers.map((page) => (
                                                <button
                                                    key={page}
                                                    onClick={() => goToPage(page)}
                                                    className={`pagination__number ${currentPage === page ? 'active' : ''}`}
                                                >
                                                    {page}
                                                </button>
                                            ))}
                                        </div>
                                        <button
                                            onClick={goToNextPage}
                                            disabled={currentPage === totalPages}
                                            className="pagination__button"
                                        >
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <p>No blog posts available.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TinTuc;