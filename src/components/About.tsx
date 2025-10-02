import { Code, Database, Lightbulb, Zap, Brain, Terminal } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import ParagraphTypewriter from "./ui/paragraph-typewriter";
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

  const skills = [
    {
      icon: Code,
      title: "Web Development",
      description: "React, Node.js, Express.js, HTML, CSS",
    },
    {
      icon: Lightbulb,
      title: "Core",
      description: "DSA, Operating System, Computer Network",
    },
    {
      icon: Terminal,
      title: "Programming Languages",
      description: "C++, JavaScript, Python, Java",
    },
    {
      icon: Database,
      title: "Database",
      description: "MongoDB, MySQL",
    },
    
    {
      icon: Brain,
      title: "AI Tools",
      description: "GitHub Copilot, ChatGPT, Claude, Loveable, V0",
    },
    {
      icon: Zap,
      title: "Tools & Tech",
      description: "Git, Github, Google Cloud, Firebase, Jupyter Notebook"
    },
    
  ];

  return (
    <section ref={sectionRef} id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
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
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Computer Science student with a love for creating elegant solutions to complex problems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              {isVisible && (
                <ParagraphTypewriter 
                  text="Hey, I'm Rohit Khandelwal. Thanks for your attention! I am a CSE student at Lovely Professional University, where I have been building a strong foundation in web development, artificial intelligence, data structures and algorithms."
                  speed={50}
                  delay={800}
                />
              )}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {isVisible && (
                <ParagraphTypewriter 
                  text="My journey in tech has been driven by curiosity and a desire to build solutions that impact real-life problems. Mostly I have been on hackathons and coding competitions, which have honed my skills in problem-solving and teamwork."
                  speed={50}
                  delay={13700}
                />
              )}
            </p>
            <div className="space-y-2">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-2"
              >
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-foreground">B.Tech CSE | 2023-2027</span>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-2"
              >
      
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-2"
              >
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-foreground">Location: Bharatpur, Rajasthan, India</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center"
          >
            <div className="relative">
              <motion.div 
                className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl"
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
              {/* Glow effect */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-xl -z-10" />
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -8 }}
            >
              <Card className="glass-card border-border hover:border-primary/50 transition-all duration-300 group h-full">
                <CardContent className="p-6">
                  <motion.div 
                    className="mb-4 inline-block p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <skill.icon className="h-6 w-6 text-primary" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
