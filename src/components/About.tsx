import { Code, Database, Lightbulb, Zap } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const About = () => {
  const skills = [
    {
      icon: Code,
      title: "Web Development",
      description: "React, TypeScript, Node.js, Express",
    },
    {
      icon: Database,
      title: "Database",
      description: "PostgreSQL, MongoDB, MySQL",
    },
    {
      icon: Zap,
      title: "Tools & Tech",
      description: "Git, Docker, AWS, Firebase",
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "DSA, Algorithms, Competitive Programming",
    },
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A passionate Computer Science student with a love for creating elegant solutions to complex problems
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm currently pursuing my B.Tech in Computer Science Engineering, where I've developed a strong foundation in software development, data structures, and algorithms.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey in tech has been driven by curiosity and a desire to build impactful solutions. I enjoy working on full-stack projects and exploring new technologies.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-foreground">B.Tech CSE | 2021-2025</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-foreground">CGPA: 8.5/10</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-foreground">Location: India</span>
              </div>
            </div>
          </div>

          <div className="glass-card p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Frontend Development</span>
                  <span className="text-sm text-muted-foreground">90%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-[90%] bg-gradient-to-r from-primary to-secondary" />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Backend Development</span>
                  <span className="text-sm text-muted-foreground">80%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-[80%] bg-gradient-to-r from-primary to-secondary" />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Data Structures & Algorithms</span>
                  <span className="text-sm text-muted-foreground">85%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-[85%] bg-gradient-to-r from-primary to-secondary" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="glass-card border-border hover:border-primary/50 transition-all duration-300 group hover:-translate-y-2"
            >
              <CardContent className="p-6">
                <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <skill.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
