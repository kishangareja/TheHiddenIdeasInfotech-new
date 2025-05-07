import React from 'react'
import CodeIgniter from '../assets/codeigniter.png'
import enterprise from '../assets/enterprise-white.png'
import business from '../assets/Business-white.png'
import Consumers from '../assets/Consumers-white.png'

const cardData = [
    { title: 'Enterprise', img: enterprise },
    { title: 'Business', img: business },
    { title: 'Consumers', img: Consumers },
  ];

const CodeIgniterTechnology = () => {
  return (
    <>
    <section className='py-[50px] bg-fixed bg-codeIgniter_banner bg-no-repeat bg-cover bg-blend-darken bg-[#000000a4] border-b-[3px] border-black'>
        <div className="container">
          <div className="row">
            <div className="xl:px-[50px] 3xl:px-[150px] mb-[25px] sm:mb-[50px]">
              <div className="w-full flex flex-wrap bg-[#ee412391] p-5 sm:p-10 rounded-md">
                <div className="w-full lg:w-6/12 text-center sm:text-start mb-5 xl:mb-0">
                  <h2 className='text-[20px] sm:text-[26px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[48px] font-Secondary font-medium pb-4 text-white'>CodeIgniter Development</h2>
                  <p className='text-[14px] xl:text-[16px] pb-3 font-Primary text-[#b5b3ad]'>The Hidden ideas provides associations with sturdy and scalable web apps erected on the complex CodeIgniter Framework. CodeIgniter is an open-source PHP frame that's well-known for its simplicity, versatility, and speed. Our platoon of professed CodeIgniter inventors uses this frame to produce custom web results that are fully customized for your specific company's demands. </p>
                  <p className='text-[14px] xl:text-[16px] font-Primary text-[#b5b3ad]'>CodeIgniter is an Application Development Framework - a toolkit - for people who build web sites using PHP. Its goal is to enable you to develop projects much faster than you could if you were writing code from scratch, by providing a rich set of libraries for commonly needed tasks, as well as a simple interface and logical structure to access these libraries.</p>
                </div>
                <div className="w-full lg:w-6/12 flex items-center justify-center">
                  <div className="image flex justify-center">
                    <img src={CodeIgniter} alt="codeigniter" className='w-[200px] md:w-[300px] 3xl:w-[250px] h-[200px] md:h-[200px] 3xl:h-[270px]' />
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:px-[50px] 3xl:px-[150px]">
              <div className="w-full flex flex-wrap bg-[#ee412391] p-5 sm:p-10 rounded-md">
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
                  <h2 className='text-[20px] sm:text-[26px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[40px] font-Secondary font-medium pb-4 text-white'>Why Choose The Hidden ideas For CodeIgniter Development?</h2>
                  <p className='text-[14px] xl:text-[16px] pb-3 font-Primary text-[#b5b3ad]'>The Hidden Ideas offers expert CodeIgniter development services that combine speed, simplicity, and scalability. With a team of seasoned developers, we leverage CodeIgniter’s lightweight framework to build high-performance web applications that are both powerful and easy to maintain.</p>
                  <p className='text-[14px] xl:text-[16px] font-Primary text-[#b5b3ad]'>When you choose The Hidden Ideas for CodeIgniter development, you're getting more than just coding expertise you're gaining a technology partner. We design scalable web applications that are built for growth, using CodeIgniter’s MVC architecture to keep your systems organized, extensible, and future-ready.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CodeIgniterTechnology
