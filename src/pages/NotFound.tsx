import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Lightning from "../components/ui/lightning";
import { Button } from "../components/ui/button";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen bg-background">
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
      
      {/* Content Layer */}
      <div className="relative z-10 flex min-h-screen items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center backdrop-blur-sm bg-background/10 p-12 rounded-2xl border border-border/20 shadow-2xl"
        >
          <motion.h1 
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6 text-8xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          >
            404
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-8 text-2xl text-muted-foreground"
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
              className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
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
