import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
// import '../../styles/client/Legal.scss';

const AdminPreview = () => {
    const [documents, setDocuments] = useState([]);
    const navigate = useNavigate();
    // const location = useLocation(); 

    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 

    useEffect(() => {
        // if previewing from adminNews
        if (location.state?.content) {
            setLoading(false); 
            return;
        }

        const fetchDocuments = async() => {
            try{
                const response = await fetch("http://luatkimngoc.onrender.com/api/preview", {
                    method: 'GET', 
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch document');
                }
                const data = await response.json();
                setDocuments(data);
                setLoading(false); 

            } catch(error) {
                throw new Error('Error fetching documents: ', error.Message);
                setLoading(false); 
            }
        };
        if (!location.state?.content) {
            fetchDocuments();
        } else {
            setLoading(false);
        }
    }, []);

    if (loading) return <p>Loading...</p>; 
    if (error) return <p>{error}</p>; 
    const handleBack = () => {
        navigate(-1);
    }
    // render logic with fallback 
    const renderContent = () => {
        if (!error && documents.length>0) {
            try{
                return documents.map((doc) => (
                    <div key={doc._id} className="container">
                        <div dangerouslySetInnerHTML={{__html: doc.content}}></div>
                    </div>
                )); 
            } catch(err) {
                console.error('Error rendering documents: ', err); 
            }
        }

        if (location.state?.content) {
            return (
                <div className="container">
                    {/* {location.state.title && <h2>{location.state.title}</h2>}  */}
                    <div dangerouslySetInnerHTML={{ __html: location.state.content }} />              
                </div>
            ); 
        }

        return <p>No documents available</p>
    };
    return (
        <div className="container">
            <div className="device">
            <div className="body">
                <div className="buttons">
                    <button className="back" onClick={handleBack}>Quay về</button>
                </div>
                {renderContent()}
                {/* {documents.length> 0 ? (
                    documents.map((doc) => (
                        <div key={doc._id} class="container">
                        <div dangerouslySetInnerHTML={{ __html: doc.content }} />
                        </div>
                    ))
                ) : (
                    <p>No documents available</p>
                )} */}
            </div>
            </div>
          
        </div>
    );
};
export default AdminPreview;