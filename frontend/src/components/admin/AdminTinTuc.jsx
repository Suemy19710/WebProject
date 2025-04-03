import React, { useState } from 'react';
import '../../styles/admin/AdminTinTuc.scss';
import { useNavigate } from 'react-router-dom';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import ImageResize from 'tiptap-extension-resize-image';
import Link from '@tiptap/extension-link';
import TextStyle from '@tiptap/extension-text-style';
import Color from '@tiptap/extension-color';
import FontFamily from '@tiptap/extension-font-family';
import FontSize from 'tiptap-extension-font-size';
import { storage } from '../../firebase'; // Import Firebase Storage
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'; // Firebase Storage methods

const AdminTinTuc = () => {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState(null); // Cover image for the post
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('draft');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();


    // Generate slug from title
    const slug = title
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]+/g, '');

    // Initialize Tiptap editor
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
        content: '<p>Nhập nội dung bài viết...</p>',
        editorProps: {
            attributes: {
                class: 'tiptap-editor',
            },
        },
    });

    // Handle image upload for the editor (e.g., images inserted into the content)
    const handleImageUpload = async (event) => {
        const file = event.target.files[0];
        if (!file || !editor) {
            setMessage('Vui lòng chọn file ảnh và đảm bảo editor đã sẵn sàng!');
            return;
        }

        try {
            // Upload image to Firebase Storage
            const fileName = `${Date.now()}-${file.name}`;
            const storageRef = ref(storage, `images/${fileName}`);
            await uploadBytes(storageRef, file);
            const imageUrl = await getDownloadURL(storageRef);

            // Insert the image into the editor
            editor.chain().focus().setImage({ src: imageUrl, width: 200, height: 'auto' }).run();
            setMessage('Ảnh đã được tải lên editor thành công!');
        } catch (error) {
            console.error('Error uploading image to editor:', error);
            setMessage('Lỗi khi tải ảnh lên editor!');
        }
    };

    // Handle news creation
    const handleCreateNews = async () => {
        if (!title || !editor?.getHTML() || !image) {
            setMessage('Vui lòng nhập tiêu đề, nội dung và tải ảnh bìa!');
            return;
        }

        setIsSubmitting(true);
        setMessage('');

        try {
            // Upload the cover image to Firebase Storage
            const fileName = `${Date.now()}-${image.name}`;
            const storageRef = ref(storage, `images/${fileName}`);
            await uploadBytes(storageRef, image);
            const imageUrl = await getDownloadURL(storageRef); // Not used in DB, but could be for future use

            // Prepare form data to send to the backend
            const formData = new FormData();
            formData.append('title', title);
            formData.append('slug', slug);
            formData.append('content', editor.getHTML());
            formData.append('image', fileName); // Store the filename in the database
            formData.append('status', status);

            // Send the post data to the backend
            const response = await fetch(`${API_URL}/tin-tuc-&-su-kien`, {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.error || 'Failed to create post');
            }

            setMessage('Tạo bài viết thành công!');
            setTimeout(() => navigate('/admin/tin-tuc-&-su-kien'), 2000);
        } catch (error) {
            console.error('Error:', error);
            setMessage(`Lỗi: ${error.message}`);
        } finally {
            setIsSubmitting(false);
        }
    };

    // Editor styles (CSS for the Tiptap editor)
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
        <div className="adminNews-container">
            <h1>Admin Tin tức & Sự kiện</h1>
            <div className="body">
                <h2>Tạo trang tin tức mới</h2>
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
                            <option value="13px">13px</option>
                            <option value="14px">14px</option>
                            <option value="15px">15px</option>
                            <option value="16px">16px</option>
                            <option value="17px">17px</option>
                            <option value="18px">18px</option>
                            <option value="19px">19px</option>
                            <option value="20px">20px</option>
                            <option value="35px">35px</option>
                            <option value="42px">42px</option>
                            <option value="50px">50px</option>
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
                        <div className="image-upload-wrapper" style={{ display: 'inline-flex', alignItems: 'center' }}>
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
                        </div>
                        <button
                            onClick={() => {
                                const url = prompt('Enter link URL');
                                if (url) editor.chain().focus().setLink({ href: url }).run();
                            }}
                        >
                            <i className="fa-solid fa-link"></i>
                        </button>
                        <button
                            onClick={() => editor.chain().focus().undo().run()}
                            disabled={!editor.can().undo()}
                        >
                            <i className="fa-solid fa-undo"></i>
                        </button>
                        <button
                            onClick={() => editor.chain().focus().redo().run()}
                            disabled={!editor.can().redo()}
                        >
                            <i className="fa-solid fa-redo"></i>
                        </button>
                    </div>
                )}
                <EditorContent editor={editor} />

                <p>Chọn hình ảnh tiêu đề cho trang</p>
                <input
                    type="file"
                    name="image"
                    id="image"
                    accept="image/*"
                    onChange={(e) => setImage(e.target.files[0])}
                />

                <p>Trạng thái bài viết</p>
                <select value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option value="draft">Bản nháp</option>
                    <option value="publish">Công khai</option>
                </select>

                <div className="button-group">
                    <button onClick={handleCreateNews} disabled={isSubmitting}>
                        {isSubmitting
                            ? 'Đang xử lý...'
                            : status === 'draft'
                            ? 'Lưu bản nháp'
                            : 'Đăng bài viết'}
                    </button>
                </div>
            </div>

            {message && (
                <div className={`message ${message.includes('thành công') ? 'success' : 'error'}`}>
                    {message}
                </div>
            )}
        </div>
    );
};

export default AdminTinTuc;