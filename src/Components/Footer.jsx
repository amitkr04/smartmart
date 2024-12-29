import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        {/* Main Footer Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Logo and Tagline */}
          <div>
            <h1 className="text-lg font-bold">SmartMart 🛒</h1>
            <p className="text-sm text-gray-400 mt-2">
              Your Smart Shopping Companion
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h2 className="text-md font-semibold mb-2">Quick Links</h2>
            <ul>
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/cart"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Cart
                </a>
              </li>
              <li>
                <a
                  href="/profile"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Profile
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h2 className="text-md font-semibold mb-2">Follow Us</h2>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <i className="fab fa-facebook-f"></i> Facebook
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <i className="fab fa-twitter"></i> Twitter
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-6"></div>

        {/* Copyright Section */}
        <div className="text-center text-sm text-gray-500 mt-4">
          &copy; {new Date().getFullYear()} SmartMart. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
