// components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="mb-2">© {new Date().getFullYear()} E T Q</p>
        <ul className="flex justify-center space-x-4">
          <li>
            <a href="#home" className="hover:text-gray-400">Home</a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-400">About</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-400">Contact</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
