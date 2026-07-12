import React, { useEffect } from 'react';

const APP_STORE_URL = 'https://apps.apple.com/app/nutriswap/id6745822109';

export const GetPage = () => {
  useEffect(() => {
    window.location.href = APP_STORE_URL;
  }, []);

  const handleAppStoreClick = () => {
    window.location.href = APP_STORE_URL;
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      {/* External link icon in top right */}
      <div className="absolute top-8 right-8">
        <div className="w-12 h-12 bg-blue-400 rounded-xl flex items-center justify-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 17L17 7M17 7H7M17 7V17"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <div className="text-center max-w-md mx-auto">
        {/* Logo */}
        <div className="mb-8">
          <div className="w-16 h-16 bg-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm overflow-hidden">
            <img
              src="/app_icon.png"
              alt="NutriSwap Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-2xl font-bold">NutriSwap</h1>
        </div>

        {/* Main heading */}
        <h2 className="text-4xl font-bold mb-8 leading-tight">
          The App to Eat Better.
        </h2>

        {/* App Store button */}
        <button
          onClick={handleAppStoreClick}
          className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg mb-12 hover:bg-gray-100 transition-colors"
        >
          Go to App Store
        </button>

        <div className="bg-white text-black rounded-2xl p-6 text-left">
          <p className="mb-4">
            <span className="inline-flex items-center justify-center w-6 h-6 bg-black text-white rounded-full text-sm mr-3">
              1
            </span>
            Tap the menu in the top right corner of the app.
          </p>
          <p className="mb-4">
            <span className="inline-flex items-center justify-center w-6 h-6 bg-black text-white rounded-full text-sm mr-3">
              2
            </span>
            Choose “Open in browser”.
          </p>
          <p>
            <span className="inline-flex items-center justify-center w-6 h-6 bg-black text-white rounded-full text-sm mr-3">
              3
            </span>
            Then tap <strong>Go to App Store</strong> above.
          </p>
        </div>
      </div>
    </div>
  );
};
