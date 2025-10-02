import { Download } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(false);

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
        <a href="#home" className="flex items-center gap-2 text-base font-medium text-foreground/90 hover:text-primary transition-colors relative group">
          <span className="inline-block w-2 h-2 bg-primary rounded-full" />
          Home
        </a>
        <a href="#about" className="text-base font-medium text-muted-foreground hover:text-primary transition-colors relative group">
          About
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
        </a>
        <a href="#projects" className="text-base font-medium text-muted-foreground hover:text-primary transition-colors relative group">
          Projects
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
        </a>
        <a href="#contact" className="text-base font-medium text-muted-foreground hover:text-primary transition-colors relative group">
          Contact
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
        </a>
      </nav>

      {/* Mobile Navigation */}
      <nav className="flex md:hidden items-center gap-4">
        <a href="#home" className="text-foreground/90 hover:text-primary transition-colors">
          <span className="inline-block w-2 h-2 bg-primary rounded-full" />
        </a>
        <a href="#about" className="text-muted-foreground hover:text-primary transition-colors text-sm">About</a>
        <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors text-sm">Projects</a>
        <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">Contact</a>
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
