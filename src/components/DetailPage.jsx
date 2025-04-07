import React from 'react';
import images1 from "../assets/software_development_services_desktop_v2_c616c387a2.webp";
import mobile from "../assets/Web_Development_Services_icon_4fd318eeaf.svg";
import mobile1 from "../assets/Web_Development_Services_icon_1_edc9d46e5e.svg";
import mobile2 from "../assets/Web_Development_Services_icon_2_b464247f60.svg";
import mobile3 from "../assets/Web_Development_Services_icon_3_7fe8d4099d.svg";
import mobile4 from "../assets/Web_Development_Services_icon_4_118cf9238e.svg";
import mobile5 from "../assets/Web_Development_Services_icon_5_7e63183336.svg";
import mobile6 from "../assets/Web_Development_Services_icon_6_0c10d2faa7.svg";
import mobile7 from "../assets/Web_Development_Services_icon_7_bc2772181f.svg";
import mobile8 from "../assets/Web_Development_Services_icon_8_0374ad4b92.svg";

const DetailPage = () => {

  const testimonialsData = [
    {
      images: mobile,
      title: "Custom Web App Development",
      description:
        "Get the power of tailored custom web application development services for your business needs. Our web consultants utilize proven methodologies to develop custom web solutions."
    },
    {
      images: mobile1,
      title: "Enterprise Web Application",
      description:
        "We specialize in building complex, scalable, and secure web applications that cater to enterprise clients, Our experienced developers leverage cutting-edge technologies and industry best practices"
    },
    {
      images: mobile2,
      title: "UI/UX Modernization",
      description:
        "Revitalize your user interface with our UI/UX Modernization services. Our team specializes in transforming outdated interfaces into sleek, intuitive, and visually appealing designs UI/UX Modernization services."
    },
    {
      title: "Fullstack Development Services",
      images: mobile3,
      description:
        "Comprehensive full-stack development services, delivering high-quality, scalable solutions with cutting-edge technologies. Our full-stack services ensure exceptional."
    },
    {
      title: "Single Page Applications(SPA)",
      images: mobile4,
      description:
        "We develop seamless Single Page Apps that deliver dynamic, fast, and interactive user experiences, ensuring smooth navigation and enhanced performance."
    },
    {
      title: "Progressive Web App Development",
      images: mobile5,
      description:
        "Unlock the power of our Web App Development Services to create high-performing and reliable Progressive Web Apps, that work seamlessly across all devices."
    },
    {
      title: "Content Management Systems (CMS)",
      images: mobile6,
      description:
        "Our CMS development services offer tailored content management solutions, enabling effective website updates and seamless content organization for your business."
    },
    {
      title: "Integration, Upgradation & Migration",
      images: mobile7,
      description:
        "Effortlessly upgrade your website or migrate to new platform with our seamless services. Minimize disruptions, downtime and enhance performance for improved user engagement."
    },
    {
      title: "Website Support System & Maintenance",
      images: mobile8,
      description:
        "We provide comprehensive website support and maintenance services, ensuring your web applications run smoothly, stay up-to-date with the latest trends, and remain glitch-free."
    },
  ];

  return (
    <>
      <div className='container-fluid mx-auto bg-black'>
      <div className="flex flex-wrap items-center justify-center">
  {/* Left Column: Text Content */}
  <div className="w-full lg:w-6/12 px-6 lg:px-28 pt-10 lg:pt-50">
    <h1 className="text-white text-[40px] lg:text-[60px] font-bold font-serif text-center lg:text-left">
      <span className="text-Primary">Web Application</span> Development Services
    </h1>
    
    <p className="text-white text-center lg:text-left pt-4 lg:pt-6 text-[16px] lg:text-[19px] font-serif">
      Being a well-reputed web app development company, we specialize in designing, building, testing, and deploying web-based applications tailored to propel businesses forward. We are globally recognized as top-rated web app development companies in the United States, Europe, Africa, MENA & UAE regions for creating fast and secure web apps using modern programming languages and agile methodologies.
    </p>
    
    <div className="text-center lg:text-left pt-8 lg:pt-12">
  <button className="bg-Primary text-white text-[16px] lg:text-[18px] md:py-4 font-serif py-4 px-8 lg:px-12 lg:py-5 w-full sm:w-auto rounded-full">
    Hire Web App Developer
  </button>
</div>
<div className='md:py-5'></div>

  </div>
          
 
  <div className="w-full lg:w-6/12 h-full">
    <img src={images1} alt="Web App Development" className="w-full h-full object-cover" />
  </div>
</div>

      </div>

      <div className="container ps-8">
        <h1 className="text-[30px] pt-12 ms-auto font-serif font-bold">
          End-to-End Web Development Services
        </h1>
        <p className="text-slate-600 font-serif text-[20px] pt-3">
          Hidden Brains has successfully delivered 4K+ web development projects ranging from web-based apps, e-commerce portals, CMS, B2B & B2C applications, Intranet and Extranet Portals, and more.
          <a href="/" className="underline decoration-solid">Hire Web Developers</a> from our team to bring your vision to life with expertise and precision.
        </p>
      </div>

      <div className='pt-10'></div>

      {/* Testimonials Section */}
      <div className="flex flex-wrap justify-between ps-10 gap-y-4">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="w-full sm:w-6/12 md:w-4/12 px-[10px] 2xl:px-[20px]">
            <div className="relative md:h-full overflow-hidden border-[1px] border-[#7fc2f1] p-[30px] rounded-2xl transition-all
             duration-300 hover:shadow-2xl hover:shadow-primary hover:bg-[#f8f9f9] hover:text-Primary new-test">
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
                    ${testimonial.images === mobile8? "bg-slate-100" : ""}`}
                  alt={testimonial.title}
                />
                <div className="ml-4 flex flex-col justify-center">
                  <h3 className="font-bold text-black py-2 text-[25px] transition-all duration-300 hover:text-Primary new-title">
                    {testimonial.title}
                  </h3>
                </div>
              </div>
              <p className="text-[19px] font-serif text-slate-600">
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

export default DetailPage;
