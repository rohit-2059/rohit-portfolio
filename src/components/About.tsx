import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import TrueFocus from "./ui/true-focus";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <div className="mb-4">
            <TrueFocus 
              sentence="About Me"
              manualMode={false}
              blurAmount={2}
              borderColor="hsl(var(--primary))"
              glowColor="rgba(59, 130, 246, 0.6)"
              animationDuration={0.6}
              pauseBetweenAnimations={1.5}
            />
          </div>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-4">
          Computer Science student with a love for creating elegant solutions to complex problems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center mb-10 sm:mb-12 md:mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 sm:space-y-6 order-2 md:order-1"
          >
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Hey, I&apos;m Rohit Khandelwal. Thanks for your attention! I am a CSE student at Lovely Professional University, where I have been building a strong foundation in web development, artificial intelligence, data structures and algorithms.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              My journey in tech has been driven by curiosity and a desire to build solutions that impact real-life problems. Mostly I have been on hackathons and coding competitions, which have honed my skills in problem-solving and teamwork.
            </p>
            <div className="space-y-3">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-2"
              >
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                <span className="text-foreground text-sm sm:text-base">B.Tech CSE | 2023-2027</span>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6 }}
                className="flex items-start gap-2"
              >
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-1.5" />
                <span className="text-foreground text-sm sm:text-base">Location: Bharatpur, Rajasthan, India</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center order-1 md:order-2 mb-6 md:mb-0"
          >
            <div className="relative">
              <motion.div 
                className="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="/WhatsApp Image 2025-01-26 at 22.22.44.jpeg" 
                  alt="Rohit Khandelwal"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              {/* Decorative ring */}
              <motion.div 
                className="absolute -inset-2 rounded-full border-2 border-primary/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
