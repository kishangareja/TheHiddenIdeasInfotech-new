import React from 'react'
import angularmain from '../assets/angularmain.svg'
import enterprisewhite from '../assets/enterprise-white.png'
import businesswhite from '../assets/cooperation-white.png'
import Consumerswhite from '../assets/protection-white.png'

const cardData = [
    { title: 'Enterprise', img: enterprisewhite },
    { title: 'Business', img: businesswhite },
    { title: 'Consumers', img: Consumerswhite },
];

const AngularTechnology = () => {
    return (
        <>
            <section className='py-[50px] h-fit bg-angular_banner bg-no-repeat bg-cover bg-blend-darken bg-[#000000a4] border-b-[3px] border-black'>
                <div className="container">
                    <div className="row">
                        <div className="xl:px-[50px] 3xl:px-[150px] mb-[25px] sm:mb-[50px]">
                            <div className="w-full flex flex-wrap text-white bg-[#b52e3080] p-5 sm:p-10 rounded-md">
                                <div className="w-full lg:w-6/12 text-center sm:text-start mb-5 xl:mb-0">
                                    <h2 className='text-[20px] sm:text-[26px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[40px] font-Secondary font-medium pb-4'>Why Choose The Hidden ideas For AngularJS Development?</h2>
                                    <p className='text-[14px] xl:text-[16px] pb-3 font-Primary'>We provide excellent AngularJS development services that meet your programming requirements and are delivered on schedule. Our AngularJS developers create high-quality applications and ensure that the technology we use is the perfect fit for the client's needs. We are dedicated to giving the best App Development company solutions that are both simple and dependable to meet clients' needs.</p>
                                    <p className='text-[14px] xl:text-[16px] font-Primary'>Most firms are eager to hire AngularJS developers, particularly those with solid programming skills, analytic abilities, and critical thinking, who want to stay ahead of the curve in this modern era. Grewon Technologies should be your first choice when hiring AngularJS engineers.</p>
                                </div>
                                <div className="w-full lg:w-6/12 flex items-center justify-center">
                                    <div className="image flex justify-center">
                                        <img src={angularmain} alt="" className='w-[200px] md:w-[300px] 3xl:w-[400px] h-[200px] md:h-[300px] 3xl:h-[400px]' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:px-[50px] 3xl:px-[150px]">
                            <div className="w-full flex flex-wrap text-white bg-[#b52e3080] p-5 sm:p-10 rounded-md">
                                <div className="w-full lg:w-6/12 flex flex-wrap justify-center mb-5 xl:mb-0">
                                    {cardData.map((card, index) => (
                                        <div key={index} className="w-full md:w-6/12">
                                            <div className="border-[3px] border-white p-4 m-3 rounded-xl text-center">
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
                                    <h2 className='text-[20px] sm:text-[26px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[40px] font-Secondary font-medium pb-4'>We help you create Apps for</h2>
                                    <p className='text-[14px] xl:text-[16px] pb-3 font-Primary'>Using AngularJS, we build dynamic Single Page Applications that provide smooth, real-time experiences without reloading the page.Whether it's a booking system, an educational portal, or a personalized user interface, we leverage AngularJS to create responsive, scalable, and maintainable web applications. </p>
                                    <p className='text-[14px] xl:text-[16px] font-Primary'>From sleek Single Page Applications to advanced admin dashboards, we use AngularJS to build fast, interactive, and maintainable web apps. Our expertise includes crafting E-commerce platforms with seamless product browsing and checkout experiences, Social Media apps with real-time updates and user engagement features, and Learning Management Systems that support courses, progress tracking, and quizzes.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AngularTechnology
