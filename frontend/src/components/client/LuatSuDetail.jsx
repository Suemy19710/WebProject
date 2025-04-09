import React, { useState, useEffect } from 'react';
import '../../styles/client/LuatSuDetail.scss';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const LuatSuDetail = () => {
    const { slug } = useParams(); // Get slug from URL
    const [lawyer, setLawyer] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');


    useEffect(() => {
        const fetchLawyer = async () => {
          try {
            const response = await axios.get(`${process.env.API_URL}/luat-su`);
            const matchedLawyer = response.data.find(l => l.slug === slug);
            setLawyer(matchedLawyer || null);
            setLoading(false);
          } catch (err) {
            setError('Error fetching lawyer details');
            setLoading(false);
          }
        };
        fetchLawyer();
      }, [slug]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    if (!lawyer) return <div>Lawyer not found</div>;

    return (
        <div className="luatSuDetail-container">
            <div className="luatSuDetailCard">
                <div className="luatSuDetailCard-right">
                    {/* <img src={`${process.env.API_URL}${lawyer.image}`} alt={lawyer.name} /> */}
                    <img src={lawyer.image} alt={lawyer.name} /> {/* No need for ${process.env.API_URL} */}
                </div>
                <div className="luatSuDetailCard-left">
                    <div className="luatSuDetailCard-left-head">
                        <div className="luatSuDetailCard-left-head-name">{lawyer.name}</div>
                        <div className="luatSuDetailCard-left-head-title">{lawyer.title}</div>
                        <div className="luatSuDetailCard-left-head-description">
                            <div className="phone">
                                <i className="fa-solid fa-phone"></i>
                                <p>{lawyer.phone}</p>
                            </div>
                            <div className="email">
                                <i className="fa-regular fa-envelope"></i>
                                <p>{lawyer.email}</p>
                            </div>
                        </div>
                    </div>
                    <div className="luatSuDetailCard-left-body">
                        <div className="chuyenMon">
                            <div className="chuyenMon-title">Chuyên Môn</div>
                            <div className="chuyeMon-body" dangerouslySetInnerHTML={{ __html: lawyer.expertise.replace(/\n/g, '<br/>') }} />
                        </div>
                        <div className="kinhNghiem">
                            <div className="kinhNghiem-title">Kinh nghiệm</div>
                            <div className="kinhNghiem-body" dangerouslySetInnerHTML={{ __html: lawyer.experience.replace(/\n/g, '<br/>') }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LuatSuDetail;