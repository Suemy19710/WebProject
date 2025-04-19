import React, { useEffect, useState } from 'react';
import '../../styles/client/DichVu.scss';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DichVu = () => {
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

  const handleNavigate = (id) => {
    navigate(`/dich-vu/${id}`);
  };

  return (
    <div className="dichVu-container">
      <div className="dichVu-device">
        <div className="container-header">
          <div className="container-header-bg"></div>
          <div className="container-header-content">
            <h1>Dịch Vụ</h1>
          </div>
        </div>
        <div className="container-body">
          <div className="container-body-bg"></div>
          <div className="container-body-content">
            <div className="body">
              {services.map((category) => (
                <div className="small-container" key={category.id}>
                  <h1 id={category.id}>
                    Dịch vụ <span>{category.title}</span>
                  </h1>
                  <ul className="small-container-description">
                    {category.items.map((item) => (
                      <li key={item._id}>
                        <a
                          href={`/dich-vu/${item._id}`}
                          onClick={(e) => {
                            e.preventDefault();
                            handleNavigate(item._id);
                          }}
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DichVu;