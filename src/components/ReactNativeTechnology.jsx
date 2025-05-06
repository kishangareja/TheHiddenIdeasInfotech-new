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

const ReactNativeTechnology = () => {
    return (
        <>
            <section className='py-[50px] h-fit bg-react_banner bg-no-repeat bg-cover bg-blend-darken bg-[#000000a4] border-b-[3px] border-black'>
                <div className="container">
                    <div className="row">
                        <div className="xl:px-[50px] 3xl:px-[150px] mb-[25px] sm:mb-[50px]">
                            <div className="w-full flex flex-wrap text-white bg-[#1173b998] p-5 sm:p-10 rounded-md">
                                <div className="w-full lg:w-6/12 text-center sm:text-start mb-5 xl:mb-0">
                                    <h2 className='text-[20px] sm:text-[26px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[40px] font-Secondary font-medium pb-4'>React Native Development</h2>
                                    <p className='text-[14px] xl:text-[16px] pb-3 font-Primary'>React Native development is a popular approach to building mobile applications using JavaScript and React. It allows developers to create cross-platform apps for both iOS and Android using a single codebase, significantly reducing development time and effort. React Native uses native components, ensuring high performance and a near-native user experience.</p>
                                    <p className='text-[14px] xl:text-[16px] font-Primary'>React Native combines the power of JavaScript with native platform capabilities, using a bridge to communicate between JavaScript and native modules. This enables developers to access device features like the camera, GPS, and push notifications while still writing most of the app logic in JavaScript.</p>
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
                                    <p className='text-[14px] xl:text-[16px] pb-3 font-Primary'>We help you create powerful and engaging mobile applications using React Native, a leading cross-platform development framework. Whether you're building an app from scratch or enhancing an existing one, our team ensures a seamless user experience on both iOS and Android.</p>
                                    <p className='text-[14px] xl:text-[16px] font-Primary'>sing React Native, we help you build robust, scalable apps that run smoothly on both Android and iOS platforms. Our development process focuses on clean architecture, reusable components, and native integrations to ensure your app performs reliably while reducing development time and costs.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ReactNativeTechnology
