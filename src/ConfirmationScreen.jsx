import React from 'react';

const ConfirmationScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-6">
      {/* Skip button */}
      <div className="w-full flex justify-end">
        <a href="#" class="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">
        Skip
        <svg class="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
        </a>
      </div>

      {/* Icon and Text */}
      <div className="flex flex-col items-center mt-8 space-y-2">
        {/* Smaller Icon (replace with an SVG or appropriate icon component) */}
        <div className="text-blue-500 text-4xl"><img src="/assets/ok.jpeg" className='h-80' alt="" /></div>

        {/* Heading */}
        <h1 className="text-xl font-semibold text-gray-800">Congratulations! You’re all set up.</h1>

        {/* Subtext */}
        <p className="text-md text-center text-gray-500 mt-4">
            Your application is currently under review. It may take upto 3 days to complete the verification. Click to <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Track your application</a> 
        </p>
      </div>

      {/* Explore Stocks Section */}
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-700 font-medium">
        Discover Our Features
        </p>
        <div className="flex justify-center space-x-2 mt-4">
          {/* Blue Tiles */}
          <button className="bg-blue-500 text-white text-xs p-4 rounded-md w-24 h-24 flex items-center justify-center">
            Begin trading with Trade Easy
          </button>
          <button className="bg-blue-500 text-white text-xs p-4 rounded-md w-24 h-24 flex items-center justify-center">
            Explore F&O Launchpad
          </button>
          <button className="bg-blue-500 text-white text-xs p-4 rounded-md w-24 h-24 flex items-center justify-center">
            Try the Goal Calculator
          </button>
        </div>
      </div>

      {/* Begin Tour Button */}
      <div className="mt-8">
      <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Take a Quick Tour</button>
      </div>
    </div>
  );
};

export default ConfirmationScreen;
