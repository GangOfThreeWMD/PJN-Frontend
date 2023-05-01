import React from 'react';
import '../styles/style.css';
import Article from './Article';
import Sidebar from './Sidebar';
import Navigation from './Navigation';
import art from '../assets/art.png';

const Dashboard = () => {

  return (
    <div className="container">
      <Navigation /> 
      <div className="articles">
        <Article
          title="Lorem ipsum dolor sit amet"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          image={art}
        />
        <Article
          title="Lorem ipsum dolor sit amet"
          description="Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          image={art}
        />
        <Article
          title="Sed do eiusmod tempor"
          description="Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          image={art}
        />
         <Article
          title="Sed do eiusmod tempor"
          description="Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          image={art}
        />
         <Article
          title="Sed do eiusmod tempor"
          description="Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          image={art}
        />
         <Article
          title="Sed do eiusmod tempor"
          description="Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          image={art}
        />
         <Article
          title="Sed do eiusmod tempor"
          description="Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          image={art}
        />
      </div>
      <Sidebar />
      </div>
  );
};

export default Dashboard;
