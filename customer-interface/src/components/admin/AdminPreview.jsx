import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/client/Legal.scss';

const AdminPreview = () => {
    const [documents, setDocuments] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchDocuments = async() => {
            try{
                const response = await fetch("http://localhost:5000/api/preview", {
                    method: 'GET', 
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch document');
                }
                const data = await response.json();
                setDocuments(data);
            } catch(error) {
                throw new Error('Error fetching documents: ', error);
            }
        };
        fetchDocuments();
    }, []);
    const handleBack = () => {
        navigate(-1);
    }
    return (
        <div className="container">
            <div className="device">
            <div className="body">
                <div className="buttons">
                    <button className="back" onClick={handleBack}>Quay về</button>
                </div>
                {documents.length> 0 ? (
                    documents.map((doc) => (
                        <div key={doc._id} class="container">
                        <div dangerouslySetInnerHTML={{ __html: doc.content }} />
                        </div>
                    ))
                ) : (
                    <p>No documents available</p>
                )}
            </div>
            </div>
          
        </div>
    );
};
export default AdminPreview;