import React from 'react';
import './NewsList.css';

const NewsList = ({ articles, onArticleClick }) => {
  // Ensure articles is defined and is an array
  if (!Array.isArray(articles)) {
    return <p>No articles found.</p>;
  }

  return (
    <div className="news-list">
      {articles.length === 0 ? (
        <p>No news available for the selected category.</p>
      ) : (
        articles.map((article, index) => (
          <div
            key={index}
            className="news-item"
            onClick={() => onArticleClick(article)}
          >
            <img
              src={article.urlToImage}
              alt={article.title}
              className="news-image"
            />
            <div className="news-content">
              <h3 className="news-title">{article.title}</h3>
              <p className="news-description">{article.description}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default NewsList;
