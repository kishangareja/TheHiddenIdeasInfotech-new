import { useState, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import usePreventInspect from "./components/usePreventInspect";
import "./App.css";
import Loader from "./components/Loader";

const Home = lazy(() => import("./page/Home"));
const About = lazy(() => import("./page/About"));
const ServicePage = lazy(() => import("./page/ServicePage"));
const CompanyPage = lazy(() => import("./page/CompanyPage"));
const ContactPage = lazy(() => import("./page/ContactPage"));

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  
  usePreventInspect();

  return (
    <>
      <div>
        <ScrollToTop />
        <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
        <div className={`${mobileMenuOpen ? 'blur-background' : ''}`}>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/service" element={<ServicePage />} />
              <Route path="/company" element={<CompanyPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </Suspense>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
