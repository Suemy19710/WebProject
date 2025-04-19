import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../styles/admin/AdminListDichVu.scss';

const AdminServiceList = () => {
  const [services, setServices] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('https://luatkimngoc-vn.onrender.com/api/dich-vu');
        setServices(response.data);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };
    fetchServices();
  }, []);

  const handleEdit = (id) => {
    navigate(`/admin/dich-vu/edit/${id}`);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this service?')) {
      try {
        await axios.delete(`https://luatkimngoc-vn.onrender.com/api/dich-vu/${id}`);
        setServices(services.map((category) => ({
          ...category,
          items: category.items.filter((item) => item._id !== id),
        })).filter((category) => category.items.length > 0));
        alert('Service deleted successfully!');
      } catch (error) {
        console.error('Error deleting service:', error);
        alert('Error deleting service.');
      }
    }
  };

  return (
    <div className="admin-service-list-container">
      <h1>Quản lý Dịch vụ</h1>
      <button onClick={() => navigate('/admin/dich-vu/new')}>Thêm Dịch vụ</button>
      <table>
        <thead>
          <tr>
            <th>Tên Dịch vụ</th>
            <th>Danh mục</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {services.map((category) =>
            category.items.map((service) => (
              <tr key={service._id}>
                <td>{service.name}</td>
                <td>{category.title}</td>
                <td>
                  <button onClick={() => handleEdit(service._id)}>Sửa</button>
                  <button onClick={() => handleDelete(service._id)}>Xóa</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminServiceList;