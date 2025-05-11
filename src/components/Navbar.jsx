import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white px-6 py-4 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto">

        {/* Logo + Text */}
        <Link to="/" className="flex items-center space-x-2 hover:text-blue-400">
          <img
            src="/images/macrosense-logo-2.png"
            alt="Logo"
            className="h-8 w-8 object-contain rounded-xl"
          />
          <span className="text-xl font-bold">MacroSense</span>
        </Link>

        {/* Nav Links */}
        <div className="space-x-4">
          <Link to="/" className="hover:text-blue-400">Home</Link>
          <Link to="/about" className="hover:text-blue-400">About</Link>
          <Link to="/features" className="hover:text-blue-400">Features</Link>
          <Link to="/pitch" className="hover:text-blue-400">Why us?</Link>
          <Link to="/contact" className="hover:text-blue-400">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
