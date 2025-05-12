import React from 'react'
import company1 from '../assets/company1.jpg'
import company2 from '../assets/company2.jpg'
import company3 from '../assets/company3.jpg'
import company4 from '../assets/company4.jpg'
import company6 from '../assets/company6.jpg'
import company7 from '../assets/company7.jpg'
import company8 from '../assets/company8.png'
import company9 from '../assets/company9.jpg'
import company10 from '../assets/company10.jpeg'
import highlight from '../assets/highlight.png'

const Companygallery = () => {
    return (
        <>
            <section className='py-[50px] md:py-[100px]'>
                <div className="container">
                    <div className="row">
                        <div className="relative heading flex justify-center text-[24px] sm:text-[30px] md:text-[38px] dark:text-white font-Secondary font-semibold mb-[40px] uppercase tracking-widest text-center md:text-start wow animate__animated animate__zoomIn">
                            <h2 className='relative z-10 text-white'>Our Team</h2>
                            <img src={highlight} alt={highlight} className='absolute top-0 left-[23%] sm:left-[28%] lg:left-[32%] xl:left-[37%] w-[54%] sm:w-[44%] lg:w-[34%]  xl:w-[25%] h-full' />
                        </div>
                        <div className="lg:mx-[50px] 2xl:mx-[100px] 3xl:mx-[150px] hidden md:block">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                <div className="grid grid-cols-1 gap-4">
                                    <div>
                                        <img className="h-full max-w-full rounded-lg object-cover" src={company9} alt={company9} />
                                    </div>
                                    <div>
                                        <img className="h-full max-w-full rounded-lg object-cover" src={company1} alt={company1} />
                                    </div>
                                    <div>
                                        <img className="h-auto max-w-full rounded-lg" src={company4} alt={company4} />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 gap-4">
                                    <div>
                                        <img className="h-full max-w-full rounded-lg object-cover" src={company3} alt={company3} />
                                    </div>
                                    <div>
                                        <img className="h-full max-w-full rounded-lg" src={company6} alt={company6} />
                                    </div>
                                    <div>
                                        <img className="h-auto max-w-full rounded-lg" src={company2} alt={company2} />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 gap-4">
                                    <div>
                                        <img className="h-auto max-w-full rounded-lg" src={company7} alt={company7} />
                                    </div>
                                    <div>
                                        <img className="h-auto max-w-full rounded-lg" src={company10} alt={company10} />
                                    </div>
                                    <div>
                                        <img className="h-auto max-w-full rounded-lg" src={company8} alt={company8} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* mobile screen  */}
                        <div className="lg:mx-[50px] 2xl:mx-[100px] 3xl:mx-[150px] py-6 block md:hidden">
                            <div className="flex flex-wrap justify-center grid-rows-2 grid-flow-col gap-4">
                                <img className="w-[330px] sm:w-[260px] h-full  object-cover rounded-lg" src={company9} alt="company9" />
                                <img className="w-[330px] sm:w-[260px] h-full  object-cover rounded-lg" src={company1} alt="company1" />
                                <img className="w-[330px] sm:w-[260px] h-full  object-cover rounded-lg" src={company4} alt="company4" />
                                <img className="w-[330px] sm:w-[260px] h-full  object-cover rounded-lg" src={company3} alt="company3" />
                                <img className="w-[330px] sm:w-[260px] h-full  object-cover rounded-lg" src={company6} alt="company6" />
                                <img className="w-[330px] sm:w-[260px] h-full  object-cover rounded-lg" src={company7} alt="company7" />
                                <img className="w-[330px] sm:w-[260px] h-full  object-cover rounded-lg" src={company2} alt="company2" />
                                <img className="w-[330px] sm:w-[260px] h-full  object-cover rounded-lg" src={company10} alt="company10" />
                                <img className="w-[330px] sm:w-[260px] h-full  object-cover rounded-lg" src={company8} alt="company8" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Companygallery
