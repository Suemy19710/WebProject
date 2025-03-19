import React, { useState } from 'react';
import '../../styles/admin/AdminDanSu.scss';
import { useNavigate } from 'react-router-dom';

const AdminUpload = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); 
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0]; 
    setFile(selectedFile); 
  }

  const handleUpload = async() => {
    if (!file) {
      return alert('Vui lòng nhập tài liệu vào trước!'); 
    }
    try{
      const formData = new FormData(); 
      formData.append('file', file); 
      const response = await fetch('http://localhost:5000/api/preview', {
        method: 'POST',
        body: formData,
      }); 
      const data = await response.json(); 
      setMessage('Tải tài liệu thành công!'); 
      console.log('Response: ', data);
    } catch(error){
      console.error('Error uploading file: ', error); 
      setMessage('Error uploading file. '); 
    }
  }
  const handlePreview = async() => {
    navigate('/admin/xem-truoc', {state:{file}}); 
  }
  const handlePost = async() => {
    if (!file) {
      return alert('Vui lòng nhập tài liệu vào trước !'); 
    }
    try{
      const formData = new FormData(); 
      formData.append('file', file); 
      const response = await fetch('http://localhost:5000/api/hinh-su', {
        method: 'POST', body: formData, 
      }); 
      const data = await response.json(); 
      setMessage('Đăng bài tài liệu thành công!');
        console.log('Respone: ', data);
    } catch (error) {
      console.error('Error uploading file:', error);
      setMessage('Error uploading file.');
    }
  }

  return (
    <div className="adminDanSu-container">
      <h1>Admin Hình Sự</h1>
      <div className="huongDan">Hướng dẫn: Sau khi nhập File vào "Choose File" nhấn chọn "Tải tài liệu". Có thể chọn "Xem trước" để xem giao diện của người xem hoặc chọn "Đăng bài" để trực tiếp đăng.</div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Tải tài liệu</button>
      <button onClick={handlePreview}>Xem trước</button>
      <button onClick={handlePost}>Đăng bài </button>

      {message && <p>{message}</p>}
    </div>
  );
};

export default AdminUpload;
