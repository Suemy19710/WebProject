import React, {useEffect, useState} from 'react'; 
import '../../styles/client/IntroductionNews.scss'; 
import { useNavigate } from 'react-router-dom';
import news1 from '../../assets/news1.jpg'; 
import { createSlugTitle } from '../../utils/slugUtils';
import '@fortawesome/fontawesome-free/css/all.min.css';

const stripHtml = (html) => {
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.textContent || div.innerText || ''; 
}; 
const News = () =>{
    const [news , setNews] = useState([]);
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
    useEffect (() => {
        fetch('https://luatkimngoc-vn.onrender.com/api/tin-tuc-&-su-kien')
            .then((res) => res.json())
            .then((data) => setNews(data))
            .catch((err) => console.log('Error fetching posts:', err));
    }, [])
    const navigate = useNavigate(); 
    const handleClickToDichVuPage = () => {navigate('/tin-tuc')}; 
    return(
        <section className="news">
            <h2>Tin tức & sự kiện</h2>
            <div className="news__grid">
                {news.length > 0 ? (
                     news.slice(0, 4).map((post) => {
                        const postDate = new Date(post.createdAt);
                        const formattedDate = !isNaN(postDate.getTime()) 
                            ? `${String(postDate.getDate()).padStart(2, '0')}/${String(postDate.getMonth() + 1).padStart(2, '0')}/${postDate.getFullYear()}`
                            : 'Invalid date';  
                    return(
                          <div 
                                className="news__card" 
                                key={post._id}
                                onClick={() => handleClick(post._id, post.title)}
                            >
                            <div className="news__img">
                                    {post.image ? (
                                        <img src={post.image} alt={post.title} />
                                    ) : (
                                        <img src={news1} alt="Default News" />
                                    )}
                            </div>
                            <div className="news__date">
                                {/* <i className="fa-regular fa-clock"></i> */}
                                <div className="date">Đăng bài: <em>{formattedDate}</em></div>
                            </div>
                            <div className="news__title">{truncateText(post.title, 60)}</div>
                            <div className="news__excerpt">
                                {truncateText(stripHtml(post.content), 200)}
                            </div>
                            <div className="news__footer">
                                <i class="fa-solid fa-arrow-right" onClick={() => handleClick(post._id, post.title)}></i>
                            </div>
                        </div>
                    )
                     })
                ) : (
                    <p>Không có bài đăng blog nào có sẵn.</p>
                )};
                
            </div>
            <div className="news_footer">
                <button className="news__more" onClick={handleClickToDichVuPage}>Xem thêm</button>
            </div>
        </section>
    ); 
}; 
export default News; 
