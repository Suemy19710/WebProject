import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../../styles/admin/AdminTinTuc.scss'; // Reuse AdminTinTuc.scss
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
import 'react-resizable/css/styles.css';

const EditTinTuc = () => {
  const { slug } = useParams(); // Changed from id to slug
  const navigate = useNavigate();
  const [articleId, setArticleId] = useState(''); // Add state to store article ID
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);
  const [existingImage, setExistingImage] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('draft');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

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
    editorProps: {
      attributes: {
        class: 'tiptap-editor',
      },
    },
  });

  // Fetch news article data
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(`https://luatkimngoc-vn.onrender.com/api/tin-tuc-&-su-kien/${slug}`);
        const news = response.data;
        setArticleId(news._id); // Store the article ID for update operation
        setTitle(news.title || '');
        setStatus(news.status || 'draft');
        setExistingImage(news.image || '');
        if (editor) {
          editor.commands.setContent(news.content || '<p>Nhập nội dung bài viết...</p>');
        }
        setLoading(false);
      } catch (err) {
        console.error('Error fetching news:', err);
        setError('Không thể tải bài viết. Vui lòng thử lại.');
        setLoading(false);
      }
    };
    fetchNews();
  }, [slug, editor]); // Changed dependency from id to slug

  // Handle image upload to editor
  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file || !editor) {
      setMessage('Vui lòng chọn file ảnh và đảm bảo editor đã sẵn sàng!');
      return;
    }

    const formData = new FormData();
    formData.append('image', file);

    try {
      setMessage('Đang tải ảnh lên...');
      const response = await axios.post(
        'https://luatkimngoc-vn.onrender.com/api/tin-tuc-&-su-kien/upload-image',
        formData,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        }
      );
      const imageUrl = response.data.url;
      editor.chain().focus().setImage({ src: imageUrl, width: 200, height: 'auto' }).run();
      setMessage('Ảnh đã được tải lên editor thành công!');
    } catch (error) {
      console.error('Error uploading image to editor:', error);
      setMessage(`Lỗi khi tải ảnh lên editor: ${error.response?.data?.message || error.message}`);
    }
  };

  // Handle form submission
  const handleUpdateNews = async () => {
    if (!title) {
      setMessage('Vui lòng nhập tiêu đề!');
      return;
    }
    if (!editor?.getHTML() || editor.getHTML() === '<p>Nhập nội dung bài viết...</p>') {
      setMessage('Vui lòng nhập nội dung bài viết!');
      return;
    }

    setIsSubmitting(true);
    setMessage('Đang xử lý...');

    const formData = new FormData();
    formData.append('title', title);
    formData.append('slug', title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]+/g, ''));
    formData.append('content', editor.getHTML());
    if (image) {
      formData.append('image', image);
    }
    formData.append('status', status);

    try {
      const response = await axios.put(
        `https://luatkimngoc-vn.onrender.com/api/tin-tuc-&-su-kien/${articleId}`, // Use articleId instead of id
        formData,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        }
      );
      setMessage('Cập nhật bài viết thành công!');
      setTimeout(() => navigate('/admin/list-tin-tuc'), 2000);
    } catch (error) {
      console.error('Error updating news:', error);
      setMessage(`Lỗi: ${error.response?.data?.error || error.message}`);
    } finally {
      setIsSubmitting(false);
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
    .resizable-image-container {
      display: inline-block;
      position: relative;
    }
    .resizable-image-container img {
      max-width: 100%;
    }
    .tiptap-editor.ProseMirror-focused {
      outline: none;
      border-color: #007bff;
    }
  `;

  if (loading) return <div>Đang tải...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="adminNews-container">
      <h1>Chỉnh Sửa Tin Tức & Sự Kiện</h1>
      <div className="body">
        <input
          type="text"
          placeholder="Tiêu đề trang"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

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
            <div className="image-upload-wrapper">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                id="image-upload"
              />
              <label htmlFor="image-upload">
                <i className="fa-solid fa-image"></i>
              </label>
            </div>
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

        <p>Chọn hình ảnh tiêu đề cho trang</p>
        <div className="image-preview">
          {existingImage && !image && (
            <img src={existingImage} alt="Current News" style={{ maxWidth: '200px' }} />
          )}
        </div>
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={(e) => {
            if (e.target.files && e.target.files[0]) {
              setImage(e.target.files[0]);
              setMessage(`Đã chọn file: ${e.target.files[0].name}`);
            }
          }}
        />

        <p>Trạng thái bài viết</p>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="draft">Bản nháp</option>
          <option value="publish">Công khai</option>
        </select>

        <div className="button-group">
          <button onClick={handleUpdateNews} disabled={isSubmitting}>
            {isSubmitting ? 'Đang xử lý...' : status === 'draft' ? 'Lưu bản nháp' : 'Cập nhật bài viết'}
          </button>
          <button type="button" onClick={() => navigate('/admin/tintuc/list')}>
            Hủy
          </button>
        </div>
      </div>

      {message && (
        <div className={`message ${message.includes('thành công') ? 'success' : message.includes('Đã chọn file') ? 'info' : 'error'}`}>
          {message}
        </div>
      )}
    </div>
  );
};

export default EditTinTuc;