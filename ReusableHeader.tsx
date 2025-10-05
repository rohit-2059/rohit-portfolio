import React, { useState, useEffect } from 'react';

interface NavigationItem {
  id: string;
  label: string;
  href: string;
}

interface ReusableHeaderProps {
  // Brand/Logo
  brandText?: string;
  brandHref?: string;
  
  // Navigation items
  navigationItems: NavigationItem[];
  
  // Optional action button (like Resume/Download)
  actionButton?: {
    label: string;
    href: string;
    icon?: React.ReactNode;
    download?: boolean | string;
  };
  
  // Styling options
  className?: string;
  brandClassName?: string;
  navClassName?: string;
  actionButtonClassName?: string;
  
  // Behavior options
  enableScrollDetection?: boolean;
  scrollOffset?: number;
  enableScrollHide?: boolean;
  
  // Colors (Tailwind classes)
  primaryColor?: string;
  backgroundColor?: string;
  textColor?: string;
  mutedTextColor?: string;
}

const ReusableHeader: React.FC<ReusableHeaderProps> = ({
  brandText = "BRAND",
  brandHref = "#",
  navigationItems,
  actionButton,
  className = "",
  brandClassName = "",
  navClassName = "",
  actionButtonClassName = "",
  enableScrollDetection = true,
  scrollOffset = 100,
  enableScrollHide = true,
  primaryColor = "bg-blue-500",
  backgroundColor = "bg-background/80",
  textColor = "text-foreground",
  mutedTextColor = "text-muted-foreground"
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [activeSection, setActiveSection] = useState(navigationItems[0]?.id || "");

  // Scroll state management
  useEffect(() => {
    if (!enableScrollHide) return;

    let ticking = false;

    const updateScrollState = () => {
      const scrollY = window.scrollY;
      
      if (scrollY > lastScrollY && scrollY > 80) {
        setIsScrollingUp(false);
        setIsScrolled(true);
      } else if (scrollY < lastScrollY) {
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
  }, [lastScrollY, enableScrollHide]);

  // Active section detection
  useEffect(() => {
    if (!enableScrollDetection) return;

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + scrollOffset;

      for (const item of navigationItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(item.id);
            break;
          }
        }
      }

      if (window.scrollY < scrollOffset) {
        setActiveSection(navigationItems[0]?.id || "");
      }
    };

    const handleScrollForSection = () => {
      requestAnimationFrame(updateActiveSection);
    };

    window.addEventListener('scroll', handleScrollForSection, { passive: true });
    updateActiveSection();

    return () => window.removeEventListener('scroll', handleScrollForSection);
  }, [navigationItems, scrollOffset, enableScrollDetection]);

  const getScrollClasses = () => {
    if (!enableScrollHide) return "w-full max-w-7xl h-16 px-6 md:px-8 py-4 mt-0 rounded-none md:rounded-2xl md:mt-4 md:w-[calc(100%-2rem)]";
    
    return isScrolled && !isScrollingUp 
      ? 'w-[50%] max-w-3xl h-16 px-6 md:px-8 py-4 mt-4 rounded-2xl' 
      : 'w-full max-w-7xl h-16 px-6 md:px-8 py-4 mt-0 rounded-none md:rounded-2xl md:mt-4 md:w-[calc(100%-2rem)]';
  };

  const isActive = (itemId: string) => enableScrollDetection ? activeSection === itemId : false;

  return (
    <header 
      className={`fixed top-0 left-1/2 transform -translate-x-1/2 z-50 flex items-center justify-between ${backgroundColor} backdrop-blur-lg border border-border/20 transition-all duration-500 ease-in-out ${getScrollClasses()} ${className}`}
    >
      {/* Brand/Logo */}
      <div className="flex items-center gap-2">
        <a href={brandHref} className={`text-2xl font-black tracking-wider ${textColor} hover:opacity-80 transition-opacity ${brandClassName}`}>
          {brandText}
        </a>
      </div>
      
      {/* Desktop Navigation */}
      <nav className={`hidden md:flex items-center gap-8 ${navClassName}`}>
        {navigationItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className={`flex items-center gap-2 text-base font-medium transition-colors relative group ${
              isActive(item.id) ? textColor + '/90' : mutedTextColor + ' hover:text-primary'
            }`}
          >
            {isActive(item.id) && <span className={`inline-block w-2 h-2 ${primaryColor.replace('bg-', 'bg-')} rounded-full`} />}
            {item.label}
            {!isActive(item.id) && <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />}
          </a>
        ))}
      </nav>

      {/* Mobile Navigation */}
      <nav className="flex md:hidden items-center gap-4">
        {navigationItems.map((item) => (
          <a
            key={`mobile-${item.id}`}
            href={item.href}
            className={`flex items-center gap-1 transition-colors text-sm ${
              isActive(item.id) ? textColor + '/90' : mutedTextColor + ' hover:text-primary'
            }`}
          >
            {isActive(item.id) && <span className={`inline-block w-2 h-2 ${primaryColor.replace('bg-', 'bg-')} rounded-full`} />}
            {item.label}
          </a>
        ))}
      </nav>
      
      {/* Action Button */}
      {actionButton && (
        <a 
          href={actionButton.href}
          download={actionButton.download}
          className={`flex items-center gap-2 ${mutedTextColor} hover:${textColor} transition-all duration-300 px-3 py-1.5 rounded-lg hover:bg-accent/50 border border-border/30 hover:border-border text-sm font-medium ${actionButtonClassName}`}
        >
          {actionButton.icon}
          {actionButton.label}
        </a>
      )}
    </header>
  );
};

export default ReusableHeader;