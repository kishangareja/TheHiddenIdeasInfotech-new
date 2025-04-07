import { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import Logo from "../assets/Logo.png";
import DarkModeToggle from "./DarkModeToggle";
import { FaChevronRight } from "react-icons/fa"; // Right arrow icon

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
        link: "/details/web-development", 
        items: [
          { name: "React", link: "/details/web-development/react" },
          { name: "Angular", link: "/details/web-development/angular" },
          { name: "NextJS", link: "/details/web-development/nextjs" },
          { name: "Vue", link: "/details/web-development/vue" },
        ],
      },
      {
        name: "Front End",
        link: "/details2/front-end", 
        items: [
          { name: "HTML", link: "/details/back-end/html" },
          { name: "Css", link: "/details/back-end/css" },
          { name: "Javascript", link: "/details/back-end/javascript" },
          { name: "Bootstrap", link: "/details/back-end/bootstrap" },
        ],
      },
      {
        name: "PHP Developers",
        link: "/PHPpage/php-page", 
        items: [
          { name: "My SQL", link: "/details/frameworks/mysql" },
          { name: "Laravel", link: "/details/frameworks/laravel" },
          { name: "Cake Php", link: "/details/frameworks/cake-php" },
          { name: "SQLite", link: "/details/frameworks/sqlite" },
        ],
      },
      {
        name: "Mobile App Development",
        link: "/details1/mobile-app-development", 
        items: [
          { name: "React Native", link: "/detail1/mobile-app-development/react-native" },
          { name: "Flutter", link: "/detail1/mobile-app-development/flutter" },
          { name: "Android", link: "/detail1/mobile-app-development/android" },
          { name: "iOS", link: "/detail1/mobile-app-development/ios" },
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
  {
    name: "Contact",
    path: "/contact",
  },
];

const Header = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  const [activeSubmenu, setActiveSubmenu] = useState(null); 
  const navigate = useNavigate();

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

  return (
    <header className={`p-4 bg-white dark:bg-black duration-700 shadow-xl ${mobileMenuOpen ? "shadow-none" : "shadow-xl dark:shadow-customTwo"} sticky top-0 z-50 animate-slideDown`}>
      <div className="container xl:mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/" className="cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <img src={Logo} alt="Logo" className="h-10 sm:h-[50px] md:h-[65px]" />
          </Link>

          <div className="lg:w-[78%] xl:w-[75%] 2xl:w-[72%] 3xl:w-[68%] justify-between hidden lg:flex items-center">
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
                        `cursor-custom dark:cursor-custom_light uppercase font-semibold text-[16px] 2xl:text-[18px] font-Secondary tracking-widest duration-200 ${isActive || (link.path === "/" && window.location.pathname === "/") ? "text-Primary dark:text-Primary" : "text-gray-700 dark:text-white"} hover:text-Primary dark:hover:text-Primary`
                      }
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      {link.name}
                    </NavLink>

                    {/* Submenu for Service */}
                    {link.submenu && activeSubmenu === index && (
                      <div className="absolute left-full top-0 bg-white dark:bg-black shadow-lg rounded-lg p-4 z-50 w-max">
                        <ul className="flex flex-col">
                          {link.submenu.map((submenuCategory, id) => (
                            <li key={id} className="relative group">
                              <div className="flex items-center justify-between px-4 py-2 group-hover:bg-Primary group-hover:text-white transition-all duration-300 rounded-lg w-full">
                                <NavLink to={submenuCategory.link}>
                                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 group-hover:text-white">
                                    {submenuCategory.name}
                                  </h3>
                                </NavLink>
                                <FaChevronRight className="ml-2 text-gray-700 dark:text-white group-hover:text-white group-hover:rotate-90 transition-all duration-300 hover:text-white" />
                              </div>

                              {/* Show submenu items */}
                              <ul className="hidden group-hover:block absolute top-0 left-full bg-white dark:bg-black shadow-lg rounded-lg p-4 w-full">
                                {submenuCategory.items.map((submenuItem, subId) => (
                                  <li key={subId} className="mb-2">
                                    <NavLink
                                      to={submenuItem.link} 
                                      className="cursor-custom dark:cursor-custom_light block text-gray-700 dark:text-white hover:text-black hover:bg-primary transition-all duration-200 p-2 rounded-lg"
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
              <button onClick={handleContactClick} className="cursor-custom dark:cursor-custom_light relative flex items-center justify-center xl:justify-start group overflow-hidden py-2 sm:py-3 px-3 sm:px-6 font-Secondary text-Primary text-[14px] sm:text-[16px] rounded-lg hover:bg-primary-dark uppercase font-semibold border-[3px] border-Primary tracking-wider transition-all duration-[0.5s] bg-white hover:border-[3px]">
                Contact Us
              </button>
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
    </header>
  );
};

export default Header;
