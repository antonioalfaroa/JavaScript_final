import React, { useState } from 'react';
import './Notes.css';

const Notes = ({ closeApp }) => {
  const [content, setContent] = useState('');

  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([content], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'note.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleRestart = () => {
    document.querySelector('.notes-content').innerHTML = ''; 
  };

  return (
    <div className="notes">
      <div
        className="notes-content"
        contentEditable
        value={content}
        onInput={(e) => setContent(e.target.innerText)}
        placeholder="Write your note here..."
      />
      <div className="notes-buttons">
        <button onClick={handleDownload}>Download</button>
        <button onClick={handleRestart}>Restart</button>
        <button onClick={closeApp}>Close</button>
      </div>
    </div>
  );
};

export default Notes;
