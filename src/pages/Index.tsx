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
      <div className="relative min-h-screen bg-black">
        {/* Lightning Background - Fixed and covers entire viewport */}
        <div className="fixed inset-0 z-0 w-full h-full bg-black">
          {/* Desktop Lightning */}
          <div className="hidden sm:block w-full h-full">
            <Lightning 
              hue={219} 
              xOffset={2} 
              speed={1} 
              intensity={1} 
              size={0.9} 
            />
          </div>
          {/* Mobile Lightning */}
          <div className="block sm:hidden w-full h-full">
            <Lightning 
              hue={219} 
              xOffset={-1.5} 
              speed={0.7} 
              intensity={1.0} 
              size={1.0} 
            />
          </div>
        </div>
        
        {/* Header - Fixed at top */}
        <Header />
        
        {/* Content Layer */}
        <div className="relative z-10 bg-black min-h-screen">
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
