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
      <div className="relative">
        {/* Lightning Background - Fixed and covers entire viewport */}
        <div className="fixed inset-0 z-0 will-change-auto">
          <Lightning 
            hue={219} 
            xOffset={2} 
            speed={1} 
            intensity={1} 
            size={0.9} 
          />
        </div>
        
        {/* Header - Fixed at top */}
        <Header />
        
        {/* Content Layer */}
        <div className="relative z-10">
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
