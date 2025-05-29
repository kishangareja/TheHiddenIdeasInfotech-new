import icons1 from '../assets/achievement.png'
import icons2 from '../assets//24-hours-support.png'
import icons3 from '../assets/agile.png'
import icons4 from '../assets/usability.png'
import icons5 from '../assets/solution.png'
import icons6 from '../assets/log.png'
import iconswhite1 from '../assets/achievement-white.png'
import iconswhite2 from '../assets//24-hours-support-white.png'
import iconswhite3 from '../assets/agile-white.png'
import iconswhite4 from '../assets/usability-white.png'
import iconswhite5 from '../assets/solution-white.png'
import iconswhite6 from '../assets/log-white.png'

const chooseData = [
    {
        icon: icons1,
        iconwhite: iconswhite1,
        title: 'High Quality Work',
        description: 'We deliver exceptional quality in every project, ensuring your digital solutions are top-notch and effective.'
    },
    {
        icon: icons2,
        iconwhite: iconswhite2,
        title: 'Dedicated 24/7 Support',
        description: 'Our team is available around the clock to provide you with support and resolve any issues promptly and efficiently.'
    },
    {
        icon: icons3,
        iconwhite: iconswhite3,
        title: 'Agile and Fast Working Style',
        description: 'We adopt an agile methodology, allowing us to work quickly and adapt to changes, ensuring timely delivery of projects.'
    },
    {
        icon: icons4,
        iconwhite: iconswhite4,
        title: 'High Level of Usability',
        description: 'We prioritize user-friendly designs that offer seamless experiences, making your digital solutions easy to use and intuitive.'
    },
    {
        icon: icons5,
        iconwhite: iconswhite5,
        title: 'Innovative Solutions',
        description: 'We utilize the latest technologies and design trends to create innovative solutions that set you apart from the competition.'
    },
    {
        icon: icons6,
        iconwhite: iconswhite6,
        title: 'Proven Track Record',
        description: 'Our portfolio of successful projects and satisfied clients demonstrates our ability to deliver outstanding results consistently.'
    },
]

const Choose = () => {
    return (
        <>
            <section className='py-[60px] xl:py-[100px] bg-[#7c78781a] dark:bg-black'>
                <div className="container">
                    <div className="row">
                        <div className="dark:text-white heading flex  justify-center text-[24px] sm:text-[30px] md:text-[38px] font-Primary font-bold mb-[50px] uppercase tracking-wider text-center xl:text-start px-[10px] wow animate__animated animate__zoomIn">
                            <h2>Why Choose The Hidden ideas?</h2>
                        </div>
                        <div className="flex flex-wrap justify-center w-full xl:gap-[20px] ">
                            {chooseData.map((choose, index) => (
                                <div className="w-full md:w-6/12 xl:w-[28%] 3xl:w-3/12 p-[10px] xl:p-0 group xl:text-center">
                                    <div key={index} className=" p-[30px] md:aspect-[1.5/1] lg:aspect-[1.5/.7] xl:aspect-[1.5/1.2] 2xl:aspect-[1.5/0.9] 3xl:aspect-auto relative bg-white dark:bg-black dark:text-Primary shadow-chooseBox dark:shadow-chooseBox2 z-[2] rounded-xl overflow-hidden hover:text-white dark:hover:text-white hover:transition-all hover:duration-[0.5s] before:absolute before:w-full before:left-0 before:right-0 before:bottom-0  before:top-auto before:h-0 before:bg-Primary before:z-[-1] before:transition-all before:duration-[0.5s] hover:before:h-[100%] ">
                                        <div className="pb-3 w-10  2xl:w-12 h-10  2xl:h-12 transition-all duration-[0.5s] ease-in  rounded-full  relative">
                                            <img src={choose.icon} className=" absolute w-8 2xl:w-10 3xl:w-12 h-8 2xl:h-10 3xl:h-12  2xl:top-[0px] lg:left-[0px] xl:left-[110px] 2xl:left-[130px] 3xl:left-[175px]  duration-300 dark:opacity-0" alt='icon' />
                                            <img src={choose.iconwhite} className=" absolute w-8 2xl:w-10 3xl:w-12 h-8 2xl:h-10  3xl:h-12  2xl:top-[0px] lg:left-[0px] xl:left-[110px] 2xl:left-[130px] 3xl:left-[175px] transition-opacity duration-300 group-hover:opacity-100 opacity-0 dark:opacity-100" alt='icon' />
                                        </div>
                                        <h3 className=' text-[20px] md:text-[18px] lg:text-[22px] 3xl:text-[28px] pb-[10px] font-Secondary font-normal wow animate__animated animate__zoomIn'>{choose.title}</h3>
                                        <p className='text-[16px] md:text-[14px] 3xl:text-[18px] font-Secondary wow animate__animated animate__zoomIn'>{choose.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Choose
