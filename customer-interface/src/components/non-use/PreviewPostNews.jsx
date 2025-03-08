import React, { useEffect, useState } from 'react';
import '../../styles/admin/PreviewPostNews.scss';

const PreviewPostNews = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const contentParam = params.get("content");
    if (contentParam) {
      setContent(decodeURIComponent(contentParam));  // Decode the URL content
    }
  }, []);

  return (
    <div className="container-preview">
      <h1>Preview</h1>
      <div
        id="output"
        style={{ border: '1px solid #ddd', padding: '20px' }}
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </div>
  );
};

export default PreviewPostNews;
