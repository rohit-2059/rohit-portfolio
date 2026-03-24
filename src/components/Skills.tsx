import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Sparkles } from "lucide-react";

type Skill = {
  name: string;
  logo?: string;
  badge?: string;
  invertOnDark?: boolean;
};

type SkillCategory = {
  title: string;
  skills: Skill[];
};

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
      { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
      { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" }
    ]
  },
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
      { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
      // { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
      { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" }
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
      { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg", invertOnDark: true },
      { name: "Flask", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg", invertOnDark: true },
      { name: "FastAPI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" }
    ]
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
      { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
      { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
      { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" }
    ]
  },
  {
    title: "AI",
    skills: [
      { name: "NumPy", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" },
      { name: "Pandas", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" },
      { name: "Jupyter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg" },
      { name: "PyTorch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" }
    ]
  },
  {
    title: "Cloud",
    skills: [
      { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
      { name: "Google Cloud", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg" },
      { name: "Vercel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg", invertOnDark: true },
      { name: "Render", logo: "https://cdn.simpleicons.org/render/46E3B7" },
      { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" }
    ]
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
      { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", invertOnDark: true },
      { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
      { name: "Postman", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" }
    ]
  },
  {
    title: "AI Tools",
    skills: [
      { name: "Claude Code", logo: "https://cdn.simpleicons.org/anthropic/FFFFFF" },
      { name: "GitHub Copilot", logo: "https://cdn.simpleicons.org/githubcopilot/FFFFFF" },
      { name: "AntiGravity", logo: "/antigravity-logo.png", badge: "AG" },
      { name: "v0", logo: "https://avatars.githubusercontent.com/u/14985020?s=200&v=4" },
      { name: "Lovable", logo: "/lovable.png" },
    ]
  }
];  

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [failedLogos, setFailedLogos] = useState<Record<string, boolean>>({});
  const sectionRef = useRef<HTMLElement>(null);

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
    <section ref={sectionRef} id="skills" className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-14 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary/85 mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            Core Skills
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight max-w-3xl">
            Core Skills For
            <span className="block text-primary">What I Can Serve</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mt-4 leading-relaxed">
            A focused overview of the technologies and capabilities I bring to build reliable, scalable, and user-first products.
          </p>
        </motion.div>

        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-14 md:gap-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.08 }}
              className="space-y-6 sm:space-y-7"
            >
              <div className="flex items-center justify-center gap-3">
                <span className="h-px w-8 bg-primary/40" />
                <h3 className="text-base sm:text-lg font-semibold tracking-wide text-center text-foreground/95">{category.title}</h3>
                <span className="h-px w-8 bg-primary/40" />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 sm:gap-x-10 gap-y-8 sm:gap-y-10 place-items-center max-w-xl mx-auto">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.35, delay: categoryIndex * 0.08 + skillIndex * 0.03 }}
                    whileHover={{ y: -6, scale: 1.06 }}
                    className="group flex flex-col items-center justify-start gap-2 min-h-[78px]"
                    title={skill.name}
                  >
                    {skill.logo && !failedLogos[skill.name] ? (
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        loading="lazy"
                        onError={() =>
                          setFailedLogos((prev) => ({
                            ...prev,
                            [skill.name]: true
                          }))
                        }
                        className={`w-10 h-10 sm:w-12 sm:h-12 object-contain opacity-95 group-hover:opacity-100 drop-shadow-[0_0_10px_rgba(59,130,246,0.12)] transition-all duration-300 ${skill.invertOnDark ? "invert brightness-125" : ""}`}
                      />
                    ) : (
                      <span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/15 text-sm sm:text-base font-semibold text-primary tracking-wide border border-primary/40">
                        {skill.badge ?? skill.name.slice(0, 2).toUpperCase()}
                      </span>
                    )}
                    <p className="text-[11px] sm:text-xs text-center text-muted-foreground/90 group-hover:text-foreground transition-colors duration-300 leading-tight font-medium tracking-wide">
                      {skill.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;