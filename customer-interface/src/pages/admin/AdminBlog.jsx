import React, { useState } from 'react';

const AdminBlog = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const postData = { title, content, author };
        try {
            const response = await fetch('http://localhost:5000/api/blogs', { // Fix: Use correct port
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(postData),
            });

            if (!response.ok) throw new Error('Failed to create post');

            alert('Post created successfully');
            setTitle('');
            setContent('');
            setAuthor('');
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div>
            <h2>Create a new blog post</h2>
            <form onSubmit={handleSubmit}>  {/* Fix: Correct spelling of `onSubmit` */}
                <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} required></textarea>
                <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} required />
                <button type="submit">Create Post</button>
            </form>
        </div>
    );
};

export default AdminBlog;
