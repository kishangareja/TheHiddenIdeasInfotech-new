import React from 'react'
import Postgresql from '../assets/postgreSql.svg'
import enterprisewhite from '../assets/enterprise-white.png'
import businesswhite from '../assets/cooperation-white.png'
import Consumerswhite from '../assets/protection-white.png'

const items = [
    { title: 'Enterprise', img: enterprisewhite },
    { title: 'Business', img: businesswhite },
    { title: 'Consumers', img: Consumerswhite },
];

const PostgreSQL = () => {
    return (
        <>
            <section className='py-[50px] h-fit bg-postgresql_banner bg-no-repeat bg-cover bg-blend-darken bg-[#000000a4] border-b-[3px] border-black '>
                <div className="container">
                    <div className="row">
                        <div className="xl:px-[50px] 3xl:px-[150px] mb-[25px] sm:mb-[50px]">
                            <div className="w-full flex flex-wrap text-white bg-[#336791af] p-5 sm:p-10 rounded-md">
                                <div className="w-full lg:w-6/12 text-center sm:text-start mb-5 xl:mb-0">
                                    <h2 className='text-[20px] sm:text-[26px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[40px] font-Secondary font-medium pb-4'>PostgreSQL</h2>
                                    <p className='text-[14px] xl:text-[16px] pb-3 font-Primary'>PostgreSQL is a powerful, open-source relational database management system known for its advanced features, strong performance, and high reliability. It supports complex queries, full ACID compliance, JSON data types, full-text search, and extensibility through custom functions and data types. PostgreSQL is ideal for both small applications and large-scale enterprise systems, and it's trusted by organizations that require robust data integrity and scalability. </p>
                                    <p className='text-[14px] xl:text-[16px] font-Primary'>PostgreSQL is cloud-ready and integrates seamlessly with modern tech stacks including Kubernetes, Docker, GraphQL, and ORMs like Sequelize, Prisma, and SQLAlchemy. With widespread support from managed services like AWS RDS, Azure Database for PostgreSQL, and Google Cloud SQL, developers can deploy resilient, scalable databases without heavy infrastructure management.</p>
                                </div>
                                <div className="w-full lg:w-6/12 flex items-center justify-center">
                                    <div className="image flex justify-center">
                                        <img src={Postgresql} alt="Android" className='w-[200px] md:w-[300px] 3xl:w-[400px] h-[200px] md:h-[300px] 3xl:h-[400px]' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:px-[50px] 3xl:px-[150px]">
                            <div className="w-full flex flex-wrap text-white bg-[#336791af] p-5 sm:p-10 rounded-md">
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
                                    <p className='text-[14px] xl:text-[16px] pb-3 font-Primary'>We help you create powerful, scalable applications using PostgreSQL, one of the most advanced open-source relational databases available. From designing complex data models to integrating secure and high-performance backends, we ensure your app takes full advantage of PostgreSQL’s features such as JSON support, full-text search, and advanced indexing. </p>
                                    <p className='text-[14px] xl:text-[16px] font-Primary'>We help you build modern apps with PostgreSQL at the core—fully compatible with cloud platforms, containerized environments, and modern frameworks. Whether you're using Node.js, Django, Spring Boot, or GraphQL, we ensure seamless PostgreSQL integration, taking care of scalability, security, and deployment for both on-premise and cloud-native environments.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PostgreSQL
