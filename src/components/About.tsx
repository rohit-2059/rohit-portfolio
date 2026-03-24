import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { UserRound } from "lucide-react";

type AboutTab = "who" | "serve" | "think" | "genre";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<AboutTab | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const aboutContent: Record<AboutTab, { title: string; description: string; points: string[] }> = {
    who: {
      title: "Who am I",
      description:
        "I'm Rohit Khandelwal, a Computer Science student at Lovely Professional University, deeply passionate about building scalable, real-world tech solutions.",
      points: [
        "B.Tech in Computer Science & Engineering (2023 - 2027)",
        "Full-stack developer blending modern web technologies with AI integrations",
        "Creator of platforms like Absentra, MeriCity, and Demystify Legal Documents",
      ],
    },
    serve: {
      title: "What I can serve",
      description:
        "I take concepts from design to deployment, building robust applications tailored to solve practical problems.",
      points: [
        "End-to-End Development: Architecting fully responsive and comprehensive web and mobile applications.",
        "Intelligent Features: Integrating smart tools like computer vision and natural language processing.",
        "Scalable Systems: Building secure, high-performance backends to support fast data operations.",
      ],
    },
    think: {
      title: "How I think",
      description:
        "Code is just a utility; the core objective is solving genuine human problems through practical empowerment.",
      points: [
        "Impact-Driven: Designing platforms focused on accessibility, inclusion, and daily utility.",
        "First-Principles: Breaking down complex workflows into elegant, intuitive user experiences.",
        "Performance-Minded: Architecting reliable systems to ensure seamless, real-time data flows.",
      ],
    },
    genre: {
      title: "What's my genre",
      description:
        "My technical sweet spot is building smart, data-driven solutions that automate workflows and provide clear insights.",
      points: [
        "Management Dashboards & Analytics: Transforming raw data into visual, actionable statistics.",
        "Smart Automations: Streamlining complex manual tasks into seamless background operations.",
        "Interactive Platforms: Crafting highly responsive, logic-heavy SaaS applications.",
      ],
    },
  };

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
          className="mb-10 sm:mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary/85 mb-4">
            <UserRound className="h-3.5 w-3.5" />
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight max-w-3xl">
            Get To Know
            <span className="block text-primary">Who I Am</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mt-4 leading-relaxed">
            A quick snapshot of my background and the value I can bring to product-driven teams.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-start mb-10 sm:mb-12 md:mb-16 mt-8">
          {/* Left Column - Navigation Lines */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-2/5 space-y-6 sm:space-y-8"
          >
            {Object.entries(aboutContent).map(([key, content]) => (
              <button
                key={key}
                type="button"
                onClick={() => setActiveTab(key as AboutTab)}
                className="flex items-center gap-4 w-full group text-left outline-none"
              >
                {/* The Line */}
                <div 
                  className={`h-[2px] transition-all duration-300 ${activeTab === key ? "w-16 bg-primary" : "w-8 bg-border/60 group-hover:w-12 group-hover:bg-primary/60"}`}
                ></div>
                {/* The Text */}
                <span 
                  className={`text-base sm:text-lg font-semibold transition-colors ${activeTab === key ? "text-primary" : "text-muted-foreground group-hover:text-foreground"}`}
                >
                  {content.title}
                </span>
              </button>
            ))}
          </motion.div>

          {/* Right Column - Content */}
          <div className="w-full md:w-3/5 min-h-[300px]">
            {activeTab && (
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">{aboutContent[activeTab].title}</h3>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  {aboutContent[activeTab].description}
                </p>

                <div className="space-y-4 pt-4">
                  {aboutContent[activeTab].points.map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2" />
                      <span className="text-foreground text-sm sm:text-base leading-snug">{point}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
