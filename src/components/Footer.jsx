import logo from '../assets/Logo.png';
import location from '../assets/location.png';
import { TbPhoneCall, TbClockHour4 } from "react-icons/tb";
import { RiFacebookFill } from "react-icons/ri";
import { BiLogoLinkedin, BiLogoInstagramAlt } from "react-icons/bi";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { BsMicrosoftTeams } from "react-icons/bs";

const Footer = () => {

    const navigate = useNavigate();

    const handleContactClick = () => {
        window.scrollTo(0, 0);
        navigate("/contact");
        const contactSection = document.getElementById("contact-us");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    const companyLinks = [
        { FLink: 'About', path: "/about" },
        { FLink: 'Service', path: "/service" },
        { FLink: 'Gallery', path: "/gallery" },
        { FLink: 'Company', path: "/company" },
    ];

    const serviceLinks = [
        { FLink: 'Web Development', path: "/webdevlopmentpage" },
        { FLink: 'PHP Developers', path: "/phpdevlopmentpage" },
        { FLink: 'App Development', path: "/appdevlopmentpage" },
        { FLink: 'DataBase', path: "/databasepage" },
    ];

    const socialLink = [
        { icon: <RiFacebookFill />, path: "#" },
        { icon: <BiLogoLinkedin />, path: "#" },
        { icon: <BiLogoInstagramAlt />, path: "#" },
        { icon: <BsMicrosoftTeams />, path: "#" },
    ];

    return (
        <>
            <footer className="pt-[60px] xl:pt-[100px] bg-[#1173b942]">
                <div className="container">
                    <div className="row">
                        <div className=" footer_top flex flex-wrap  xl:flex-nowrap  3xl:gap-[30px] w-full 3xl:ps-[100px] 3xl:pr-[60px]">
                            <div className="w-full md:w-6/12 xl:w-[38%] 2xl:w-[38%] 3xl:w-6/12 flex md:flex-col gap-[30px] pb-[50px] md:pb-[30px]">
                                <div className="px-[10px] xl:px-0">
                                    <div className='cursor-custom dark:cursor-custom_light pb-[30px] lg:pb-[40px] flex justify-center md:justify-start wow animate__animated animate__zoomIn'>
                                        <Link to="/" className='cursor-custom' onClick={() => window.scrollTo(0, 0)}>
                                            <img src={logo} alt="Logo" />
                                        </Link>
                                    </div>
                                    <ul className='flex flex-col gap-[25px]'>
                                        <li className='flex items-center justify-center md:justify-start wow animate__animated animate__zoomIn'>
                                            <img src={location} alt="Location" className='w-[25px] h-[25px]' />
                                            <p className='ps-[10px] font-Secondary font-medium text-[16px] 2xl:text-[18px] 3xl:text-[20px] tracking-wider text-center md:text-start'>
                                                303-304, Golden Square near Dmart mota varachha, surat, Gujarat 394105
                                            </p>
                                        </li>
                                        <li className='flex items-center justify-center md:justify-start gap-5 wow animate__animated animate__zoomIn'>
                                            <TbPhoneCall className='text-[26px]' />
                                            <div className='flex flex-col md:flex-row md:gap-0 gap-2'>
                                                <Link to={'tel:9687311505'} className='cursor-custom font-Secondary font-medium text-[16px] 2xl:text-[18px] 3xl:text-[20px] tracking-wider transition-all duration-100 hover:text-Primary'>
                                                    +91 96873 11505
                                                </Link>
                                                <span className='hidden md:block px-1'>|</span>
                                                <Link to={'tel:8200113410'} className='cursor-custom font-Secondary font-medium text-[16px] 2xl:text-[18px] 3xl:text-[20px] tracking-wider transition-all duration-100 hover:text-Primary'>
                                                    +91 82001 13410
                                                </Link>
                                            </div>
                                        </li>

                                        <li className='flex items-center justify-center md:justify-start wow animate__animated animate__zoomIn'>
                                            <TbClockHour4 className='text-[26px]' />
                                            <div className='ps-[10px] font-Secondary font-medium text-[16px] 2xl:text-[18px] 3xl:text-[20px] tracking-wider'>
                                                <p>Mon-Fri: 9:30 am - 6:30pm,</p>
                                                <p>Saturday - Sunday: <b className='uppercase '>Closed</b></p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="w-full md:w-6/12 xl:w-[14%] 2xl:w-2/12 pb-[50px] md:pb-[30px] xl:pb-0 py-1">
                                <div className="flex flex-col gap-[15px] md:gap-[30px] px-[10px] xl:px-0 text-center md:text-start">
                                    <h2 className='uppercase font-Secondary tracking-wider font-semibold text-[24px] 3xl:text-[28px] wow animate__animated animate__zoomIn'>
                                        Company
                                    </h2>
                                    <ul className='flex flex-col gap-[10px] md:gap-[20px]'>
                                        {companyLinks.map((companyLink, id) => (
                                            <li key={id} className='wow animate__animated animate__zoomIn'>
                                                <NavLink
                                                    to={companyLink.path}
                                                    className={({ isActive }) => `cursor-custom uppercase font-semibold text-[16px] 2xl:text-[18px] 3xl:text-[20px] font-Secondary tracking-wider duration-200 ${isActive ? "text-Primary" : "text-gray-700"} hover:text-Primary`}
                                                    onClick={() => window.scrollTo(0, 0)}
                                                >
                                                    {companyLink.FLink}
                                                </NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="w-full md:w-6/12 xl:w-2/12 pb-[50px] md:pb-[20px] xl:pb-0">
                                <div className="flex flex-col gap-[15px] md:gap-[30px] px-[10px] xl:px-0 text-center md:text-start">
                                    <h2 className='uppercase font-Secondary tracking-wider font-semibold text-[24px] 3xl:text-[28px] wow animate__animated animate__zoomIn'>
                                        IT Services
                                    </h2>
                                    <ul className='flex flex-col gap-[10px] md:gap-[20px]'>
                                        {serviceLinks.map((serviceLink, index) => (
                                            <li key={index} className='wow animate__animated animate__zoomIn'>
                                                <NavLink
                                                    to={serviceLink.path}
                                                    className={({ isActive }) => `cursor-custom uppercase font-semibold text-[16px] 2xl:text-[18px] 3xl:text-[20px] font-Secondary tracking-wider duration-200 text-[#374151] hover:text-Primary`}
                                                    onClick={() => window.scrollTo(0, 0)}
                                                >
                                                    {serviceLink.FLink}
                                                </NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="w-full md:w-6/12 xl:w-4/12 pb-[50px] md:pb-[20px] xl:pb-0">
                                <div className="flex flex-col gap-[15px] md:gap-[30px] px-[10px] xl:px-0 text-center md:text-start">
                                    <h2 className='uppercase font-Secondary tracking-wider font-semibold text-[24px] 3xl:text-[28px] wow animate__animated animate__zoomIn'>
                                        Join Our Newsletter
                                    </h2>
                                    <p className='text-[16px] 2xl:text-[18px] 3xl:text-[20px] font-Secondary tracking-wider wow animate__animated animate__zoomIn'>
                                        Stay ahead of the tech world with our newsletter! Subscribe to get the latest IT industry insights, tech trends, and expert tips straight to your inbox.
                                    </p>
                                    <div className="btn flex justify-center md:justify-start wow animate__animated animate__zoomIn">
                                        <button onClick={handleContactClick} className="cursor-custom relative flex items-center justify-center xl:justify-start  
                                            group  overflow-hidden py-2 sm:py-2 px-3 sm:px-5 font-Secondary text-white text-[14px] sm:text-[16px] rounded-lg 
                                            hover:bg-primary-dark uppercase font-semibold tracking-wider transition-all duration-[0.5s] bg-Primary">
                                            Get in Touch
                                            <span className="absolute inset-0 w-[300px] h-[200px] bg-[#ffffff8e] group-hover:left-[130%] group-hover:top-[130%] transition-all duration-500 ease-out rotate-[25deg] left-[-320px] top-[-150px]"></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer_bottom py-[30px] flex flex-wrap md:flex-nowrap justify-center md:justify-between items-center px-[30px] lg:px-[8px] border-t-[1px] border-dotted border-[#0000005c] lg:ps-[140px] lg:pr-[80px]">
                    <div className="text-[16px] lg:text-[18px] font-Primary font-medium pb-[20px] md:pb-0 text-center  md:text-start wow animate__animated animate__zoomIn">
                        Copyright © 2025 <span className='font-bold text-Primary'>The Hidden Ideas.</span> All Rights Reserved
                    </div>
                    <ul className="flex gap-[10px] lg:gap-[15px] pr-6">
                        {socialLink.map((social, index) => (
                            <li key={index} className="overflow-hidden wow animate__animated animate__zoomIn">
                                <NavLink
                                    to={social.path || "#"}
                                    target="_blank"
                                    className={({ isActive }) => `cursor-custom relative flex items-center justify-center xl:justify-start group overflow-hidden
                                     py-2 sm:py-2 px-3 sm:px-3 font-Secondary text-white text-[16px] lg:text-[20px] rounded-lg transition-all duration-500
                                      bg-Primary
                                      uppercase font-semibold tracking-wider
                                    ${isActive ? 'text-white bg-Primary' : 'text-gray-700'} hover:bg-primary-dark`}
                                >
                                    {social.icon}
                                    <span className="absolute inset-0 w-[200px] h-[100px] bg-[#ffffff8e] group-hover:left-[130%] group-hover:top-[130%] transition-all duration-500 ease-out rotate-[25deg] left-[-320px] top-[-150px]"></span>
                                </NavLink>
                            </li>
                        ))}
                    </ul>

                </div>
            </footer >
        </>
    )
}

export default Footer;
