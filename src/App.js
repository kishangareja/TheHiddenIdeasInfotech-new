import { useState, useEffect, } from "react";
import { Routes, Route, useLocation  } from "react-router-dom";
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
import Phpdevlopmentpage from "./page/Phpdevlopmentpage";
import Laravel from "./components/Laravel";
import CodeIgniterTechnology from "./components/CodeIgniterTechnology";
import Cakephptechnology from "./components/Cakephptechnology";
import SymfonyTechnology from "./components/SymfonyTechnology";
import MobileAppdevlopmentPage from "./page/MobileAppdevlopmentPage";
import ReactNativeTechnology from "./components/ReactNativeTechnology";
import FlutterTechnology from "./components/FlutterTechnology";
import AndroidTechnology from "./components/AndroidTechnology";
import IosTechnology from "./components/IosTechnology";
import DataBasePage from "./page/DataBasePage";
import MySql from "./components/MySql";
import MariaDB from "./components/MariaDB";
import SqLite from "./components/SqLite";
import PostgreSQL from "./components/PostgreSQL";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

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
          <div className={`${mobileMenuOpen ? 'blur-background' : ''}`} >
            <Routes>
              {/* Main page  */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/service" element={<ServicePage />} />
              <Route path="/company" element={<CompanyPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/contactform" element={<ContactForm />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/webdevlopmentpage" element={<WebdevlopmentPage />} />
              <Route path="/phpdevlopmentpage" element={<Phpdevlopmentpage />} />
              <Route path="/appdevlopmentpage" element={<MobileAppdevlopmentPage/>} />
              <Route path="/databasepage" element={<DataBasePage/>} />

              {/* sub_page */}
              <Route path="/webdevlopmentpage/react" element={<ReactTexhnology />} />
              <Route path="/webdevlopmentpage/angular" element={<AngularTechnology />} />
              <Route path="/webdevlopmentpage/nextjs" element={<NextjsTechnology />} />
              <Route path="/webdevlopmentpage/vue" element={<VueTechnology />} />
              <Route path="/phpdevlopmentpage/laravel" element={<Laravel />} />
              <Route path="/phpdevlopmentpage/codeigniter" element={<CodeIgniterTechnology/>} />
              <Route path="/phpdevlopmentpage/cake-php" element={<Cakephptechnology/>} />
              <Route path="/phpdevlopmentpage/symfony" element={<SymfonyTechnology/>} />
              <Route path="/appdevlopmentpage/reactnative" element={<ReactNativeTechnology/>} />
              <Route path="/appdevlopmentpage/flutter" element={<FlutterTechnology/>} />
              <Route path="/appdevlopmentpage/android" element={<AndroidTechnology/>} />
              <Route path="/appdevlopmentpage/ios" element={<IosTechnology/>} />
              <Route path="/databasepage/mysql" element={<MySql/>} />
              <Route path="/databasepage/mariadb" element={<MariaDB/>} />
              <Route path="/databasepage/sqlite" element={<SqLite/>} />
              <Route path="/databasepage/postgresql" element={<PostgreSQL/>} />
            </Routes>
            <Footer />
          </div>
        </>
      )}
    </>
  );
}

export default App;
