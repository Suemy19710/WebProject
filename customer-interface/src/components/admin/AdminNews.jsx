import React, {useState, useEffect} from 'react'; 
import '../../styles/admin/AdminNews.scss';
import {useNavigate} from 'react-router-dom';

const AdminNews = () => {
    // const [posts, setPosts] = useState([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState(null);
    const [image, setImage] = useState(null);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const slug = title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');

    const handleCreateNews = async() => {
        if (!title || !content || !image) {
            return alert('Title, content file, and image are required!');
        }
        const formData = new FormData();

        formData.append('title', title);
        formData.append('slug', slug);
        formData.append('content', content);
        formData.append('image', image);
        try{
            const response = await fetch('http://localhost:5000/api/tin-tuc', {
                method:'POST', 
                body: formData, 
            });
            const data = await response.json();
            if (response.ok){
                setMessage('Tải tài liệu thành công!');
                console.log('Respone: ', data);
            }
            else {
                setMessage('Failed to create post!');
                console.log('Error, ', data)
            }
            
          } catch (error) {
            console.error('Error uploading file:', error);
            setMessage('Error uploading file.');
          }
    };
    return (
        <div className="adminNews-container">
            <h1>Admin News</h1>
            <div className="body">
                <h2>Create New Post</h2>
                <input type="text" 
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                 />
                <p>Input Content File (e.g. PDF, DOCX)</p>
                <input type="file" 
                onChange={(e) => setContent(e.target.files[0])}
                />
                <p>Choose Image</p>
                <input
                type="file"
                namne="image"
                id="image"
                onChange={(e) => setImage(e.target.files[0])}
                />
                <button onClick={handleCreateNews}>Create Post</button>
            </div>
            {message && <p>{message}</p>}
        </div>

    );
};
export default AdminNews;