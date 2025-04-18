import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/client/IntroductionLawyers.scss';
import axios from 'axios';

const LuatSu = () => {
    const navigate = useNavigate();
    const [lawyers, setLawyers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLawyers = async () => {
            try {
                const response = await axios.get('https://luatkimngoc-vn.onrender.com/api/luat-su');
                setLawyers(response.data.slice(0, 3));
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
    const handleClickToLuatSuPage = () => {
        navigate(`/tin-tuc`); 
    }
    if (loading) return <div>Loading...</div>;

    return (
        <div className="intro-lawyers">
            <h2>Đội ngũ luật sư</h2>
            <div className="intro-lawyers__grid">
                {lawyers.map((lawyer) => (
                    <div className="intro-lawyers__card" key={lawyer._id}>
                        <img src={lawyer.image} alt={lawyer.name} />
                        <div className="lawyer-decription">
                            <h3 onClick={() => handleClick(lawyer.slug)}>{lawyer.name}</h3>
                            <div className="short-description">
                                <p>SDT: {lawyer.phone}</p>
                                <p>Email: {lawyer.email}</p>
                            </div>
                        </div>
                        <button onClick={() => handleClick(lawyer.slug)}>Xem luật sư</button>
                    </div>
                ))}
            </div>
            <div className="intro-lawyers__footer">
                <button onClick={handleClickToLuatSuPage}>Xem thêm</button>
            </div>
        </div>
    );
};

export default LuatSu;