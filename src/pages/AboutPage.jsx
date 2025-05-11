import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-white text-black min-h-screen px-6 py-24 flex flex-col items-center justify-center">
      <div className="max-w-4xl text-center">
        <h1 className="text-5xl font-semibold mb-10">About MacroSense</h1>

        {/* Intro Section */}
        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
          MacroSense was created to simplify nutrition in a world overloaded with misinformation and complexity. We believe that every person deserves a plan that adapts to their needs — not a one-size-fits-all template.
        </p>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left mt-10">
          <div>
            <h2 className="text-2xl font-semibold mb-4">🎯 Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              To make personalized nutrition effortless. We use AI to eliminate guesswork and empower users to take full control of their health, body, and habits — with clarity and confidence.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">🌍 Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              We see a future where food works for people, not against them. Where technology understands your body better than generic advice ever could. Where your plan updates as your life changes.
            </p>
          </div>
        </div>

        {/* Founding Idea */}
        <div className="mt-16 text-left max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">💡 Why We Built MacroSense</h2>
          <p className="text-gray-700 leading-relaxed">
            After trying dozens of diets, trackers, and macro calculators, we realized something was missing — adaptability. Most tools are static. They don’t evolve. MacroSense is different. It learns with you. It grows with you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
