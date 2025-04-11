import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../../styles/admin/AdminLuatSu.scss'; // Reuse the same styles as AdminLuatSu for consistency
import axios from 'axios';

const EditLuatSu = () => {
  const { id } = useParams(); // Get the lawyer ID from the URL
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    phone: '',
    email: '',
    expertise: '',
    experience: '',
    image: null,
  });
  const [existingImage, setExistingImage] = useState(''); // Store the current image URL
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);

  // Fetch lawyer data on mount
  useEffect(() => {
    const fetchLawyer = async () => {
      try {
        const response = await axios.get(`https://luatkimngoc-vn.onrender.com/api/luat-su/${id}`);
        const lawyer = response.data;
        setFormData({
          name: lawyer.name,
          title: lawyer.title,
          phone: lawyer.phone,
          email: lawyer.email,
          expertise: lawyer.expertise,
          experience: lawyer.experience,
          image: null, // Image is not prepopulated in the file input
        });
        setExistingImage(lawyer.image); // Store the current image URL
        setLoading(false);
      } catch (error) {
        console.error('Error fetching lawyer:', error.response?.data || error.message);
        setMessage('Error fetching lawyer data.');
        setLoading(false);
      }
    };
    fetchLawyer();
  }, [id]);

  // Handle text input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle image file change
  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key === 'image' && formData[key] === null) return; // Skip null image
      data.append(key, formData[key]);
    });

    try {
      const response = await axios.put(
        `https://luatkimngoc-vn.onrender.com/api/luat-su/${id}`,
        data,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        }
      );
      setMessage('Lawyer profile updated successfully!');
      console.log('Response:', response.data);
      setTimeout(() => navigate('/admin/luat-su/list-luat-su'), 2000); // Redirect to list after 2 seconds
    } catch (error) {
      console.error('Error updating lawyer:', error.response?.data || error.message);
      setMessage('Error updating lawyer profile.');
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="adminLuatSu-container">
      <h1>Chỉnh Sửa Luật Sư</h1>
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
        <div className="image-preview">
          {existingImage && !formData.image && (
            <img src={existingImage} alt="Current Lawyer" style={{ maxWidth: '200px' }} />
          )}
        </div>
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
        />
        <button type="submit">Cập Nhật Luật Sư</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default EditLuatSu;