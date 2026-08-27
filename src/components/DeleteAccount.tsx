import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';

const DELETE_EMAIL = 'nutriswap@mxjdigital.com';
const mailtoLink = `mailto:${DELETE_EMAIL}?subject=${encodeURIComponent('Account Deletion Request')}&body=${encodeURIComponent('Please delete my NutriSwap account.\n\nRegistered email: \n')}`;

export const DeleteAccount = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col">
      <nav className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/">
            <Logo />
          </Link>
        </div>
      </nav>

      <div className="flex-grow">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Delete Your Account</h1>
          <p className="text-gray-600 mb-8">
            You can request deletion of your NutriSwap account and associated personal data at any time.
          </p>

          <div className="bg-white rounded-2xl p-8 shadow-sm space-y-6">
            <h2 className="text-xl font-semibold text-gray-900">How to request account deletion</h2>
            <ol className="list-decimal pl-5 space-y-4 text-gray-700">
              <li>
                Send an email to{' '}
                <a href={mailtoLink} className="text-brand-primary font-medium hover:underline">
                  {DELETE_EMAIL}
                </a>{' '}
                from the email address linked to your NutriSwap account.
              </li>
              <li>
                Use the subject line <strong>Account Deletion Request</strong>.
              </li>
              <li>
                In the message, include the email address you used to sign up for NutriSwap.
              </li>
              <li>
                We will confirm your request and delete your account and personal data within 30 days.
              </li>
            </ol>

            <a
              href={mailtoLink}
              className="inline-block w-full sm:w-auto text-center px-6 py-3 bg-brand-primary text-white rounded-xl font-semibold hover:bg-brand-primary-hover transition-colors"
            >
              Email us to delete your account
            </a>

            <p className="text-sm text-gray-500 pt-2">
              Deleting your account removes your profile, preferences, and scan history. This action cannot be undone.
            </p>
          </div>
        </div>
      </div>

      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-600">Copyright © 2026 MxJ Digital</div>
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
