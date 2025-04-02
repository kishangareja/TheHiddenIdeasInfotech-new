import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaUser } from "react-icons/fa";

const testimonialsData = [
  {
    title: "Michael Ogbuaku",
    subTitle: "Founder / CEO",
    description:
      "We partnered with Rekodi for our IT infrastructure, and the results have been phenomenal. Their expertise and proactive support have significantly improved our system efficiency and security. Highly recommend them!",
    
  },
  {
    title: "Andrew Danskin",
    subTitle: "Founder/CEO",
    description:
      "Hidden Ideas Infotech delivered a custom software solution that streamlined our business operations. Their team understood our requirements perfectly and provided an intuitive, scalable platform!",
    
  },
  {
    title: "Albin Holmgren",
    subTitle: "CEO",
    description:
      "As a financial institution, security is our top priority. Hidden Ideas Infotech implemented cutting-edge cybersecurity measures that safeguarded our data and improved compliance. Their expertise is unmatched!",
   
  },
  {
    title: "Kiran Pandit",
    subTitle: "Director of IT, Real-World Techno Labs",
    description:
      "Migrating to the cloud was seamless with Hidden Ideas Infotech. They ensured zero downtime and enhanced our data security. Our team can now collaborate more efficiently, thanks to their outstanding service.",
   
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    speed: 500,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-[60px] xl:py-[100px] bg-[#1173b942]">
      <div className="container">
        <div className="row">
          <div className="heading flex justify-center text-[24px] sm:text-[30px] md:text-[38px] font-Primary font-bold mb-[50px] uppercase tracking-wider wow animate__animated animate__zoomIn">
            <h2>Testimonials</h2>
          </div>
        </div>
      </div>
      <Slider {...settings}>
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="w-4/12 px-[10px] 2xl:px-[20px]">
            <div className="relative overflow-hidden border-[3px] border-[#1173b9] p-[30px] rounded-2xl transition-all duration-[0.5s] hover:text-white before:absolute before:w-0 before:h-full before:top-0 before:bg-custom-gradient3 before:rounded-2xl before:bottom-0 before:left-auto before:right-0 before:duration-[0.5s] hover:before:w-[100%] before:blur-2xl before:z-[-1] after:absolute after:w-0 after:h-full after:top-0 after:bg-custom-gradient3 after:rounded-2xl after:bottom-0 after:left-0 after:right-auto after:duration-[0.5s] hover:after:w-[100%] after:rotate-[180deg] after:blur-2xl after:z-[-1]">
              <div className="flex mb-[30px] wow animate__animated animate__zoomIn">
                <FaUser style={{ color: '#1173b9ee' }} className="w-[70px] h-[70px] object-cover rounded-full border-2 bg-white py-2 hover:border-white"
                />
                <div className="ml-4 flex flex-col justify-center">
                  <h3 className="text-[20px] font-bold text-black py-2">{testimonial.title}</h3>
                  <h5 className="text-[16px] text-gray-500">{testimonial.subTitle}</h5>
                </div>
              </div>
              <p className="wow animate__animated animate__zoomIn">
                {testimonial.description}
              </p>
            
            
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonial;
