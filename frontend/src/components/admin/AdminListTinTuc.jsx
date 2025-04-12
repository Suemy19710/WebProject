import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/admin/AdminListTinTuc.scss'; // Create this SCSS file
import axios from 'axios';

const AdminListTinTuc = () => {
  const navigate = useNavigate();
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch all news articles on mount
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://luatkimngoc-vn.onrender.com/api/tin-tuc-&-su-kien');
        setNews(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching news:', err);
        setError('Không thể tải danh sách bài viết. Vui lòng thử lại sau.');
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  // Handle Edit button click
  const handleEdit = (id) => {
    navigate(`/admin/edit-tin-tuc/${id}`);
  };

  // Handle Delete button click
  const handleDelete = async (id) => {
    if (window.confirm('Bạn có chắc muốn xóa bài viết này?')) {
      try {
        await axios.delete(`https://luatkimngoc-vn.onrender.com/api/tin-tuc-&-su-kien/${id}`);
        setNews(news.filter((item) => item._id !== id));
        alert('Xóa bài viết thành công');
      } catch (err) {
        console.error('Error deleting news:', err);
        alert('Lỗi khi xóa bài viết');
      }
    }
  };

  // Handle card click (view details)
  const handleCardClick = (slug) => {
    navigate(`/tin-tuc/${slug}`);
  };

  if (loading) return <div>Đang tải...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="adminListTinTuc-container">
      <div className="adminListTinTuc-device">
        <div className="container-body">
          <div className="container-body-content">
            <h1>Danh Sách Tin Tức & Sự Kiện</h1>
            {news.length === 0 ? (
              <p>Không có bài viết nào.</p>
            ) : (
              <div className="intro-news__grid">
                {news.map((item) => (
                  <div className="intro-news__card" key={item._id}>
                    <img src={item.image || '/path/to/default-news.jpg'} alt={item.title} />
                    <h3 onClick={() => handleCardClick(item.slug)}>{item.title}</h3>
                    <div className="short-description">
                      <p>Trạng thái: {item.status === 'publish' ? 'Công khai' : 'Bản nháp'}</p>
                      <p>
                        Ngày tạo:{' '}
                        {new Date(item.createdAt).toLocaleDateString('vi-VN', {
                          day: '2-digit',
                          month: '2-digit',
                          year: 'numeric',
                        })}
                      </p>
                    </div>
                    <div className="admin-actions">
                      <button className="edit-btn" onClick={() => handleEdit(item._id)}>
                        Sửa
                      </button>
                      <button className="delete-btn" onClick={() => handleDelete(item._id)}>
                        Xóa
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminListTinTuc;