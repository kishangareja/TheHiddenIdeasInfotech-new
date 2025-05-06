import React from 'react'
import MySQl from '../assets/MySql.svg'
import enterprisewhite from '../assets/enterprise-white.png'
import businesswhite from '../assets/cooperation-white.png'
import Consumerswhite from '../assets/protection-white.png'

const items = [
    { title: 'Enterprise', img: enterprisewhite },
    { title: 'Business', img: businesswhite },
    { title: 'Consumers', img: Consumerswhite },
];


const MySql = () => {
    return (
        <>
            <section className='py-[50px] h-fit bg-mysql_banner bg-no-repeat bg-cover bg-blend-darken bg-[#000000a4] border-b-[3px] border-black '>
                <div className="container">
                    <div className="row">
                        <div className="xl:px-[50px] 3xl:px-[150px] mb-[25px] sm:mb-[50px]">
                            <div className="w-full flex flex-wrap text-white bg-[linear-gradient(90deg,rgba(0,117,143,1)_0%,rgba(242,145,17,1)_100%)] p-5 sm:p-10 rounded-md">
                                <div className="w-full lg:w-6/12 text-center sm:text-start mb-5 xl:mb-0">
                                    <h2 className='text-[20px] sm:text-[26px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[40px] font-Secondary font-medium pb-4'>My Sql</h2>
                                    <p className='text-[14px] xl:text-[16px] pb-3 font-Primary'>MySQL is an open-source relational database management system (RDBMS) that uses Structured Query Language (SQL) for accessing and managing data. It is widely used in web development and supports operations such as data insertion, querying, updating, and deletion. MySQL is known for its speed, reliability, and ease of use, making it a popular choice for applications ranging from small websites to large-scale enterprise systems.</p>
                                    <p className='text-[14px] xl:text-[16px] font-Primary'>MySQL offers a wide range of features, including support for large databases, transactions, stored procedures, triggers, and full-text indexing. It supports different storage engines like InnoDB and MyISAM, each optimized for different use cases. MySQL also includes robust security features like user authentication, data encryption, and access control.</p>
                                </div>
                                <div className="w-full lg:w-6/12 flex items-center justify-center">
                                    <div className="image flex justify-center">
                                        <img src={MySQl} alt="Android" className='w-[200px] md:w-[300px] 3xl:w-[400px] h-[200px] md:h-[300px] 3xl:h-[400px]' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:px-[50px] 3xl:px-[150px]">
                            <div className="w-full flex flex-wrap text-white bg-[linear-gradient(90deg,rgba(0,117,143,1)_0%,rgba(242,145,17,1)_100%)] p-5 sm:p-10 rounded-md">
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
                                    <p className='text-[14px] xl:text-[16px] pb-3 font-Primary'>We specialize in helping you build powerful and efficient applications that connect seamlessly with MySQL databases. Whether you're developing a web app, mobile app, or desktop solution, our team ensures smooth integration with MySQL for reliable data storage, management, and performance. From designing database schemas to implementing secure, scalable backend systems, we provide end-to-end support to turn your ideas into fully functional apps powered by MySQL. </p>
                                    <p className='text-[14px] xl:text-[16px] font-Primary'>We provide full-cycle development services for apps that use MySQL as their backend database. Our team helps you define relational schemas, write optimized SQL queries, and implement secure APIs that communicate efficiently with the database.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MySql
