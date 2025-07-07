// import React, { useState, useMemo } from 'react'
// import emoji from "../assets/smileemoji.png"
// import company1 from '../assets/company1.jpg'
// import company2 from '../assets/company2.jpg'
// import company3 from '../assets/company3.jpg'
// import company4 from '../assets/company4.jpg'
// import company6 from '../assets/company6.jpg'
// import company7 from '../assets/company7.jpg'
// import company8 from '../assets/company8.png'
// import company9 from '../assets/company9.jpg'
// import company10 from '../assets/company10.jpeg'
// import company12 from '../assets/company12.png'
// import company14 from '../assets/company14.jpg'
// // import company15 from '../assets/company15.jpg'
// import company16 from '../assets/company16.jpg'
// import company17 from '../assets/company17.jpg'


// const generateShadows = (count, size) => {
//     const shadows = [];
//     for (let i = 0; i < count; i++) {
//         const x = Math.floor(Math.random() * 2000);
//         const y = Math.floor(Math.random() * 2000);
//         shadows.push(`${x}px ${y}px #FFF`);
//     }
//     return shadows.join(', ');
// };

// const StarLayer = ({ count, size, duration }) => {
//     const boxShadow = useMemo(() => generateShadows(count, size), [count, size]);

//     return (
//         <div
//             className="absolute w-0 h-0 animate-star z-10"
//             style={{
//                 boxShadow,
//                 width: `${size}px`,
//                 height: `${size}px`,
//                 animationDuration: `${duration}s`,
//             }}
//         >
//             <div
//                 className="absolute"
//                 style={{
//                     top: '2000px',
//                     width: `${size}px`,
//                     height: `${size}px`,
//                     boxShadow,
//                 }}
//             />
//         </div>
//     );
// };

// const imageData = {
//     diwali: [company12,],
//     ganpati: [ company6,company16,company17],
//     birthday: [ company14,],
//     thifamliy: [company1, company4, company2, company10, company7, company8, company9, company3],
// };

// const THILife = () => {
//     const [activeTab, setActiveTab] = useState("diwali");

//     const tabs = [
//         { id: "diwali", label: "Diwali" },
//         { id: "ganpati", label: "Ganpati" },
//         { id: "birthday", label: "Birthday" },
//         { id: "thifamliy", label: "The Hidden Ideas Famliy" },
//     ];

//     const activeImages = imageData[activeTab];

//     return (
//         <>
//             <section className='px-[20px] md:px-0 py-[50px] md:py-[100px] relative w-full  overflow-hidden bg-gradient-to-b from-[#090A0F] to-[#1173b9ee] z-20'>
//                 <div className="absolute inset-0 z-0 pointer-events-none">
//                     <StarLayer count={700} size={1} duration={50} />
//                     <StarLayer count={200} size={2} duration={100} />
//                     <StarLayer count={100} size={3} duration={150} />
//                 </div>
//                 <div className="container relative z-10">
//                     <div className="row">
//                         <div className="text-center mb-5">
//                             <h6 className='text-[18px] text-white sm:text-[20px] md:text-[26px] font-Secondary font-semibold capitalize wow animate__animated animate__zoomIn'>Explore life</h6>
//                             <h2 className='text-[20px] sm:text-[28px] md:text-[42px] text-white dark:text-Primary font-Secondary font-bold pb-[15px] sm:pb-0 relative wow animate__animated animate__zoomIn'>Celebrations, Functions, Festivals and much more! <img src={emoji} alt={emoji} className='w-5 sm:w-8 md:w-10 h-5 sm:h-8 md:h-10 absolute top-[34px] sm:top-[49px] md:top-[74px] lg:top-[72px] xl:top-3 right-[10px] sm:right-[110px] md:right-[30px] lg:right-[280px] xl:right-[315px]' /></h2>
//                         </div>
//                         <div className="md:px-[100px]">
//                             <div className="mb-10">
//                                 <ul className=" flex flex-wrap  justify-center -mb-px text-sm font-medium text-center gap-2" role="tablist">
//                                     {tabs.map((tab) => (
//                                         <li key={tab.id} className="me-3 md:me-6 " role="presentation">
//                                             <button
//                                                 className={` text-[14px] md:text-[16px]  inline-block p-2 sm:p-4 border-b-2 rounded-t-lg font-Secondary wow animate__animated animate__zoomIn  ${activeTab === tab.id
//                                                     ? 'text-Primary border-Primary stroke-white'
//                                                     : 'text-white hover:text-Primary hover:border-Primary dark:hover:text-white'
//                                                     }`}
//                                                 onClick={() => setActiveTab(tab.id)}
//                                                 type="button"
//                                                 role="tab"
//                                                 aria-selected={activeTab === tab.id}
//                                             >
//                                                 {tab.label}
//                                             </button>
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </div>
//                             <div key={activeTab} className="hidden md:block columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
//                                 {activeImages.map((img, i) => (
//                                     <div className="overflow-hidden rounded-lg wow animate__animated animate__zoomIn">
//                                         <img
//                                         key={i}
//                                         className="h-full max-w-full object-cover duration-[.28s]"
//                                         src={img}
//                                         alt={`img-${i}`}
//                                     />
//                                     </div>
//                                 ))}
//                             </div>

