import React, { useState } from 'react';
import { Navbar } from 'react-bootstrap';
import logo from '../assets/logo.png';
import search_icon from '../assets/search_icon.png'
import '../styles/navbar.css';

const Navigation = ({ onSourceChange, limit, onLimitChange }) => {
  const options = ["all", "newsweek", "nbc"];
  const [rotate, setRotate] = useState(false);


  const handleLimitChange = (event) => {
    const newLimit = parseInt(event.target.value, 10);
    if (!isNaN(newLimit)) {
      onLimitChange(newLimit);
    }
  };

  const handleSourceChange = (event) => {
    const selectedSource = event.target.value;
    onSourceChange(selectedSource);
  };

  const handleSelectClick = () => {
    setRotate(!rotate);
  }

  return (
    <div className="navbar">
      <Navbar style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} width="auto" className="logo" alt="logo" onClick={() => window.location.reload()} />
      </Navbar>
      <div className="search-bar">
        <div className="dropdown">
        <select defaultValue="Select Provider" onClick={handleSelectClick} onChange={handleSourceChange} style={{ backgroundImage: `url(${search_icon})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'left', backgroundPositionX: '20px', backgroundSize: '32px auto' }}>
  <option disabled hidden>Select Provider</option>
  {options.map((option) => (
    <option key={option} value={option}>
      {option}
    </option>
  ))}
</select>
          <div className={`dropdown-arrow ${rotate ? 'rotate' : ''}`}></div>
        </div>
        <div className="limit_box">
  <p>Limit:</p>
  <select
    className="dropdown_num"
    value={limit}
    onChange={handleLimitChange}
  >
    {[5, 10, 15].map((value) => (
      <option key={value} value={value}>
        {value}
      </option>
    ))}
  </select>
</div>
      </div>
      <hr />
    </div>
  );
};

export default Navigation;
