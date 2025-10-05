import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import SmoothScroll from "@/components/SmoothScroll";
import Lightning from "@/components/ui/lightning";
import Header from "@/components/Header";

const Index = () => {
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
              xOffset={2} 
              speed={1} 
              intensity={1} 
              size={0.9} 
            />
          </div>
        </div>
        
        {/* Header - Fixed at top */}
        <Header />
        
        {/* Content Layer */}
        <div className="relative bg-transparent min-h-screen" style={{ zIndex: 10 }}>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </div>
      </div>
    </SmoothScroll>
  );
};

export default Index;
