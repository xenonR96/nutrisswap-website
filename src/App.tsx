import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { ChevronDown, Heart, Repeat, Search, Target, Sparkles } from 'lucide-react';
import { Logo } from './components/Logo';
import { Terms } from './components/Terms';
import { Privacy } from './components/Privacy';
import { Contact } from './components/Contact';
import { Sources } from './components/Sources';
import { GetPage } from './components/GetPage';
import { ComingSoonModal } from './components/ComingSoonModal';

function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadClick = () => {
    window.location.href = 'https://apps.apple.com/app/nutriswap/id6745822109';
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <ComingSoonModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Logo />
            <div className="hidden md:flex items-center gap-6">
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
              >
                How it works
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
              >
                FAQ
              </button>
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

      {/* Banner */}
      <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white py-2 text-center text-sm font-medium shadow-sm">
        <p>Available now on the App Store</p>
      </div>

      <main className="flex-grow">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl sm:text-7xl font-bold text-gray-900 mb-6 leading-tight bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Scan. Know. Choose Better.
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Point your camera at any barcode and instantly see nutrition scores, ingredients, allergens, and better alternatives in seconds.
              </p>
              <div className="flex flex-col items-center lg:items-start">
                <a 
                  href="https://apps.apple.com/app/nutriswap/id6745822109"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img 
                    src="/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg" 
                    alt="Download on the App Store" 
                    className="h-16 cursor-pointer hover:opacity-90 transition-opacity"
                  />
                </a>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/screenshots.png" 
                alt="NutriSwap App Screenshots" 
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* How it Works Section */}
          <div id="how-it-works" className="mt-24 mb-16">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent">How NutriSwap Works</h2>
            <div className="bg-white p-8 rounded-3xl shadow-md">
              <div className="grid md:grid-cols-3 gap-12">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-emerald-100 rounded-2xl flex items-center justify-center">
                    <Search className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Point & Scan</h3>
                  <p className="text-gray-600">Hold your phone over any product barcode</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-emerald-100 rounded-2xl flex items-center justify-center">
                    <Search className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Get Instant Results</h3>
                  <p className="text-gray-600">See nutrition scores, ingredients, and alerts</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-emerald-100 rounded-2xl flex items-center justify-center">
                    <Repeat className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Find Better Swaps</h3>
                  <p className="text-gray-600">Discover healthier alternatives instantly</p>
                </div>
              </div>
            </div>
          </div>

          {/* Why it Works Section */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent">Why NutriSwap Makes Eating Better Easy</h2>
            <div className="space-y-12">
              <div className="bg-white p-8 rounded-3xl shadow-md grid md:grid-cols-2 gap-12 items-center">
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-6 text-gray-900">Scan & Discover Better Choices</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 mt-2 rounded-full bg-emerald-500 flex-shrink-0" />
                      <p className="text-gray-700">Scan any barcode and get instant nutrition scores</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 mt-2 rounded-full bg-emerald-500 flex-shrink-0" />
                      <p className="text-gray-700">See ingredients, allergens, and health alerts in seconds</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 mt-2 rounded-full bg-emerald-500 flex-shrink-0" />
                      <p className="text-gray-700">Get smart alternatives that fit your goals</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 mt-2 rounded-full bg-emerald-500 flex-shrink-0" />
                      <p className="text-gray-700">No logging required, just scan and swap</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 mt-2 rounded-full bg-emerald-500 flex-shrink-0" />
                      <p className="text-gray-700">Make confident choices at the grocery store or restaurant</p>
                    </li>
                  </ul>
                </div>
                <div className="p-8">
                  <div className="aspect-square overflow-hidden rounded-3xl shadow-md">
                    <video
                      src="/test_video.mov"
                      className="w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-md grid md:grid-cols-2 gap-12 items-center">
                <div className="p-8">
                  <div className="aspect-square overflow-hidden rounded-3xl shadow-md">
                    <img
                      src="/whofor.png"
                      alt="People enjoying healthy food"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-6 text-gray-900">Built for Everyone</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 mt-2 rounded-full bg-emerald-500 flex-shrink-0" />
                      <p className="text-gray-700">Managing allergies? Get instant alerts for hidden ingredients</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 mt-2 rounded-full bg-emerald-500 flex-shrink-0" />
                      <p className="text-gray-700">Want more protein? Find better options in your favorite category</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 mt-2 rounded-full bg-emerald-500 flex-shrink-0" />
                      <p className="text-gray-700">Following a special diet? Get tailored recommendations instantly</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 mt-2 rounded-full bg-emerald-500 flex-shrink-0" />
                      <p className="text-gray-700">Just curious about ingredients? Scan and explore without pressure</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent">What our users say</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <div className="flex items-center mb-4">
                  <img
                    src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150"
                    alt="Sarah M."
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h4 className="font-semibold">Sarah M.</h4>
                    <p className="text-sm text-gray-500">Found better choices instantly</p>
                  </div>
                </div>
                <p className="text-gray-600">"NutriSwap changed my shopping habit. Now I scan products and discover healthier alternatives I never knew existed. It's so simple and quick!"</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <div className="flex items-center mb-4">
                  <img
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150"
                    alt="James K."
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h4 className="font-semibold">James K.</h4>
                    <p className="text-sm text-gray-500">Manages dietary restrictions</p>
                  </div>
                </div>
                <p className="text-gray-600">"As someone with multiple allergies, NutriSwap gives me peace of mind. The allergen alerts are accurate and potentially life-saving."</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <div className="flex items-center mb-4">
                  <img
                    src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150"
                    alt="Dr. Lisa W."
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h4 className="font-semibold">Dr. Lisa W.</h4>
                    <p className="text-sm text-gray-500">Nutritionist</p>
                  </div>
                </div>
                <p className="text-gray-600">"I recommend NutriSwap to all my clients. It's the fastest way to make informed food choices without overwhelming them with data."</p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div id="faq" className="max-w-2xl mx-auto mb-16">
            <h2 className="text-2xl font-semibold text-center mb-8 bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                {
                  question: "How does the barcode scanner work?",
                  answer: "Simply point your phone camera at any product barcode. NutriSwap instantly recognizes it and pulls detailed nutrition information from our database. It takes less than a second!"
                },
                {
                  question: "What's a nutrition score and how is it calculated?",
                  answer: "Our nutrition scores rate products on a 0-100 scale based on overall healthfulness, considering calories, sugar, sodium, protein, fiber, and other key nutrients. Higher scores mean healthier choices."
                },
                {
                  question: "Can I use NutriSwap without an internet connection?",
                  answer: "The scanner requires internet to look up products and get alternative suggestions. However, your scan history syncs automatically when connected."
                },
                {
                  question: "How accurate is the allergen information?",
                  answer: "We pull allergen data from manufacturer databases and regulatory databases. However, for severe allergies, always check the physical package label as well."
                },
                {
                  question: "Can I search manually if barcode scanning doesn't work?",
                  answer: "Yes! You can type any product name and search our database. The scanner is convenient, but manual search works just as well."
                },
                {
                  question: "Where do you get your nutrition data from?",
                  answer: "We use trusted sources like FatSecret, USDA databases, and manufacturer information, combined with AI verification to ensure accuracy."
                },
                {
                  question: "Do you store my scan history?",
                  answer: "Yes, with your permission. We track your scans to show you trends, personalized insights, and help you understand your eating patterns over time."
                },
                {
                  question: "Is it free to use NutriSwap?",
                  answer: "You can start with a free trial to scan and explore. A subscription unlocks personalized recommendations, detailed insights, and ad-free browsing."
                }
              ].map((faq, index) => (
                <details key={index} className="bg-white rounded-xl shadow-md group">
                  <summary className="px-6 py-4 cursor-pointer font-medium flex items-center justify-between">
                    {faq.question}
                    <ChevronDown size={20} className="text-gray-500 transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="px-6 py-4 text-gray-600 border-t">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>

          {/* Final CTA Section */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Scan. Know. Swap Smarter.
            </h2>
            <a
              href="https://apps.apple.com/app/nutriswap/id6745822109"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-emerald-500 text-white rounded-xl font-semibold hover:bg-emerald-600 transition-colors text-lg shadow-md"
            >
              Download now
            </a>
          </div>
        </div>
      </main>

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
              <Link to="/sources" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Sources
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/sources" element={<Sources />} />
      <Route path="/get" element={<GetPage />} />
    </Routes>
  );
}

export default App;