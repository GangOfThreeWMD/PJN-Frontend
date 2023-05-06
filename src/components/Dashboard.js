import React, { useState, useEffect } from 'react';
import '../styles/style.css';
import Article from './Article';
import Sidebar from './Sidebar';
import Navigation from './Navigation';
import art from '../assets/art.png';

import axios from 'axios';

const Dashboard = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/summarizer/api/v1')
      .then((response) => {
        setArticles(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container">
      <Navigation /> 
      <div className="articles">
        {articles.map((article) => (
          <Article
            title={article.title}
            description={article.content}
            image={art}
            link={article.link}
          />
        ))}
      </div>
      <Sidebar />
    </div>
  );
};

export default Dashboard;