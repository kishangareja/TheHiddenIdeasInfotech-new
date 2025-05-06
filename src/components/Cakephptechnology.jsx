import React from 'react'
import Cake_Php from '../assets/CakePHP.png'
import enterprise from '../assets/enterprise-white.png'
import business from '../assets/Business-white.png'
import Consumers from '../assets/Consumers-white.png'

const cardData = [
    { title: 'Enterprise', img: enterprise },
    { title: 'Business', img: business },
    { title: 'Consumers', img: Consumers },
  ];

const Cakephptechnology = () => {
  return (
    <>
     <section className='py-[50px] bg-fixed bg-cakephp_banner bg-no-repeat bg-cover bg-blend-darken bg-[#000000a4] border-b-[3px] border-black'>
        <div className="container">
          <div className="row">
            <div className="xl:px-[50px] 3xl:px-[150px] mb-[25px] sm:mb-[50px]">
              <div className="w-full flex bg-[#d53c4483] p-5 sm:p-10 rounded-md">
                <div className="w-full lg:w-6/12">
                  <h2 className='text-[20px] sm:text-[26px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[48px] font-Secondary font-medium pb-4 text-white'>Cake Php Development</h2>
                  <p className='text-[14px] xl:text-[16px] pb-3 font-Primary text-[#b5b3ad]'>CakePHP Development is a powerful and efficient approach to building web applications using the CakePHP framework, which is based on the Model-View-Controller (MVC) architecture. Known for its speed, flexibility, and convention-over-configuration philosophy, CakePHP enables developers to create robust and scalable applications with less code. CakePHP Development is a powerful and efficient approach to building web applications using the CakePHP framework, which is based on the Model-View-Controller (MVC) architecture. Known for its speed, flexibility, and convention-over-configuration philosophy, CakePHP enables developers to create robust and scalable applications with less code. </p>
                  <p className='text-[14px] xl:text-[16px] font-Primary text-[#b5b3ad]'>CakePHP is a PHP framework that simplifies the web development process through a structured MVC pattern and rich set of libraries. It supports code generation through its bake console, ORM for database interactions, and built-in components for common tasks like caching, security, and session management.</p>
                </div>
                <div className="w-full lg:w-6/12">
                  <div className="image flex justify-center">
                    <img src={Cake_Php} alt="codeigniter" className='w-[200px] md:w-[300px] 3xl:w-[250px] h-[200px] md:h-[200px] 3xl:h-[270px]' />
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:px-[50px] 3xl:px-[150px]">
              <div className="w-full flex flex-wrap bg-[#d53c4483] p-5 sm:p-10 rounded-md">
                <div className="w-full lg:w-6/12 flex flex-wrap justify-center">
                  {cardData.map((card, index) => (
                    <div key={index} className="w-full md:w-6/12">
                      <div className="border-[3px] border-white p-4 m-3 rounded-xl text-center">
                        <div className="flex justify-center">
                          <img src={card.img} alt={card.title} className='text-white'/>
                        </div>
                        <h2 className="pt-4 text-[20px] sm:text-[26px] xl:text-[32px] font-Secondary text-white">
                          {card.title}
                        </h2>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="w-full lg:w-6/12 text-center sm:text-start mb-5 xl:mb-0 p-4">
                  <h2 className='text-[20px] sm:text-[26px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[40px] font-Secondary font-medium pb-4 text-white'>Why Choose The Hidden ideas For Cake Php Development?</h2>
                  <p className='text-[14px] xl:text-[16px] pb-3 font-Primary text-[#b5b3ad]'>The Hidden Ideas emerges as an excellent choice. Their team of skilled developers brings deep expertise in CakePHP, utilizing its rapid development capabilities and structured framework to create dynamic, scalable, and secure web applications. With a strong emphasis on best practices, clean code, and robust architecture, The Hidden Ideas ensures that every project is delivered with precision and efficiency.</p>
                  <p className='text-[14px] xl:text-[16px] font-Primary text-[#b5b3ad]'>The Hidden Ideas developers stay updated with the latest advancements in CakePHP, ensuring that each project is optimized for performance and security. Their expertise in creating both complex and simple applications, combined with a customer-centric approach, ensures timely project completion, cost-effective solutions, and a seamless experience from start to finish.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Cakephptechnology
