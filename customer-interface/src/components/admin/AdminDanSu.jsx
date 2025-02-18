import React, { useState } from 'react';
// import axios from 'axios';
import '../../styles/admin/AdminDanSu.scss';

const AdminUpload = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const [responseData, setResponseData] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      return alert('Please select a file to upload');
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://localhost:5000/api/danSu',  {
        method: 'POST', 
        body: formData, 
    });
      const data = await response.json();
      setResponseData(data); //store response data
      setMessage('File uploaded successfully!');
      console.log('Respone: ', data);
    } catch (error) {
      console.error('Error uploading file:', error);
      setMessage('Error uploading file.');
    }
  };

  return (
    <div className="adminDanSu-container">
      <h1>Admin - Upload Document</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Document</button>
      {message && <p>{message}</p>}
      {responseData && (
          <p>
            Document ID: {responseData.documentId} <br/>
            Message: {responseData.message}
          </p>
      )}
    </div>
  );
};

export default AdminUpload;
