import React from 'react'

const Subscribe = () => {
  return (
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 shadow-xl">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:block sm:ml-6">
                <h1 className='relative items-center justify-center'>
                    Subscribe to the Journal
                </h1>
              <div className="flex space-x-4">
                <a href="/" className="text-gray-300 border hover:bg-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Email</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  )
}

export default Subscribe

