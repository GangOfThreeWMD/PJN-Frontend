import React, { useState, useRef, useEffect } from 'react';
import { Navbar } from 'react-bootstrap';
import logo from '../assets/logo.png';
import triangle from '../assets/triangle.png';
import '../styles/navbar.css';

const Navigation = ({ onSourceChange, limit, onLimitChange }) => {
  const options = ["all", "bbc", "guardian", "digital_journal", "newsweek", "nbc"];
  const [rotate, setRotate] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

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
  setIsOpen(!isOpen);
};

const handleOutsideClick = (event) => {
  if (
    selectRef.current &&
    !selectRef.current.contains(event.target) &&
    !event.target.classList.contains("dropdown-arrow")
  ) {
    setIsOpen(false);
  }
};

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick, false);
    return () => {
      document.removeEventListener("click", handleOutsideClick, false);
    };
  }, []);

  return (
    <div className="navbar">
      <Navbar style={{ display: "flex", alignItems: "center" }}>
        <img
          src={logo}
          width="auto"
          className="logo"
          alt="logo"
          onClick={() => window.location.reload()}
        />
      </Navbar>
      <div className="search-bar">
        <div className="dropdown" onClick={handleSelectClick}>
          <div className={`dropdown-arrow ${rotate ? "rotate" : ""}`}></div>
          <select
            defaultValue="Select Provider"
            ref={selectRef}
            onChange={handleSourceChange}
            className={`select ${isOpen ? 'open' : 'closed'}`}
            style={{
              backgroundImage: `url(${triangle})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "calc(100% - 10px) center",
              backgroundSize: "32px auto",
            }}
          >
            <option disabled hidden>
              Select Provider
            </option>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}

          </select>
          
        </div>
        <div className="limit_box">
      <p>Limit:</p>
      <select
        className="dropdown_num"
        value={limit}
        onChange={handleLimitChange}
        defaultValue="8"
        style={{
          backgroundImage: `url(${triangle})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "calc(100% - 10px) center",
          backgroundSize: "32px auto",
        }}
      >
      {[4, 8, 16].map((value) => (
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
