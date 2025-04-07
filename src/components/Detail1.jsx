import React from 'react';
import images1 from "../assets/mobile_app_banner_f6707d7472.webp";
import mobile from "../assets/frontend_service_icon7_a97ccd1799.svg";
import mobile1 from "../assets/frontend_service_icon11_23d1fd80c7.svg";
import mobile2 from "../assets/Web_Development_Services_icon_2_b464247f60.svg";
import mobile3 from "../assets/Web_Development_Services_icon_3_7fe8d4099d.svg";
import mobile4 from "../assets/Web_Development_Services_icon_4_118cf9238e.svg";
import mobile5 from "../assets/Web_Development_Services_icon_5_7e63183336.svg";
import mobile6 from "../assets/Web_Development_Services_icon_6_0c10d2faa7.svg";
import mobile7 from "../assets/Web_Development_Services_icon_7_bc2772181f.svg";
import mobile8 from "../assets/Web_Development_Services_icon_8_0374ad4b92.svg";
import "../../src/App.css"
const Detail1 = () => {

  const testimonialsData = [

    {
      images: mobile1,
      title: "Native App Development",
      description: "Our native apps are optimized for speed, functionality, and reliability, ensuring an immersive experience for your users. the look and feel of native apps while reducing devl time."
    },
    {
      images: mobile2,
      title: "Hybrid App Development",
      description: "With frameworks such as React Native and Flutter, we deliver cost-effective solutions that maintain the look and feel of native apps while reducing  time."
    },
    {
      images: mobile,
      title: "Custom App Development",
      description:
        "Get the power of tailored custom web application development services for your business needs. Our web consultants utilize proven methodologies to develop solution."
    },

    {
      title: "Progressive Web App Development",
      images: mobile5,
      description:
        "Unlock the power of our Web App Development Services to create high-performing and reliable Progressive Web Apps, that work seamlessly across all devices."
    },

    {
      title: "Integration & Migration",
      images: mobile7,
      description:
        "Effortlessly upgrade your website or migrate to new platform with our seamless services. Minimize disruptions, downtime and enhance performance for improved user engagement."
    },
    {
      title: "App Support & Maintenance",
      images: mobile8,
      description:
        "We provide comprehensive website support and maintenance services, ensuring your web applications run smoothly, stay up-to-date with the latest trends, and remain glitch-free."
    },
  ];

  return (
    <>
      <div className='container-fluid mx-auto bg-black'>
        <div className="flex flex-wrap items-center justify-center">
          {/* Left Column */}
          <div className="w-full lg:w-6/12 px-6 lg:px-28 pt-10 lg:pt-54">
            <h1 className="text-white text-[40px] lg:text-[60px] font-bold font-serif text-center lg:text-left">
              <span className='text-Primary'>Mobile Application </span> Development Services
            </h1>
            <p className='text-white text-[16px] lg:text-[19px] font-serif text-center lg:text-left pt-4 lg:pt-6'>
              Our mobile app development services blend creativity with the latest technology to create user-friendly, engaging, and scalable mobile experiences.
              From the initial concept to design, development, and deployment, we are with you every step of the way, ensuring your app stands out in the crowded app marketplace.
              As a top mobile app development company, we specialize in delivering custom, high-performance mobile apps tailored to your unique needs.
            </p>
            <div className='text-center lg:text-left pt-10'>
              <button className='bg-Primary text-white text-[16px] lg:text-[18px] font-serif py-4 px-8 w-full lg:w-72 rounded-full'>
                Hire Mobile App Developer
              </button>
            </div>
            <div className='md:py-7'></div>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-6/12 h-full">
            <img src={images1} alt=" App Development" className="w-full h-full object-cover" />
          </div>
        </div>


      </div>

      <div className="container ps-8">
        <h1 className="text-[30px] pt-12 ms-auto font-serif font-bold text-center">
          Mobile App Development Services We Offer
        </h1>
        <p className="text-slate-600 font-serif text-[18px] pt-5 text-center">
          We offer comprehensive mobile app development services designed to cater to diverse business needs and technology demands. Whether you are looking for native apps, hybrid solutions, or progressive web applications, we deliver tailored, high-performance solutions across multiple platforms.          <a href="/" className="underline decoration-solid">Hire Mobile App Developers</a> from our team to bring your vision to life with expertise and precision.
        </p>
      </div>

      <div className='pt-10'></div>

      {/* Testimonials Section */}
      <div className="flex flex-wrap justify-between ps-10 gap-y-4">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="w-full sm:w-6/12 md:w-4/12 px-[10px] 2xl:px-[20px]">
            <div className="relative md:h-full overflow-hidden border-[1px] border-[#7fc2f1] p-[30px] rounded-2xl transition-all duration-300 hover:shadow-2xl hover:bg-[#f8f9f9] new-test" >
              <div className="flex mb-[30px]">
                <img
                  src={testimonial.images}
                  className={`rounded-lg p-3 
        ${testimonial.images === mobile ? "bg-green-100" : ""} 
        ${testimonial.images === mobile1 ? "bg-purple-100" : ""} 
        ${testimonial.images === mobile2 ? "bg-slate-100" : ""} 
        ${testimonial.images === mobile3 ? "bg-green-100" : ""} 
        ${testimonial.images === mobile4 ? "bg-purple-100" : ""}                     
        ${testimonial.images === mobile5 ? "bg-slate-100" : ""} 
        ${testimonial.images === mobile6 ? "bg-green-100" : ""} 
        ${testimonial.images === mobile7 ? "bg-purple-100" : ""} 
        ${testimonial.images === mobile8 ? "bg-slate-100" : ""}`}
                  alt={testimonial.title}
                />
                <div className="ml-4 flex flex-col justify-center">
                  <h3 className="font-bold text-black py-2 text-[25px] transition-all duration-300 new-title">
                    {testimonial.title}
                  </h3>
                </div>
              </div>
              <p className="text-[19px] font-serif text-slate-600 transition-all duration-300 ">
                {testimonial.description}
              </p>
            </div>


          </div>
        ))}
      </div>
      <div className='pt-8'></div>
    </>
  );
}

export default Detail1;
