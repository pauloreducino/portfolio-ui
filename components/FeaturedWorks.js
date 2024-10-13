import React from 'react';

const FeaturedWorks = () => {
  const works = [
    {
      title: 'Designing Dashboards',
      year: '2020',
      category: 'Dashboard',
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      imageSrc: '/images/img01.png',
    },
    {
      title: 'Vibrant Portraits of 2020',
      year: '2018',
      category: 'Illustration',
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      imageSrc: '/images/img02.png',
    },
    {
      title: '36 Days of Malayalam type',
      year: '2018',
      category: 'Typography',
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      imageSrc: '/images/img03.png',
    },
  ];

  return (
    <section className="w-full py-12 bg-white flex items-center">
      <div className="max-w-4xl mx-auto px-4 w-full">        
        <h2 className="text-2xl font-semibold mb-6 text-center md:text-left text-[#21243D]">
          Featured works
        </h2>
        <div className="space-y-8">
          {works.map((work, index) => (
            <div key={index}>
              <div className="flex flex-col md:flex-row items-center md:items-start space-x-0 md:space-x-4">
                <img
                  src={work.imageSrc}
                  alt={work.title}
                  className="w-[339px] h-[230px] md:w-[246px] md:h-[180px] object-cover rounded-lg mb-4"
                  style={{
                    borderRadius: '6px 0px 0px 0px', 
                  }}
                />
                <div className="text-center md:text-left w-full">
                  <h3 className="text-[24px] md:text-[30px] text-[#21243D] h-[44px] mb-2">
                    {work.title}
                  </h3>
                  <div className="flex justify-center md:justify-start items-center space-x-2 mb-2">
                    <span className="bg-gray-200 text-gray-700 rounded-full px-2 py-1 text-sm font-medium">
                      {work.year}
                    </span>
                    <span className="text-gray-500">{work.category}</span>
                  </div>
                  <p className="w-full md:w-[594px] text-[#21243D] text-[16px] p-2 md:p-0">
                    {work.description}
                  </p>
                </div>
              </div>
              {index < works.length - 1 && (
                <div className="border-t border-[#E0E0E0] my-4 w-[80%] md:w-[858px] mx-auto"></div>
              )}
            </div>
          ))}
        </div>
        <div className="border-t border-[#E0E0E0] my-4 w-[80%] md:w-[858px] mx-auto"></div>
      </div>
    </section>
  );
};

export default FeaturedWorks;
