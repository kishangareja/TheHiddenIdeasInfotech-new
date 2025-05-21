import React, { useState } from 'react';
import Masonry from 'react-masonry-css';
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
import highlight from '../assets/highlight.jpg'

const Gallery = () => {
  const [category, setCategory] = useState('All categories');
  const [showMore, setShowMore] = useState(false);

  const images = {
    php: [app1, dev, web],
    react: [app2, web1, word],
    vuejs: [web2, dev2, dev2],
    laravel: [dev1, word1, web1],
    codeigniter: [app3, word2, app1],
    wordpress: [word, word1, word2],
  };

  const getFilteredImages = () => {
    if (category === 'All categories') {
      return Object.entries(images).flatMap(([catKey, imgList]) =>
        imgList.map((img) => ({ image: img, label: catKey }))
      );
    } else {
      const key = category.toLowerCase().replace(' ', '');
      return (images[key] || []).map((img) => ({ image: img, label: category }));
    }
  };

  const handleCategoryClick = (categoryName) => {
    setCategory(categoryName);
    setShowMore(false);
  };

  const breakpointColumnsObj = {
    default: 3,
    992: 2,
    576: 1
  };

  return (
    <section className='py-[100px]'>
      <div className='container mx-auto px-4'>
        <div className="relative heading flex justify-center text-[24px] sm:text-[30px] md:text-[38px] dark:text-white font-Secondary font-semibold mb-[40px] uppercase tracking-widest text-center md:text-start wow animate__animated animate__zoomIn">
              <h2 className="relative z-10 text-white">Project Gallery</h2>
              <img src={highlight} alt={highlight} className='absolute top-0 left-[30%] w-[39%] h-full'/>
            </div>

        <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
          {['All categories', 'PHP', 'React', 'VueJS', 'Word Press', "Laravel", "CodeIgniter"].map((cat, index) => (
            <button
              key={index}
              type="button"
              className={`text-slate-500 border-[3px] border-Primary 
                ${category === cat ? 'bg-Primary text-white' : 'bg-white hover:bg-Primary hover:text-white'}
                rounded-full font-medium px-5 py-2.5 me-3 mb-3 transition-all wow animate__animated animate__zoomIn`}
              onClick={() => handleCategoryClick(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex gap-4"
          columnClassName="masonry-column"
        >
          {getFilteredImages().map(({ image, label }, index) => (
            <div key={index} className="mb-4 relative group wow animate__animated animate__zoomIn">
              <img
                className="w-full rounded-lg transition-all duration-500 group-hover:opacity-70"
                src={image}
                alt={`Category ${label}`}
              />
            </div>
          ))}
        </Masonry>

        <div className="flex justify-center mt-6">
          <button onClick={() => setShowMore(!showMore)} className="border-[3px] border-Primary text-Primary px-6 py-2 rounded-full hover:bg-Primary hover:text-white transition-all font-semibold">
            {showMore ? 'Load More' : 'See More'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
