import React from 'react'
import nextjsmain from '../assets/next.js .png'
import enterprise from '../assets/enterprise .png'
import business from '../assets/Business.png'
import Consumers from '../assets/Consumers.png'

const cardData = [
    { title: 'Enterprise', img: enterprise },
    { title: 'Business', img: business },
    { title: 'Consumers', img: Consumers },
];

const NextjsTechnology = () => {
    return (
        <>
            <section className='py-[50px] h-fit bg-nextjs_banner bg-no-repeat bg-cover bg-blend-darken bg-[#000000a4] border-b-[3px] border-black'>
                <div className="container">
                    <div className="row">
                        <div className="xl:px-[50px] 3xl:px-[150px] mb-[25px] sm:mb-[50px]">
                            <div className="w-full flex flex-wrap text-black bg-[#ffffff80] p-5 sm:p-10 rounded-md">
                                <div className="w-full lg:w-6/12 text-center sm:text-start mb-5 xl:mb-0">
                                    <h2 className='text-[20px] sm:text-[26px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[40px] font-Secondary font-medium pb-4 wow animate__animated animate__zoomIn'>Why Choose The Hidden ideas For NextJS Development?</h2>
                                    <p className='text-[14px] xl:text-[16px] pb-3 font-Primary wow animate__animated animate__zoomIn'>We provide excellent AngularJS development services that meet your programming requirements and are delivered on schedule. Our AngularJS developers create high-quality applications and ensure that the technology we use is the perfect fit for the client's needs. We are dedicated to giving the best App Development company solutions that are both simple and dependable to meet clients' needs.</p>
                                    <p className='text-[14px] xl:text-[16px] font-Primary wow animate__animated animate__zoomIn'>Most firms are eager to hire AngularJS developers, particularly those with solid programming skills, analytic abilities, and critical thinking, who want to stay ahead of the curve in this modern era. Grewon Technologies should be your first choice when hiring AngularJS engineers.</p>
                                </div>
                                <div className="w-full lg:w-6/12 flex items-center justify-center">
                                    <div className="image flex justify-center wow animate__animated animate__zoomIn">
                                        <img src={nextjsmain} alt={nextjsmain} className='w-[200px] md:w-[300px] 3xl:w-[400px] h-[200px] md:h-[300px] 3xl:h-[400px]' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:px-[50px] 3xl:px-[150px]">
                            <div className="w-full flex flex-wrap text-black bg-[#ffffff80] p-5 sm:p-10 rounded-md">
                                <div className="w-full lg:w-6/12 flex flex-wrap justify-center">
                                    {cardData.map((card, index) => (
                                        <div key={index} className="w-full md:w-6/12">
                                            <div className="border-[3px] border-black p-4 m-3 rounded-xl text-center wow animate__animated animate__zoomIn">
                                                <div className="flex justify-center">
                                                    <img src={card.img} alt={card.title} />
                                                </div>
                                                <h2 className="pt-4 text-[20px] sm:text-[26px] xl:text-[32px] font-Secondary">
                                                    {card.title}
                                                </h2>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="w-full lg:w-6/12 text-center sm:text-start md:ps-5 flex flex-col justify-center">
                                    <h2 className='text-[20px] sm:text-[26px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[40px] font-Secondary font-medium pb-4 wow animate__animated animate__zoomIn'>We help you create Apps for</h2>
                                    <p className='text-[14px] xl:text-[16px] pb-3 font-Primary wow animate__animated animate__zoomIn'> From lightning-fast Single Page Applications and interactive E-commerce platforms with server-side rendering to modern Social Media and Community Apps with dynamic routing and API integrations, Next.js provides the flexibility and power needed for today’s web. We also develop custom dashboards, booking systems, educational portals, and content-rich websites that load quickly and provide an exceptional user experience on any device.</p>
                                    <p className='text-[14px] xl:text-[16px] font-Primary wow animate__animated animate__zoomIn'>Next.js empowers us to create modern, high-performance applications with seamless navigation and excellent SEO. We build Single Page Applications with client-side transitions, blazing-fast E-commerce platforms that support dynamic product pages and secure checkouts, and Social Media apps featuring real-time feeds, messaging, and notifications.Leveraging features like server-side rendering, static site generation, and API routes, we ensure your Next.js apps are both powerful and future-ready.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NextjsTechnology
