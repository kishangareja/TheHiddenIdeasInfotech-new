import React from 'react'
import Marquee from 'react-fast-marquee'
import logo11 from '../assets/react.png'
import logo14 from '../assets/angular.png'
import logo15 from '../assets/next.js .png'
import logo16 from '../assets/vue.png'
import vuemain from '../assets/vue.png'
import enterprise from '../assets/enterprise .png'
import business from '../assets/Business.png'
import Consumers from '../assets/Consumers.png'

const logoImage = [
    {
        Logo: logo11,
    },
    {
        Logo: logo14,
    },
    {
        Logo: logo15,
    },
    {
        Logo: logo16,
    },
    {
        Logo: logo11,
    },
    {
        Logo: logo14,
    },
    {
        Logo: logo15,
    },
    {
        Logo: logo16,
    },
    {
        Logo: logo11,
    },
    {
        Logo: logo14,
    },
    {
        Logo: logo15,
    },
    {
        Logo: logo16,
    },
]

const cardItems = [
    { title: 'Enterprise', img: enterprise },
    { title: 'Business', img: business },
    { title: 'Consumers', img: Consumers },
];

const VueTechnology = () => {
    return (
        <>
            <section className='py-[50px] h-fit bg-vue_banner bg-no-repeat bg-cover bg-blend-darken bg-[#000000a4] '>
                <div className="container">
                    <div className="row">
                        <div className="xl:px-[50px] 3xl:px-[150px] mb-[25px] sm:mb-[50px]">
                            <div className="w-full flex flex-wrap text-black bg-[#4dba87ab] p-5 sm:p-10 rounded-md">
                                <div className="w-full lg:w-6/12 text-center sm:text-start mb-5 xl:mb-0">
                                    <h2 className='text-[20px] sm:text-[26px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[40px] font-Secondary font-medium pb-4'>Why Choose The Hidden ideas For VueJS Development?</h2>
                                    <p className='text-[14px] xl:text-[16px] pb-3 font-Primary'>We provide excellent VueJS development services that meet your programming requirements and are delivered on schedule. Our AngularJS developers create high-quality applications and ensure that the technology we use is the perfect fit for the client's needs. We are dedicated to giving the best App Development company solutions that are both simple and dependable to meet clients' needs.</p>
                                    <p className='text-[14px] xl:text-[16px] font-Primary'>Most firms are eager to hire VueJS developers, particularly those with solid programming skills, analytic abilities, and critical thinking, who want to stay ahead of the curve in this modern era. Grewon Technologies should be your first choice when hiring AngularJS engineers.</p>
                                </div>
                                <div className="w-full lg:w-6/12 flex items-center justify-center">
                                    <div className="image flex justify-center">
                                        <img src={vuemain} alt="" className='w-[200px] md:w-[300px] 3xl:w-[400px] h-[200px] md:h-[300px] 3xl:h-[400px]' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:px-[50px] 3xl:px-[150px]">
                            <div className="w-full flex flex-wrap text-black bg-[#4dba87ab] p-5 sm:p-10 rounded-md">
                                <div className="w-full lg:w-6/12 flex flex-wrap justify-center">
                                    {cardItems.map((item, index) => (
                                        <div key={index} className="w-full md:w-6/12">
                                            <div className="border-[3px] border-black p-4 m-3 rounded-xl text-center">
                                                <div className="flex justify-center">
                                                    <img src={item.img} alt={item.title} />
                                                </div>
                                                <h2 className="pt-4 text-[20px] sm:text-[26px] xl:text-[32px] font-Secondary">
                                                    {item.title}
                                                </h2>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="w-full lg:w-6/12 text-center sm:text-start md:ps-5 flex flex-col justify-center">
                                    <h2 className='text-[20px] sm:text-[26px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[40px] font-Secondary font-medium pb-4'>We help you create Apps for</h2>
                                    <p className='text-[14px] xl:text-[16px] pb-3 font-Primary'>Vue.js enables us to build fast, responsive, and flexible applications with a clean and modular architecture. We create Single Page Applications that deliver smooth user experiences, E-commerce platforms with dynamic product filtering and real-time updates, and Social Media apps that support user interactions, feeds, and messaging. Our Vue.js solutions also include dashboards with interactive data visualizations, booking and scheduling tools, educational platforms with quizzes and progress tracking, and modern portfolio websites.</p>
                                    <p className='text-[14px] xl:text-[16px] font-Primary'> Our expertise also includes dashboards for analytics and admin control panels, educational platforms with course content and assessments, booking and scheduling apps with calendar integration, and content-driven websites using headless CMS setups. With Vue’s reactive system, flexible component model, and support for tools like Vue Router and Vuex, we deliver apps that are smooth, structured, and scalable.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='border-t-[1px] border-dotted border-[#0000005c] '>
                <div className="row">
                    <ul className='flex overflow-hidden py-[40px] bg-white dark:bg-black relative before:absolute before:top-0 before:w-[250px] before:h-[100%] before:z-[2] before:left-0 before:bg-custom-gradient border-b-[1px] border-dotted border-[#0000005c] dark:border-white wow animate__animated animate__fadeInRightBig'>
                        <Marquee direction='left' speed={100} className='relative'>
                            {logoImage.map((logoImage, index) => (
                                <li key={index} >
                                    <img src={logoImage.Logo} className={`mx-[40px] ${index === 3 ? 'bg-white p-2 rounded' : ''}`} />
                                </li>
                            ))}
                        </Marquee>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default VueTechnology
