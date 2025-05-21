import { useEffect,useState  } from "react"
import { useLocation } from 'react-router-dom';
import { FaArrowUp } from "react-icons/fa6";

const ScrollToTop = () => {
    // const { pathname } = useLocation();

    // useEffect(() => {
    //     window.scrollTo(0, 0);
    //   }, [pathname]);


     const [visible, setVisible] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isCompanyPage = pathname === "/company";


  return visible ? (
    <button
      onClick={scrollToTop}
      style={{
        position: "fixed",
        bottom: "30px",
        right: "30px",
        background: isCompanyPage ? "#ffffff" : "#1173b9ee",
        color: isCompanyPage ? "#1173b9" : "white",
        border: "none",
        borderRadius: "10%",
        width: "40px",
        height: "40px",
        cursor: "pointer",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        zIndex: 1000,
        fontSize: "20px", 
      }}
      className="flex justify-center items-center"
    >
      <FaArrowUp />
    </button>
  ): null;
};

export default ScrollToTop
