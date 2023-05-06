import React from 'react';
import '../styles/style.css';
import attach from '../assets/attach.png';
import like from '../assets/like.png';
import share from '../assets/share.png';

const Article = (props) => {
  const handleClick = () => {
    window.open(props.link, '_blank');
  }

  return (
    <div className="article">
      <div className="article-header">
        <img src={attach} width="auto" className="article-icon" alt="attachment" />
        <h2 className="article-title">{props.title}</h2>
      </div>
      <hr />
      <div className="article-info">
        <img src={props.image} className="article-image" alt="article" />
        <p className="article-description">{props.description}</p>
        <button className="article-button" onClick={handleClick}>Go to Article</button>
        <img src={like} className="article-share" alt="like" />
        <img src={share} className="article-like" alt="share" />
      </div>
    </div>
  );
};

export default Article;
