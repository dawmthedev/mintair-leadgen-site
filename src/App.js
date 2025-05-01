import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Hotjar from "@hotjar/browser";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import ServiceDetail from "./pages/services/[serviceId]";

const siteId = 5304391;
const hotjarVersion = 6;

function App() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window !== "undefined") {
      Hotjar.init(siteId, hotjarVersion);
    }
  }, []);

  return (
    <div>
      <Header />
      <div className="relative">
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
          </Routes>
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  );
}

export default App;
