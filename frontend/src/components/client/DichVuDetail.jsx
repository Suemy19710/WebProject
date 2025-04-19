import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ServiceDetail = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const response = await axios.get(`https://luatkimngoc-vn.onrender.com/api/dich-vu/${id}`);
        setService(response.data);
      } catch (error) {
        console.error('Error fetching service:', error);
      }
    };
    fetchService();
  }, [id]);

  if (!service) return <div>Loading...</div>;

  return (
    <div className="service-detail-container">
      <h1>{service.name}</h1>
      <div dangerouslySetInnerHTML={{ __html: service.content }} />
    </div>
  );
};

export default ServiceDetail;