import React, {useState, useEffect} from 'react'; 
import '../../styles/client/DanSu.scss'; 
const HanhChinh = () => {
    const [documents, setDocuments] = useState([]); 
    useEffect(() => {
        const fetchDocuments = async() => {
            try{
                const response = await fetch('http://localhost:5000/api/hanh-chinh', {
                    method: 'GET', 
                }); 
                if (!response.ok) {
                    throw new Error('Failed to fetch documents'); 
                }
                const data = await response.json(); 
                setDocuments(data); 
            } catch (error) {
                console.error('Error fetching documents:', error); 
            }
        }; 
        fetchDocuments(); 
    }, [])
    return(
        <div className="danSu-container">
            <div className="danSu-device">
                <div className="container-header">
                    <div className="container-header-bg"></div>
                    <div className="container-header-content">
                        <h1>Hành Chính</h1>
                    </div>
                </div>
                <div className="container-body">
                    <div className="container-body-bg"></div>
                    <div className="container-body-content">
                        <div className="content">
                            {documents.length > 0 ? (
                                documents.map((doc) => (
                                <div key={doc._id} class="container">
                                    <div dangerouslySetInnerHTML={{ __html: doc.content }} />
                                </div>
                                ))
                            ) : (
                                <p>No documents available.</p>
                            )}
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HanhChinh; 