import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import '../../styles/client/TinTucCard.scss';
import { createSlugTitle } from '../../utils/slugUtils';
import event from  '../../assets/event.png';


const TinTucDetail = () => {
    const {title} = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(null);
    // useEffect(() => {
    //     window.scrollTo(0,0);
    // }, [title]);
    useEffect(() => {
        const isSlug = !title.includes(" ");
        const slugifiedTitle = isSlug ? title : createSlugTitle(title);

        fetch(`http://localhost:5000/api/tin-tuc?slug=${slugifiedTitle}`)
            .then((res) => {
                console.log("Response Status:", res.status);
                return res.json();
            })
            .then((data) => {
                console.log("Fetched data:", data); 
        
                if (Array.isArray(data) && data.length > 0) {
                    console.log("DATA");
                    console.log(data);
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

    
    return (
        <div className="post-detail">
            {post ? (
                <div className="container-card">
                    <div className="title">
                        <h1>{post.title}</h1>
                        <div className="time-post">
                        <i class="fa-regular fa-clock"></i>
                        <div className="date">{formattedDate}</div>
                    </div>
                    </div>
                     <div className="body">
                        <div className="img">
                            {post.image ? (
                                <img src={`http://localhost:5000/uploads/${post.image}`} alt="event"/>
                            ) : (
                                <img src={event} alt="event"/>
                            )}
                        </div>
                        <div className="body-description">
                            {post.content}
                        </div>
                    </div>
                    

                </div>
            ):(
                <p>Loading...</p>
            )}
        </div>
    );
};
export default TinTucDetail;