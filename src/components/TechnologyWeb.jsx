import React from 'react'
import reactmain from '../assets/reactmain.svg'
import enterprisewhite from '../assets/enterprise-white.png'
import businesswhite from '../assets/cooperation-white.png'
import Consumerswhite from '../assets/protection-white.png'

const items = [
    { title: 'Enterprise', img: enterprisewhite },
    { title: 'Business', img: businesswhite },
    { title: 'Consumers', img: Consumerswhite },
];

const ReactTexhnology = () => {
    return (
        <>
            <section className='py-[50px] h-fit bg-react_banner bg-no-repeat bg-cover bg-blend-darken bg-[#000000a4] border-b-[3px] border-black'>
                <div className="container">
                    <div className="row">
                        <div className="xl:px-[50px] 3xl:px-[150px] mb-[25px] sm:mb-[50px]">
                            <div className="w-full flex flex-wrap text-white bg-[#1173b998] p-5 sm:p-10 rounded-md">
                                <div className="w-full lg:w-6/12 text-center sm:text-start mb-5 xl:mb-0">
                                    <h2 className='text-[20px] sm:text-[26px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[40px] font-Secondary font-medium pb-4'>Why Choose The Hidden ideas For ReactJS Development?</h2>
                                    <p className='text-[14px] xl:text-[16px] pb-3 font-Primary'>ReactJS is also well-known because it was one of the first JavaScript frameworks released as open source. ReactJS single-direction JS's data flow delivers a solid code to the existing structure even after adding extra features.</p>
                                    <p className='text-[14px] xl:text-[16px] font-Primary'>The best feature of ReactJS is the ability to reuse code components, which makes the job of a UI designer much easier. Because of this, JavaScript allows the Hire React Js Developers to reuse existing designs. Components are the foundation of ReactJS, and isolated components are simple to manage in ReactJS.</p>
                                </div>
                                <div className="w-full lg:w-6/12 flex items-center justify-center">
                                    <div className="image flex justify-center">
                                        <img src={reactmain} alt="" className='w-[200px] md:w-[300px] 3xl:w-[400px] h-[200px] md:h-[300px] 3xl:h-[400px]' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:px-[50px] 3xl:px-[150px]">
                            <div className="w-full flex flex-wrap text-white bg-[#1173b998] p-5 sm:p-10 rounded-md">
                                <div className="w-full lg:w-6/12 flex flex-wrap justify-center mb-5 xl:mb-0">
                                    {items.map((item, index) => (
                                        <div key={index} className="w-full md:w-6/12">
                                            <div className="border-[3px] border-white p-4 m-3 rounded-xl text-center">
                                                <div className="flex justify-center">
                                                    <img src={item.img} alt={item.title} />
                                                </div>
                                                <h2 className='pt-4 text-[20px] sm:text-[26px] xl:text-[32px] font-Secondary'>
                                                    {item.title}
                                                </h2>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="w-full lg:w-6/12 text-center sm:text-start md:ps-5 flex flex-col justify-center">
                                    <h2 className='text-[20px] sm:text-[26px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[40px] font-Secondary font-medium pb-4'>We help you create Apps for</h2>
                                    <p className='text-[14px] xl:text-[16px] pb-3 font-Primary'>Single Page Applications that deliver fast and dynamic user experiences. E-commerce and Product Catalogs with real-time browsing, filtering, and secure payments. Social Media and Community Platforms that foster interaction with posts, messaging, and engagement features. </p>
                                    <p className='text-[14px] xl:text-[16px] font-Primary'>Educational Platforms for online learning, quizzes, and course tracking.     Admin Dashboards for managing users, data, and analytics. and Booking or Scheduling Systems that streamline reservations, appointments, and event management.  </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ReactTexhnology
