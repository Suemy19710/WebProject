import React, { useState } from 'react';
import '../../styles/admin/AdminLuatSu.scss'; 
import axios from 'axios';

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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        Object.keys(formData).forEach((key) => {
            data.append(key, formData[key]);
        });

        try {
            const response = await axios.post('https://luatkimngoc.onrender.com/api/luat-su', data, {
                headers: { 'Content-Type': 'multipart/form-data' },
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
        } catch (error) {
            console.error('Error creating lawyer profile:', error.response?.data || error.message);
            setMessage('Error creating lawyer profile.');
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
                <button type="submit">Thêm Luật Sư</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default AdminLuatSu;