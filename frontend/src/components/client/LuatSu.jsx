import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/client/LuatSu.scss';
import axios from 'axios';

const LuatSu = () => {
    const navigate = useNavigate();
    const [lawyers, setLawyers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLawyers = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/luat-su');
                setLawyers(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching lawyers:', error);
                setLoading(false);
            }
        };
        fetchLawyers();
    }, []);

    const handleClick = (slug) => {
        navigate(`/luat-su/${slug}`);
    };

    if (loading) return <div>Loading...</div>;

    return (
        <div className="luatSu-container">
            <div className="luatSu-device">
                <div className="container-header">
                    <div className="container-header-bg"></div>
                    <div className="container-header-content">
                        <h1>Luật Sư</h1>
                    </div>
                </div>
                <div className="container-body">
                    <div className="container-body-content">
                        <div className="intro-lawyers__grid">
                            {lawyers.map((lawyer) => (
                                <div className="intro-lawyers__card" key={lawyer._id}>
                                    <img src={`http://localhost:5000${lawyer.image}`} alt={lawyer.name} />
                                    <h3 onClick={() => handleClick(lawyer.slug)}>{lawyer.name}</h3>
                                    <div className="short-description">
                                        <p>SDT: {lawyer.phone}</p>
                                        <p>Email: {lawyer.email}</p>
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

export default LuatSu;