import React, { useState } from 'react';
import '../../styles/admin/AdminLuatSu.scss'; 
import axios from 'axios';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../../firebase';

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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setUploading(true);

        try {
            // Upload image to Firebase Storage
            let imageUrl = '';
            if (formData.image) {
                const imageRef = ref(storage, `luatsu-images/${Date.now()}_${formData.image.name}`);
                const snapshot = await uploadBytes(imageRef, formData.image);
                imageUrl = await getDownloadURL(snapshot.ref);
            }

            // Prepare data for backend (excluding the file, include the URL)
            const data = {
                name: formData.name,
                title: formData.title,
                phone: formData.phone,
                email: formData.email,
                expertise: formData.expertise,
                experience: formData.experience,
                image: imageUrl, // Send the Firebase URL instead of the file
            };

            const response = await axios.post(`${API_URL}/luat-su`, data);
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
                <input
                    type="text"
                    name="name"
                    placeholder="Họ và tên"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="title"
                    placeholder="Chức danh"
                    value={formData.title}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="phone"
                    placeholder="Số điện thoại"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="expertise"
                    placeholder="Chuyên môn"
                    value={formData.expertise}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="experience"
                    placeholder="Kinh nghiệm"
                    value={formData.experience}
                    onChange={handleChange}
                    required
                />
                <input
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={handleImageChange}
                    required
                />
                <button type="submit" disabled={uploading}>
                    {uploading ? 'Uploading...' : 'Thêm Luật Sư'}
                </button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default AdminLuatSu;