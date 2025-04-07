import React from 'react';
import images1 from "../assets/frontend_banner_d0b93ab4f3.webp";
import mobile from "../assets/frontend_service_icon7_a97ccd1799.svg";
import mobile1 from "../assets/frontend_service_icon11_23d1fd80c7.svg";
import mobile2 from "../assets/Web_Development_Services_icon_2_b464247f60.svg";
import mobile3 from "../assets/Web_Development_Services_icon_3_7fe8d4099d.svg";
import mobile4 from "../assets/Web_Development_Services_icon_4_118cf9238e.svg";
import mobile5 from "../assets/Web_Development_Services_icon_5_7e63183336.svg";
import mobile6 from "../assets/Web_Development_Services_icon_6_0c10d2faa7.svg";
import mobile7 from "../assets/Web_Development_Services_icon_7_bc2772181f.svg";
import mobile8 from "../assets/Web_Development_Services_icon_8_0374ad4b92.svg";
import mobile9 from "../assets/frontend_service_icon10_c662e8b9fa.svg";

const Detail2 = () => {

  const testimonialsData = [
    {
      images: mobile,
      title: "Responsive Web Design",
      description:
"Crafting visually stunning and functionally impeccable websites that adapt seamlessly across devices. Our responsive web designs ensure a consistent and engaging user experience on desktops, tablets, and mobile devices."    },
    {
      images: mobile1,
      title: "User Interface (UI) Development",
      description:
"Translating creative designs into intuitive and interactive user interfaces. Our UI development expertise focuses on enhancing user engagement through aesthetically pleasing and user-friendly designs."    },
    {
      images: mobile2,
      title: "Single Page Applications (SPA)",
      description:
"Elevating user experiences with dynamic and efficient Single Page Applications. We harness the power of frameworks like React and Angular to create fast, responsive, and highly interactive web applications."    },
    {
      title: "Front-end Optimization",
      images: mobile3,
      description:
"Optimizing FrontEnd performance for speed, efficiency, and an exceptional user experience. From code optimization to asset management, we ensure your web applications load swiftly and deliver optimal."    },
    {
      title: "Cross-Browser Compatibility",
      images: mobile4,
      description:
"Ensuring your web applications perform consistently across various browsers. Our Cross-Browser Compatibility services guarantee a uniform user experience, irrespective of the browser choice."    },
    {
      title: "Accessibility Implementation",
      images: mobile5,
      description:
"Making digital experiences inclusive by implementing accessibility features. We ensure your websites and applications adhere to accessibility standards, providing equal access to all users."    },
    {
      title: "Front-end Frameworks",
      images: mobile6,
      description:
"Leveraging the power of industry-leading FrontEnd frameworks like React, Angular, and Vue.js, we at Hidden Brains excel in creating sophisticated digital experiences. Our proficiency in these frameworks enables us to build scalable, modular, and feature-rich applications that not only meet but exceed modern web standards."    },
    {
      title: "Micro frontend development",
      images: mobile7,
      description:
"Embrace agility and scalability with Micro Frontend Development, a methodology that involves breaking down FrontEnd applications into smaller, independent modules, allowing for seamless development, deployment, and scalability. Each micro frontend operates independently, fostering parallel development."    },
    {
      title: "Legacy frontend modernization",
      images: mobile8,
      description:
"Revitalize and future-proof your FrontEnd applications with Legacy Frontend Modernization services. Upgrade outdated user interfaces, enhance user experiences, and ensure compatibility with modern technologies. Transform legacy systems into modern, responsive, and feature-rich interfaces while preserving essentials."    },
{
  title: "AMP App Development Services",
  images: mobile9,
  description:
"Accelerate your mobile web experiences with AMP (Accelerated Mobile Pages) App Development Services. Leverage the power of Google's open-source initiative to create lightning-fast, high-performing, and mobile-friendly web pages. Ensure optimal user engagement and faster loading times with AMP app development tailored to your business needs."},
  {
    title: "Front-End Design and Architecture",
    images: mobile1,
    description:
"Elevate your digital presence with expert Front-End Design and Architecture services. Collaborate with our skilled designers and architects to craft visually stunning, intuitive, and user-centric FrontEnd interfaces. Achieve a perfect blend of aesthetics and functionality while ensuring seamless user interactions and a delightful user experience  to your business needs."},
   {
    title: "Progressive Web App Development ",
    images: mobile2,
    description:
"Embrace the future of web applications with Progressive Web App (PWA) Development services. Deliver engaging, reliable, and fast web experiences that mimic native app functionalities. Enhance user engagement with features like offline access, push notifications, and responsive design, providing users with an immersive and app-like experience on the web."  
},

  ];

  return (
    <>
      <div className='container-fluid mx-auto bg-black'>
      <div className='row flex flex-wrap'>
  <div className='w-full lg:w-6/12 px-6 lg:px-28'>
    <h1 className='text-white text-[40px] lg:text-[60px] font-bold font-serif text-center lg:text-left pt-10 lg:pt-60'>
      <span className='text-Primary'>Top Front-end</span> Development Services
    </h1>
    <p className='text-white text-[16px] lg:text-[19px] font-serif text-center lg:text-left pt-4 lg:pt-6'>
      Hidden Brains, one of the top front-end development companies in India, we build apps with aesthetically 
      appealing and superior functionalities. Using a range of front-end technologies & frameworks like HTML, CSS, React, Angular, and Vue.js, 
      we offer high-quality front-end development services in India ensuring that enhancing your digital presence is future-proof.
    </p>
    <div className='text-center lg:text-left pt-8'>
      <button className='bg-Primary text-white text-[16px] lg:text-[18px] font-serif py-4 px-8 w-full lg:w-72 rounded-full'>
        Hire Front-End Developer
      </button>
    </div>
  </div>

  <div className='w-full lg:w-6/12 pt-8 lg:pt-0'>
    <img src={images1} alt="Web App Development" className='w-full h-[850px] ' />
  </div>
</div>

      </div>

      <div className="container ps-8">
        <h1 className="text-[30px] pt-12 ms-auto font-serif font-bold text-center">
        Front End Development Services In India: Creating Digital Brilliance
        </h1>
        <p className="text-slate-600 font-serif text-[18px] pt-5 text-center">
        Our Front end development services are meticulously designed to create digital brilliance that captivates and engages users. With a team of front-end development coders in India, armed with cutting-edge technologies and a passion for innovation, we transform your ideas into captivating digital experiences.        </p>
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
                     ${testimonial.images === mobile9 ? "bg-green-100" : ""}  
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

export default Detail2;
