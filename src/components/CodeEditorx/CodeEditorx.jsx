import React, { useRef, useState } from 'react';

const CodeEditorx = ({ code }) => {
  const textareaRef = useRef(null);
  const [isCopied, setIsCopied] = useState(false);

  const copyCodeToClipboard = () => {
    textareaRef.current.select();
    document.execCommand('copy');
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div style={{ position: 'relative', fontFamily: 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace' }}>
      <textarea
        ref={textareaRef}
        value={code}
        readOnly
        rows={10}
        cols={50}
        style={{
          fontSize: '14px',
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          resize: 'vertical',
          width: '100%',
          backgroundColor: '#1e1e1e',
          color: '#d4d4d4',
        }}
      />
      <button
        onClick={copyCodeToClipboard}
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          padding: '8px 16px',
          fontSize: '16px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        {isCopied ? 'Copied' : 'Copy Code'}
      </button>
    </div>
  );
};

export default CodeEditorx;
