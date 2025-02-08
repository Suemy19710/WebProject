import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import { createSlugTitle } from '../../utils/slugUtils';

const PostDetail = () => {
    const {title} = useParams();
    const [post, setPost] = useState(null);
    useEffect(() => {
        const isSlug = !title.includes(" ");
        const slugifiedTitle = isSlug ? title : createSlugTitle(title);
        // const slugifiedTitle = createSlugTitle(title); // Ensure consistent slug formatting
        // console.log("Generated Slugified Title:", slugifiedTitle);
        fetch(`http://localhost:5000/api/blogs?slug=${slugifiedTitle}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.length > 0) {
                    setPost(data[2]);
                // if (data && !data.error) {
                //     setPost(data); 
                } else {
                    console.log('Post not found.');
                }
            })
            .catch((err) => console.log('Error fetching post details:', err));
    }, [title]);

    const formattedDate = post ? (() => {
        const postDate = new Date(post.createdAt);
        return postDate instanceof Date && !isNaN(postDate)
            ? postDate.toLocaleString()
            : 'Invalid date';
    })() : null;
    // const formattedDate = post?.createdAt 
    // ? new Date(post.createdAt).toLocaleString() 
    // : 'Invalid date';

    
    return (
        <div className="post-detail">
            {post ? (
                <>
                    <h1>{post.title}</h1>
                    <p>{formattedDate}</p>
                    <div className="content">{post.content}</div>
                </>
            ):(
                <p>Loading...</p>
            )}
        </div>
    );
};
export default PostDetail;