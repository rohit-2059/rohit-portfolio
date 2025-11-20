import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import TrueFocus from "./ui/true-focus";
import TargetCursor from "./ui/target-cursor";

const Projects = () => {
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
  const featuredProjects = [
    {
      title: "Demystify Legal Documents",
      description: "Our solution is an AI-powered legal document analysis platform that simplifies complex legal papers. Users can upload PDFs like contracts or judgments, and the system automatically extracts and analyzes text to generate instant summaries, highlight legal risks, explain terms in plain language, and answer questions. It can also compare document versions to show changes. Like a 24/7 virtual legal expert, it helps lawyers save time and enables anyone to understand legal documents without costly consultations",
      tags: ["Next.js","Python","Typescript","Flask","NLP","Gemini API"],
      github: "https://github.com/rohit-2059/Demstify-legal-documents",
      live: "https://demystify-documentation.vercel.app/",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      title: "MeriCity",
      description: "Mericity is crowdsourced civic issue reporting and resolution platform that empowers citizens to report local problems, track their status, and engage with community initiatives for a better urban living experience.",
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Google Auth", "Google Maps API", "Vision API"],
      github: "https://github.com/rohit-2059/Mericity",
      live: "https://www.mericity.app",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      title: "Smart Cart",
      description: "A next-gen smart shopping platform that brings together AI intelligence and seamless e-commerce. From automatically adding recipe ingredients to your cart, to suggesting medicines, to finding the right products instantly, it delivers a personalized and convenient shopping experience.",
      tags: ["React.js", "Node.js", "Express.js", "Gemini API", "NLP"],
      github: "https://github.com/rohit-2059/Prompt-Shop?tab=readme-ov-file",
      live: "https://www.smart-cart.app",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Smart Traffic Management System",
      description: "The Traffic Management System is an intelligent traffic light control solution that manages a 4-way intersection with adaptive signal control, real-time visualization, emergency vehicle priority, and fairness algorithms to ensure smooth, safe, and efficient traffic flow.",
      tags: ["Data Structures", "JavaScript", "Node.js"],
      github: "https://github.com/rohit-2059/Smart-Traffic-Management-System",
      live: "https://drive.google.com/file/d/1kJYldRSCk5oG-dVPCOtrhQB1ZGNop8sF/view?usp=drive_link",
      gradient: "from-green-500 to-teal-500",
    }
  ];

  return (
    <section ref={sectionRef} id="projects" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <div className="mb-4">
            <TrueFocus 
              sentence="Featured Projects"
              blurAmount={2}
              borderColor="hsl(var(--primary))"
              glowColor="rgba(59, 130, 246, 0.6)"
              animationDuration={0.6}
              pauseBetweenAnimations={1.8}
            />
          </div>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-4">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </motion.div>

        {/* Desktop Only - TargetCursor */}
        <div className="hidden sm:block">
          <TargetCursor targetSelector=".cursor-target" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-10 md:mb-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -12, rotateY: 2 }}
              className="perspective-1000"
            >
              <Card className="glass-card border-border/50 hover:border-primary/60 transition-all duration-500 group overflow-hidden h-full shadow-lg hover:shadow-2xl hover:shadow-primary/10 bg-gradient-to-br from-background/95 to-background/80 backdrop-blur-xl">
                {/* Enhanced gradient header */}
                <motion.div 
                  className={`h-3 bg-gradient-to-r ${project.gradient} relative overflow-hidden`}
                  initial={{ scaleX: 0 }}
                  animate={isVisible ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                >
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  />
                </motion.div>
                
                <CardHeader className="pb-3 sm:pb-4">
                  <motion.h3 
                    className="text-xl sm:text-2xl font-bold group-hover:text-primary transition-all duration-300 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text"
                    whileHover={{ scale: 1.02 }}
                  >
                    {project.title}
                  </motion.h3>
                </CardHeader>

                <CardContent className="pb-4 sm:pb-6">
                  <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-xs sm:text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.div
                        key={tagIndex}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: index * 0.1 + 0.5 + tagIndex * 0.05 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <Badge
                          variant="secondary"
                          className="bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 hover:border-primary/50 transition-all duration-300 font-medium px-2 sm:px-3 py-0.5 sm:py-1 text-xs backdrop-blur-sm"
                        >
                          {tag}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="gap-2 sm:gap-4 pt-2 flex-col sm:flex-row">
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="cursor-target group/btn relative overflow-hidden hover:scale-105 transition-all duration-300 border-primary/30 hover:border-primary hover:bg-primary/5 hover:shadow-lg hover:shadow-primary/20 backdrop-blur-sm font-medium before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-primary/10 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 w-full sm:w-auto"
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative z-10 flex items-center justify-center"
                    >
                      <Github className="mr-2 h-3 w-3 sm:h-4 sm:w-4 transition-all duration-300 group-hover/btn:scale-110 group-hover/btn:rotate-12" />
                      <span className="group-hover/btn:text-primary transition-colors duration-300 text-sm">Code</span>
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="sm"
                    className="cursor-target group/btn relative overflow-hidden bg-gradient-to-r from-primary via-primary to-secondary hover:from-primary hover:via-blue-500 hover:to-secondary hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/30 font-medium before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 w-full sm:w-auto"
                  >
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative z-10 flex items-center justify-center"
                    >
                      <ExternalLink className="mr-2 h-3 w-3 sm:h-4 sm:w-4 transition-all duration-300 group-hover/btn:scale-110 group-hover/btn:-rotate-12" />
                      <span className="group-hover/btn:text-white transition-colors duration-300 text-sm">Live Demo</span>
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <Button
            asChild
            size="lg"
            className="cursor-target group/btn relative overflow-hidden bg-gradient-to-r from-primary via-blue-500 to-secondary hover:from-primary hover:via-purple-500 hover:to-secondary hover:scale-110 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-primary/40 font-semibold px-6 sm:px-10 py-3 sm:py-4 text-sm sm:text-base border border-primary/20 hover:border-primary/40 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-1000 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto"
          >
            <Link to="/projects" className="relative z-10 flex items-center justify-center">
              <span className="group-hover/btn:text-white transition-colors duration-300">View All Projects</span>
              <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 transition-all duration-300 group-hover/btn:translate-x-2 group-hover/btn:scale-110" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
