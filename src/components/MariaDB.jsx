import React from 'react'
import Mariadb from '../assets/mariaDB.svg'
import enterprisewhite from '../assets/enterprise-white.png'
import businesswhite from '../assets/cooperation-white.png'
import Consumerswhite from '../assets/protection-white.png'

const items = [
    { title: 'Enterprise', img: enterprisewhite },
    { title: 'Business', img: businesswhite },
    { title: 'Consumers', img: Consumerswhite },
];

const MariaDB = () => {
  return (
    <>
          <section className='py-[50px] h-fit bg-mariaDb_banner bg-no-repeat bg-cover bg-blend-darken bg-[#000000a4] border-b-[3px] border-black '>
                <div className="container">
                    <div className="row">
                        <div className="xl:px-[50px] 3xl:px-[150px] mb-[25px] sm:mb-[50px]">
                            <div className="w-full flex flex-wrap text-white bg-[#b78a30a2] p-5 sm:p-10 rounded-md">
                                <div className="w-full lg:w-6/12 text-center sm:text-start mb-5 xl:mb-0">
                                    <h2 className='text-[20px] sm:text-[26px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[40px] font-Secondary font-medium pb-4'>Maria DB</h2>
                                    <p className='text-[14px] xl:text-[16px] pb-3 font-Primary'>MariaDB is an open-source relational database management system that is a drop-in replacement for MySQL. It was developed by the original creators of MySQL after concerns about Oracle’s acquisition of MySQL, aiming to ensure the database remained free and open-source. MariaDB offers high performance, strong security features, and support for advanced database capabilities like Galera Cluster for synchronous replication, and a variety of storage engines.</p>
                                    <p className='text-[14px] xl:text-[16px] font-Primary'>MariaDB gives developers the tools they need to build fast, scalable applications. With support for modern features like JSON, dynamic columns, and virtual columns, it’s designed to support both traditional SQL and newer, flexible data structures.</p>
                                </div>
                                <div className="w-full lg:w-6/12 flex items-center justify-center">
                                    <div className="image flex justify-center">
                                        <img src={Mariadb} alt="Android" className='w-[200px] md:w-[300px] 3xl:w-[400px] h-[200px] md:h-[300px] 3xl:h-[400px]' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:px-[50px] 3xl:px-[150px]">
                            <div className="w-full flex flex-wrap text-white bg-[#b78a30a2] p-5 sm:p-10 rounded-md">
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
                                    <p className='text-[14px] xl:text-[16px] pb-3 font-Primary'>We help you create reliable, high-performance applications powered by MariaDB. From designing efficient database structures to developing full-stack solutions, our team ensures your app takes full advantage of MariaDB’s advanced features like enhanced security, scalability, and real-time replication.</p>
                                    <p className='text-[14px] xl:text-[16px] font-Primary'>We provide end-to-end support in developing custom applications with MariaDB as the database backbone. Our services include architecture planning, database tuning, backend integration, and deployment optimization</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}

export default MariaDB
