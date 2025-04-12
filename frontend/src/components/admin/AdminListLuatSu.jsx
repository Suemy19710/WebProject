import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/admin/AdminListLuatSu.scss'; // Create this SCSS file for styling
import axios from 'axios';

const AdminListLuatSu = () => {
  const navigate = useNavigate();
  const [lawyers, setLawyers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch all lawyers on mount
  useEffect(() => {
    const fetchLawyers = async () => {
      try {
        const response = await axios.get('https://luatkimngoc-vn.onrender.com/api/luat-su');
        setLawyers(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching lawyers:', err);
        setError('Error fetching lawyers');
        setLoading(false);
      }
    };
    fetchLawyers();
  }, []);

  // Handle Edit button click
  const handleEdit = (id) => {
    navigate(`/admin/edit-luat-su/${id}`); 
  };

  // Handle Delete button click
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this lawyer?')) {
      try {
        await axios.delete(`https://luatkimngoc-vn.onrender.com/api/luat-su/${id}`);
        setLawyers(lawyers.filter((lawyer) => lawyer._id !== id)); // Remove from state
        alert('Lawyer deleted successfully');
      } catch (err) {
        console.error('Error deleting lawyer:', err);
        alert('Error deleting lawyer');
      }
    }
  };

  // Handle card click (optional: view details)
  const handleCardClick = (slug) => {
    navigate(`/luat-su/${slug}`); // Same as LuatSu.jsx
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="adminListLuatSu-container">
      <div className="adminListLuatSu-device">
        {/* <div className="container-header">
          <div className="container-header-bg"></div>
          <div className="container-header-content">
            <h1>Danh Sách Luật Sư</h1>
          </div>
        </div> */}
        <div className="container-body">
          <div className="container-body-content">
            <div className="intro-lawyers__grid">
              {lawyers.map((lawyer) => (
                <div className="intro-lawyers__card" key={lawyer._id}>
                  <img src={lawyer.image} alt={lawyer.name} />
                  <h3 onClick={() => handleCardClick(lawyer.slug)}>{lawyer.name}</h3>
                  <div className="short-description">
                    <p>SDT: {lawyer.phone}</p>
                    <p>Email: {lawyer.email}</p>
                  </div>
                  <div className="admin-actions">
                    <button
                      className="edit-btn"
                      onClick={() => handleEdit(lawyer._id)}
                    >
                      Edit
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(lawyer._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminListLuatSu;