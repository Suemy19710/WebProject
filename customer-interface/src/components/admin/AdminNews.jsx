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

    // const handleFileChange = (e) => {
    //     const selectedFile = e.target.files[0]; 
    //     selectedFile(selectedFile); 
    // }

    const handlePreview = async() => {
        if (!title || !content || !image) {
            return alert('Vui lòng viết tiêu đề, tải file doc và tải ảnh bìa!')
        }
        const formData = new FormData();
        formData.append('title', title); 
        formData.append('slug', slug); 
        formData.append('content', content); 
        formData.append('image', image); 
        
        try{
            const response = await fetch("http://localhost:5000/api/preview", {
                method: 'POST', 
                body: formData, 
            }); 
            const data = await response.json(); 
            setMessage('Tải tài liệu thành công!');
            const reader = new FileReader(); 
            reader.onload = () => {
                navigate('/admin/xem-truoc', {state: {
                    content: reader.result, 
                    title, 
                    image
                }});
            };
            reader.readAsText(content); 

            // console.log('Respone: ', data);
        } catch (error) {
        console.error('Error uploading file:', error);
        setMessage('Error uploading file.');
        }

    };
    const handleCreateNews = async() => {
        if (!title || !content || !image) {
            return alert('Vui lòng viết tiêu đề, tải file doc và tải ảnh bìa!');
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
            <h1>Admin Tin tức & Sự kiện</h1>
            <div className="body">
                <h2>Tạo trang tin tức mới </h2>
                <input type="text" 
                placeholder="Tiêu đề trang"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                 />
                <p>Nhập file (DOCX) word trang</p>
                <input type="file" 
                onChange={(e) => setContent(e.target.files[0])}
                />
                <p>Chọn hình ảnh tiêu đề cho trang</p>
                <input
                type="file"
                namne="image"
                id="image"
                onChange={(e) => setImage(e.target.files[0])}
                />
                <button onClick={handleCreateNews}>Tạo trang tin tức</button>
                <button onClick={handlePreview}>Xem trước</button>

            </div>
            {message && <p>{message}</p>}
        </div>

    );
};
export default AdminNews;