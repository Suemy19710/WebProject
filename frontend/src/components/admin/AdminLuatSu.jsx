import React, { useState, useRef } from 'react';
import '../../styles/admin/AdminLuatSu.scss'; 
import axios from 'axios';
// import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
// import { storage, process.env.API_URL } from '../../config/firebase'; 

const AdminLuatSu = () => {
    const [formData, setFormData] = useState({
        name: '',
        title: '',
        phone: '',
        email: '',
        expertise: '',
        experience: '',
        image: null,
    });
    const [message, setMessage] = useState('');
    const [uploading, setUploading] = useState(false);
    const fileInputRef = useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (!file.type.startsWith('image/')) {
                setMessage('Please select an image file.');
                return;
            }
            if (file.size > 5 * 1024 * 1024) {
                setMessage('Image size must be less than 5MB.');
                return;
            }
            setFormData({ ...formData, image: file });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setUploading(true);

        try {
            const { name, title, phone, email, expertise, experience } = formData;
            if (!name || !title || !phone || !email || !expertise || !experience) {
                setMessage('All fields are required.');
                setUploading(false);
                return;
            }

            if (!formData.image) {
                setMessage('Please select an image.');
                setUploading(false);
                return;
            }

            const imageRef = ref(storage, `luatsu-images/${Date.now()}_${formData.image.name}`);
            const snapshot = await uploadBytes(imageRef, formData.image);
            const imageUrl = await getDownloadURL(snapshot.ref);

            const data = {
                name,
                title,
                phone,
                email,
                expertise,
                experience,
                image: imageUrl,
            };

            console.log('Payload being sent to backend:', data);

            const response = await axios.post(`${process.env.API_URL}/luat-su`, data, {
                headers: { 'Content-Type': 'application/json' },
            });
            setMessage('Lawyer profile created successfully!');
            console.log('Response:', response.data);
            setFormData({
                name: '',
                title: '',
                phone: '',
                email: '',
                expertise: '',
                experience: '',
                image: null,
            });
            fileInputRef.current.value = '';
        } catch (error) {
            console.error('Error creating lawyer profile:', error.response?.data || error.message);
            setMessage('Error creating lawyer profile.');
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="adminLuatSu-container">
            <h1>Admin Luật Sư</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Họ và tên" value={formData.name} onChange={handleChange} required />
                <input type="text" name="title" placeholder="Chức danh" value={formData.title} onChange={handleChange} required />
                <input type="text" name="phone" placeholder="Số điện thoại" value={formData.phone} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                <textarea name="expertise" placeholder="Chuyên môn" value={formData.expertise} onChange={handleChange} required />
                <textarea name="experience" placeholder="Kinh nghiệm" value={formData.experience} onChange={handleChange} required />
                <input type="file" name="image" accept="image/*" onChange={handleImageChange} ref={fileInputRef} required />
                <button type="submit" disabled={uploading}>{uploading ? 'Uploading...' : 'Thêm Luật Sư'}</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default AdminLuatSu;