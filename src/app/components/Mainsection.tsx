import React from 'react';
import Image from 'next/image';

const MainSection: React.FC = () => {
  return (
    <section className="py-12 px-6 bg-white">
      <div className="container mx-auto flex flex-col items-center md:flex-row">
        <div className="md:w-1/2 flex justify-center">
          <Image src="/images/shoes4.png" alt="Shoe Image" width={600} height={600} />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4">Nike Air Max 90</h2>
          <p className="text-lg mb-8">
            Experience the comfort and style of the Nike Air Max 90, crafted to perfection with cutting-edge technology and an iconic design.
          </p>
          <button className="px-6 py-3 bg-black text-white font-bold uppercase tracking-wider hover:bg-gray-800">
            Buy Now
          </button>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        <Image src="/images/shoes5.png" alt="Shoe 5" width={300} height={300} />
        <Image src="/images/shoes6.png" alt="Shoe 6" width={300} height={300} />
        <Image src="/images/shoes7.png" alt="Shoe 7" width={300} height={300} />
        <Image src="/images/shoes8.png" alt="Shoe 8" width={300} height={300} />
        <Image src="/images/travis.png" alt="Red Shoes 1" width={400} height={400} />
        <Image src="/images/blue.webp" alt="Red Shoes 2" width={300} height={300}  />
        
      </div>
    </section>
  );
};

export default MainSection;
