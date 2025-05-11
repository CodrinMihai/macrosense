import React from 'react';

const PricingPage = () => {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col items-center px-6 py-24">
      <div className="max-w-4xl text-center">
        <h1 className="text-5xl font-semibold mb-10 tracking-tight">Choose Your Plan</h1>

        <p className="text-gray-700 mb-12 text-lg">
          Flexible options tailored to your health goals and budget.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Free Plan */}
          <div className="border rounded-xl p-8 shadow hover:shadow-lg transition flex flex-col justify-between min-h-[500px]">
            <div>
              <h2 className="text-2xl font-bold mb-4">Free</h2>
              <p className="text-gray-600 mb-6">Basic features with ads</p>
              <p className="text-3xl font-bold mb-6">$0</p>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>✔ Macro calculator</li>
                <li>✔ Limited tracking</li>
                <li>✔ Community access</li>
                <li>✖ No AI adaptation</li>
              </ul>
            </div>
            <div className="mt-auto pt-4">
              <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition">
                Start Free
              </button>
            </div>
          </div>

          {/* One-Time Plan */}
          <div className="border-2 border-black rounded-xl p-8 shadow-lg bg-gray-50 flex flex-col justify-between min-h-[500px]">
            <div>
              <h2 className="text-2xl font-bold mb-4">One-Time</h2>
              <p className="text-gray-600 mb-6">Pay once, use forever</p>
              <p className="text-3xl font-bold mb-6">$20</p>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>✔ Ad-free experience</li>
                <li>✔ Macro planner & tracker</li>
                <li>✔ AI-generated recommendations</li>
                <li>✔ Lifetime access</li>
              </ul>
            </div>
            <div className="mt-auto pt-4">
              <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition">
                Buy Now
              </button>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="border rounded-xl p-8 shadow hover:shadow-lg transition flex flex-col justify-between min-h-[500px]">
            <div>
              <h2 className="text-2xl font-bold mb-4">Premium</h2>
              <p className="text-gray-600 mb-6">Dedicated AI + expert support</p>
              <p className="text-3xl font-bold mb-6">$200 / year</p>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>✔ Everything in One-Time</li>
                <li>✔ Dedicated nutrition coach</li>
                <li>✔ Fully customized meal plans</li>
                <li>✔ Ongoing optimization</li>
              </ul>
            </div>
            <div className="mt-auto pt-4">
              <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition">
                Go Premium
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
