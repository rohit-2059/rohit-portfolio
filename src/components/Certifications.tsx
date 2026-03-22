import { certifications, getSortedCertifications } from "@/data/certifications";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import TrueFocus from "./ui/true-focus";

const Certifications = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const featuredCertifications = getSortedCertifications(certifications).slice(0, 3);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="certifications" className="py-14 sm:py-18 md:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12"
        >
          <div className="mb-4">
            <TrueFocus
              sentence="My Certifications"
              manualMode={false}
              blurAmount={2}
              borderColor="hsl(var(--primary))"
              glowColor="rgba(59, 130, 246, 0.6)"
              animationDuration={0.6}
              pauseBetweenAnimations={1.5}
            />
          </div>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Verified certifications and achievements
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 auto-rows-fr items-stretch">
          {featuredCertifications.map((cert, index) => (
            <motion.article
              key={`${cert.title}-${index}`}
              initial={{ opacity: 0, y: 24 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
              whileHover={{ y: -4 }}
              className="relative max-w-sm w-full h-full min-h-[30rem] mx-auto overflow-hidden rounded-xl border border-border bg-background flex flex-col"
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
                    className="inline-flex items-center justify-center rounded-none border-b border-primary/45 bg-transparent px-0 py-1 text-xs sm:text-sm font-medium text-primary hover:text-foreground hover:border-foreground/60 transition-colors"
                  >
                    View Certificate
                  </a>
                  <span className="text-primary font-medium">{cert.date}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-center mt-8"
        >
          <Button
            asChild
            size="lg"
            className="group/btn bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg font-semibold px-6 sm:px-10 py-3 sm:py-4 text-sm sm:text-base border border-primary/20 hover:border-primary/40 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto"
          >
            <Link to="/certifications" className="relative z-10 flex items-center justify-center">
              <span className="group-hover/btn:text-white transition-colors duration-300">View All Certifications</span>
              <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 transition-all duration-300 group-hover/btn:translate-x-2 group-hover/btn:scale-110" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;