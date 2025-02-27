import React, { useState } from 'react';

const Navbar = ({ setCategory }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='bg-white shadow-md sticky top-1 z-40'>
      <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
        <div className='relative flex items-center justify-between h-16'>
          <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
            {/* Mobile menu button*/}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
              aria-controls='mobile-menu'
              aria-expanded='false'
            >
              <span className='sr-only'>Open main menu</span>
              {isOpen ? (
                <svg
                  className='block h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              ) : (
                <svg
                  className='block h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h16m-7 6h7'
                  />
                </svg>
              )}
            </button>
          </div>
          <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
            <div className='flex-shrink-0 text-lg font-boldF font-["futura"]'>NEWS TREND</div>
            <div className='hidden sm:block sm:ml-6'>
              <div className='flex space-x-4'>
                {['technology', 'business', 'health', 'sports', 'entertainment'].map((category) => (
                  <div
                    key={category}
                    className='cursor-pointer hover:text-blue-500 transition-colors duration-300'
                    onClick={() => setCategory(category)}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className='sm:hidden' id='mobile-menu'>
          <div className='px-2 pt-2 pb-3 space-y-1'>
            {['technology', 'business', 'health', 'sports', 'entertainment'].map((category) => (
              <div
                key={category}
                className='cursor-pointer block px-3 py-2 rounded-md text-base font-medium hover:text-blue-500 transition-colors duration-300'
                onClick={() => {
                  setCategory(category);
                  setIsOpen(false);
                }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
