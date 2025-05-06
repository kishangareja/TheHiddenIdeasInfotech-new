import React from 'react'
import Sqlite from '../assets/Sqlite.svg'
import enterprisewhite from '../assets/enterprise-white.png'
import businesswhite from '../assets/cooperation-white.png'
import Consumerswhite from '../assets/protection-white.png'

const items = [
    { title: 'Enterprise', img: enterprisewhite },
    { title: 'Business', img: businesswhite },
    { title: 'Consumers', img: Consumerswhite },
];


const SqLite = () => {
    return (
        <>
            <section className='py-[50px] h-fit bg-sqLite_banner bg-no-repeat bg-cover bg-blend-darken bg-[#000000a4] border-b-[3px] border-black '>
                <div className="container">
                    <div className="row">
                        <div className="xl:px-[50px] 3xl:px-[150px] mb-[25px] sm:mb-[50px]">
                            <div className="w-full flex flex-wrap text-white bg-[#003b579c] p-5 sm:p-10 rounded-md">
                                <div className="w-full lg:w-6/12 text-center sm:text-start mb-5 xl:mb-0">
                                    <h2 className='text-[20px] sm:text-[26px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[40px] font-Secondary font-medium pb-4'>SQLite</h2>
                                    <p className='text-[14px] xl:text-[16px] pb-3 font-Primary'>SQLite is a lightweight, self-contained, and serverless relational database engine that's widely used in mobile apps, embedded systems, desktop applications, and small to medium-sized web projects. Unlike traditional databases, SQLite doesn’t require a separate server process—it stores the entire database as a single file, making it extremely easy to set up and manage.</p>
                                    <p className='text-[14px] xl:text-[16px] font-Primary'>SQLite is a transactional SQL database engine that operates directly from disk using a single file, making it incredibly easy to deploy and maintain. It supports full ACID compliance, multiple tables, indexes, views, and triggers. </p>
                                </div>
                                <div className="w-full lg:w-6/12 flex items-center justify-center">
                                    <div className="image flex justify-center">
                                        <img src={Sqlite} alt="Android" className='w-[200px] md:w-[300px] 3xl:w-[400px] h-[200px] md:h-[300px] 3xl:h-[400px]' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:px-[50px] 3xl:px-[150px]">
                            <div className="w-full flex flex-wrap text-white bg-[#003b579c] p-5 sm:p-10 rounded-md">
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
                                    <p className='text-[14px] xl:text-[16px] pb-3 font-Primary'>We specialize in creating mobile apps that rely on SQLite for secure, local data storage. Whether you’re building an offline-first productivity tool, a note-taking app, or a personal finance tracker, we ensure your app handles data efficiently and reliably using SQLite fully optimized for iOS and Android environments.</p>
                                    <p className='text-[14px] xl:text-[16px] font-Primary'>We assist developers in building high-performance apps that use SQLite for local storage. From schema design to query optimization and integration with Android, iOS, or desktop platforms, we provide the tools and expertise you need.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SqLite
