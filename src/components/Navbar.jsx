import React from 'react';

const Navbar = () => {
  return (
    <nav className="shadow-xl">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <a href="/" className="text-gray-300 hover:bg-orange-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium">HOME</a>
                <a href="/" className="text-gray-300 hover:bg-orange-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium">GALLERY</a>
                <a href="/" className="text-gray-300 hover:bg-orange-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium">ABOUT</a>
                <a href="/" className="text-gray-300 hover:bg-orange-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium">CONTACT</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
