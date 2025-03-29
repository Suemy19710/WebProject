import React, { useState } from 'react';
import '../../styles/admin/AdminDanSu.scss';
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
import axios from 'axios';

const AdminHinhSu = () => {
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const editor = useEditor({
        extensions: [
            StarterKit,
            ImageResize,
            Link.configure({ openOnClick: false }),
            TextStyle,
            Color,
            FontFamily,
            FontSize,
        ],
        content: '<p>Nhập nội dung tài liệu...</p>',
        editorProps: {
            attributes: {
                class: 'tiptap-editor',
            },
        },
    });

    const handleImageUpload = async (event) => {
        const file = event.target.files[0];
        if (!file || !editor) {
            setMessage('Vui lòng chọn file ảnh và đảm bảo editor đã sẵn sàng!');
            return;
        }

        const formData = new FormData();
        formData.append('image', file);

        try {
            const response = await axios.post('http://localhost:5000/api/hinh-su/upload-image', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            const imageUrl = `http://localhost:5000${response.data.url}`;
            editor.chain().focus().setImage({ src: imageUrl, width: 200, height: 'auto' }).run();
            setMessage('Ảnh đã được tải lên editor thành công!');
        } catch (error) {
            console.error('Error uploading image to editor:', error);
            setMessage('Lỗi khi tải ảnh lên editor!');
        }
    };
    const handlePreview = () => {
        if (!editor?.getHTML()) {
            setMessage('Vui lòng nhập nội dung trước khi xem trước!');
            return;
        }
        navigate('/admin/xem-truoc', { state: { content: editor.getHTML() } });
    };

    const handlePost = async () => {
        if (!editor?.getHTML()) {
            setMessage('Vui lòng nhập nội dung!');
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/api/hinh-su', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ content: editor.getHTML() }),
            });
            const data = await response.json();
            setMessage('Đăng bài tài liệu thành công!');
            console.log('Response: ', data);
        } catch (error) {
            console.error('Error posting content:', error);
            setMessage('Error posting content.');
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
        <div className="adminDanSu-container">
            <h1>Admin Hình Sự</h1>
            <div className="huongDan">
                Hướng dẫn: Nhập nội dung tài liệu vào editor bên dưới. Nhấn "Tải tài liệu" để lưu, "Xem trước" để xem giao diện, hoặc "Đăng bài" để đăng trực tiếp.
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

            <button onClick={handlePreview}>Xem trước</button>
            <button onClick={handlePost}>Đăng bài</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default AdminHinhSu;