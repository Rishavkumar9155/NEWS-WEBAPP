import React from 'react';
import img from '../assets/th.jpeg';

const NewsItem = ({ title, description, src, url }) => {
  const imageUrl = src || img;

  return (
    <div className='bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-500 hover:scale-105'>
      {imageUrl ? (
        <img src={imageUrl} alt={title || 'Default Image'} className='w-full h-48 object-cover' />
      ) : (
        <div className='w-full h-48 bg-gray-200 flex items-center justify-center'>
          <span className='text-gray-500'>No Image Available</span>
        </div>
      )}
      <div className='p-4'>
        <h3 className='text-xl font-semibold mb-2'>{title || 'No Title Available'}</h3>
        <p className='text-gray-700 mb-4'>{description || 'No Description Available'}</p>
        <a
          href={url}
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-500 hover:underline'
        >
          Read more
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
