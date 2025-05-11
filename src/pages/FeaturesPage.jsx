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
          src="/images/health-4-logo.png"
          alt="MacroSense Mission"
          className="w-full rounded-xl shadow-md object-cover animate-fade-in"
        />
      </div>

      {/* Feature Descriptions */}
      <div className="mt-24 max-w-5xl w-full">
        <h2 className="text-4xl font-semibold mb-10 text-center">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <Feature title="Macro Calculator" text="Quickly calculate your ideal daily intake of proteins, carbs, and fats based on your goal. Simple, fast, and tailored to your needs." />
          <Feature title="Limited Tracking" text="Log your daily meals and monitor your macros without getting overwhelmed. Ideal for beginners who want structure without complexity." />
          <Feature title="Community Access" text="Be part of a supportive and growing group of people with similar goals. Ask questions, exchange ideas, and stay motivated." />
          <Feature title="Ad-Free Experience" text="Enjoy the app without distractions. With paid plans, your experience is clean, focused, and uninterrupted." />
          <Feature title="AI Recommendations" text="Receive dynamic suggestions based on your progress, body changes, and habits. The more you use it, the smarter it gets." />
          <Feature title="Lifetime Access" text="Pay once and enjoy full access forever. No recurring costs, just total control over your nutrition." />
          <Feature title="Nutrition Coach" text="Work with a dedicated expert who helps refine your approach, guides you through challenges, and personalizes your plan." />
          <Feature title="Custom Meal Plans" text="Get flexible, data-backed meal ideas that fit your needs, lifestyle, and preferences — and evolve as you do." />
        </div>
      </div>
    </div>
  );
};

// Feature component for reusability
const Feature = ({ title, text }) => (
  <div className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-700">{text}</p>
  </div>
);

export default AboutPage;
