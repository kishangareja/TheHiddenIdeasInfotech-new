import React from 'react'
import laravel from '../assets/laravel.svg'
import enterprise from '../assets/enterprise-white.png'
import business from '../assets/Business-white.png'
import Consumers from '../assets/Consumers-white.png'

const cardData = [
  { title: 'Enterprise', img: enterprise },
  { title: 'Business', img: business },
  { title: 'Consumers', img: Consumers },
];

const Laravel = () => {
  return (
    <>
      <section className='py-[50px] bg-fixed bg-laravel_banner bg-no-repeat bg-cover bg-blend-darken bg-[#000000a4] border-b-[3px] border-black'>
        <div className="container">
          <div className="row">
            <div className="xl:px-[50px] 3xl:px-[150px] mb-[25px] sm:mb-[50px]">
              <div className="w-full flex bg-[#ff000080] p-5 sm:p-10 rounded-md">
                <div className="w-full lg:w-6/12">
                  <h2 className='text-[20px] sm:text-[26px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[48px] font-Secondary font-medium pb-4 text-white'>Laravel Development</h2>
                  <p className='text-[14px] xl:text-[16px] pb-3 font-Primary text-[#b5b3ad]'>The Hidden ideas Laravel development services allow you to build powerful, secure, and scalable online apps. Our professional developers create high-performance websites with clean code, smooth functionality, and a modern style. Whether you require an eCommerce platform, API development, or a custom web application, we provide specialised solutions that improve the user experience and expand your business.</p>
                  <p className='text-[14px] xl:text-[16px] font-Primary text-[#b5b3ad]'>Laravel strives to provide an amazing developer experience while providing powerful features such as thorough dependency injection, an expressive database abstraction layer, queues and scheduled jobs, unit and integration testing, and more.</p>
                </div>
                <div className="w-full lg:w-6/12">
                  <div className="image flex justify-center">
                    <img src={laravel} alt="" className='w-[200px] md:w-[300px] 3xl:w-[400px] h-[200px] md:h-[250px] 3xl:h-[350px]' />
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:px-[50px] 3xl:px-[150px]">
              <div className="w-full flex flex-wrap bg-[#ff000080] p-5 sm:p-10 rounded-md">
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
                  <h2 className='text-[20px] sm:text-[26px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[40px] font-Secondary font-medium pb-4 text-white'>Why Choose The Hidden ideas For Laravel Development?</h2>
                  <p className='text-[14px] xl:text-[16px] pb-3 font-Primary text-[#b5b3ad]'>Choosing The Hidden Ideas for your Laravel development means partnering with a team that prioritizes quality, transparency, and innovation. Our Laravel experts bring years of experience in crafting custom web applications that are not only robust and secure but also aligned with your business vision.</p>
                  <p className='text-[14px] xl:text-[16px] font-Primary text-[#b5b3ad]'>Laravel is powerful but in the right hands, it becomes unstoppable. The Hidden Ideas harnesses the full potential of Laravel’s modern architecture to build future-ready applications. Our development team uses the latest tools, follows best practices, and integrates cutting-edge features to deliver secure, high-performance web solutions. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Laravel
