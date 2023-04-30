import React, { useState } from 'react';
import add_file from '../assets/add_file.png'
import '../styles/sidebar.css';

const Sidebar = (props) => {

const [fileName, setFileName] = useState("");

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

    return (
    <div className="sidebar">
        <div className="summary">
          <h2>Summary</h2>
          <p>This is where the summary of the text uploaded by the user will be displayed.</p>
        </div>

        <div className="file-upload">
          <div className="file-path">
            <p>Wczytany plik: <span id="file-name">{fileName}</span></p>
          </div>
          <label htmlFor="file-upload" id="file-upload-label">
            <img src={add_file} alt="Wgraj plik" id="file-upload-icon" />
          </label>
          <input type="file" id="file-upload" style={{ display: "none" }} accept=".txt" onChange={handleFileUpload} />
        </div>
    </div>

    );
};

export default Sidebar;