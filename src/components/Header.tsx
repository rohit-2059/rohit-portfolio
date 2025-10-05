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

  // Build responsive header classes:
  // Mobile: always floating, constant width & position
  // Desktop: expands when at top or scrolling up, compacts when scrolling down beyond threshold
  const baseClasses = `fixed left-1/2 -translate-x-1/2 top-4 sm:top-0 z-50 flex items-center justify-between
    bg-background/80 backdrop-blur-lg border border-border/20 rounded-xl sm:rounded-2xl
    h-14 sm:h-16 px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-4 transition-all duration-500 ease-in-out`;

  let widthClasses = '';
  if (!isScrolled) {
    widthClasses = 'w-[90%] sm:w-[calc(100%-2rem)] sm:max-w-7xl';
  } else if (isScrollingUp) {
    // Scrolled but user scrolling up -> expand (desktop). Mobile stays same size.
    widthClasses = 'w-[90%] sm:w-[calc(100%-2rem)] sm:max-w-7xl';
  } else {
    // Scrolling down -> compact only on desktop
    widthClasses = 'w-[90%] sm:w-[85%] md:sm:w-[80%] lg:w-[50%] sm:max-w-3xl';
  }

  return (
    <header className={`${baseClasses} ${widthClasses}`}> 
      <div className="flex items-center gap-2">
        <span className="text-xl sm:text-2xl font-black tracking-wider text-foreground">
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
      <nav className="flex md:hidden items-center gap-2 sm:gap-3 overflow-x-auto">
        <a href="#home" className={`flex items-center gap-1 transition-colors text-xs sm:text-sm whitespace-nowrap px-1 py-1 ${
          activeSection === 'home' ? 'text-foreground/90' : 'text-muted-foreground hover:text-primary'
        }`}>
          {activeSection === 'home' && <span className="inline-block w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full" />}
          Home
        </a>
        <a href="#about" className={`flex items-center gap-1 transition-colors text-xs sm:text-sm whitespace-nowrap px-1 py-1 ${
          activeSection === 'about' ? 'text-foreground/90' : 'text-muted-foreground hover:text-primary'
        }`}>
          {activeSection === 'about' && <span className="inline-block w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full" />}
          About
        </a>
        <a href="#projects" className={`flex items-center gap-1 transition-colors text-xs sm:text-sm whitespace-nowrap px-1 py-1 ${
          activeSection === 'projects' ? 'text-foreground/90' : 'text-muted-foreground hover:text-primary'
        }`}>
          {activeSection === 'projects' && <span className="inline-block w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full" />}
          Projects
        </a>
        <a href="#contact" className={`flex items-center gap-1 transition-colors text-xs sm:text-sm whitespace-nowrap px-1 py-1 ${
          activeSection === 'contact' ? 'text-foreground/90' : 'text-muted-foreground hover:text-primary'
        }`}>
          {activeSection === 'contact' && <span className="inline-block w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full" />}
          Contact
        </a>
      </nav>
      
      <a 
        href="/resume.pdf" 
        download="Rohit_Khandelwal_Resume.pdf"
        className="flex items-center gap-1 sm:gap-2 text-muted-foreground hover:text-foreground transition-all duration-300 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg hover:bg-accent/50 border border-border/30 hover:border-border text-xs sm:text-sm font-medium whitespace-nowrap"
      >
        <Download className="h-3 w-3 sm:h-4 sm:w-4" />
        <span className="hidden xs:inline sm:inline">Resume</span>
        <span className="xs:hidden sm:hidden">CV</span>
      </a>
    </header>
  );
};

export default Header;
