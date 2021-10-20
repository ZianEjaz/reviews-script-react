import React from "react";
import { useQuill } from 'react-quilljs';
import "react-quill/dist/quill.snow.css";







const TextEditor = ({html, updateChanges}) => {
    const { quill, quillRef } = useQuill();
    
    React.useEffect(() => {
      if (quill) {
        quill.clipboard.dangerouslyPasteHTML(html);
        quill.on('text-change', (delta, oldDelta, source) => {
          updateChanges(quill.root.innerHTML)
          
        });
      }
    }, [quill]);
  
    return (
      <div style={{ width: '50%', height: '300px', margin :'auto' }}>
        <div ref={quillRef} />
      </div>
    );
  };
  export default TextEditor