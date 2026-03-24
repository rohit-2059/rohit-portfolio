import { certifications, getSortedCertifications } from "@/data/certifications";
import { ArrowRight, Award } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

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
          className="mb-10 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary/85 mb-4">
            <Award className="h-3.5 w-3.5" />
            Certifications
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight max-w-3xl">
            Credentials &
            <span className="block text-primary">Continuous Learning</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mt-4 leading-relaxed">
            Verified certifications that reflect hands-on learning, practical implementation, and consistent upskilling.
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
                  className="w-full h-56 sm:h-60 object-cover object-top bg-white"
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
          <Link
            to="/certifications"
            className="group inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-primary hover:text-foreground transition-colors duration-300"
          >
            <span className="border-b border-primary/45 group-hover:border-foreground/60 pb-0.5">View All Certifications</span>
            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;