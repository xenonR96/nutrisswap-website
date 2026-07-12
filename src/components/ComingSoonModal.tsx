import React from 'react';
import { X } from 'lucide-react';

interface ComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ComingSoonModal: React.FC<ComingSoonModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
        >
          <X size={24} />
        </button>
        <div className="text-center">
          <div className="w-16 h-16 bg-brand-primary/15 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">✨</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Get NutriSwap</h3>
          <p className="text-gray-600 mb-6">
            Join thousands of users making smarter food choices with NutriSwap!
          </p>
          <a
            href="https://apps.apple.com/app/nutriswap/id6745822109"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full px-6 py-2.5 bg-brand-primary text-white rounded-xl font-semibold hover:bg-brand-primary-hover transition-colors text-center"
          >
            Download on the App Store
          </a>
        </div>
      </div>
    </div>
  );
};
