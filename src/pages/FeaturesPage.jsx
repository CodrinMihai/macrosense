import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col items-center justify-center px-6 py-24">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl font-semibold mb-10 tracking-tight">
          Our Mission
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed">
          MacroSense was born from a simple question: Why is eating right so complicated? We believe that personalized nutrition should be accessible, effortless, and backed by data — not trends.
        </p>

        <p className="text-lg text-gray-700 mt-8 leading-relaxed">
          Our goal is to give people control over their health through intelligent macronutrient planning powered by AI. Whether you're trying to lose weight, gain muscle, or just eat better, MacroSense adapts to you.
        </p>
      </div>

      <div className="mt-16 w-full max-w-4xl">
        <img
          src="\images\health-4-logo.png"
          alt="MacroSense Mission"
          className="w-21 rounded-xl shadow-md object-cover animate-fade-in"
        />
      </div>
    </div>
  );
};

export default AboutPage;
