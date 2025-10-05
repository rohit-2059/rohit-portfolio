import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Lightning from "../components/ui/lightning";
import { Button } from "../components/ui/button";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen bg-background">
      {/* Lightning Background - Fixed and covers entire viewport */}
      <div className="fixed inset-0 z-0 bg-black">
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
      
      {/* Content Layer */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center backdrop-blur-sm bg-background/10 p-6 sm:p-8 md:p-12 rounded-2xl border border-border/20 shadow-2xl max-w-md sm:max-w-lg md:max-w-xl mx-auto"
        >
          <motion.h1 
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-4 sm:mb-6 text-6xl sm:text-7xl md:text-8xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          >
            404
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-6 sm:mb-8 text-lg sm:text-xl md:text-2xl text-muted-foreground"
          >
            Oops! Page not found
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Button 
              asChild 
              className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 w-full sm:w-auto px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base"
            >
              <a href="/">
                Return to Home
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
