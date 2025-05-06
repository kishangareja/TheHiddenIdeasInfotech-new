import React from 'react'
import Ios from '../assets/IOS.svg'
import enterprisewhite from '../assets/enterprise-white.png'
import businesswhite from '../assets/cooperation-white.png'
import Consumerswhite from '../assets/protection-white.png'

const items = [
    { title: 'Enterprise', img: enterprisewhite },
    { title: 'Business', img: businesswhite },
    { title: 'Consumers', img: Consumerswhite },
];


const IosTechnology = () => {
  return (
    <>
    <section className='py-[50px] h-fit bg-ios_banner bg-no-repeat bg-cover bg-blend-darken bg-[#000000a4] border-b-[3px] border-black'>
                <div className="container">
                    <div className="row">
                        <div className="xl:px-[50px] 3xl:px-[150px] mb-[25px] sm:mb-[50px]">
                            <div className="w-full flex flex-wrap text-white bg-[#1173b998] p-5 sm:p-10 rounded-md">
                                <div className="w-full lg:w-6/12 text-center sm:text-start mb-5 xl:mb-0">
                                    <h2 className='text-[20px] sm:text-[26px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[40px] font-Secondary font-medium pb-4'>Ios Development</h2>
                                    <p className='text-[14px] xl:text-[16px] pb-3 font-Primary'>iOS Development involves creating applications specifically for Apple devices such as iPhones, iPads, and Apple Watches using tools like Xcode and programming languages such as Swift or Objective-C. With a focus on performance, security, and sleek user interface design, iOS apps are known for delivering a premium user experience.</p>
                                    <p className='text-[14px] xl:text-[16px] font-Primary'>iOS Development utilizes cutting-edge technologies like Swift, SwiftUI, and Apple’s powerful development environment, Xcode, to build secure and scalable applications. Developers benefit from Apple’s robust ecosystem, including integrated tools for testing, analytics, and performance optimization, allowing for the creation of responsive and visually consistent apps tailored to all modern Apple devices.</p>
                                </div>  
                                <div className="w-full lg:w-6/12 flex items-center justify-center">
                                    <div className="image flex justify-center">
                                        <img src={Ios} alt="Ios" className='w-[200px] md:w-[300px] 3xl:w-[400px] h-[200px] md:h-[300px] 3xl:h-[400px]' />
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
                                    <p className='text-[14px] xl:text-[16px] pb-3 font-Primary'>We help you create apps for iOS that are sleek, high-performing, and tailored to Apple’s ecosystem. Our expert team designs and develops iPhone and iPad applications using the latest technologies like Swift and SwiftUI, ensuring your app is fast, secure, and meets all App Store guidelines.</p>
                                    <p className='text-[14px] xl:text-[16px] font-Primary'>We help you create iOS apps using Swift, SwiftUI, and the full power of Apple’s development ecosystem. Our team builds apps that are optimized for performance, designed for intuitive user experiences, and engineered to integrate with the latest Apple features like Face ID, ARKit, and iCloud.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}

export default IosTechnology
