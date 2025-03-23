import React , {useEffect, useState}from 'react'; 
import {useParams} from 'react-router-dom';

import '../../styles/client/TinTucDetail.scss'; 
const TinTucDetail = () => {
    const {title} = useParams() ; 
    const {post, setPost} = useState(null); 
    const [loading, setLoading] = useState(null); 
    useEffect(() => {
        const isSlug = !title.includes(" ");
        const slugifiedTitle = isSlug ? title : createSlugTitle(title);

        fetch(`http://localhost:5000/api/tin-tuc?slug=${slugifiedTitle}`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {        
                if (Array.isArray(data) && data.length > 0) {
                    const correctedPost = data.find((item) => item.slug === slugifiedTitle);
                    console.log("Post found using find():", correctedPost);
                    setPost(correctedPost || data[0]);
                } else {
                    console.log("Post not found.");
                }
                setLoading(false);
            })
            .catch((err) => {
                console.log('Error fetching post details:', err);
                setLoading(false);
            });
    }, [title]);
    const formattedDate = post?.createdAt
    ? (() => {
        try {
            const postDate = new Date(post.createdAt);
            if (!isNaN(postDate.getTime())) {
                const day = String(postDate.getDate()).padStart(2, '0'); 
                const month = String(postDate.getMonth() + 1).padStart(2, '0');
                const year = postDate.getFullYear();
                return `${day}/${month}/${year}`;
            }
            return "Invalid date";
        } catch (error) {
            console.error("Error parsing date:", error);
            return "Invalid date";
        }
    })()
    : "Invalid date";
    return(
        <div className="tinTucDetail-container">
            <div className="tinTucDetail-device">
                <div className="container-header">
                    <div className="container-header-bg"></div>
                    <div className="container-header-content">
                        <h1>Tin tức & Sự kiện </h1>
                    </div>
                </div>
                <div className="container-body">
                    <div className="container-body-bg"></div>
                    <div className="container-body-content">
                     
                            {post ? (
                                <div className="content">
                                    <h3 className="title">{post.title}</h3>
                                    <div className="dateOfRelease">
                                        <i class="fa-regular fa-clock"></i>
                                        <div className="date">{formattedDate}</div>
                                    </div>
                                    <div className="body">   
                                        <div className="body-description">
                                            <div dangerouslySetInnerHTML={{ __html:post.content}}></div>
                                        </div>
                                    </div>

                                </div>
                            ):( <p>Loading...</p>)}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TinTucDetail; 