import { ArrowRight, Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import TargetCursor from "./ui/target-cursor";
import ParagraphTypewriter from "./ui/paragraph-typewriter";
import BlurText from "./ui/blur-text";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-12 sm:py-16 md:py-20 pt-20 sm:pt-24 md:pt-32"
    >
      {/* Desktop Only - TargetCursor */}
      <div className="hidden sm:block">
        <TargetCursor targetSelector=".cursor-target" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center space-y-6 sm:space-y-8 md:space-y-10 flex flex-col justify-center min-h-[calc(100vh-8rem)] sm:min-h-[calc(100vh-10rem)] md:min-h-[calc(100vh-12rem)]">
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight px-2 sm:px-0"
          >
            <BlurText
              text="Hi, I'm Rohit Khandelwal"
              delay={150}
              className="gradient-text"
              animateBy="words"
              direction="top"
            />
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto px-4 sm:px-2 md:px-0"
          >
            <ParagraphTypewriter 
              text="On a mission to solve real problems and deliver meaningful impact through modern technologies"
              speed={60}
              delay={1500}
              showCursor={false}
            />
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-2 sm:pt-3 px-4 sm:px-0"
          >
            <a href="#contact" className="cursor-target w-full sm:w-auto">
              <button className="inline-flex h-11 sm:h-12 w-full sm:w-auto animate-shimmer items-center justify-center rounded-md border border-slate-700/50 bg-[linear-gradient(110deg,#0f172a,45%,#1e293b,55%,#0f172a)] bg-[length:200%_100%] px-4 sm:px-6 font-medium text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900 text-sm sm:text-base">
                Get In Touch <ArrowRight className="ml-2 h-4 w-4 inline" />
              </button>
            </a>
            
            <a href="#projects" className="cursor-target w-full sm:w-auto">
              <button className="inline-flex h-11 sm:h-12 w-full sm:w-auto animate-shimmer items-center justify-center rounded-md border border-slate-700/50 bg-[linear-gradient(110deg,#0f172a,45%,#1e293b,55%,#0f172a)] bg-[length:200%_100%] px-4 sm:px-6 font-medium text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900 text-sm sm:text-base">
                View My Work
              </button>
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex gap-4 sm:gap-6 md:gap-7 justify-center pt-4 sm:pt-6"
          >
            <motion.a
              href="https://github.com/rohit-2059"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors cursor-target p-2 sm:p-0"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="h-5 w-5 sm:h-6 sm:w-6" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/-rohit-khandelwal-/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors cursor-target p-2 sm:p-0"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
            </motion.a>
            <motion.a
              href="mailto:rohit.khandelwal.2059@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors cursor-target p-2 sm:p-0"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
            </motion.a>
            <motion.a
              href="tel:+918302725007"
              className="text-muted-foreground hover:text-primary transition-colors cursor-target p-2 sm:p-0"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
