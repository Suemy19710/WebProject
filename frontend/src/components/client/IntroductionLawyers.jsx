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
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/luat-su`);
                // Slice the first 4 lawyers from the response data
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

    if (loading) return <div>Loading...</div>;

    return (
        <div className="intro-lawyers">
            <h2>Đội ngũ luật sư</h2>
            <div className="intro-lawyers__grid">
                {lawyers.map((lawyer) => (
                    <div className="intro-lawyers__card" key={lawyer._id}>
                        {/* <img src={`${process.env.REACT_APP_API_URL}${lawyer.image}`} alt={lawyer.name} /> */}
                        <img src={lawyer.image} alt={lawyer.name} /> {/* No need for ${process.env.REACT_APP_API_URL} */}
                        <h3 onClick={() => handleClick(lawyer.slug)}>{lawyer.name}</h3>
                        <div className="short-description">
                            <p>SDT: {lawyer.phone}</p>
                            <p>Email: {lawyer.email}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LuatSu;