import React from 'react';
import Image from 'next/image';

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between py-4 px-6 bg-black shadow-md">
      <div className="flex items-center">
        <Image src="/images/nike.png" alt="Nike Logo"width={60} height={60}/>
      </div>
      <ul className="flex space-x-4">
        <li className="text-white">Home</li>
        <li className="text-white">Products</li>
        <li className="text-white">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
