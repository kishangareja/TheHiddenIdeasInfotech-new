import React, { useState } from 'react';
import app1 from "../assets/app1.jpg";
import app2 from "../assets/app2.jpg";
import app3 from "../assets/app3.jpg";
import web from "../assets/photo-1520085601670-ee14aa5fa3e8.avif";
import web1 from "../assets/photo-1605379399843-5870eea9b74e.avif";
import web2 from "../assets/360_F_283463385_mfnrx6RPU3BqObhVuVjYZjeZ5pegE7xq.jpg";
import dev from "../assets/photo-1580927752452-89d86da3fa0a (1).avif";
import dev1 from "../assets/people_development.jpg";
import dev2 from "../assets/Stages-of-Software-Development-Process.webp";
import word from "../assets/wordpress-development.webp";
import word1 from "../assets/photo-1587620962725-abab7fe55159.avif";
import word2 from "../assets/Wordpress-adv.webp";

const Gallery = () => {
  const [category, setCategory] = useState('All categories');
  const [showMore, setShowMore] = useState(false);

  const images = {
    app: [app1, app2, app3],
    web: [web, web1, web2],
    development: [dev, dev1, dev2],
    wordpress: [word, word1, word2],
  };

  const getFilteredImages = () => {
    if (category === 'All categories') {
      return [...images.app, ...images.web, ...images.development, ...images.wordpress];
    } else {
      return images[category.toLowerCase().replace(' ', '')] || [];
    }
  };

  const handleCategoryClick = (categoryName) => {
    setCategory(categoryName);
    setShowMore(false); 
  };

  const handleLoadMore = () => {
    setShowMore(true);
  };

  return (
    <>
      <div className='container'>
        <div className='row'>
          <h1 className='font-serif font-bold text-Primary text-3xl text-center pt-20'>
            Project Gallery
          </h1>
          <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
            {['All categories', 'App', 'Web', 'Development', 'Word Press'].map((cat, index) => (
              <button
                key={index}
                type="button"
                className={`text-slate-500 border border-blue-600 
                ${category === cat ? 'bg-Primary text-white' : 'bg-white dark:bg-black text-slate-500 hover:bg-Primary hover:text-white'}
                focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full font-medium px-5 py-2.5 text-center me-3 mb-3`}
                onClick={() => handleCategoryClick(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-6">
            {getFilteredImages().map((image, index) => (
              <div key={index} className="relative group">
                <img
                  className="h-[450px] w-[600px] rounded-lg transition-all duration-500 group-hover:opacity-70"
                  src={image}
                  alt={`Category ${category}`}
                />

                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="bg-Primary text-white rounded-lg shadow-2xl px-6 py-3 text-2xl font-bold text-center">
                    <div>{category}</div>
                  </div>

                  <div className="absolute top-80 left-0 w-full flex justify-center space-x-4">
                    <p className="flex items-center justify-center">
                      <span className="text-4xl bg-Primary text-white rounded-full w-12 h-12 flex items-center justify-center">
                        +
                      </span>
                    </p>
                    <p className="flex items-center justify-center">
                      <span className="text-4xl bg-Primary text-white rounded-full w-12 h-12 flex items-center justify-center">
                        ∞
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-6">
            <button
              onClick={handleLoadMore}
              className="cursor-custom relative flex items-center justify-center xl:justify-start group  overflow-hidden py-2 sm:py-2 px-3 sm:px-5 font-Secondary text-white text-[14px] sm:text-[16px] rounded-lg 
              hover:bg-primary-dark uppercase font-semibold tracking-wider transition-all duration-[0.5s] bg-Primary"
            >
              {showMore ? 'Load More' : 'See More'}
              <span className="absolute inset-0 w-[300px] h-[200px] bg-[#ffffff8e] group-hover:left-[130%] group-hover:top-[130%] transition-all duration-500 ease-out rotate-[25deg] left-[-320px] top-[-150px]"></span>
            </button>
          </div>
        </div>
      </div>
      <div className="pt-12"></div>
    </>
  );
};

export default Gallery;
