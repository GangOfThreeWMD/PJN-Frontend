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
  const [limit, setLimit] = useState(5);

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
          const sourceArticles = response.data.slice(0, selectedSource === 'all' ? limit / 5 : limit);
          articles.push(...sourceArticles);
        }
        setArticles(articles);
        setLoading(false);
        setLoadingText(null);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setLoadingText(null);
      });
  }, [selectedSource, limit]);

  const handleSourceChange = (selectedSource) => {
    setSelectedSource(selectedSource);
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
            .map((article, index) => (
              <Article
                key={`article-${index}`}
                title={article.title.split(" ").slice(0, 8).join(" ")}
                description={article.content.split(" ").filter(word => !word.endsWith("...")).join(" ")}
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
