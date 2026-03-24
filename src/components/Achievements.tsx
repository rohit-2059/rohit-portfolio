import { Briefcase, Clock3, Sparkles, Target, TrendingUp, Trophy, X } from "lucide-react";
import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type PlatformLink = {
  name: string;
  url: string;
  icon: string;
  iconAlt: string;
  fallbackIcon?: string;
};

const impactTimeline = [
  {
  title: "Full-Stack Project Portfolio Development",
  organization: "Self-Initiated / Personal Projects",
  period: "Aug 2023 – Present",
  type: "standard",
  disableDetails: true,
  summary: "Built and deployed a diverse portfolio of AI, web, and system-based applications solving real-world problems across multiple domains.",
  metrics: [
    { label: "Projects", value: "15+", detail: "Real-world applications" },
    { label: "Domains", value: "10+", detail: "AI, Web, Systems, Automation" },
    { label: "Duration", value: "1.5+ Years", detail: "Continuous development" },
  ],
  highlights: [
    "Built and delivered multiple full-stack products with a strong focus on usability and real-world outcomes.",
    "Demonstrated consistent ownership from idea to deployment across diverse technical problem spaces.",
  ],
  images: ["/legal.png", "/mericity.png"],
  externalLinks: [
    {
      name: "GitHub",
      url: "https://github.com/rohit-2059",
      icon: "https://img.icons8.com/ios-filled/100/ffffff/github.png",
      iconAlt: "GitHub icon",
      fallbackIcon: "https://github.com/favicon.ico",
    },
  ] as PlatformLink[],
  accent: "teal",
  icon: Trophy,
},
  {
    title: "Coding Platforms",
    organization: "LeetCode, Codolio, Codeforces",
    period: "Jun 2025 - Present",
    type: "coding",
    disableDetails: true,
    summary: "Track my coding journey across competitive programming and profile platforms.",
    metrics: [
      { label: "Problems", value: "603+", detail: "Across platforms" },
      { label: "Current Rating", value: "1562", detail: "LeetCode" },
      { label: "Active Days", value: "318", detail: "Consistency" },
    ],
    highlights: [
      "Maintained consistent daily practice across multiple coding platforms to strengthen DSA fundamentals.",
      "Improved contest performance through regular participation and post-contest analysis.",
    ],
    images: ["/coding.png"],
    platformLinks: [
      {
        name: "LeetCode",
        url: "https://leetcode.com/u/EN11uuIKBm/",
        icon: "https://img.icons8.com/color/96/wDGo581Ea5Nf/leetcode.png",
        iconAlt: "LeetCode icon",
        fallbackIcon: "https://leetcode.com/favicon.ico",
      },
      {
        name: "Codolio",
        url: "https://codolio.com/profile/CckgJNjF",
        icon: "https://icons.duckduckgo.com/ip3/codolio.com.ico",
        iconAlt: "Codolio icon",
        fallbackIcon: "https://codolio.com/favicon.ico",
      },
      {
        name: "Codeforces",
        url: "https://codeforces.com/profile/rohit-2059?utm=codolio",
        icon: "https://img.icons8.com/color/96/codeforces.png",
        iconAlt: "Codeforces icon",
        fallbackIcon: "https://codeforces.com/favicon.ico",
      },
    ] as PlatformLink[],
    accent: "teal",
    icon: Trophy,
  },
  {
  title: "2nd Runner-Up – Hack IOT 2024 (WriteTheRights)",
  organization: "Lovely Professional University, Punjab",
  period: "February 2024",
  type: "standard",
  summary: "Built a gamified platform to educate children about fundamental rights through interactive gameplay.",
  metrics: [
    { label: "Position", value: "2nd Runner-Up", detail: "Hack IOT 2024" },
    { label: "Levels", value: "8+", detail: "Game modules" },
    { label: "Tech", value: "JS Stack", detail: "HTML, CSS, JS" },
  ],
  highlights: [
    "Delivered a high-impact solution that addressed a meaningful social challenge through product thinking.",
    "Translated ideas into an engaging and functional experience within tight competition timelines.",
  ],
  images: ["/iot1.jpg", "/iot2.jpg", "/iot3.jpg", "/iot4.jpg", "/iot5.jpg", "/iot6.jpg", "/iot7.jpg", "/iot8.jpg"],
  accent: "teal",
  icon: Trophy,
},
  {
  title: "1st Runner-Up – Frontend Fusion 2023",
  organization: "Lovely Professional University, Punjab",
  period: "December 2023",
  type: "standard",
  summary: "Developed a comprehensive event management platform connecting organizers and users with a seamless frontend experience.",
  metrics: [
    { label: "Position", value: "1st Runner-Up", detail: "Frontend Fusion" },
    { label: "Users", value: "2 Types", detail: "Organizers & Attendees" },
    { label: "Tech", value: "JS Stack", detail: "HTML, CSS, JS" },
  ],
  highlights: [
    "Designed an intuitive interface focused on clarity, usability, and smooth user journeys.",
    "Showcased strong frontend execution by balancing visual quality, responsiveness, and functionality.",
  ],
  images: ["/front1.webp", "/front2.webp", "/front4.webp"],
  accent: "teal",
  icon: Trophy,
},
] as const;

