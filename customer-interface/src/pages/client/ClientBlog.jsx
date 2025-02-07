import React, {useEffect, useState} from 'react';
const ClientBlog =() =>{
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/blogs')
          .then((res) => res.json())
          .then((data) => setBlogs(data))
          .catch((err) => console.error('Error fetching blogs:', err));
      }, []);

    return (
        <div>
            <h2>Latest Blog Posts</h2>
            {blogs.length > 0 ? (
                blogs.map((post) => (
                <div key={post._id}>
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                    <p><strong>By:</strong> {post.author} | <em>{new Date(post.createdAt).toLocaleString()}</em></p>
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