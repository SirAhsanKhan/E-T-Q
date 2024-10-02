// components/Hero.tsx
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('/images/bg1.png')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Optional dark overlay */}
      <div className="container mx-auto h-full flex items-center justify-center relative z-10 text-white">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">E T Q</h1>
          <p className="mb-8">Discover the best collection of shoes</p>
         <div className="flex justify-end">
  <img src="/images/shoes4.png" alt="Shoe" className="w-[300px] md:w-[400px] lg:w-[500px]" />
</div>

          <a href="#shop" className="mt-8 inline-block bg-yellow-500 text-black py-2 px-6 rounded-lg hover:bg-yellow-600 transition duration-300">
            Shop Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
