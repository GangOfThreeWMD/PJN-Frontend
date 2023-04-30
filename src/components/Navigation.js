import React from 'react';
import { Navbar, Form, FormControl } from 'react-bootstrap';
import logo from '../assets/logo.png';
import search_icon from '../assets/search_icon.png';
import '../styles/navbar.css';

const Navigation = () => {
  return (
    <div className="navbar">
      <Navbar style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} width="auto" className="logo" />
      </Navbar>
      <div className="search-bar search-bar">
        <img src={search_icon} width="30" height="30" className="nav-icon" />
        <Form inline>
          <FormControl type="text" placeholder="Prompt text here" className="form-control" />
        </Form>
      </div>
      <hr/>
    </div>
         
  );
};

export default Navigation;

