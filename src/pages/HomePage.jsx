import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col items-center px-6 py-20">

      {/* Hero Text with Image */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-12 mb-24">
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-6xl font-semibold mb-6 tracking-tight">
            Precision Nutrition. Simplified.
          </h1>
          <p className="text-lg text-gray-700 mb-10">
            AI-driven macronutrient plans tailored to your goals. No fluff. Just science.
          </p>
          <Link
            to="/features"
            className="inline-block px-8 py-3 border border-black text-black text-sm tracking-wide uppercase hover:bg-black hover:text-white transition"
          >
            Explore Features
          </Link>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src="/images/health-1-logo.png"
            alt="Hero Visual"
            className="w-full rounded-xl shadow-md animate-fade-in"
          />
        </div>
      </div>

      {/* How It Works Section with Image */}
      <section className="w-full py-24 bg-gray-50 mt-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <img
              src="/images/health-2-logo.png"
              alt="How It Works"
              className="w-full rounded-xl shadow animate-fade-in"
            />
          </div>
          <div className="w-full md:w-1/2 text-left">
            <h2 className="text-4xl font-semibold mb-12 text-center md:text-left">How It Works</h2>
            <div className="space-y-8 text-gray-800">
              <div>
                <h3 className="text-xl font-semibold mb-2">1. Set Your Goal</h3>
                <p className="text-gray-600">
                  Choose your objective — lose fat, build muscle, or maintain weight. MacroSense adapts to your vision.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">2. Get Your Macros</h3>
                <p className="text-gray-600">
                  Our AI calculates the ideal macronutrient ratio for your body and lifestyle, instantly.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">3. Track Progress</h3>
                <p className="text-gray-600">
                  Follow your evolving plan and adjust as needed — all powered by intelligent feedback.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is MacroSense Section with Image */}
      <section className="w-full py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 text-left">
            <h2 className="text-4xl font-semibold mb-10 text-center md:text-left">What is MacroSense?</h2>
            <p className="text-gray-700 text-lg mb-12 leading-relaxed">
              MacroSense is an intelligent nutrition assistant designed to help you optimize your diet using AI. It learns your body, your habits, and your goals — and provides dynamic, science-backed macro recommendations that evolve with you.
            </p>
            <div className="space-y-6 text-gray-800">
              <div>
                <h3 className="text-xl font-semibold mb-1">Adaptive by Design</h3>
                <p>MacroSense recalculates your macros as your weight, habits, and activity level change. No static plans.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">AI-Powered Logic</h3>
                <p>Built with machine learning, MacroSense gives you recommendations based on data — not fads.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Results Without Burnout</h3>
                <p>No confusing apps or calorie counting. Just your numbers, clearly explained, when you need them.</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src="/images/health-3-logo.png"
              alt="What is MacroSense"
              className="w-full rounded-xl shadow animate-fade-in"
            />
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="w-full py-20 bg-gray-100">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2">
            <img
              src="/images/maps-bucharest.jpg"
              alt="MacroSense Location - Bucharest"
              className="w-full rounded-xl shadow-md animate-fade-in"
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-semibold mb-4">Our Location</h2>
            <p className="text-gray-700 text-lg">
              MacroSense is proudly based in <strong>Bucharest, Romania</strong>.
            </p>
            <p className="text-gray-600 mt-2">
              We operate fully remote, but our heart and team are in the capital.
            </p>
          </div>
        </div>
      </section>

      {/* Connect With Us Section */}
      <section className="w-full py-16 bg-white border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-8">Connect with us</h2>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <a href="https://x.com/macrosense" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 hover:opacity-80 transition">
              <img src="/images/X-logo.jpg" alt="X" className="w-8 h-8 animate-fade-in" />
              <span className="text-gray-700 text-lg">X</span>
            </a>
            <a href="https://instagram.com/macrosense" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 hover:opacity-80 transition">
              <img src="/images/instagram-logo.webp" alt="Instagram" className="w-8 h-8 animate-fade-in" />
              <span className="text-gray-700 text-lg">Instagram</span>
            </a>
            <a href="https://facebook.com/macrosense" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 hover:opacity-80 transition">
              <img src="/images/facebook-logo.png" alt="Facebook" className="w-8 h-8 animate-fade-in" />
              <span className="text-gray-700 text-lg">Facebook</span>
            </a>
            <a href="https://reddit.com/r/macrosense" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 hover:opacity-80 transition">
              <img src="/images/reddit-logo.png" alt="Reddit" className="w-8 h-8 animate-fade-in" />
              <span className="text-gray-700 text-lg">Reddit</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
