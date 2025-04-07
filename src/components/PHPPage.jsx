import React from 'react';
import images1 from "../assets/hire_resources_banner (1).webp";
import images2 from "../assets/hire_php_developers_detail.webp";
import mobile from "../assets/php_web_blue.a705dcf7 (1).svg";
import mobile1 from "../assets/php_ecom_blue.e0cdc9bf.svg";
import mobile2 from "../assets/php_cms_blue.a8bd3edb.svg";
import mobile3 from "../assets/php_hire_blue.d0f72de9.svg";
import mobile4 from "../assets/php_mig_blue.6caf161e.svg";
import mobile5 from "../assets/php_main_blue.1bc9237d.svg";
import { HiMiniCheckCircle } from "react-icons/hi2";

const PHPPage = () => {
    const testimonialsData = [
        {
            images: mobile,
            title: "PHP Web Development",
            description: "Using PHP technology, we develop dynamic and interactive websites that deliver an incredible user experience while satisfying your business demands. Our experienced PHP developers make the most of PHP's capabilities to create unique web applications."
        },
        {
            images: mobile1,
            title: "PHP E-commerce Development",
            description: "Launch your online store with our PHP e-commerce development services. Our skilled team specializes in developing secure and scalable e-commerce websites using PHP frameworks like Magento, WooCommerce, and Shopify, enabling you to sell products and services online effectively."
        },
        {
            images: mobile2,
            title: "PHP Based CMS Development",
            description:
                "Build flexible and easy-to-manage content management systems (CMS) with PHP. Our PHP developers leverage PHP to create custom CMS solutions that empower you to publish, edit, and manage digital content efficiently, tailored to your specific needs and preferences."
        },
        {
            title: "Hire Dedicated PHP Developers",
            images: mobile3,
            description:
                "Hire expert PHP developers for your next website development project. Depending on your demands and budget, you can build your team of PHP developers with our hiring options, which include full-time developers, part-time developers, and project-based developers."
        },
        {
            title: "PHP Migration Services",
            images: mobile4,
            description:
                "Upgrade your legacy systems or migrate to PHP-based solutions seamlessly with our migration services. Our experienced team handles the migration process from start to end, leveraging the latest PHP technologies and best practices, ensuring minimal downtime and integrity."
        },
        {
            title: "PHP Maintenance & Support",
            images: mobile5,
            description:
                "Our maintenance and support services will guarantee the dependability and efficiency of your PHP applications. Our committed support team is available to keep your PHP applications operating efficiently and safely, from regular updates and bug fixes to ongoing troubleshooting."
        },
    ];

    return (
        <>
            <div className="container-fluid mx-auto bg-white overflow-x-hidden">
                <div className="row flex flex-wrap">
                    <div className="w-full lg:w-6/12 px-8 lg:px-32 py-10">
                        <div className="pt-10 lg:pt-40"></div>
                        <span className="badge bg-slate-50 text-Primary font-serif font-bold rounded-2xl w-[60px]">
                            Expert Resources
                        </span>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-black pt-5">
                            Hire PHP Developers
                        </h1>
                        <p className="text-slate-600 font-serif text-base sm:text-lg lg:text-xl pt-5">
                            With a strong command of PHP frameworks, our team at Vasundhara Infotech specializes in creating dynamic and secure web applications that engage users and drive results. From content management systems (CMS) to e-commerce platforms, our PHP developers are adept at customizing solutions to fit your specific needs.
                        </p>
                        <p className="text-slate-600 font-serif text-base sm:text-lg lg:text-xl pt-6">
                            We prioritize clean code, scalability, and maintainability, ensuring your application performs at its best. Partner with us to leverage the full capabilities of PHP and enhance your online presence.
                        </p>

                        <div className="pt-8">
                            <button className="bg-Primary text-white text-xl py-3 px-6 rounded-full">
                                Get in touch with our experts
                            </button>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="w-full lg:w-6/12 pt-10 lg:pt-28 flex justify-center">
                        <img
                            src={images1}
                            alt="Web App Development"
                            className="max-w-full h-auto object-contain lg:h-[550px] xl:h-[650px] 2xl:h-[600px]"
                        />
                    </div>
                </div>
            </div>

            {/* Second Section */}
            <div className="pt-14"></div>
            <div className="container-fluid mx-auto bg-blue-100 overflow-x-hidden rounded-lg">
                <div className="row flex flex-wrap py-10">
                    <div className="w-full lg:w-6/12 pt-5 flex justify-center">
                        <img
                            src={images2}
                            alt="PHP Development"
                            className="max-w-full h-auto object-contain lg:h-[550px] xl:h-[650px] 2xl:h-[600px]"
                        />
                    </div>
                    <div className="w-full lg:w-6/12 px-8 lg:px-16">
                        <div className="pt-20"></div>
                        <button className="badge bg-slate-50 text-Primary font-serif font-bold rounded-2xl w-[320px]">
                            Hire Talent That Drives Innovation
                        </button>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-black pt-5">
                            Hire PHP Experts for Scalable, Custom Web Development
                        </h1>
                        <p className="text-slate-600 font-serif text-base sm:text-lg lg:text-xl pt-4 pr-5">
                            Hire PHP developers from Vasundhara Infotech to bring your ideas to life with scalable and secure solutions. Our PHP developers are skilled in using PHP frameworks like Laravel, CodeIgniter, and more, to build everything from simple websites to complex enterprise solutions.
                        </p>
                        {[
                            "Proven language with extensive community support and documentation",
                            "Ideal for web development with powerful frameworks like Laravel and CodeIgniter",
                            "Excellent integration capabilities with various databases and APIs",
                            "Cost-effective development due to widespread use and availability of talent",
                            "Fast execution and reliable performance for dynamic websites",
                            "Easy to learn and use, allowing for quick onboarding of new developers"
                        ].map((text, index) => (
                            <p key={index} className="flex items-center pt-4 font-serif">
                                <HiMiniCheckCircle style={{ color: '#1173b9ee' }} className="mr-2 size-6" />
                                {text}
                            </p>
                        ))}
                    </div>
                </div>
            </div>

            {/* Services Title */}
            <div className="container px-8 py-16">
                <h5 className="text-2xl sm:text-3xl lg:text-4xl text-center font-serif font-bold text-Primary">
                    - Services -
                </h5>
                <h2 className="text-black font-serif text-2xl sm:text-3xl lg:text-4xl text-center font-bold pt-5">
                    Scale Your Enterprise With Our PHP Development Services
                </h2>
            </div>

            {/* Testimonials Section */}
            <div className="pt-16"></div>
            <div className="flex flex-wrap justify-between gap-y-16 px-8 lg:px-16 relative box-border">
            {testimonialsData.map((testimonial, index) => (
  <div key={index} className="w-full sm:w-6/12 md:w-4/12 px-4 2xl:px-8">
    <div className="relative md:h-full group border-[1px] border-[#7fc2f1] p-8 rounded-2xl hover:bg-Primary transition-all duration-300 hover:shadow-2xl hover:shadow-gray-400 hover:text-white">
      
      <div className="relative mb-6 transition-all duration-300">
        
       
        <img
          src={testimonial.images}
          className="w-[110px] h-[110px] object-cover rounded-3xl p-4 group-hover:bg-zinc-50 shadow-md absolute top-[-100px] left-1/2 transform -translate-x-1/2 bg-slate-200 transition-all duration-300 group-hover:scale-110"
          alt={testimonial.title}
        />

        {/* Title */}
        <h3 className="font-bold text-2xl text-center pt-6 text-Primary mt-8 group-hover:text-white transition-all duration-300">
          {testimonial.title}
        </h3>
      </div>

      {/* Description */}
      <p className="text-xl font-serif text-slate-600 text-center  group-hover:text-white transition-all duration-300 ">
        {testimonial.description}
      </p>
    </div>
  </div>
))}

            </div>
            <div className='pt-8'>

            </div>
            </>
    )
}

export default PHPPage;