type AchievementItem = (typeof impactTimeline)[number];

type LeetCodeStats = {
  totalSolved?: number;
  ranking?: number;
  acceptanceRate?: number;
  contestRating?: number;
};

const accentStyles = {
  teal: {
    border: "border-primary/35",
    icon: "text-primary",
    org: "text-primary",
    chip: "border-primary/30 text-primary/90",
  },
  amber: {
    border: "border-amber-400/35",
    icon: "text-amber-300",
    org: "text-amber-300",
    chip: "border-amber-300/35 text-amber-200",
  },
  cyan: {
    border: "border-cyan-400/35",
    icon: "text-cyan-300",
    org: "text-cyan-300",
    chip: "border-cyan-300/35 text-cyan-200",
  },
} as const;

const Achievements = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeAchievement, setActiveAchievement] = useState<AchievementItem | null>(null);
  const [isGalleryPaused, setIsGalleryPaused] = useState(false);
  const [leetcodeStats, setLeetcodeStats] = useState<LeetCodeStats | null>(null);
  const [isLoadingLeetCode, setIsLoadingLeetCode] = useState(false);
  const galleryControls = useAnimationControls();
  const sectionRef = useRef<HTMLElement>(null);
  const scrollYRef = useRef(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.12 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveAchievement(null);
      }
    };

    const header = document.querySelector("header") as HTMLElement | null;
    const html = document.documentElement;
    const body = document.body;

    if (activeAchievement) {
      scrollYRef.current = window.scrollY;
      html.style.overflow = "hidden";
      body.style.overflow = "hidden";
      body.style.position = "fixed";
      body.style.top = `-${scrollYRef.current}px`;
      body.style.left = "0";
      body.style.right = "0";
      body.style.width = "100%";
      window.addEventListener("keydown", handleEsc);
      if (header) {
        header.style.opacity = "0";
        header.style.pointerEvents = "none";
      }
    }

    return () => {
      html.style.overflow = "";
      body.style.overflow = "";
      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      body.style.width = "";
      window.scrollTo(0, scrollYRef.current);
      window.removeEventListener("keydown", handleEsc);
      if (header) {
        header.style.opacity = "";
        header.style.pointerEvents = "";
      }
    };
  }, [activeAchievement]);

  useEffect(() => {
    if (!activeAchievement) {
      return;
    }

    if (isGalleryPaused) {
      galleryControls.stop();
      return;
    }

    galleryControls.start({
      x: [0, -120, 0],
      transition: {
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
      },
    });
  }, [activeAchievement, isGalleryPaused, galleryControls]);

  useEffect(() => {
    const isCodingModal = activeAchievement?.type === "coding";
    if (!isCodingModal) {
      setLeetcodeStats(null);
      setIsLoadingLeetCode(false);
      return;
    }

    const controller = new AbortController();
    const fetchLeetCodeStats = async () => {
      setIsLoadingLeetCode(true);
      const endpoints = [
        "https://leetcode-api-faisalshohag.vercel.app/EN11uuIKBm",
        "https://api.allorigins.win/raw?url=https://leetcode-stats-api.herokuapp.com/EN11uuIKBm",
      ];

      for (const endpoint of endpoints) {
        try {
          const response = await fetch(endpoint, { signal: controller.signal });
          if (!response.ok) {
            continue;
          }

          const data = await response.json();
          const parsed: LeetCodeStats = {
            totalSolved: Number(data.totalSolved ?? data.solvedProblem ?? 0) || undefined,
            ranking: Number(data.ranking ?? data.globalRanking ?? 0) || undefined,
            acceptanceRate: Number(data.acceptanceRate ?? data.acceptance_rate ?? 0) || undefined,
            contestRating: Number(data.contestRating ?? data.contest_rating ?? data.rating ?? 0) || undefined,
          };

          if (parsed.totalSolved || parsed.ranking || parsed.acceptanceRate || parsed.contestRating) {
            setLeetcodeStats(parsed);
            break;
          }
        } catch {
          // Keep trying the next endpoint.
        }
      }

      setIsLoadingLeetCode(false);
    };

    fetchLeetCodeStats();

    return () => controller.abort();
  }, [activeAchievement]);

  return (
    <section ref={sectionRef} id="achievements" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary/85 mb-4">
            <TrendingUp className="h-3.5 w-3.5" />
            Career Journey
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight max-w-xl">
            Experience &
            <span className="block text-primary">Achievements</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mt-4 leading-relaxed">
            A timeline of my project work, coding progress, and competition milestones with measurable outcomes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.55fr] gap-6 lg:gap-8 items-start">
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55 }}
            className="lg:sticky lg:top-28 rounded-2xl border border-border/70 bg-gradient-to-b from-card/85 to-background/75 backdrop-blur-xl p-6 sm:p-8"
          >
            <div className="inline-flex items-center justify-center rounded-2xl border border-primary/25 bg-primary/10 p-3 mb-5">
              <Briefcase className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold leading-tight">
              Experience-driven
              <span className="block text-primary">achievement stack.</span>
            </h3>
            <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
              Built through real project delivery, consistent problem-solving practice, and hackathon execution under tight timelines.
            </p>

            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3 text-sm text-foreground/90">
                <Target className="h-4 w-4 text-primary" />
                Product-focused development
              </div>
              <div className="flex items-center gap-3 text-sm text-foreground/90">
                <Clock3 className="h-4 w-4 text-primary" />
                Consistent long-term effort
              </div>
              <div className="flex items-center gap-3 text-sm text-foreground/90">
                <Sparkles className="h-4 w-4 text-primary" />
                Impact through execution
              </div>
            </div>
          </motion.aside>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4 sm:space-y-5"
          >
            {impactTimeline.map((item, index) => {
              const Icon = item.icon;
              const accent = accentStyles[item.accent];
              const isCodingItem = item.type === "coding";
              const rightSideLinks = item.type === "coding" ? item.platformLinks : ("externalLinks" in item ? item.externalLinks : undefined);
              const canOpenDetails = !("disableDetails" in item && item.disableDetails);

              return (
                <motion.article
                  key={`${item.title}-${index}`}
                  initial={{ opacity: 0, y: 24 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.12 + index * 0.1 }}
                  className={`relative isolate rounded-2xl border ${isCodingItem ? "border-primary/50" : accent.border} ${isCodingItem ? "bg-gradient-to-br from-primary/12 via-background/90 to-background/75" : "bg-gradient-to-br from-background/95 via-background/85 to-card/70"} p-6 sm:p-8 shadow-lg shadow-black/20`}
                >
                  <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent" />
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 inline-flex items-center justify-center rounded-xl border border-border/80 bg-background p-2.5">
                        <Icon className={`h-4.5 w-4.5 ${accent.icon}`} />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-[1.85rem] sm:text-[2.2rem] font-serif font-bold leading-[1.05] tracking-tight">{item.title}</h3>
                        <p className={`mt-2 text-base font-semibold tracking-wide ${accent.org}`}>{item.organization}</p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:items-end gap-3">
                      <span className={`inline-flex items-center text-sm font-mono uppercase tracking-[0.14em] whitespace-nowrap ${accent.org}`}>
                        {item.period}
                      </span>
                      {rightSideLinks?.length ? (
                        <div className="flex items-center gap-2">
                          {rightSideLinks.map((link) => (
                            <a
                              key={`${item.title}-${link.name}-top-link`}
                              href={link.url}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center justify-center transition-transform duration-200 hover:scale-110"
                              aria-label={link.name}
                              title={link.name}
                            >
                              <img
                                src={link.icon}
                                alt={link.iconAlt}
                                className={`h-5 w-5 sm:h-6 sm:w-6 object-contain ${link.name === "GitHub" ? "brightness-0 invert" : ""}`}
                                loading="lazy"
                                referrerPolicy="no-referrer"
                                onError={(event) => {
                                  const target = event.currentTarget;
                                  if (link.fallbackIcon && target.src !== link.fallbackIcon) {
                                    target.src = link.fallbackIcon;
                                  }
                                }}
                              />
                            </a>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </div>

                  <p className="mt-6 text-[1.12rem] text-muted-foreground leading-relaxed max-w-5xl">{item.summary}</p>

                  <div className="mt-8 pt-6 border-t border-border/50 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-0">
                    {item.metrics.map((metric, metricIndex) => (
                      <div
                        key={`${item.title}-${metric.label}-${metric.detail}`}
                        className={`sm:px-4 ${metricIndex === 0 ? 'sm:pl-0' : 'sm:border-l sm:border-border/50'} ${metricIndex === 2 ? 'sm:pr-0' : ''}`}
                      >
                        <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground">{metric.label}</p>
                        <p className="text-[2.1rem] font-serif font-bold text-foreground mt-2 leading-none">{metric.value}</p>
                        <p className="text-sm text-muted-foreground mt-1">{metric.detail}</p>
                      </div>
                    ))}
                  </div>

                  {item.highlights.length > 0 ? (
                    <div className="mt-7 pt-6 border-t border-border/40">
                      <ul className="space-y-3">
                        {item.highlights.map((point) => (
                          <li key={point} className="text-base sm:text-lg font-medium text-foreground/90 leading-relaxed flex items-start gap-3">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/80 shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                  {canOpenDetails ? (
                    <button
                      type="button"
                      onClick={() => setActiveAchievement(item)}
                      className="mt-5 text-xs font-mono uppercase tracking-[0.16em] text-primary/90 underline decoration-primary/70 underline-offset-4 hover:text-primary"
                    >
                      View details
                    </button>
                  ) : null}
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {activeAchievement ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-black/65 backdrop-blur-md p-4 sm:p-6"
            onClick={() => setActiveAchievement(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.25 }}
              className="max-w-5xl w-full h-[92dvh] sm:h-[90dvh] mx-auto overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden rounded-2xl border border-border/70 bg-background/95 backdrop-blur-xl p-5 sm:p-8 pb-20 sm:pb-24"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-mono uppercase tracking-[0.16em] text-primary/90">Achievement Details</p>
                  <h3 className="mt-2 text-2xl sm:text-4xl font-serif font-bold tracking-tight leading-tight">{activeAchievement.title}</h3>
                  <p className="mt-2 text-base sm:text-lg font-semibold text-primary">{activeAchievement.organization}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveAchievement(null)}
                  className="inline-flex items-center justify-center rounded-lg border border-border bg-background p-2 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Close details"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <p className="mt-3 text-sm font-mono uppercase tracking-[0.14em] text-primary/90">{activeAchievement.period}</p>

              {activeAchievement.type === "coding" ? (
                <>
                  <div className="mt-5 rounded-2xl border border-primary/35 bg-gradient-to-br from-primary/15 via-background/75 to-card/60 p-5 sm:p-7">
                    <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-primary/90">Coding Snapshot</p>
                    <p className="mt-3 text-base sm:text-lg text-muted-foreground leading-relaxed">{activeAchievement.summary}</p>

                    <div className="mt-5 overflow-hidden rounded-xl border border-primary/25 bg-black/25 p-4 sm:p-6">
                      <img
                        src={activeAchievement.images[0] ?? "/coding.png"}
                        alt="Coding platform snapshot"
                        loading="lazy"
                        className="h-64 sm:h-80 w-full object-contain object-center"
                      />
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="rounded-xl border border-border/60 bg-card/40 p-4">
                      <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground">Problems Solved</p>
                      <p className="text-3xl font-serif font-bold mt-2">{isLoadingLeetCode ? "..." : (leetcodeStats?.totalSolved ?? "603+")}</p>
                    </div>
                    <div className="rounded-xl border border-border/60 bg-card/40 p-4">
                      <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground">Global Rank</p>
                      <p className="text-3xl font-serif font-bold mt-2">{isLoadingLeetCode ? "..." : (leetcodeStats?.ranking?.toLocaleString() ?? "-")}</p>
                    </div>
                    <div className="rounded-xl border border-border/60 bg-card/40 p-4">
                      <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground">Acceptance Rate</p>
                      <p className="text-3xl font-serif font-bold mt-2">{isLoadingLeetCode ? "..." : (leetcodeStats?.acceptanceRate ? `${leetcodeStats.acceptanceRate.toFixed(1)}%` : "-")}</p>
                    </div>
                    <div className="rounded-xl border border-border/60 bg-card/40 p-4">
                      <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground">Contest Rating</p>
                      <p className="text-3xl font-serif font-bold mt-2">{isLoadingLeetCode ? "..." : (leetcodeStats?.contestRating?.toFixed(0) ?? "-")}</p>
                    </div>
                  </div>

                  <div className="mt-6 rounded-xl border border-primary/25 bg-gradient-to-br from-card/35 to-background/35 p-3 sm:p-4">
                    <img
                      src="https://leetcard.jacoblin.cool/EN11uuIKBm?theme=dark&font=JetBrains+Mono&ext=contest"
                      alt="LeetCode badge"
                      loading="lazy"
                      className="w-full rounded-lg border border-border/60"
                    />
                  </div>

                  <div className="mt-7 pt-6 border-t border-border/40">
                    <h4 className="text-sm font-mono uppercase tracking-[0.16em] text-muted-foreground">Impact Highlights</h4>
                    <ul className="mt-4 space-y-3">
                      {activeAchievement.highlights.map((point) => (
                        <li key={`${activeAchievement.title}-${point}-modal`} className="text-base sm:text-lg font-medium text-foreground/90 leading-relaxed flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/80 shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                <>
                  <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">{activeAchievement.summary}</p>

                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {activeAchievement.metrics.map((metric) => (
                      <div key={`${activeAchievement.title}-${metric.label}-modal`} className="rounded-xl border border-border/60 bg-card/40 p-4">
                        <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground">{metric.label}</p>
                        <p className="text-3xl font-serif font-bold mt-2">{metric.value}</p>
                        <p className="text-sm text-muted-foreground mt-1">{metric.detail}</p>
                      </div>
                    ))}
                  </div>

                  <div
                    className="mt-7 overflow-hidden rounded-xl border border-border/60 bg-card/40 p-3"
                    onMouseEnter={() => setIsGalleryPaused(true)}
                    onMouseLeave={() => setIsGalleryPaused(false)}
                  >
                    <motion.div
                      animate={galleryControls}
                      className="flex items-center gap-3 w-max"
                    >
                      {[...activeAchievement.images, ...activeAchievement.images].map((image, imageIndex) => (
                        <div key={`${activeAchievement.title}-image-${imageIndex}`} className="flex items-center justify-center overflow-hidden rounded-lg border border-border/50 bg-card/20">
                          <img
                            src={image}
                            alt={`${activeAchievement.title} visual ${(imageIndex % activeAchievement.images.length) + 1}`}
                            loading="lazy"
                            className="w-52 sm:w-64 h-40 sm:h-48 object-contain object-center"
                          />
                        </div>
                      ))}
                    </motion.div>
                  </div>

                  <div className="mt-7 pt-6 border-t border-border/40">
                    <h4 className="text-sm font-mono uppercase tracking-[0.16em] text-muted-foreground">Impact Highlights</h4>
                    <ul className="mt-4 space-y-3">
                      {activeAchievement.highlights.map((point) => (
                        <li key={`${activeAchievement.title}-${point}-modal`} className="text-base sm:text-lg font-medium text-foreground/90 leading-relaxed flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/80 shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
};

export default Achievements;