//                             <div className="block md:hidden lg:mx-[50px] 2xl:mx-[100px] 3xl:mx-[150px] py-6">
//                                 <div className="flex flex-wrap justify-center gap-4 wow animate__animated animate__zoomIn">
//                                     {activeImages.map((img, i) => (
//                                         <img key={i} className="w-[330px] sm:w-[260px] h-full object-cover rounded-lg" src={img} alt={`img-mobile-${i}`} />
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     )
// }

// export default THILife



import React, { useState, useMemo } from 'react'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'
import emoji from "../assets/smileemoji.png"
import company1 from '../assets/company1.jpg'
import company2 from '../assets/company2.jpg'
import company3 from '../assets/company3.jpg'
import company4 from '../assets/company4.jpg'
import company6 from '../assets/company6.jpg'
import company7 from '../assets/company7.jpg'
import company8 from '../assets/company8.png'
import company9 from '../assets/company9.jpg'
import company10 from '../assets/company10.jpeg'
import company12 from '../assets/company12.png'
import company14 from '../assets/company14.jpg'
import company16 from '../assets/company16.jpg'
import company17 from '../assets/company17.jpg'

const generateShadows = (count, size) => {
    const shadows = []
    for (let i = 0; i < count; i++) {
        const x = Math.floor(Math.random() * 2000)
        const y = Math.floor(Math.random() * 2000)
        shadows.push(`${x}px ${y}px #FFF`)
    }
    return shadows.join(', ')
}

const StarLayer = ({ count, size, duration }) => {
    const boxShadow = useMemo(() => generateShadows(count, size), [count, size])

    return (
        <div
            className="absolute w-0 h-0 animate-star z-10"
            style={{
                boxShadow,
                width: `${size}px`,
                height: `${size}px`,
                animationDuration: `${duration}s`,
            }}
        >
            <div
                className="absolute"
                style={{
                    top: '2000px',
                    width: `${size}px`,
                    height: `${size}px`,
                    boxShadow,
                }}
            />
        </div>
    )
}

const imageData = {
    diwali: [company12],
    ganpati: [company6, company16, company17],
    birthday: [company14],
    thifamliy: [company1, company4, company2, company10, company7, company8, company9, company3],
}

