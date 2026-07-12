import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { ComingSoonModal } from './ComingSoonModal';

export const Privacy = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleDownloadClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col">
      <ComingSoonModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <nav className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to="/">
              <Logo />
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link 
                to="/#how-it-works"
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
              >
                How it works
              </Link>
              <Link 
                to="/#faq"
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
              >
                FAQ
              </Link>
            </div>
          </div>
          <button 
            onClick={handleDownloadClick}
            className="px-6 py-2.5 bg-emerald-500 text-white rounded-xl font-semibold hover:bg-emerald-600 transition-colors shadow-sm"
          >
            Download
          </button>
        </div>
      </nav>
      
      <div className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          <div className="prose prose-emerald max-w-none">
            <p className="text-gray-600 mb-8">Last updated: May 5, 2025</p>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <p className="mb-4">This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.</p>
              
              <p className="mb-8">We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.</p>

              <h2 className="text-xl font-semibold mb-4">Interpretation and Definitions</h2>
              <h3 className="text-lg font-medium mb-2">Interpretation</h3>
              <p className="mb-4">The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
              
              <h3 className="text-lg font-medium mb-2">Definitions</h3>
              <ul className="list-disc pl-5 mb-8 space-y-2">
                <li><strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.</li>
                <li><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to MxJ Digital.</li>
                <li><strong>Cookies</strong> are small files that are placed on Your computer, mobile device or any other device by a website.</li>
                <li><strong>Country</strong> refers to: New York, United States</li>
                <li><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</li>
                <li><strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.</li>
                <li><strong>Service</strong> refers to the Website.</li>
                <li><strong>Website</strong> refers to NutriSwap, accessible from nutriswap.app</li>
              </ul>

              <h2 className="text-xl font-semibold mb-4">Collecting and Using Your Personal Data</h2>
              <h3 className="text-lg font-medium mb-2">Types of Data Collected</h3>
              <p className="mb-4">While using Our Service, We may collect several different types of information for various purposes:</p>
              
              <ul className="list-disc pl-5 mb-8 space-y-2">
                <li><strong>Personal Data:</strong> Email address, Name</li>
                <li><strong>Usage Data:</strong> Browser type, IP address, time spent on pages</li>
                <li><strong>Cookies and Tracking Data</strong></li>
              </ul>

              <h2 className="text-xl font-semibold mb-4">Use of Your Personal Data</h2>
              <p className="mb-4">We may use Personal Data for the following purposes:</p>
              <ul className="list-disc pl-5 mb-8 space-y-2">
                <li>To provide and maintain our Service</li>
                <li>To notify you about changes to our Service</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information so that we can improve our Service</li>
                <li>To monitor the usage of our Service</li>
                <li>To detect, prevent and address technical issues</li>
              </ul>

              <h2 className="text-xl font-semibold mb-4">Security of Your Personal Data</h2>
              <p className="mb-8">The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.</p>

              <h2 className="text-xl font-semibold mb-4">Children's Privacy</h2>
              <p className="mb-8">Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13.</p>

              <h2 className="text-xl font-semibold mb-4">Changes to this Privacy Policy</h2>
              <p className="mb-8">We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.</p>

              <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
              <p className="mb-4">If you have any questions about this Privacy Policy, you can contact us:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>By email: nutriswap@mxjdigital.com</li>
                <li>By visiting this page on our website: https://nutriswap.app/contact</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-600">
              Copyright © 2025 MxJ Digital
            </div>
            <div className="flex items-center gap-6">
              <Link to="/terms" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Terms of Service
              </Link>
              <Link to="/privacy" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/contact" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};