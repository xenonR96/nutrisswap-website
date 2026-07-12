import React from 'react';

export const Logo = () => (
  <div className="flex items-center gap-2">
    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-brand-primary rounded-xl flex items-center justify-center shadow-sm overflow-hidden">
      <img
        src="/app_icon.png"
        alt="NutriSwap Logo"
        className="w-full h-full object-cover"
      />
    </div>
    <span className="text-lg sm:text-xl font-bold text-gray-900">NutriSwap</span>
  </div>
);