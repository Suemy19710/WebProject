import React, {useEffect, useState} from 'react'; 
import '../../styles/client/IntroductionNews.scss'; 
import { useNavigate } from 'react-router-dom';
// import news1 from '../../assets/news1.jpg'; 
import { createSlugTitle } from '../../utils/slugUtils';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {storage} from '../../firebase'; 
import {ref, getDownloadURL} from 'firebase/storage'; 
const News = () =>{
    const [news , setNews] = useState([]);
    const [defaultImageUrl, setDefaultImageUrl] = useState(''); 
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
        // Fetch the default image URL from Firebase Storage
        const defaultImageRef = ref(storage, 'default-images/news1.jpg'); // Adjust the path to your default image
        getDownloadURL(defaultImageRef)
            .then((url) => {
                setDefaultImageUrl(url); // Set the default image URL
            })
            .catch((error) => {
                console.error('Error fetching default image:', error);
                // Fallback to a placeholder URL if the default image fails to load
                setDefaultImageUrl('https://via.placeholder.com/300x200?text=Default+Image');
            });

        // Fetch news from your backend API
        fetch(`${API_URL}/tin-tuc-&-su-kien`)
            .then((res) => res.json())
            .then((data) => {
                // For each post, if it has an image path in Firebase Storage, fetch its URL
                const newsWithImageUrls = data.map(async (post) => {
                    if (post.image) {
                        try {
                            const imageRef = ref(storage, `images/${post.image}`);
                            const imageUrl = await getDownloadURL(imageRef);
                            return { ...post, imageUrl };
                        } catch (error) {
                            console.error(`Error fetching image for post ${post._id}:`, error);
                            return { ...post, imageUrl: defaultImageUrl };
                        }
                    }
                    return { ...post, imageUrl: defaultImageUrl };
                });

                // Resolve all promises and set the news
                Promise.all(newsWithImageUrls).then((updatedNews) => {
                    setNews(updatedNews);
                });
            })
            .catch((err) => console.log('Error fetching posts:', err));
    }, [defaultImageUrl]);
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
                                    <img
                                        src={post.imageUrl || defaultImageUrl}
                                        alt={post.title || 'event'}
                                    />
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
                    )
                     })
                ) : (
                    <p>No blog posts available.</p>
                )};
                
            </div>
            <div className="news_footer">
                <button className="news__more" onClick={handleClickToDichVuPage}>Xem thêm</button>
            </div>
        </section>
    ); 
}; 
export default News; 
