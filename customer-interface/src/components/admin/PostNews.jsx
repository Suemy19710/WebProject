import React, { useState, useEffect, useRef } from 'react';
import '../../styles/admin/PostNews.scss';

const PostNews = () => {
    const [activeButtons, setActiveButtons] = useState({
        align: false,
        spacing: false,
        format: false,
        script: false,
    });
    const [editorContent, setEditorContent] = useState('');

    const fontNameRef = useRef(null);
    const fontSizeRef = useRef(null);
    const textInputRef = useRef(null);
    const [imageSrc, setImgSrc] = useState(null);

    const fontList = [
        "Arial", 
        "Roboto",
        "Times New Roman",
        "Open Sans",
        "Merriweather",
        "Lora",
        "Noto Sans",
    ];

    useEffect(() => {
        if (fontNameRef.current && fontNameRef.current.children.length === 0) {
            fontList.forEach((value) => {
                const option = document.createElement("option");
                option.value = value;
                option.innerHTML = value;
                fontNameRef.current.appendChild(option); 
            });
        }

        if (fontSizeRef.current && fontSizeRef.current.children.length === 0) {
            for (let i = 1; i <= 7; i++) {
                const option = document.createElement("option");
                option.value = i;
                option.innerHTML = i;
                fontSizeRef.current.appendChild(option); 
            }
            fontSizeRef.current.value = 3;
        }
    }, []);

    const handleFontChange = (e) => {
        textInputRef.current.style.fontFamily = e.target.value;
    };

    const handleColorChange = (e) => {
        textInputRef.current.style.color = e.target.value;
    };

    const modifyText = (command, value) => {
        if (textInputRef.current) {
            document.execCommand(command, false, value); 
        }
    };

    const handleButtonClick = (buttonId) => {
        setActiveButtons((prev) => ({
            ...prev,
            [buttonId]: !prev[buttonId], 
        }));
        modifyText(buttonId, false, null);
    }

    const handleAdvancedButtonChange = (e) => {
        modifyText(e.target.id,false, e.target.value); 
    }

    const handleLinkButtonClick = () => {
        let userLink = prompt("Enter a URL?");
        if (/http/i.test(userLink)) {
            modifyText("createLink", userLink); 
        } else {
            userLink = "http://" + userLink; 
            modifyText("createLink", userLink); 
        }
    }

    // const toggleActiveButton = (buttonType, buttonId) => {
    //     setActiveButtons((prev) => ({
    //         ...prev,
    //         [buttonType]: prev[buttonType].buttonId ? null : buttonId,
    //     }));
    // };

    const handleImageUpload = (e) => {
        const file = e.target.files[0]; 
        if (file && textInputRef.current) {
            const reader = new FileReader();
            reader.onload = function (event) {
                setImgSrc(event.target.result);
            };
            reader.readAsDataURL(file); 
        }
    }
    const handleFileUpload =(event) => {
        const file = event.target.files[0];
        if (file) {
            const formData = new FormData();
            formData.append('image', file);

        fetch('/upload', {
            method: 'POST',
            body: formData,
        }).then(response => response.json())
          .then(data => {
              setImgSrc(data.imageUrl); 
          });
        }
    }

    const handlePreviewContent = () => {
        const editorContent = textInputRef.current.innerHTML;
        const title = extractTitle(editorContent);
        const body = extractBody(editorContent);
    
        const maxBodyLength = 1000;
        const shortenedBody = body.length > maxBodyLength ? body.substring(0, maxBodyLength) + "..." : body;
    
        const encodedTitle = encodeURIComponent(title);
        const encodedBody = encodeURIComponent(shortenedBody);
    
        console.log('Title:', encodedTitle);  
        console.log('Body:', encodedBody);    
    
        const form = document.createElement('form');
        form.method = 'POST'; 
        form.action = '/admin/preview'; 
        const inputTitle = document.createElement('input');
        inputTitle.type = 'hidden';
        inputTitle.name = 'title'; 
        inputTitle.value = encodedTitle;
    
        const inputBody = document.createElement('input');
        inputBody.type = 'hidden';
        inputBody.name = 'body';
        inputBody.value = encodedBody;
    
        console.log('Input Title Value:', inputTitle.value);
        console.log('Input Body Value:', inputBody.value);
    
        form.appendChild(inputTitle);
        form.appendChild(inputBody);
    
        console.log('Form Inputs:', form.elements);
        document.body.appendChild(form);
        form.submit();
        document.body.removeChild(form);
    };
    
    function extractTitle(content) {
        const firstSentence = content.split('.')[0];
        return firstSentence.trim();
    }
    
    function extractBody(content) {
        const firstSentenceEnd = content.indexOf('.') + 1;
        return content.substring(firstSentenceEnd).trim();
    } 
    
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handlePost = async(e) => {
        e.preventDefault();
        const postData = {title, content};
        try {
            const response = await fetch('http://localhost:5000/api/blogs', {
                method: 'POST', 
                headers: {'Content-Type' : 'application/json'}, 
                body: JSON.stringify(postData), 
            });
            if (!response.ok) throw new Error('Failed to create post');

            alert('Post created successfully');
            setTitle('');
            setContent('');
        } catch(error) {
            alert(error.message);
        }
    }

    const handleSaveDraft = () => {
        alert("Draft Saved:\n" + textInputRef.current.innerHTML);
    }
    return (
        <div className="container-post-news">
            <div className="options">
                {/* Button for text formatting (bold, superscript, etc.) */}
                <button id="bold" className={`option-button ${activeButtons.bold ? 'active' : ''}`} onClick={() => handleButtonClick("bold")}>
                    <i className="fa-solid fa-bold"></i>
                </button>
                <button id="italic" className={`option-button ${activeButtons.italic ? 'active' : ''}`} onClick={() => handleButtonClick("italic")}>
                    <i className="fa-solid fa-italic"></i>                
                </button>
                <button id="underline" className={`option-button ${activeButtons.underline ? 'active' : ''}`} onClick={() => handleButtonClick("underline")}>
                    <i className="fa-solid fa-underline"></i>                
                </button>
                <button id="strikethrough" className={`option-button ${activeButtons.strikethrough ? 'active' : ''}`} onClick={() => handleButtonClick("strikethrough")}>
                    <i className="fa-solid fa-strikethrough"></i>                
                </button>
                <button id="superscript" className={`option-button ${activeButtons.superscript ? 'active' : ''}`} onClick={() => handleButtonClick("superscript")}>
                    <i className="fa-solid fa-superscript"></i>
                </button>
                <button id="subscript" className={`option-button ${activeButtons.subscript ? 'active' : ''}`} onClick={() => handleButtonClick("subscript")}>
                    <i className="fa-solid fa-subscript"></i>
                </button>

                {/* List and text alignment buttons */}
                <button id="insertOrderedList" className={`option-button ${activeButtons.insertOrderedList ? 'active' : ''}`} onClick={() => handleButtonClick("insertOrderedList")}>
                    <i className="fa-solid fa-list-ol"></i>
                </button>
                <button id="insertUnorderedList" className={`option-button ${activeButtons.insertUnorderedList ? 'active' : ''}`} onClick={() => handleButtonClick("insertUnorderedList")}>
                    <i className="fa-solid fa-list"></i>
                </button>

                {/* Undo and redo buttons */}
                <button id="undo" className={`option-button ${activeButtons.undo ? 'active' : ''}`} onClick={() => handleButtonClick("undo")}>
                    <i className="fa-solid fa-rotate-left"></i>
                </button>
                <button id="redo" className={`option-button ${activeButtons.redo ? 'active' : ''}`} onClick={() => handleButtonClick("redo")}>
                    <i className="fa-solid fa-rotate-right"></i>
                </button>

                {/* Link insertion and removal */}
                <button id="createLink" className="adv-option-button" onClick={handleLinkButtonClick}>
                    <i className="fa fa-link"></i>
                </button>
                <button id="unlink" className="option-button" onClick={handleLinkButtonClick}>
                    <i className="fa fa-unlink"></i>
                </button>

                {/* Text alignment buttons */}
                <button id="justifyLeft"className={`option-button ${activeButtons.justifyLeft ? 'active' : ''}`} onClick={() => handleButtonClick("justifyLeft")}>
                    <i className="fa-solid fa-align-left"></i>
                </button>
                <button id="justifyCenter" className={`option-button ${activeButtons.justifyCenter ? 'active' : ''}`} onClick={() => handleButtonClick("justifyCenter")}>
                    <i className="fa-solid fa-align-center"></i>
                </button>
                <button id="justifyRight" className={`option-button ${activeButtons.justifyRight ? 'active' : ''}`} onClick={() => handleButtonClick("justifyRight")}>
                    <i className="fa-solid fa-align-right"></i>
                </button>
                <button id="justifyFull" className={`option-button ${activeButtons.justifyFull ? 'active' : ''}`} onClick={() => handleButtonClick("justifyFull")}>
                    <i className="fa-solid fa-align-justify"></i>
                </button>

                {/* Indentation buttons */}
                <button id="indent" className={`option-button ${activeButtons.indent ? 'active' : ''}`} onClick={() => handleButtonClick("indent")}>
                    <i className="fa-solid fa-indent"></i>
                </button>
                <button id="outdent" className={`option-button ${activeButtons.outdent ? 'active' : ''}`} onClick={() => handleButtonClick("outdent")}>
                    <i className="fa-solid fa-outdent"></i>
                </button>

                {/* Image upload button */}
                <button id="insertImage" onClick={() =>  document.getElementById("imageUpload").click()}>
                    <i className="fa-solid fa-image"></i>
                </button>
                <input
                    type="file"
                    id="imageUpload"
                    accept="image/*"
                    style={{ display: 'none' }}
                    onChange={handleImageUpload} // Handle the file upload
                />
                {/* Advanced options (font size, font name, colors) */}
                <select id="formatBlock" className="adv-option-button" onChange={handleAdvancedButtonChange}>
                    <option value="H1">H1</option>
                    <option value="H2">H2</option>
                    <option value="H3">H3</option>
                    <option value="H4">H4</option>
                    <option value="H5">H5</option>
                    <option value="H6">H6</option>
                </select>
                <select id="fontName" className="adv-option-button" ref={fontNameRef}></select>
                <select id="fontSize" className="adv-option-button" ref={fontSizeRef}></select>

                {/* Color pickers for font and highlight color */}
                <div className="input-wrapper">
                    <input type="color" id="foreColor" className="adv-option-button" onChange={handleColorChange} />
                    <label htmlFor="foreColor">Font Color</label>
                </div>
                <div className="input-wrapper">
                    <input type="color" id="backColor" className="adv-option-button" onChange={handleColorChange}/>
                    <label htmlFor="backColor">Highlight Color</label>
                </div>
            </div>

            {/* Content editable area */}
            {/* <input type="text" placeholder="Title" className="title-area" />
            <div id="text-input" contentEditable="true" ref={textInputRef}>
            {imageSrc && <img src={imageSrc} alt="uploaded" style={{ maxWidth: "100%", height: "auto" }} />} */}
            {/* </div> */}
            <form onSubmit={handlePost} className="post-container">
                <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required  />
                <textarea
                    placeholder="Content"
                    value={content}
                    id="text-input"
                    ref={textInputRef}
                    onChange={(e) => setContent(e.target.value)}
                    required
                ></textarea>
                <div className="sumbit-btn">
                    <button type="submit">Post</button>
                </div>
               
            </form>

            {/* Form to preview content */}
            <form action="/preview" id="previewForm" method="GET">
                <input type="hidden" name="content" id="contentInput" />
            </form>

            {/* Buttons for preview, posting, and saving drafts */}
            <div className="button-container">
                <button className="preview" onClick={handlePreviewContent}>Preview</button>
                {/* <button className="post">Post</button> */}
                <button className="draft" onClick={handleSaveDraft}>Draft</button>
            </div>
        </div>
    );
}

export default PostNews;
