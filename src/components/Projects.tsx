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
      github: "https://github.com/rohit-2059/Demystify-legal-documents",
      live: "https://demystify-documentation.vercel.app/",
      image: "/legal.png",
    },
     {
      title: "AI skin disease detection",
      description: "Developed an AI-powered tool to detect skin diseases from images and assist users in early diagnosis. Implemented a deep learning model trained on the HAM10000 dataset (from Kaggle) to classify common skin conditions based on image input with 60% accuracy.",
      tags: ["Python", "JavaScript", "Flask", "Model Training", "kaggle"],
      github: "https://github.com/rohit-2059/DermaAi",
      live: "https://github.com/rohit-2059/DermaAi",
      image: "/skinDisease.png",
    },
    {
      title: "MeriCity",
      description: "Mericity is crowdsourced civic issue reporting and resolution platform that empowers citizens to report local problems, track their status, and engage with community initiatives for a better urban living experience.",
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Google Auth", "Google Maps API", "Vision API"],
      github: "https://github.com/rohit-2059/Mericity",
      live: "https://www.mericity.app",
      image: "/mericity.png",
    },
    
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10 md:mb-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, rotateY: 1.5 }}
              className="perspective-1000"
            >
              <Card className="glass-card border-border/50 hover:border-primary/60 transition-all duration-300 group overflow-hidden h-full shadow-lg hover:shadow-xl hover:shadow-primary/10 bg-background/90 backdrop-blur-xl">
                <div className="relative border-b border-border/60 bg-white/95">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    loading="lazy"
                    className="w-full h-40 sm:h-44 object-contain object-top bg-white"
                  />
                </div>
                
                <CardHeader className="pb-2 sm:pb-3">
                  <motion.h3 
                    className="text-base sm:text-lg font-bold group-hover:text-primary transition-colors duration-300 line-clamp-2"
                    whileHover={{ scale: 1.02 }}
                  >
                    {project.title}
                  </motion.h3>
                </CardHeader>

                <CardContent className="pb-3 sm:pb-4">
                  <p className="text-muted-foreground mb-3 leading-relaxed text-xs sm:text-sm line-clamp-3">
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

                <CardFooter className="pt-2 flex items-center justify-between gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-target inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground underline underline-offset-4 decoration-primary/50 hover:decoration-foreground transition-colors"
                  >
                    <Github className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-target inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground underline underline-offset-4 decoration-primary/50 hover:decoration-foreground transition-colors ml-auto"
                  >
                    <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span>Live</span>
                  </a>
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
            className="cursor-target group/btn bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg font-semibold px-6 sm:px-10 py-3 sm:py-4 text-sm sm:text-base border border-primary/20 hover:border-primary/40 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto"
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
