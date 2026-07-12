import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { ComingSoonModal } from './ComingSoonModal';

export const Terms = () => {
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
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms and Conditions</h1>
          <div className="prose prose-emerald max-w-none">
            <p className="text-gray-600 mb-8">Last updated: May 5, 2025</p>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Interpretation and Definitions</h2>
              <h3 className="text-lg font-medium mb-2">Interpretation</h3>
              <p className="mb-4">The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
              
              <h3 className="text-lg font-medium mb-2">Definitions</h3>
              <ul className="list-disc pl-5 mb-8 space-y-2">
                <li><strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</li>
                <li><strong>Country</strong> refers to: New York, United States</li>
                <li><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to MxJ Digital.</li>
                <li><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</li>
                <li><strong>Service</strong> refers to the Website.</li>
                <li><strong>Website</strong> refers to NutriSwap, accessible from nutriswap.app</li>
                <li><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
              </ul>

              <h2 className="text-xl font-semibold mb-4">Acknowledgment</h2>
              <p className="mb-4">These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.</p>
              <p className="mb-8">Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.</p>

              <h2 className="text-xl font-semibold mb-4">Links to Other Websites</h2>
              <p className="mb-8">Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company. The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services.</p>

              <h2 className="text-xl font-semibold mb-4">Termination</h2>
              <p className="mb-8">We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions. Upon termination, Your right to use the Service will cease immediately.</p>

              <h2 className="text-xl font-semibold mb-4">Limitation of Liability</h2>
              <p className="mb-8">To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service).</p>

              <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
              <p className="mb-4">If you have any questions about these Terms and Conditions, you can contact us:</p>
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