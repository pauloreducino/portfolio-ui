import React from 'react';

const Hero = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center bg-white px-4 md:px-24 py-12 md:gap-x-[115px]">
      <div className="text-center md:text-left md:max-w-[466px]">
        <h1 className="text-[44px] leading-[60px] font-bold text-gray-800">
          Hi, I am Paulo,
          <br />
          <span className="text-gray-800">Creative Technologist</span>
        </h1>
        <p className="mt-10 text-gray-600">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </p>
        <a href="/files/guide_RDR2.pdf" download className="inline-block mt-4 bg-red-500 text-white w-[218px] h-[47px] leading-[47px] text-center rounded-md hover:bg-red-600 transition-all duration-300">
          Download Resume
        </a>
      </div>
      
      <div className="flex justify-center md:justify-end mb-6 md:mb-0">
        <div className="relative w-60 h-60 rounded-full overflow-hidden" style={{ borderBottom: '10px solid #EDF7FA' }}>
          <img src="/images/perfil.jpg" alt="Profile" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Hero;