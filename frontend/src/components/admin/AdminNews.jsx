import React, {useState, useEffect} from 'react'; 
import '../../styles/admin/AdminNews.scss';
import {useNavigate} from 'react-router-dom';

const AdminNews = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState(null);
    const [image, setImage] = useState(null);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const slug = title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');

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
            const response = await fetch(`${process.env.API_URL}/preview`, {
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
    const handleCreateNews = async () => {
        if (!title || !editor.getHTML() || !image) {
            return alert('Vui lòng nhập tiêu đề, nội dung và tải ảnh bìa!');
        }
    
        console.log('Image details:', {
            name: image.name,
            size: image.size,
            type: image.type,
        });
    
        const formData = new FormData();
        formData.append('title', title);
        formData.append('slug', slug);
        formData.append('content', editor.getHTML());
        formData.append('image', image);
        formData.append('status', status);
    
        for (let [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }
    
        try {
          
            // const response = await fetch('https://luatkimngoc.onrender.com/api/tin-tuc-&-su-kien', {
            //     method: 'POST',
            //     body: formData,
            // });            
            const response = await fetch(`${process.env.API_URL}/tin-tuc-&-su-kien`, {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();
            console.log('Server response:', data);
    
            if (response.ok) {
                setMessage('Tạo bài viết thành công!');
                setTimeout(() => navigate('/admin/tin-tuc'), 2000);
            } else {
                setMessage(`Failed to create post: ${data.error || 'Unknown error'}`);
            }
        } catch (error) {
            console.error('Fetch error:', error);
            setMessage('Error creating post: Network or parsing issue.');
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