import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { ComingSoonModal } from './ComingSoonModal';

export const Sources = () => {
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
            className="px-6 py-2.5 bg-brand-primary text-white rounded-xl font-semibold hover:bg-brand-primary-hover transition-colors shadow-sm"
          >
            Download
          </button>
        </div>
      </nav>
      
      <div className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Sources & References</h1>
          <div className="prose prose-emerald max-w-none">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="space-y-6">
                <p>NutriSwap is a tool designed to help you make better food choices by offering nutritional information, comparisons, and healthy alternatives. While we aim to provide accurate and helpful insights, NutriSwap is not a medical app and should not be used to diagnose, treat, or manage health conditions.</p>
                
                <p>We do not offer personalized medical advice, nor do we provide recommendations for individuals with specific dietary needs such as diabetes, allergies, or eating disorders. Always consult a qualified healthcare professional before making any decisions that may affect your health.</p>
                
                <p>Nutritional data in this app is sourced from publicly available food databases, including the FatSecret API. NutriSwap is not affiliated with or endorsed by any of the external organizations or authors referenced below.</p>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <p className="text-sm text-gray-600">Powered by <a href="https://platform.fatsecret.com" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:text-brand-primary-hover">FatSecret Platform API</a></p>
                  <img 
                    src="https://platform.fatsecret.com/api/static/images/powered_by_fatsecret.png" 
                    alt="Powered by FatSecret" 
                    className="h-6"
                  />
                </div>

                <h2 className="text-2xl font-bold mt-8 mb-4">Scientific & Nutritional References</h2>
                
                <h3 className="text-xl font-semibold mt-6 mb-3">Calorie Calculations & Metabolic Rates</h3>
                <p>Our calorie and BMR estimates are based on the Mifflin-St. Jeor equation, one of the most widely accepted formulas for estimating basal metabolic rate (BMR). We then estimate daily energy expenditure using standard activity multipliers.</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><a href="https://doi.org/10.1093/ajcn/51.2.241" className="text-brand-primary hover:text-brand-primary-hover">BMR Equation</a></li>
                  <li><a href="https://www.researchgate.net/publication/377659090_Comprehensive_Review_on_BMI_TDEE_BMR_and_Calories_for_Weight_Management" className="text-brand-primary hover:text-brand-primary-hover">Total Daily Energy Expenditure (TDEE)</a></li>
                  <li><a href="https://www.cdc.gov/healthyweight/assessing/bmi/index.html" className="text-brand-primary hover:text-brand-primary-hover">BMI Reference</a></li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3">Diet & Weight Management</h3>
                <p>Our food recommendations reflect research-based strategies for weight loss, weight maintenance, and healthy eating:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><a href="https://doi.org/10.7570/jomes20065" className="text-brand-primary hover:text-brand-primary-hover">Weight Management Research 1</a></li>
                  <li><a href="https://doi.org/10.3390/nu12123801" className="text-brand-primary hover:text-brand-primary-hover">Weight Management Research 2</a></li>
                  <li><a href="https://doi.org/10.1007/s10552-017-0869-z" className="text-brand-primary hover:text-brand-primary-hover">Weight Management Research 3</a></li>
                  <li><a href="https://doi.org/10.1002/oby.22373" className="text-brand-primary hover:text-brand-primary-hover">Weight Management Research 4</a></li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3">SwapScore Guidelines</h3>
                <p>We assess food quality and swaps using principles from globally recognized dietary guidelines:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><a href="https://www.dietaryguidelines.gov" className="text-brand-primary hover:text-brand-primary-hover">Dietary Guidelines</a></li>
                  <li><a href="https://www.hsph.harvard.edu/nutritionsource/healthy-eating-plate/" className="text-brand-primary hover:text-brand-primary-hover">Harvard Healthy Eating Plate</a></li>
                  <li><a href="https://www.who.int/news-room/fact-sheets/detail/healthy-diet" className="text-brand-primary hover:text-brand-primary-hover">WHO Healthy Diet Guidelines</a></li>
                  <li><a href="https://ods.od.nih.gov/HealthInformation/nutrientrecommendations.aspx" className="text-brand-primary hover:text-brand-primary-hover">NIH Nutrient Recommendations</a></li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">Ingredient Highlights</h2>
                <p>NutriSwap offers quick highlights (e.g. "high in protein", "rich in fiber") using these public resources:</p>

                <h3 className="text-xl font-semibold mt-6 mb-3">Carbohydrates & Blood Sugar</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><a href="https://www.hsph.harvard.edu/nutritionsource/carbohydrates/" className="text-brand-primary hover:text-brand-primary-hover">Harvard: Carbohydrates</a></li>
                  <li><a href="https://www.hsph.harvard.edu/nutritionsource/carbohydrates/carbohydrates-and-blood-sugar/" className="text-brand-primary hover:text-brand-primary-hover">Carbohydrates and Blood Sugar</a></li>
                  <li><a href="https://www.hsph.harvard.edu/nutritionsource/what-should-you-eat/whole-grains" className="text-brand-primary hover:text-brand-primary-hover">Whole Grains</a></li>
                  <li><a href="https://www.myplate.gov/eat-healthy/grains" className="text-brand-primary hover:text-brand-primary-hover">MyPlate: Grains</a></li>
                  <li><a href="https://www.heart.org/en/healthy-living/healthy-eating/eat-smart/nutrition-basics/carbohydrates" className="text-brand-primary hover:text-brand-primary-hover">AHA: Carbohydrates</a></li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3">Fats & Cholesterol</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><a href="https://www.hsph.harvard.edu/nutritionsource/what-should-you-eat/fats-and-cholesterol/" className="text-brand-primary hover:text-brand-primary-hover">Harvard: Fats and Cholesterol</a></li>
                  <li><a href="https://www.hsph.harvard.edu/nutritionsource/what-should-you-eat/fats-and-cholesterol/types-of-fat/" className="text-brand-primary hover:text-brand-primary-hover">Types of Fat</a></li>
                  <li><a href="https://www.heart.org/en/healthy-living/healthy-eating/eat-smart/fats" className="text-brand-primary hover:text-brand-primary-hover">AHA: Fats</a></li>
                  <li><a href="https://www.hsph.harvard.edu/nutritionsource/what-should-you-eat/fats-and-cholesterol/dietary-fat-and-disease/" className="text-brand-primary hover:text-brand-primary-hover">Dietary Fat and Disease</a></li>
                  <li><a href="https://www.heart.org/en/healthy-living/healthy-eating/eat-smart/fats/trans-fat" className="text-brand-primary hover:text-brand-primary-hover">Trans Fat</a></li>
                  <li><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3551118/" className="text-brand-primary hover:text-brand-primary-hover">Fat Research</a></li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3">Protein Quality</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><a href="https://www.myplate.gov/eat-healthy/protein-foods" className="text-brand-primary hover:text-brand-primary-hover">MyPlate: Protein Foods</a></li>
                  <li><a href="https://www.heart.org/en/healthy-living/healthy-eating/eat-smart/nutrition-basics/protein-and-heart-health" className="text-brand-primary hover:text-brand-primary-hover">Protein and Heart Health</a></li>
                  <li><a href="https://www.hsph.harvard.edu/nutritionsource/what-should-you-eat/protein/" className="text-brand-primary hover:text-brand-primary-hover">Harvard: Protein</a></li>
                  <li><a href="https://www.health.harvard.edu/blog/how-much-protein-do-you-need-every-day-201506188096" className="text-brand-primary hover:text-brand-primary-hover">Daily Protein Needs</a></li>
                  <li><a href="https://pubmed.ncbi.nlm.nih.gov/26797090/" className="text-brand-primary hover:text-brand-primary-hover">Protein Research</a></li>
                  <li><a href="https://www.myplate.gov/eat-healthy/protein-foods/beans-peas-lentils" className="text-brand-primary hover:text-brand-primary-hover">Beans, Peas, Lentils</a></li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3">Fiber</h3>
                <ul className="list-disc pl-5">
                  <li><a href="https://www.hsph.harvard.edu/nutritionsource/carbohydrates/fiber/" className="text-brand-primary hover:text-brand-primary-hover">Harvard: Fiber</a></li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3">Vitamins & Nutrients</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><a href="https://www.hsph.harvard.edu/nutritionsource/vitamins/" className="text-brand-primary hover:text-brand-primary-hover">Harvard: Vitamins</a></li>
                  <li><a href="https://www.cdc.gov/nccdphp/dnpao/division-information/media-tools/adults-fruits-vegetables.html" className="text-brand-primary hover:text-brand-primary-hover">CDC: Fruits and Vegetables</a></li>
                  <li><a href="https://www.heart.org/en/healthy-living/healthy-eating/eat-smart/nutrition-basics/how-can-i-eat-more-nutrient-dense-foods" className="text-brand-primary hover:text-brand-primary-hover">Nutrient-Dense Foods</a></li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3">Macronutrient Balance</h3>
                <p>Default ratio: 40–50% carbs, 25–35% protein, 20–30% fat</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><a href="https://www.dietaryguidelines.gov" className="text-brand-primary hover:text-brand-primary-hover">Dietary Guidelines</a></li>
                  <li><a href="https://www.who.int/news-room/fact-sheets/detail/healthy-diet" className="text-brand-primary hover:text-brand-primary-hover">WHO Healthy Diet</a></li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3">Greens and Vegetables</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><a href="https://www.myplate.gov/eat-healthy/vegetables" className="text-brand-primary hover:text-brand-primary-hover">MyPlate: Vegetables</a></li>
                  <li><a href="https://www.hsph.harvard.edu/nutritionsource/what-should-you-eat/vegetables-and-fruits/" className="text-brand-primary hover:text-brand-primary-hover">Harvard: Vegetables and Fruits</a></li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3">Processed Meats</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><a href="https://www.wcrf.org/dietandcancer/recommendations/limit-red-processed-meat" className="text-brand-primary hover:text-brand-primary-hover">WCRF: Processed Meat</a></li>
                  <li><a href="https://www.hsph.harvard.edu/news/hsph-in-the-news/are-all-processed-meats-equally-bad-for-health/" className="text-brand-primary hover:text-brand-primary-hover">Processed Meats and Health</a></li>
                  <li><a href="https://www.hsph.harvard.edu/nutritionsource/processed-foods/" className="text-brand-primary hover:text-brand-primary-hover">Harvard: Processed Foods</a></li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3">Added Sugar</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><a href="https://www.heart.org/en/healthy-living/healthy-eating/eat-smart/sugar" className="text-brand-primary hover:text-brand-primary-hover">AHA: Sugar</a></li>
                  <li><a href="https://www.heart.org/en/healthy-living/healthy-eating/eat-smart/sugar/how-much-sugar-is-too-much" className="text-brand-primary hover:text-brand-primary-hover">How Much Sugar is Too Much</a></li>
                  <li><a href="https://www.hsph.harvard.edu/nutritionsource/carbohydrates/added-sugar-in-the-diet/" className="text-brand-primary hover:text-brand-primary-hover">Added Sugar in Diet</a></li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3">Sodium & Salt</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><a href="https://www.heart.org/en/healthy-living/healthy-eating/eat-smart/sodium" className="text-brand-primary hover:text-brand-primary-hover">AHA: Sodium</a></li>
                  <li><a href="https://www.hsph.harvard.edu/nutritionsource/salt-and-sodium/take-action-on-salt/" className="text-brand-primary hover:text-brand-primary-hover">Take Action on Salt</a></li>
                  <li><a href="https://www.hsph.harvard.edu/nutritionsource/salt-and-sodium/" className="text-brand-primary hover:text-brand-primary-hover">Harvard: Salt and Sodium</a></li>
                  <li><a href="https://www.ncbi.nlm.nih.gov/books/NBK133292/" className="text-brand-primary hover:text-brand-primary-hover">Sodium Research</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

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
};