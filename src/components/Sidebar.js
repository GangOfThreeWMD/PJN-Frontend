import React, { useState } from 'react';
import add_file from '../assets/add_file.png'
import '../styles/sidebar.css';

const Sidebar = (props) => {

const [fileName, setFileName] = useState("");
const [summary, setSummary] = useState("");

const handleFileUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    setFileName(file.name);
    const reader = new FileReader();
    reader.readAsText(file, "UTF-8");
    reader.onload = function (evt) {
      const text = evt.target.result;
      fetch("http://localhost:8080/summarizer/api/v1", {
        method: "POST",
        body: text
      })
      .then(response => response.text())
      .then(data => setSummary(data))
      .catch(error => console.error(error));
    }
    reader.onerror = function (evt) {
      console.error("error reading file");
    }
  }
};



return (
<div className="sidebar">
<div className="summary">
<h2>Summary from file</h2>
<p>{summary ? summary : "This is where the summary of the text uploaded by the user will be displayed."}</p>
</div>

  <div className="file-upload">
    <div className="file-path">
      <p>Uploaded file: <span id="file-name">{fileName}</span></p>
    </div>
    <label htmlFor="file-upload" className="file-upload-label">
      <img src={add_file} alt="Wgraj plik" className="file-upload-icon" />
    </label>
    <input type="file" id="file-upload" style={{ display: "none" }} accept=".txt" onChange={handleFileUpload} />
  </div>
</div>
);
};

export default Sidebar;