const THILife = () => {
    const [activeTab, setActiveTab] = useState("diwali")
    const [lightboxOpen, setLightboxOpen] = useState(false)
    const [photoIndex, setPhotoIndex] = useState(0)

    const tabs = [
        { id: "diwali", label: "Diwali" },
        { id: "ganpati", label: "Ganpati" },
        { id: "birthday", label: "Birthday" },
        { id: "thifamliy", label: "The Hidden Ideas Famliy" },
    ]

    const activeImages = imageData[activeTab]

    return (
        <>
            <section className='px-[20px] md:px-0 py-[50px] md:py-[100px] relative w-full overflow-hidden bg-gradient-to-b from-[#090A0F] to-[#1173b9ee] z-20'>
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <StarLayer count={700} size={1} duration={50} />
                    <StarLayer count={200} size={2} duration={100} />
                    <StarLayer count={100} size={3} duration={150} />
                </div>
                <div className="container relative z-10">
                    <div className="row">
                        <div className="text-center mb-5">
                            <h6 className='text-[18px] text-white sm:text-[20px] md:text-[26px] font-Secondary font-semibold capitalize wow animate__animated animate__zoomIn'>Explore life</h6>
                            <h2 className='text-[20px] sm:text-[28px] md:text-[42px] text-white dark:text-Primary font-Secondary font-bold pb-[15px] sm:pb-0 relative wow animate__animated animate__zoomIn'>
                                Celebrations, Functions, Festivals and much more!
                                <img src={emoji} alt="emoji" className='w-5 sm:w-8 md:w-10 h-5 sm:h-8 md:h-10 absolute top-[34px] sm:top-[49px] md:top-[74px] lg:top-[72px] xl:top-3 right-[10px] sm:right-[110px] md:right-[30px] lg:right-[280px] xl:right-[315px]' />
                            </h2>
                        </div>
                        <div className="md:px-[100px]">
                            <div className="mb-10">
                                <ul className="flex flex-wrap justify-center -mb-px text-sm font-medium text-center gap-2" role="tablist">
                                    {tabs.map((tab) => (
                                        <li key={tab.id} className="me-3 md:me-6" role="presentation">
                                            <button
                                                className={`text-[14px] md:text-[16px] inline-block p-2 sm:p-4 border-b-2 rounded-t-lg font-Secondary wow animate__animated animate__zoomIn ${activeTab === tab.id
                                                    ? 'text-Primary border-Primary stroke-white'
                                                    : 'text-white hover:text-Primary hover:border-Primary dark:hover:text-white'
                                                    }`}
                                                onClick={() => setActiveTab(tab.id)}
                                                type="button"
                                                role="tab"
                                                aria-selected={activeTab === tab.id}
                                            >
                                                {tab.label}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {/* Desktop grid */}
                            <div key={activeTab} className="hidden md:block columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                                {activeImages.map((img, i) => (
                                    <div key={i} className="overflow-hidden rounded-lg wow animate__animated animate__zoomIn cursor-pointer" onClick={() => { setPhotoIndex(i); setLightboxOpen(true) }}>
                                        <img
                                            className="h-full max-w-full object-cover  hover:scale-105 transition-all duration-300"
                                            src={img}
                                            alt={`img-${i}`}
                                        />
                                    </div>
                                ))}
                            </div>
                            {/* Mobile flex */}
                            <div className="block md:hidden lg:mx-[50px] 2xl:mx-[100px] 3xl:mx-[150px] py-6">
                                <div className="flex flex-wrap justify-center gap-4 wow animate__animated animate__zoomIn">
                                    {activeImages.map((img, i) => (
                                        <img
                                            key={i}
                                            className="w-[330px] sm:w-[260px] h-full object-cover rounded-lg cursor-pointer"
                                            src={img}
                                            alt={`img-mobile-${i}`}
                                            onClick={() => { setPhotoIndex(i); setLightboxOpen(true) }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {lightboxOpen && (
                    <Lightbox
                        mainSrc={activeImages[photoIndex]}
                        nextSrc={activeImages[(photoIndex + 1) % activeImages.length]}
                        prevSrc={activeImages[(photoIndex + activeImages.length - 1) % activeImages.length]}
                        onCloseRequest={() => setLightboxOpen(false)}
                        onMovePrevRequest={() =>
                            setPhotoIndex((photoIndex + activeImages.length - 1) % activeImages.length)
                        }
                        onMoveNextRequest={() =>
                            setPhotoIndex((photoIndex + 1) % activeImages.length)
                        }
                    />
                )}
            </section>
        </>
    )
}

export default THILife
