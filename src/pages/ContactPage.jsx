import React from 'react';

const ContactPage = () => {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col items-center justify-center px-6 py-24">
      <div className="max-w-xl text-center">
        <h1 className="text-5xl font-semibold mb-10 tracking-tight">
          Get in Touch
        </h1>

        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Whether you have a question, feedback, or just want to say hello — we’d love to hear from you.
        </p>

        <p className="text-lg text-gray-800">
          📧 <a href="mailto:contact@macrosense.ai" className="underline hover:text-blue-600 transition">contact@macrosense.ai</a>
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
