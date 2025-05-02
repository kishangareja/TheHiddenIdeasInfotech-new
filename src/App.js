import { useState, useEffect, Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
// import usePreventInspect from "./components/usePreventInspect";
import "./App.css";
import Loader from "./components/Loader";
import ContactForm from "./components/ContactForm";
import Gallery from "./page/Gallery";
import WebdevlopmentPage from "./page/WebdevlopmentPage";
import ReactTexhnology from "./components/TechnologyWeb";
import AngularTechnology from "./components/AngularTechnology";
import NextjsTechnology from "./components/NextjsTechnology";
import VueTechnology from "./components/VueTechnology";

import Home from "./page/Home";
import About from "./page/About";
import ServicePage from "./page/ServicePage";
import CompanyPage from "./page/CompanyPage";
import ContactPage from "./page/ContactPage";
import Detail2 from "./components/Detail2";
import Phpdevlopmentpage from "./page/Phpdevlopmentpage";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // usePreventInspect();

  return (
    <>

      {loading ? (
        <Loader />
      ) : (
        <>
          <ScrollToTop />
          <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
          <div className={`${mobileMenuOpen ? 'blur-background' : ''}`}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/service" element={<ServicePage />} />
              <Route path="/company" element={<CompanyPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/contactform" element={<ContactForm />} />
              <Route path="/webdevlopmentpage/react" element={<ReactTexhnology />} />
              <Route path="/webdevlopmentpage/angular" element={<AngularTechnology />} />
              <Route path="/webdevlopmentpage/nextjs" element={<NextjsTechnology />} />
              <Route path="/webdevlopmentpage/vue" element={<VueTechnology />} />
              <Route path="/frontedpage/detail" element={<Detail2 />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/webdevlopmentpage" element={<WebdevlopmentPage />} />
              <Route path="/phpdevlopmentpage" element={<Phpdevlopmentpage />} />
            </Routes>
            <Footer />
          </div>
        </>
      )}
    </>
  );
}

export default App;
