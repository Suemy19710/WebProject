import React, { useState } from 'react';
import '../../styles/admin/AdminDanSu.scss';

const AdminUpload = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      return alert('Vui lòng nhập tài liệu vào trước!');
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://localhost:5000/api/hanh-chinh',  {
        method: 'POST', 
        body: formData, 
    });
      const data = await response.json();
      setMessage('Tải tài liệu thành công!');
      console.log('Respone: ', data);
    } catch (error) {
      console.error('Error uploading file:', error);
      setMessage('Error uploading file.');
    }
  };

  return (
    <div className="adminDanSu-container">
      <h1>Admin Hành Chính </h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Tải tài liệu</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AdminUpload;
