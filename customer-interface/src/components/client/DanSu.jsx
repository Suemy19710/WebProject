import React, { useState, useEffect } from 'react';
import '../../styles/client/Legal.scss';

const ClientView = () => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/dan-su',  {
          method: 'GET', 
      });

      if (!response.ok) {
        throw new Error('Failed to fetch documents');
      }
        // console.log('Response: ', response);
        const data = await response.json();
        setDocuments(data); 
        // console.log('Response: ', data);
      } catch (error) {
        console.error('Error fetching documents:', error);
      }
    };

    fetchDocuments();
  }, []);

  return (
    <div className="container">
      <div className="device">
        <div className="head">
          <div className="head-bg"></div>
          <h1>Dân Sự</h1>
        </div>
        <div className="body">
          {documents.length > 0 ? (
            documents.map((doc) => (
              <div key={doc._id} className="container">
                <div dangerouslySetInnerHTML={{ __html: doc.content }} />
              </div>
            ))
          ) : (
            <p>No documents available.</p>
          )}
        </div>
      </div>

      
    </div>
  );
};

export default ClientView;
