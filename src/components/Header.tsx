import { Download } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    let ticking = false;

    const updateScrollState = () => {
      const scrollY = window.scrollY;
      
      if (scrollY > lastScrollY && scrollY > 80) {
        // Scrolling down
        setIsScrollingUp(false);
        setIsScrolled(true);
      } else if (scrollY < lastScrollY) {
        // Scrolling up
        setIsScrollingUp(true);
        if (scrollY <= 80) {
          setIsScrolled(false);
        }
      }
      
      setLastScrollY(scrollY);
      ticking = false;
    };

    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollState);
        ticking = true;
      }
    };

    const handleScroll = () => requestTick();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Track active section based on scroll position
  useEffect(() => {
    const updateActiveSection = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for header height

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }

      // Handle edge case for very top of page
      if (window.scrollY < 100) {
        setActiveSection('home');
      }
    };

    const handleScrollForSection = () => {
      requestAnimationFrame(updateActiveSection);
    };

    window.addEventListener('scroll', handleScrollForSection, { passive: true });
    updateActiveSection(); // Set initial active section

    return () => window.removeEventListener('scroll', handleScrollForSection);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-1/2 transform -translate-x-1/2 z-50 flex items-center justify-between bg-background/80 backdrop-blur-lg border border-border/20 transition-all duration-500 ease-in-out ${
        isScrolled && !isScrollingUp 
          ? 'w-[50%] max-w-3xl h-16 px-6 md:px-8 py-4 mt-4 rounded-2xl' 
          : 'w-full max-w-7xl h-16 px-6 md:px-8 py-4 mt-0 rounded-none md:rounded-2xl md:mt-4 md:w-[calc(100%-2rem)]'
      }`}
    >
      <div className="flex items-center gap-2">
        <span className="text-2xl font-black tracking-wider text-foreground">
          RK
        </span>
      </div>
      
      <nav className="hidden md:flex items-center gap-8">
        <a href="#home" className={`flex items-center gap-2 text-base font-medium transition-colors relative group ${
          activeSection === 'home' ? 'text-foreground/90' : 'text-muted-foreground hover:text-primary'
        }`}>
          {activeSection === 'home' && <span className="inline-block w-2 h-2 bg-primary rounded-full" />}
          Home
          {activeSection !== 'home' && <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />}
        </a>
        <a href="#about" className={`flex items-center gap-2 text-base font-medium transition-colors relative group ${
          activeSection === 'about' ? 'text-foreground/90' : 'text-muted-foreground hover:text-primary'
        }`}>
          {activeSection === 'about' && <span className="inline-block w-2 h-2 bg-primary rounded-full" />}
          About
          {activeSection !== 'about' && <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />}
        </a>
        <a href="#projects" className={`flex items-center gap-2 text-base font-medium transition-colors relative group ${
          activeSection === 'projects' ? 'text-foreground/90' : 'text-muted-foreground hover:text-primary'
        }`}>
          {activeSection === 'projects' && <span className="inline-block w-2 h-2 bg-primary rounded-full" />}
          Projects
          {activeSection !== 'projects' && <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />}
        </a>
        <a href="#contact" className={`flex items-center gap-2 text-base font-medium transition-colors relative group ${
          activeSection === 'contact' ? 'text-foreground/90' : 'text-muted-foreground hover:text-primary'
        }`}>
          {activeSection === 'contact' && <span className="inline-block w-2 h-2 bg-primary rounded-full" />}
          Contact
          {activeSection !== 'contact' && <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />}
        </a>
      </nav>

      {/* Mobile Navigation */}
      <nav className="flex md:hidden items-center gap-4">
        <a href="#home" className={`flex items-center gap-1 transition-colors text-sm ${
          activeSection === 'home' ? 'text-foreground/90' : 'text-muted-foreground hover:text-primary'
        }`}>
          {activeSection === 'home' && <span className="inline-block w-2 h-2 bg-primary rounded-full" />}
          Home
        </a>
        <a href="#about" className={`flex items-center gap-1 transition-colors text-sm ${
          activeSection === 'about' ? 'text-foreground/90' : 'text-muted-foreground hover:text-primary'
        }`}>
          {activeSection === 'about' && <span className="inline-block w-2 h-2 bg-primary rounded-full" />}
          About
        </a>
        <a href="#projects" className={`flex items-center gap-1 transition-colors text-sm ${
          activeSection === 'projects' ? 'text-foreground/90' : 'text-muted-foreground hover:text-primary'
        }`}>
          {activeSection === 'projects' && <span className="inline-block w-2 h-2 bg-primary rounded-full" />}
          Projects
        </a>
        <a href="#contact" className={`flex items-center gap-1 transition-colors text-sm ${
          activeSection === 'contact' ? 'text-foreground/90' : 'text-muted-foreground hover:text-primary'
        }`}>
          {activeSection === 'contact' && <span className="inline-block w-2 h-2 bg-primary rounded-full" />}
          Contact
        </a>
      </nav>
      
      <a 
        href="/resume.pdf" 
        download="Rohit_Khandelwal_Resume.pdf"
        className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-all duration-300 px-3 py-1.5 rounded-lg hover:bg-accent/50 border border-border/30 hover:border-border text-sm font-medium"
      >
        <Download className="h-4 w-4" />
        Resume
      </a>
    </header>
  );
};

export default Header;
