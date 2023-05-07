import React, { useState, useEffect } from 'react';
import { Navbar } from 'react-bootstrap';
import logo from '../assets/logo.png';
import '../styles/navbar.css';
import axios from 'axios';

const Navigation = ({ onSourceChange }) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/summarizer/api/v1/sources")
      .then((response) => {
        const uniqueOptions = response.data.filter(
          (value, index, self) => self.indexOf(value) === index
        );
        setOptions(uniqueOptions);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSourceChange = (event) => {
    const selectedSource = event.target.value;
    onSourceChange(selectedSource);
  };

  return (
    <div className="navbar">
      <Navbar style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} width="auto" className="logo" alt="logo" />
      </Navbar>
      <div className="search-bar">
        <div className="tekst">
          <h4>News provider:</h4>
        </div>
        <div className="dropdown">
          <select defaultValue="Select provider" onChange={handleSourceChange}>
            <option disabled hidden>Select provider</option>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
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
