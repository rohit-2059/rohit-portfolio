import { certifications, getSortedCertifications } from "@/data/certifications";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import TrueFocus from "../components/ui/true-focus";
import Lightning from "../components/ui/lightning";
import TargetCursor from "../components/ui/target-cursor";

const AllCertifications = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const allCertifications = getSortedCertifications(certifications);

  useEffect(() => {
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

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 bg-black w-full h-full min-h-screen" style={{ zIndex: -20 }}></div>

      <div className="hidden sm:block fixed inset-0 w-full h-full overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
        <div className="w-full h-full min-h-screen">
          <Lightning hue={219} xOffset={2.2} speed={1} intensity={1} size={0.9} />
        </div>
      </div>

      <div className="relative bg-transparent min-h-screen" style={{ zIndex: 10 }}>
        <section ref={sectionRef} className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
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

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-10 sm:mb-12 md:mb-16"
            >
              <div className="mb-4">
                <TrueFocus
                  sentence="All Certifications"
                  blurAmount={2}
                  borderColor="hsl(var(--primary))"
                  glowColor="rgba(59, 130, 246, 0.6)"
                  animationDuration={0.6}
                  pauseBetweenAnimations={1.8}
                />
              </div>
              <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-4">
                Explore all certifications and trainings sorted by newest year first
              </p>
            </motion.div>

            <div className="hidden sm:block">
              <TargetCursor targetSelector=".cursor-target" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 auto-rows-fr items-stretch">
              {allCertifications.map((cert, index) => (
                <motion.article
                  key={`${cert.title}-${index}`}
                  initial={{ opacity: 0, y: 24 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.06 }}
                  whileHover={{ y: -4 }}
                  className="relative w-full h-full min-h-[30rem] mx-auto overflow-hidden rounded-xl border border-border bg-background/95 backdrop-blur-sm flex flex-col"
                >
                  <div className="relative">
                    <img
                      src={cert.image}
                      alt={`${cert.title} certificate`}
                      loading="lazy"
                      className="w-full h-56 sm:h-60 object-contain bg-white p-2"
                    />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-background/80 to-transparent" />
                    {(cert.tag || cert.itemType === "Training") ? (
                      <div className="absolute left-3 bottom-3 flex items-center gap-2">
                        {cert.tag ? (
                          <span className="rounded-full border border-primary/35 bg-background px-2.5 py-1 text-[10px] uppercase tracking-wide text-primary">
                            {cert.tag}
                          </span>
                        ) : null}
                        {cert.itemType === "Training" ? (
                          <span className="rounded-full border border-primary/35 bg-background px-2.5 py-1 text-[10px] uppercase tracking-wide text-primary">
                            Training
                          </span>
                        ) : null}
                      </div>
                    ) : null}
                  </div>

                  <div className="p-4 sm:p-5 flex-1 grid grid-rows-[auto_1fr_auto] gap-3">
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground">{cert.title}</h3>

                    <div className="space-y-2">
                      <p className="text-[11px] uppercase tracking-wide text-muted-foreground">Skills Gained</p>
                      <div className="flex flex-wrap gap-2">
                        {(cert.skillsGained ?? ["AI fundamentals", "Generative AI concepts", "Practical cloud AI usage"])
                          .slice(0, 3)
                          .map((skill) => (
                            <span
                              key={skill}
                              className="rounded-full border border-primary/25 bg-primary/5 px-2.5 py-1 text-[11px] text-foreground/90"
                            >
                              {skill}
                            </span>
                          ))}
                      </div>
                    </div>

                    <div className="flex items-end justify-between text-sm pt-4">
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="cursor-target inline-flex items-center justify-center rounded-none border-b border-primary/45 bg-transparent px-0 py-1 text-xs sm:text-sm font-medium text-primary hover:text-foreground hover:border-foreground/60 transition-colors"
                      >
                        View Certificate
                      </a>
                      <span className="text-primary font-medium">{cert.date}</span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AllCertifications;
