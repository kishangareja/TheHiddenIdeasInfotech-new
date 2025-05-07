import { useState } from "react";
import { NavLink, Link, useNavigate, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import { FaAngleDown } from "react-icons/fa6";
import Logo from "../assets/Logo.png";
import DarkModeToggle from "./DarkModeToggle";
import { FaChevronRight } from "react-icons/fa";

const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Service",
    path: "/service",
    submenu: [
      {
        name: "Web Development",
        link: "/webdevlopmentpage",
        items: [
          { name: "React", link: "/webdevlopmentpage/react" },
          { name: "Angular", link: "/webdevlopmentpage/angular" },
          { name: "NextJS", link: "/webdevlopmentpage/nextjs" },
          { name: "Vue", link: "/webdevlopmentpage/vue" },
        ],
      },
      {
        name: "PHP Developers",
        link: "/phpdevlopmentpage",
        items: [
          { name: "Laravel", link: "/phpdevlopmentpage/laravel" },
          { name: "CodeIgniter", link: "/phpdevlopmentpage/codeigniter" },
          { name: "Cake Php", link: "/phpdevlopmentpage/cake-php" },
          { name: "Symfony", link: "/phpdevlopmentpage/symfony" },
        ],
      },
      {
        name: "Mobile App Development",
        link: "/appdevlopmentpage",
        items: [
          { name: "React Native", link: "/appdevlopmentpage/reactnative" },
          { name: "Flutter", link: "/appdevlopmentpage/flutter" },
          { name: "Android", link: "/appdevlopmentpage/android" },
          { name: "iOS", link: "/appdevlopmentpage/ios" },
        ],
      },
      {
        name: "DataBase",
        link: "/databasepage",
        items: [
          { name: "My SQL", link: "/databasepage/mysql" },
          { name: "MariaDB", link: "/databasepage/mariadb" },
          { name: "SQLite", link: "/databasepage/sqlite" },
          { name: "PostgreSQL", link: "/databasepage/postgresql" },
        ],
      },
    ],
  },
  {
    name: "Gallery",
    path: "/gallery",
  },
  {
    name: "Company",
    path: "/company",
  },
];

