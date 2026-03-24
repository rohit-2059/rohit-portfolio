import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import SmoothScroll from "@/components/SmoothScroll";
import Lightning from "@/components/ui/lightning";
import Header from "@/components/Header";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";

const Index = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const jump = () => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'instant', block: 'center' });
        }
      };
      jump();
      setTimeout(jump, 10);
      setTimeout(jump, 50);
      setTimeout(jump, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [location]);

  return (
    <SmoothScroll>
      <div className="relative min-h-screen">
        {/* Black Background - Behind everything */}
        <div className="fixed inset-0 bg-black w-full h-full min-h-screen" style={{ zIndex: -20 }}></div>
        
        {/* Lightning Effect - Desktop Only */}
        <div className="hidden sm:block fixed inset-0 w-full h-full overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
          <div className="w-full h-full min-h-screen">
            <Lightning 
              hue={219} 
              xOffset={2.5} 
              speed={1} 
              intensity={1.3} 
              size={0.9} 
            />
          </div>
        </div>
        
        {/* Header - Fixed at top */}
        <Header />
        
        {/* Content Layer */}
        <div className="relative bg-transparent min-h-screen" style={{ zIndex: 10 }}>
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row relative w-full">
            {/* Left Column (Hero & About) */}
            <div className="w-full lg:w-[70%] order-2 lg:order-1">
              <Hero />
              <About />
            </div>

            {/* Right Column (Sticky Image) */}
            <div className="flex lg:w-[30%] lg:sticky top-0 lg:h-screen items-center justify-center pt-12 lg:pt-16 order-1 lg:order-2 mb-8 lg:mb-0">
              <div className="relative">
                <motion.div
                  className="w-60 h-60 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="/WhatsApp Image 2025-01-26 at 22.22.44.jpeg"
                    alt="Rohit Khandelwal"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.div
                  className="absolute -inset-2 rounded-full border-2 border-primary/30"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
              </div>
            </div>
          </div>
          
          <Skills />
          <Projects />
          <Achievements />
          <Certifications />
          <Contact />
        </div>
      </div>
    </SmoothScroll>
  );
};

export default Index;
