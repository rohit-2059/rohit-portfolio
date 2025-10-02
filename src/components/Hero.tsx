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
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-20 pt-32"
    >
  <TargetCursor targetSelector=".cursor-target" />
  <div className="max-w-5xl mx-auto px-6 relative z-10 w-full">
        <div className="text-center space-y-8 flex flex-col justify-center min-h-[calc(100vh-12rem)]">
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
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
            className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto"
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
            className="flex flex-wrap gap-3 justify-center pt-3"
          >
            <a href="#contact" className="cursor-target">
              <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-700/50 bg-[linear-gradient(110deg,#0f172a,45%,#1e293b,55%,#0f172a)] bg-[length:200%_100%] px-6 font-medium text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900">
                Get In Touch <ArrowRight className="ml-2 h-4 w-4 inline" />
              </button>
            </a>
            
            <a href="#projects" className="cursor-target">
              <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-700/50 bg-[linear-gradient(110deg,#0f172a,45%,#1e293b,55%,#0f172a)] bg-[length:200%_100%] px-6 font-medium text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900">
                View My Work
              </button>
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex gap-7 justify-center pt-6"
          >
            <motion.a
              href="https://github.com/rohit-2059"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors cursor-target"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/-rohit-khandelwal-/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors cursor-target"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="mailto:rohit.khandelwal.2059@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors cursor-target"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="tel:+918302725007"
              className="text-muted-foreground hover:text-primary transition-colors cursor-target"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Phone className="h-6 w-6" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
