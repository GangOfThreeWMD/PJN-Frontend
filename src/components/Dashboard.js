import React, { useState } from 'react';
import '../styles/style.css';
import Article from './Article';
import Sidebar from './Sidebar';
import Navigation from './Navigation';
import art from '../assets/art.png';

const Dashboard = () => {

  return (
    <div className="container">
      <Navigation /> 
      <div class="wrapper">
      <div className="articles">
        <Article
          title="Lorem ipsum dolor sit amet"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          author="Jane Doe"
          date="24 stycznia 2023"
          image={art}
        />
        <Article
          title="Lorem ipsum dolor sit amet"
          description="Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          author="John Smith"
          date="22 stycznia 2023"
          image={art}
        />
        <Article
          title="Sed do eiusmod tempor"
          description="Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          author="Jane Doe"
          date="20 stycznia 2023"
          image={art}
        />
         <Article
          title="Sed do eiusmod tempor"
          description="Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          author="Jane Doe"
          date="20 stycznia 2023"
          image={art}
        />
         <Article
          title="Sed do eiusmod tempor"
          description="Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          author="Jane Doe"
          date="20 stycznia 2023"
          image={art}
        />
         <Article
          title="Sed do eiusmod tempor"
          description="Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          author="Jane Doe"
          date="20 stycznia 2023"
          image={art}
        />
         <Article
          title="Sed do eiusmod tempor"
          description="Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          author="Jane Doe"
          date="20 stycznia 2023"
          image={art}
        />
      </div>
      <Sidebar />
      </div>
    </div>
  );
};

export default Dashboard;
