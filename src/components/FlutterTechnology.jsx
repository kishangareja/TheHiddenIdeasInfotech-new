import React from 'react'
import Flutter from '../assets/Flutter.svg'
import enterprisewhite from '../assets/enterprise-white.png'
import businesswhite from '../assets/cooperation-white.png'
import Consumerswhite from '../assets/protection-white.png'

const items = [
    { title: 'Enterprise', img: enterprisewhite },
    { title: 'Business', img: businesswhite },
    { title: 'Consumers', img: Consumerswhite },
];

const FlutterTechnology = () => {
    return (
        <>
            <section className='py-[50px] h-fit bg-flutter_banner bg-no-repeat bg-cover bg-blend-darken bg-[#000000a4] border-b-[3px] border-black'>
                <div className="container">
                    <div className="row">
                        <div className="xl:px-[50px] 3xl:px-[150px] mb-[25px] sm:mb-[50px]">
                            <div className="w-full flex flex-wrap text-white bg-[#1173b998] p-5 sm:p-10 rounded-md">
                                <div className="w-full lg:w-6/12 text-center sm:text-start mb-5 xl:mb-0">
                                    <h2 className='text-[20px] sm:text-[26px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[40px] font-Secondary font-medium pb-4'>Flutter Development</h2>
                                    <p className='text-[14px] xl:text-[16px] pb-3 font-Primary'>Flutter Development refers to building cross-platform applications using the Flutter framework, developed by Google. It allows developers to create natively compiled apps for mobile, web, and desktop from a single codebase. Flutter uses the Dart programming language and provides a rich set of customizable widgets, enabling fast and expressive UI design.</p>
                                    <p className='text-[14px] xl:text-[16px] font-Primary'>Flutter’s architecture is designed around widgets, which are the core building blocks for everything from layout to interactive elements. Unlike other frameworks that use native components, Flutter renders everything using its own high-performance rendering engine, Skia. This gives developers full control over every pixel on the screen and ensures consistency across platforms.</p>
                                </div>
                                <div className="w-full lg:w-6/12 flex items-center justify-center">
                                    <div className="image flex justify-center">
                                        <img src={Flutter} alt="" className='w-[200px] md:w-[300px] 3xl:w-[400px] h-[200px] md:h-[300px] 3xl:h-[400px]' />
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
                                    <p className='text-[14px] xl:text-[16px] pb-3 font-Primary'>At The Hidden ideas, we specialize in helping businesses and developers bring their app ideas to life using Flutter. Whether you’re looking to build a cross-platform mobile app or a powerful web application, our team of experienced Flutter developers is here to guide you through the entire development process. We leverage Flutter's rich set of customizable widgets, fast development cycles, and single-codebase efficiency to create visually stunning, high-performance apps that run seamlessly across multiple platforms.</p>
                                    <p className='text-[14px] xl:text-[16px] font-Primary'>We understand the importance of delivering high-quality apps that perform flawlessly. That’s why we use Flutter to build apps that are fast, scalable, and visually appealing. At The Hidden ideas, our team helps you design and develop robust applications that seamlessly run on Android, iOS, and web platforms.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FlutterTechnology
