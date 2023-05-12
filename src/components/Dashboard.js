import React, { useState, useEffect } from 'react';
import '../styles/style.css';
import Article from './Article';
import Sidebar from './Sidebar';
import Navigation from './Navigation';
import axios from 'axios';

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [loadingText, setLoadingText] = useState(null);
  const [selectedSource, setSelectedSource] = useState('all');
  const [limit, setLimit] = useState(4);
  
  useEffect(() => {
    setLoading(true);
    setLoadingText("Loading articles...");
    setArticles([]);

    const sources = selectedSource === 'all' ? ["bbc", "guardian", "digital_journal", "nbc", "newsweek"] : [selectedSource];

    const articlePromises = [];

    for (const source of sources) {
      const promise = axios.get(`http://localhost:8080/summarizer/api/v1/${source}`);
      articlePromises.push(promise);
    }

    Promise.all(articlePromises)
      .then((responses) => {
        const articles = [];
        for (const response of responses) {
          const sourceArticles = response.data;
          articles.push(...sourceArticles);
        }
        const randomArticles = [];
        while (randomArticles.length < limit && randomArticles.length < articles.length) {
          const randomIndex = Math.floor(Math.random() * articles.length);
          const randomArticle = articles[randomIndex];
          if (!randomArticles.includes(randomArticle)) {
            randomArticles.push(randomArticle);
          }
        }
        setArticles(randomArticles.slice(0, limit)); 
        setLoading(false);
        setLoadingText(null);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setLoadingText(null);
      });
  }, [selectedSource, limit]);

  useEffect(() => {
    if (limit !== parseInt(document.getElementsByClassName("dropdown_num")[0].value)) {
      setLimit(parseInt(document.getElementsByClassName("dropdown_num")[0].value));
    }
  }, [limit, selectedSource]);

  const handleSourceChange = (selectedSource) => {
    setSelectedSource(selectedSource);
    setLimit(4); 
  };

  const handleLimitChange = (newLimit) => {
    setLimit(newLimit);
  };
  return (
    <div className="container">
      <Navigation onSourceChange={handleSourceChange} onLimitChange={handleLimitChange} />
      {loadingText && <div className="loading">{loadingText}</div>}
      {!loading && (
        <div className="articles">
          {articles
            .filter(article => selectedSource === 'all' || selectedSource.source === article.source)
            .slice(0, Math.min(limit, articles.length))
            .map((article, index) => (
              <Article
                key={`article-${index}`}
                title={article.title}
                description={article.content}
                image={article.urlToImage}
                link={article.link}
                source={article.source}
              />
            ))
          }
        </div>
      )}
      <Sidebar />
    </div>
  );
};

export default Dashboard;
