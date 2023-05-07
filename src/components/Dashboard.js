import React, { useState, useEffect } from 'react';
import '../styles/style.css';
import Article from './Article';
import Sidebar from './Sidebar';
import Navigation from './Navigation';
import axios from 'axios';

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [source, setSource] = useState("");
  const [loadingText, setLoadingText] = useState(null);

  const handleSourceChange = (selectedSource) => {
    setSource(selectedSource);
  };

  useEffect(() => {
    if (!source) {
      setLoadingText("Waiting for your choice...");
      return;
    }

    setLoading(true);
    setLoadingText("Loading articles...");
    setArticles([]);

    axios
      .get(`http://localhost:8080/summarizer/api/v1/${source}`)
      .then((response) => {
        setArticles(response.data);
        setLoading(false);
        setLoadingText(null);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setLoadingText(null);
      });
  }, [source]);

  return (
    <div className="container">
      <Navigation onSourceChange={handleSourceChange} />
      {loadingText && <div className="loading">{loadingText}</div>}
      {!loading && source && (
        <div className="articles">
          {articles.slice(0, 12).map((article, index) => (
            <Article
              key={`article-${index}`}
              title={article.title.split(" ").slice(0, 25).join(" ")}
              description={article.content}
              image={article.urlToImage}
              link={article.link}
            />
          ))}
        </div>
      )}
      <Sidebar />
    </div>
  );
};

export default Dashboard;
