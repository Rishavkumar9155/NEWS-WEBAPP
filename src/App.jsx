import React, { useState } from 'react';
import Navbar from './components/Navbar';
import NewsBoard from './components/NewsBoard';

const App = () => {
  const [category, setCategory] = useState('general');

  return (
    <div className='bg-gray-100 min-h-screen'>
      <Navbar setCategory={setCategory} />
      <NewsBoard category={category} />
    </div>
  );
};

export default App;
