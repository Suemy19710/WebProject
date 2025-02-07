import React, {useEffect, useState} from 'react';
const ClientBlog =() =>{
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
           fetch('http://localhost:5000/api/blogs')
               .then((res) => {
                   console.log("Response Status:", res.status); // Check if status is OK
                   return res.json();
               })
               .then((data) => {
                   console.log("Data received:", data); // Check if data is being received
                   setBlogs(data);
               })
               .catch((err) => console.log('Error fetching post: ', err));
       }, []);

    return (
        <div>
            <h2>Latest Blog Posts</h2>
            {blogs.length > 0 ? (
                blogs.map((post) => (
                <div key={post._id}>
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                    <p><em>{new Date(post.createdAt).toLocaleString()}</em></p>
                    <hr />
                </div>
                ))
            ) : (
                <p>No blog posts available.</p>
            )}
        </div>
    );
}
export default ClientBlog;