const Header = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState(null);
  const [openSubItems, setOpenSubItems] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleContactClick = () => {
    window.scrollTo(0, 0);
    setMobileMenuOpen(false);
    navigate("/contactform");
    const contactSection = document.getElementById("contact-us");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const handleServiceHover = (index) => {
    setActiveSubmenu(index);
  };

  const handleServiceLeave = () => {
    setActiveSubmenu(null);
  };

  const isServiceSubmenuActive =
    location.pathname.startsWith("/service") ||
    navLinks
      .find(link => link.name === "Service")
      ?.submenu?.some(category =>
        location.pathname.startsWith(category.link) ||
        category.items.some(item => location.pathname === item.link)
      );

  return (
    <header className={`p-4 bg-white dark:bg-black duration-700 shadow-xl ${mobileMenuOpen ? "shadow-none" : "shadow-xl dark:shadow-customTwo"} sticky top-0 z-50 animate-slideDown`}>
      <div className="container xl:mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/" className="cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <img src={Logo} alt="Logo" className="h-10 sm:h-[50px] md:h-[50px] xl:h-[65px]" />
          </Link>

          <div className="lg:w-[85%] xl:w-[79%] 2xl:w-[78%] 3xl:w-[66%] justify-between hidden lg:flex items-center">
            <nav className={`${mobileMenuOpen ? "block" : "hidden"} lg:flex lg:items-center lg:space-x-6 transition-all duration-300 ease-in-out`}>
              <ul className="flex flex-col lg:flex-row">
                {navLinks.map((link, index) => (
                  <li
                    key={index}
                    className="relative px-2 xl:px-4 py-2 lg:py-0"
                    onMouseEnter={() => link.submenu && handleServiceHover(index)}
                    onMouseLeave={handleServiceLeave}
                  >
                    <NavLink
                      to={link.path || "#"}
                      className={({ isActive }) =>
                        `cursor-custom dark:cursor-custom_light uppercase font-semibold text-[16px] 2xl:text-[18px] font-Secondary tracking-widest duration-200 ${isActive || (link.name === "Service" && isServiceSubmenuActive)
                          ? "text-Primary dark:text-Primary"
                          : "text-gray-700 dark:text-white"
                        } hover:text-Primary dark:hover:text-Primary`
                      }
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      {link.name}
                    </NavLink>
                    {link.submenu && activeSubmenu === index && (
                      <div className="absolute left-[40%] top-[22px] bg-white dark:bg-black shadow-lg rounded-lg p-4 z-50 w-max">
                        <ul className="flex flex-col">
                          {link.submenu.map((submenuCategory, id) => (
                            <li key={id} className="relative group">
                              <div className="flex items-center justify-between px-4 py-2 group-hover:bg-Primary group-hover:text-white transition-all duration-300 rounded-lg w-full">
                                <NavLink to={submenuCategory.link}>
                                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 group-hover:text-white font-Secondary">
                                    {submenuCategory.name}
                                  </h3>
                                </NavLink>
                                <FaChevronRight className="ml-2 text-gray-700 dark:text-white group-hover:text-white group-hover:rotate-90 transition-all duration-300 hover:text-white" />
                              </div>

                              <ul className="hidden group-hover:block absolute top-0 left-full bg-white dark:bg-black shadow-lg rounded-lg p-4 w-full">
                                {submenuCategory.items.map((submenuItem, subId) => (
                                  <li key={subId} className="mb-2">
                                    <NavLink
                                      to={submenuItem.link}
                                      className={({ isActive }) =>
                                        `cursor-custom dark:cursor-custom_light block text-gray-700 dark:text-white hover:text-black font-Secondary hover:font-medium hover:bg-primary transition-all duration-200 p-2 rounded-lg`
                                      }
                                    >
                                      {submenuItem.name}
                                    </NavLink>
                                  </li>
                                ))}
                              </ul>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex gap-[10px] items-center">
              <DarkModeToggle />
              <a href="/contact" className="cursor-custom dark:cursor-custom_light relative flex items-center justify-center xl:justify-start group overflow-hidden py-2 sm:py-3 px-3 sm:px-6 font-Secondary text-Primary text-[14px] sm:text-[16px] rounded-lg
                   hover:bg-primary-dark uppercase font-semibold border-[3px] border-Primary tracking-wider transition-all duration-[0.7s] bg-white hover:border-[3px]">
                Contact Us
                <span className="absolute inset-0 w-[300px] h-[200px] bg-Primary group-hover:left-[130%] group-hover:top-[130%] transition-all duration-500 ease-out rotate-[25deg] left-[-320px] top-[-150px]"></span>
              </a>
            </div>
          </div>

          <div className="hamburger-menu flex items-center gap-[10px] lg:hidden">
            <DarkModeToggle />
            <Link className="text-[20px]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <CgClose className="text-black dark:text-white" /> : <GiHamburgerMenu className="text-black dark:text-white" />}
            </Link>
          </div>
        </div>
      </div>
      <div
      className={`duration-500 ${
        mobileMenuOpen ? "top-[70px] shadow-xl" : "-top-[470px] shadow-none"
      } absolute left-0 w-full bg-white dark:bg-black transition-all ease-in-out block lg:hidden z-[-1] pt-[20px] pb-[30px] px-[10px]`}
    >
      <ul>
        {navLinks.map((link, index) => (
          <li
            key={index}
            className=" px-[10px] py-[10px] uppercase font-semibold text-gray-700 dark:text-white duration-200 border-b border-dotted border-[#0000003d]"
          >
            <div className="flex flex-col ">
              <span
                className={`hover:text-Primary dark:hover:text-Primary cursor-pointer font-Secondary flex items-center justify-between gap-1 ${openMobileSubmenu === index ? "border-b-[1px] pb-2 border-[#0000003d] text-Primary" : "border-b-0 pb-0 border-black"}`}
                onClick={() => {
                  if (link.submenu) {
                    setOpenMobileSubmenu(openMobileSubmenu === index ? null : index);
                    setOpenSubItems(null);
                  } else {
                    setMobileMenuOpen(false);
                    window.scrollTo(0, 0);
                    navigate(link.path);
                  }
                }}
              >
                {link.name}
                {link.submenu && (
                  <FaAngleDown
                    className={`h-4 w-4 transition-transform duration-300 ${
                      openMobileSubmenu === index ? "rotate-180" : "rotate-0"
                    }`}
                  />
                )}
              </span>
              {link.submenu && openMobileSubmenu === index && (
                <div className="overflow-hidden w-full  dark:bg-[#111] rounded-lg mt-2 transition-all duration-500 ease-in-out">
                  {link.submenu.map((submenu, subIndex) => (
                    <div key={subIndex} className="pt-3 pe-2">
                      <div
                        onClick={() =>
                          setOpenSubItems(openSubItems === subIndex ? null : subIndex)
                        }
                        className={`cursor-pointer flex justify-between items-center font-semibold font-Secondary ${openSubItems === subIndex ? "border-b-[1px] pb-2 border-[#0000003d] !text-Primary" : "border-b-0 pb-0 border-black !text-[#374151]"}    dark:text-white hover:text-Primary`}
                      >
                        <span className="text-[14px]">{submenu.name}</span>
                        <FaAngleDown
                          className={`h-4 w-4 transition-transform duration-300 ${
                            openSubItems === subIndex ? "rotate-180" : "rotate-0"
                          }`}
                        />
                      </div>
                      <ul
                        className={`transition-all duration-500 ease-in-out overflow-hidden ${
                          openSubItems === subIndex ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        {submenu.items.map((item, itemIndex) => (
                          <li key={itemIndex}>
                            <NavLink
                              to={item.link}
                              onClick={() => {
                                setMobileMenuOpen(false);
                                window.scrollTo(0, 0);
                              }}
                              className={({ isActive }) =>
                                `block text-sm py-1 font-Secondary text-left !text-[12px] ${
                                  isActive
                                    ? "text-Primary"
                                    : "text-gray-700 dark:text-gray-300"
                                } hover:text-Primary`
                              }
                            >
                              {item.name}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>

      <div className="flex justify-center pt-[30px]">
        <button
          onClick={handleContactClick}
          className="relative flex items-center justify-center xl:justify-start group overflow-hidden py-2 sm:py-3 px-3 sm:px-6 font-Secondary text-Primary text-[14px] sm:text-[16px] rounded-lg hover:bg-primary-dark uppercase font-semibold border-[3px] border-Primary tracking-wider transition-all duration-[0.5s] bg-white hover:border-[3px]"
        >
          Contact Us
          <span className="absolute inset-0 w-[300px] h-[200px] bg-Primary group-hover:left-[130%] group-hover:top-[130%] transition-all duration-500 ease-out rotate-[25deg] left-[-320px] top-[-150px]"></span>
        </button>
      </div>
    </div>
    </header>
  );
};

export default Header;

