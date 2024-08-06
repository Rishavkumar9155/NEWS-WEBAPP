import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
      const response = await fetch(url);
      const data = await response.json();
      setArticles(data.articles || []);
    };

    fetchNews();
  }, [category]);

  return (
    <div className='p-4'>
      <h2 className='news text-center text-white text-[5vh] sm:text-[6vh] md:text-[8vh] mb-6 bg-b'>
        Latest <span className=''>News</span>
      </h2>
      {articles.length > 0 ? (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-fadeIn'>
          {articles.map((news, index) => (
            <NewsItem
              key={index}
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
            />
          ))}
        </div>
      ) : (
        <div className='text-white text-center'>
          No news articles found.
        </div>
      )}
    </div>
  );
};

export default NewsBoard;
