import React, { useState, useEffect } from 'react';
import '../../styles/client/DanSu.scss';

const ClientView = () => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/hanh-chinh',  {
          method: 'GET', 
      });

      if (!response.ok) {
        throw new Error('Failed to fetch documents');
      }
        console.log('Response: ', response);
        const data = await response.json();
        setDocuments(data); 
        console.log('Response: ', data);
      } catch (error) {
        console.error('Error fetching documents:', error);
      }
    };

    fetchDocuments();
  }, []);

  return (
    <div className="danSu-container">
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
  );
};

export default ClientView;
