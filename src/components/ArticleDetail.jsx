import React from 'react';
import './ArticleDetail.css';

const ArticleDetail = ({ article }) => {
  if (!article) return null;

  return (
    <div className="article-detail">
      <img
        src={article.urlToImage}
        alt={article.title}
        className="article-image"
      />
      <h2 className="article-title">{article.title}</h2>
      <p className="article-content">{article.content}</p>
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="read-more-link"
      >
        Read Full Article
      </a>
    </div>
  );
};

export default ArticleDetail;
