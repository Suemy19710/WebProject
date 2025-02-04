import React, { useState, useEffect, useRef } from 'react';
import '../../styles/admin/PostNews.scss';

const PostNews = () => {
    const [activeButtons, setActiveButtons] = useState({
        align: false,
        spacing: false,
        format: false,
        script: false,
    });

    // Refs for DOM elements that we need to interact with (font name, font size, text input area)
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

    // useEffect hook runs once when the component is mounted to initialize font and font size options
    useEffect(() => {
        // Initialize font options
        if (fontNameRef.current && fontNameRef.current.children.length === 0) {
            fontList.forEach((value) => {
                const option = document.createElement("option");
                option.value = value;
                option.innerHTML = value;
                fontNameRef.current.appendChild(option); // Append the font option to the dropdown
            });
        }

        if (fontSizeRef.current && fontSizeRef.current.children.length === 0) {
            for (let i = 1; i <= 7; i++) {
                const option = document.createElement("option");
                option.value = i;
                option.innerHTML = i;
                fontSizeRef.current.appendChild(option); // Append font size option
            }
            fontSizeRef.current.value = 3; // Set the default font size to 3
        }
    }, []); // Empty dependency array ensures this effect runs only once when the component is mounted

    const handleFontSizeChange = (e) => {
        textInputRef.current.style.fontSize = `${e.target.value}px`;
    };

    const handleFontChange = (e) => {
        textInputRef.current.style.fontFamily = e.target.value;
    };

    const handleColorChange = (e) => {
        textInputRef.current.style.color = e.target.value;
    };

    // Function to modify text in the editor (executes commands like bold, italic, etc.)
    const modifyText = (command, defaultUi, value) => {
        if (textInputRef.current) {
            document.execCommand(command, defaultUi, value); // Executes the command on the text area
        }
    };

    // Handle button click for formatting (bold, italic, etc.)
    const handleButtonClick = (buttonId) => {
        // if (activeButtons.buttonId) {
        //     setActiveButtons(null);
        // } else{
        //     setActiveButtons(buttonId);
        // }
        setActiveButtons((prev) => ({
            ...prev,
            [buttonId]: !prev[buttonId], // Toggle active state
        }));
        modifyText(buttonId, false, null); // Execute command based on button ID (e.g., bold, superscript)
    }

    // Handle changes for advanced options like font size, font family, etc.
    const handleAdvancedButtonChange = (e) => {
        modifyText(e.target.id,false, e.target.value); // Apply changes to the text based on selected value
    }

    // Handle link creation by prompting the user for a URL
    const handleLinkButtonClick = () => {
        let userLink = prompt("Enter a URL?");
        if (/http/i.test(userLink)) {
            modifyText("createLink", userLink); // Create the link with the URL
        } else {
            userLink = "http://" + userLink; // Add 'http://' if not included by the user
            modifyText("createLink", userLink); // Create the link with the updated URL
        }
    }

    // Toggle the active state of a button (to highlight the button when clicked)
    const toggleActiveButton = (buttonType, buttonId) => {
        setActiveButtons((prev) => ({
            ...prev,
            [buttonType]: prev[buttonType].buttonId ? null : buttonId,
        }));
    };

    // Handle image upload: preview the selected image in the editor
    const handleImageUpload = (e) => {
        const file = e.target.files[0]; // Get the uploaded file
        if (file && textInputRef.current) {
            const reader = new FileReader();
            reader.onload = function (event) {
                setImgSrc(event.target.result);
            };
            reader.readAsDataURL(file); // Read the file as a data URL
        }
    }
    const handleFileUpload =(event) => {
        const file = event.target.files[0];
        if (file) {
            const formData = new FormData();
            formData.append('image', file);

             // Upload the file using your preferred method (e.g., fetch, axios)
        fetch('/upload', {
            method: 'POST',
            body: formData,
        }).then(response => response.json())
          .then(data => {
              setImgSrc(data.imageUrl);  // assuming your server returns the image URL
          });
        }
    }

    // Function to preview the content and submit the form
    const handlePreviewContent = () => {
        const editorContent = textInputRef.current.innerHTML; // Get the editor's content
        document.getElementById("contentInput").value = editorContent; // Set content in a hidden input
        document.getElementById("previewForm").submit(); // Submit the preview form with the content
    }

    // Function to save the current content as a draft
    const handleSaveDraft = () => {
        alert("Draft Saved:\n" + textInputRef.current.innerHTML); // Show an alert with the draft content
    }
    return (
        <div className="container-post-news">
            <div className="options">
                {/* Button for text formatting (bold, superscript, etc.) */}
                <button id="bold" className={`option-button ${activeButtons.bold ? 'active' : ''}`} onClick={() => handleButtonClick("bold")}>
                    <i className="fa-solid fa-bold"></i>
                </button>
                <button id="italic" className={`option-button ${activeButtons.italic ? 'active' : ''}`} onClick={() => handleButtonClick("italic")}>
                    <i class="fa-solid fa-italic"></i>                
                </button>
                <button id="underline" className={`option-button ${activeButtons.underline ? 'active' : ''}`} onClick={() => handleButtonClick("underline")}>
                    <i class="fa-solid fa-underline"></i>                
                </button>
                <button id="strikethrough" className={`option-button ${activeButtons.strikethrough ? 'active' : ''}`} onClick={() => handleButtonClick("strikethrough")}>
                    <i class="fa-solid fa-strikethrough"></i>                
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
                    onChange={handleFileUpload} // Handle the file upload
                />
                {/* Advanced options (font size, font name, colors) */}
                <select id="formatBlock" className="adv-option-button" onClick={()=> toggleActiveButton()}>
                    <option value="H1">H1</option>
                    <option value="H2">H2</option>
                    <option value="H3">H3</option>
                    <option value="H4">H4</option>
                    <option value="H5">H5</option>
                    <option value="H6">H6</option>
                </select>
                <select id="fontName" className="adv-option-button" ref={fontNameRef} onChange={(e) => handleFontChange(e)}></select>
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
            <div id="text-input" contentEditable="true" ref={textInputRef}>
            {imageSrc && <img src={imageSrc} alt="uploaded" style={{ maxWidth: "100%", height: "auto" }} />}
            </div>

            {/* Form to preview content */}
            <form action="/preview" id="previewForm" method="GET">
                <input type="hidden" name="content" id="contentInput" />
            </form>

            {/* Buttons for preview, posting, and saving drafts */}
            <div className="button-container">
                <button className="preview" onClick={handlePreviewContent}>Preview</button>
                <button className="post">Post</button>
                <button className="draft" onClick={handleSaveDraft}>Draft</button>
            </div>
        </div>
    );
}

export default PostNews;
