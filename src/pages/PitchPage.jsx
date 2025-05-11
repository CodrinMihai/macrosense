import React from 'react';

const PitchPage = () => {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col items-center justify-center px-6 py-24">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl font-semibold mb-10 tracking-tight">
          Why MacroSense?
        </h1>

        <p className="text-lg text-gray-700 mb-12 leading-relaxed">
          Most people fail to reach their goals because they follow generic plans, rely on trends, or track manually. Nutrition is complex — but it shouldn’t feel that way.
        </p>

        <div className="text-left text-gray-900 text-base leading-loose space-y-4">
          <p><strong>• Personalized by AI:</strong> We create custom macronutrient plans based on your body, activity, and goals.</p>
          <p><strong>• Adaptive Tracking:</strong> Your macros evolve with your progress — no more static diets.</p>
          <p><strong>• Zero Guesswork:</strong> No complicated spreadsheets or random apps. Just clarity.</p>
          <p><strong>• Built on Science:</strong> We don't follow fads. We follow data.</p>
        </div>
      </div>
    </div>
  );
};

export default PitchPage;
