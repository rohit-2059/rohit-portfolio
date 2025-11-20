import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import TrueFocus from "../components/ui/true-focus";
import TargetCursor from "../components/ui/target-cursor";
import Lightning from "../components/ui/lightning";

const AllProjects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
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

  // Extended projects array with more projects
  const allProjects = [
    {
      title: "Demystify Legal Documents",
      description: "Our solution is an AI-powered legal document analysis platform that simplifies complex legal papers. Users can upload PDFs like contracts or judgments, and the system automatically extracts and analyzes text to generate instant summaries, highlight legal risks, explain terms in plain language, and answer questions. It can also compare document versions to show changes. Like a 24/7 virtual legal expert, it helps lawyers save time and enables anyone to understand legal documents without costly consultations",
      tags: ["Next.js","Python","Typescript","Flask","NLP","Gemini API"],
      github: "https://github.com/rohit-2059/Demystify-legal-documents",
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
    },
    {
      title: "Legal Task Management",
      description: "The Legal Task Management Application helps users easily understand and complete legal or government procedures. It offers intelligent search, step-by-step guidance, required document details, and nearby center locations for both online and offline applications.",
      tags: ["Python", "Flask", "JavaScript", "Gemini API", "NLP"],
      github: "https://github.com/rohit-2059/Legal-Task-Management",
      live: "https://legal-documents.onrender.com/",
      gradient: "from-orange-500 to-red-500",
    },

    {
      title: "Voice Based Shopping Assistant",
      description: "Built a voice-activated shopping assistant that allows users to search for products using natural speech and automatically navigates to the relevant product pages across platforms like Amazon, Flipkart etc. The project was primarily focused on learning web scraping using Selenium and integrating it with voice input for a seamless, hands-free product search experience.",
      tags: ["Python", "NLP", "Web Scraping", "Selenium"],
      github: "https://github.com/rohit-2059/VOICE-ASSISTANCE-2",
      live: "https://github.com/rohit-2059/VOICE-ASSISTANCE-2",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      title: "Virtual Pet Care System",
      description: "A virtual pet care system that reminds users to take care of their pets, including feeding, exercise, and medical checkups. Users can register their pets, set reminders, and receive daily notifications for pet care.",
      tags: ["PHP", "MySQL", "JavaScript",  "Tailwind CSS", "XAMPP"],
      github: "https://github.com/rohit-2059/PetCare",
      live: "https://virtualpetcare.42web.io/",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "AI skin disease detection",
      description: "Developed an AI-powered tool to detect skin diseases from images and assist users in early diagnosis. Implemented a deep learning model trained on the HAM10000 dataset (from Kaggle) to classify common skin conditions based on image input with 60% accuracy.",
      tags: ["Python", "JavaScript", "Flask", "Model Training", "kaggle"],
      github: "https://github.com/rohit-2059/DermaAi",
      live: "https://github.com/rohit-2059/DermaAi",
      gradient: "from-green-500 to-teal-500",
    },
    {
      title: "Phishing Detection ",
      description: "The web tool for detecting phishing emails and texts using trained ML model. Features offered: Real-time prediction of phishing probability, Suspicion percentage display.",
      tags: ["Python", "Flask", "JavaScript", "HTML", "CSS" ],
      github: "",
      live: "",
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "Hand Gesture Controller",
      description: "It is a real-time hand gesture recognition system which can help users to control their PC with their hands. You can perform various task such as scrolling, volume control, click and cursor control.",
      tags: ["OpenCV", "Python"],
      github: "https://github.com/rohit-2059/Hand-Gesture-Control",
      live: "https://www.linkedin.com/posts/-rohit-khandelwal-_handgesturecontrol-computervision-ai-activity-7279478610300715008-xjPT?utm_source=share&utm_medium=member_desktop&rcm=ACoAAET4zY0BH3OCmih2JNzVDmhWwcUkxqaaIMc",
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      title: "Write the Rights",
      description: "It is a website-based game that will aware kids about their rights. The goal is to make the game fun and engaging while also teaching kids about their rights.",
      tags: ["HTML5", "CSS", "JavaScript"],
      github: "https://github.com/rohit-2059/writeTheright",
      live: "https://write-the-rights.vercel.app/",
      gradient: "from-emerald-500 to-green-500",
    },
    {
      title: "MedEase",
      description: "Comprehensive healthcare platform bringing together patient care, provider tools, and collaboration between hospitals into one userfriendly system. Features offered: Booking and Queuing, Automated Bed Availability, Role-Based Authentication, City-Wide Module, Inventory and Complaint Management, Patient Engagement Tools (Chat System, Chatbot)",
      tags: ["PHP", "JavaScript", "HTML", "CSS", "MYSQL"],
      github: "https://github.com/rohit-2059/Hospital-Management-system",
      live: "https://github.com/rohit-2059/Hospital-Management-system",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      title: "Event Management And Ticket Booking System",
      description: "A comprehensive web platform to explore, book, and organize events—from movies and concerts to sports, comedy, and food festivals. This project aims to simplify event planning and ticket booking, providing users with a seamless and enjoyable experience.",
      tags: ["HTML","CSS","JavaScript"],
      github: "https://github.com/rohit-2059/Event-Management-And-Ticket-Booking-Website",
      live: "https://event-management-and-ticket-booking.vercel.app/",
      gradient: "from-yellow-500 to-orange-500",
    },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Black Background - Behind everything */}
      <div className="fixed inset-0 bg-black w-full h-full min-h-screen" style={{ zIndex: -20 }}></div>
      
      {/* Lightning Effect - Desktop Only */}
      <div className="hidden sm:block fixed inset-0 w-full h-full overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
        <div className="w-full h-full min-h-screen">
          <Lightning 
            hue={219} 
            xOffset={2} 
            speed={1} 
            intensity={1} 
            size={0.9} 
          />
        </div>
      </div>
      
      {/* Content Layer */}
      <div className="relative bg-transparent min-h-screen" style={{ zIndex: 10 }}>
        <section ref={sectionRef} className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 sm:mb-8"
          >
            <Button
              asChild
              variant="outline"
              className="cursor-target group/btn relative overflow-hidden hover:border-primary hover:bg-primary/5 hover:shadow-lg hover:shadow-primary/20 hover:scale-105 transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-primary/10 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 text-sm sm:text-base"
            >
              <Link to="/" className="relative z-10 flex items-center">
                <ArrowLeft className="mr-2 h-3 w-3 sm:h-4 sm:w-4 group-hover/btn:scale-110 group-hover/btn:-translate-x-1 transition-all duration-300" />
                <span className="group-hover/btn:text-primary transition-colors duration-300">Back to Home</span>
              </Link>
            </Button>
          </motion.div>

          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-12 md:mb-16"
          >
            <div className="mb-4">
              <TrueFocus 
                sentence="All Projects"
                blurAmount={2}
                borderColor="hsl(var(--primary))"
                glowColor="rgba(59, 130, 246, 0.6)"
                animationDuration={0.6}
                pauseBetweenAnimations={1.8}
              />
            </div>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-4">
              Explore my complete portfolio of projects showcasing various technologies and solutions
            </p>
          </motion.div>

          {/* Projects Grid */}
          {/* Desktop Only - TargetCursor */}
          <div className="hidden sm:block">
            <TargetCursor targetSelector=".cursor-target" />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {allProjects.map((project, index) => (
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
                      className="text-lg sm:text-xl font-bold group-hover:text-primary transition-all duration-300 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text line-clamp-2"
                      whileHover={{ scale: 1.02 }}
                    >
                      {project.title}
                    </motion.h3>
                  </CardHeader>

                  <CardContent className="pb-4 sm:pb-6">
                    <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-xs sm:text-sm line-clamp-4">
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
                            className="bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 hover:border-primary/50 transition-all duration-300 font-medium px-1.5 sm:px-2 py-0.5 sm:py-1 text-xs backdrop-blur-sm"
                          >
                            {tag}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="gap-2 sm:gap-3 pt-2 flex-col sm:flex-row">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="cursor-target group/btn relative overflow-hidden hover:scale-105 transition-all duration-300 border-primary/30 hover:border-primary hover:bg-primary/5 hover:shadow-lg hover:shadow-primary/20 backdrop-blur-sm font-medium w-full sm:flex-1 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-primary/10 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700"
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
                      className="cursor-target group/btn relative overflow-hidden bg-gradient-to-r from-primary via-primary to-secondary hover:from-primary hover:via-blue-500 hover:to-secondary hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/30 font-medium w-full sm:flex-1 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700"
                    >
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative z-10 flex items-center justify-center"
                      >
                        <ExternalLink className="mr-2 h-3 w-3 sm:h-4 sm:w-4 transition-all duration-300 group-hover/btn:scale-110 group-hover/btn:-rotate-12" />
                        <span className="group-hover/btn:text-white transition-colors duration-300 text-sm">Live</span>
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
        </section>
      </div>
    </div>
  );
};

export default AllProjects;