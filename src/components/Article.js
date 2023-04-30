import React from 'react';
import '../styles/style.css';
import attach from '../assets/attach.png';
import love from '../assets/like.png';
import share from '../assets/share.png';


const Article = (props) => {
  return (
    <div className="article">
  
      <div className="article-header">
        <img src={attach} width="auto" className="article-icon" />
        <h2 className="article-title">{props.title}</h2>
      </div>
      <hr />
      <div className="article-info">
        <img src={props.image} className="article-image" alt="article" />
        <p className="article-description">{props.description}</p>
        <button className="article-button">Go to Article</button>
        <img src={love} className="article-share" alt="share" />
        <img src={share} className="article-like" alt="like" />
      </div>
    </div>

  );
};

export default Article;



