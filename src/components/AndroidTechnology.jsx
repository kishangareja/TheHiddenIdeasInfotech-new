import React from 'react'
import Android from '../assets/Android.svg'
import enterprisewhite from '../assets/enterprise-white.png'
import businesswhite from '../assets/cooperation-white.png'
import Consumerswhite from '../assets/protection-white.png'

const items = [
    { title: 'Enterprise', img: enterprisewhite },
    { title: 'Business', img: businesswhite },
    { title: 'Consumers', img: Consumerswhite },
];


const AndroidTechnology = () => {
  return (
    <>
          <section className='py-[50px] h-fit bg-android_banner bg-no-repeat bg-cover bg-blend-darken bg-[#000000a4] border-b-[3px] border-black'>
                <div className="container">
                    <div className="row">
                        <div className="xl:px-[50px] 3xl:px-[150px] mb-[25px] sm:mb-[50px]">
                            <div className="w-full flex flex-wrap text-white bg-[#3ddc8596] p-5 sm:p-10 rounded-md">
                                <div className="w-full lg:w-6/12 text-center sm:text-start mb-5 xl:mb-0">
                                    <h2 className='text-[20px] sm:text-[26px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[40px] font-Secondary font-medium pb-4'>Android Development</h2>
                                    <p className='text-[14px] xl:text-[16px] pb-3 font-Primary'>Android Development involves creating applications for devices running the Android operating system, the world's most widely used mobile platform. Using tools like Android Studio and programming languages such as Java or Kotlin, developers can build feature-rich, scalable, and user-friendly apps tailored to a wide range of devices.</p>
                                    <p className='text-[14px] xl:text-[16px] font-Primary'>At The Hidden ideas, we specialize in custom Android Development to help you build reliable, high-performance apps tailored to your needs. From concept and design to coding and deployment, our developers use the latest Android tools and technologies to create apps that are functional, secure, and visually appealing. </p>
                                </div>
                                <div className="w-full lg:w-6/12 flex items-center justify-center">
                                    <div className="image flex justify-center">
                                        <img src={Android} alt="Android" className='w-[200px] md:w-[300px] 3xl:w-[400px] h-[200px] md:h-[300px] 3xl:h-[400px]' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:px-[50px] 3xl:px-[150px]">
                            <div className="w-full flex flex-wrap text-white bg-[#3ddc8596] p-5 sm:p-10 rounded-md">
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
                                    <p className='text-[14px] xl:text-[16px] pb-3 font-Primary'>We help you create apps for Android that are fast, reliable, and tailored to your business goals. Our team of expert developers uses the latest tools and best practices to build high-performance Android applications that deliver an exceptional user experience. From idea to launch, we work closely with you to ensure your app is not only functional but also scalable and future-ready for the Google Play Store.</p>
                                    <p className='text-[14px] xl:text-[16px] font-Primary'>We help you create Android apps using modern technologies like Kotlin, Jetpack Compose, and Android Studio. Our team builds secure, high-performance applications optimized for speed, responsiveness, and compatibility across all Android devices.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}

export default AndroidTechnology
