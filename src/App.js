import React, { useState, useEffect } from 'react';
import CategorySelection from './components/CategorySelection';
import NewsList from './components/NewsList';
import ArticleDetail from './components/ArticleDetail';
import './App.css';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('Sports');
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const fetchNews = async (category) => {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?category=${category.toLowerCase()}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
    );
    const data = await response.json();
    setArticles(data.articles);
  };

  useEffect(() => {
    fetchNews(selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="app-container">
      <h1 className="app-title">Personalized News Finder</h1>
      <CategorySelection
        selectedCategory={selectedCategory}
        onCategorySelect={setSelectedCategory}
      />
      <div className="content-container">
        {selectedArticle ? (
          <ArticleDetail article={selectedArticle} />
        ) : (
          <NewsList
            articles={articles}
            onArticleClick={setSelectedArticle}
          />
        )}
      </div>
    </div>
  );
};

export default App;
