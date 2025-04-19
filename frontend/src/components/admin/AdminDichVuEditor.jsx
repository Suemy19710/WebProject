import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import ImageResize from 'tiptap-extension-resize-image';
import Link from '@tiptap/extension-link';
import TextStyle from '@tiptap/extension-text-style';
import Color from '@tiptap/extension-color';
import FontFamily from '@tiptap/extension-font-family';
import FontSize from 'tiptap-extension-font-size';
import axios from 'axios';
import '../../styles/admin/AdminDichVuEditor.scss';

const AdminServiceEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [message, setMessage] = useState('');

  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      ImageResize,
      Link.configure({ openOnClick: false }),
      TextStyle,
      Color,
      FontFamily,
      FontSize,
    ],
    content: '<p>Nhập nội dung dịch vụ...</p>',
    editorProps: {
      attributes: {
        class: 'tiptap-editor',
      },
    },
  });

  useEffect(() => {
    if (id) {
      const fetchService = async () => {
        try {
          const response = await axios.get(`https://luatkimngoc-vn.onrender.com/api/dich-vu/${id}`);
          setName(response.data.name);
          setCategory(response.data.category);
          editor?.commands.setContent(response.data.content);
        } catch (error) {
          console.error('Error fetching service:', error);
          setMessage('Error fetching service.');
        }
      };
      fetchService();
    }
  }, [id, editor]);

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file || !editor) {
      setMessage('Vui lòng chọn file ảnh và đảm bảo editor đã sẵn sàng!');
      return;
    }

    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await axios.post('https://luatkimngoc-vn.onrender.com/api/dich-vu/upload-image', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      const imageUrl = `https://luatkimngoc-vn.onrender.com${response.data.url}`;
      editor.chain().focus().setImage({ src: imageUrl, width: 200, height: 'auto' }).run();
      setMessage('Ảnh đã được tải lên editor thành công!');
    } catch (error) {
      console.error('Error uploading image:', error);
      setMessage('Lỗi khi tải ảnh lên editor!');
    }
  };

  const handleSave = async () => {
    if (!name || !category || !editor?.getHTML()) {
      setMessage('Vui lòng nhập đầy đủ thông tin!');
      return;
    }

    try {
      const serviceData = { name, content: editor.getHTML(), category };
      if (id) {
        await axios.put(`https://luatkimngoc-vn.onrender.com/api/dich-vu/${id}`, serviceData);
        setMessage('Cập nhật dịch vụ thành công!');
      } else {
        await axios.post('https://luatkimngoc-vn.onrender.com/api/dich-vu', serviceData);
        setMessage('Thêm dịch vụ thành công!');
      }
      navigate('/admin/services');
    } catch (error) {
      console.error('Error saving service:', error);
      setMessage('Lỗi khi lưu dịch vụ.');
    }
  };

  const editorStyles = `
    .tiptap-editor {
      border: 1px solid #ccc;
      min-height: 300px;
      padding: 10px;
      border-radius: 4px;
      width: 100%;
    }
    .tiptap-editor.ProseMirror-focused {
      outline: none;
      border-color: #007bff;
    }
  `;

  return (
    <div className="admin-service-editor-container">
      <h1>{id ? 'Chỉnh sửa Dịch vụ' : 'Thêm Dịch vụ'}</h1>
      <div className="form-group">
        <label>Tên Dịch vụ</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nhập tên dịch vụ"
        />
      </div>
      <div className="form-group">
        <label>Danh mục</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Nhập danh mục (e.g., tư vấn pháp lý)"
        />
      </div>
      <style>{editorStyles}</style>
      {editor && (
        <div className="editor-toolbar">
          <button onClick={() => editor.chain().focus().toggleBold().run()}>
            <i className="fa-solid fa-bold"></i>
          </button>
          <button onClick={() => editor.chain().focus().toggleItalic().run()}>
            <i className="fa-solid fa-italic"></i>
          </button>
          <select onChange={(e) => editor.chain().focus().setFontFamily(e.target.value).run()}>
            <option value="">Font</option>
            <option value="Arial">Arial</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Courier New">Courier New</option>
          </select>
          <select onChange={(e) => editor.chain().focus().setFontSize(e.target.value).run()}>
            <option value="">Font Size</option>
            <option value="12px">12px</option>
            <option value="16px">16px</option>
            <option value="20px">20px</option>
          </select>
          <input
            type="color"
            onChange={(e) => editor.chain().focus().setColor(e.target.value).run()}
          />
          <button onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}>
            H1
          </button>
          <button onClick={() => editor.chain().focus().toggleBulletList().run()}>
            <i className="fa-solid fa-list"></i>
          </button>
          <button onClick={() => editor.chain().focus().toggleOrderedList().run()}>
            <i className="fa-solid fa-list-ol"></i>
          </button>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ display: 'inline-block', margin: '0 5px' }}
            id="image-upload"
          />
          <label htmlFor="image-upload" style={{ cursor: 'pointer' }}>
            <i className="fa-solid fa-image" style={{ marginLeft: '5px' }}></i>
          </label>
          <button
            onClick={() => {
              const url = prompt('Enter link URL');
              if (url) editor.chain().focus().setLink({ href: url }).run();
            }}
          >
            <i className="fa-solid fa-link"></i>
          </button>
          <button onClick={() => editor.chain().focus().undo().run()} disabled={!editor.can().undo()}>
            <i className="fa-solid fa-undo"></i>
          </button>
          <button onClick={() => editor.chain().focus().redo().run()} disabled={!editor.can().redo()}>
            <i className="fa-solid fa-redo"></i>
          </button>
        </div>
      )}
      <EditorContent editor={editor} />
      <button onClick={handleSave}>{id ? 'Cập nhật' : 'Thêm'}</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AdminServiceEditor;
