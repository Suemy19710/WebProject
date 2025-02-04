import React, { useEffect, useState } from 'react';

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
    <>
      <h1>Preview</h1>
      <div
        id="output"
        style={{ border: '1px solid #ddd', padding: '20px' }}
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </>
  );
};

export default PreviewPostNews;
