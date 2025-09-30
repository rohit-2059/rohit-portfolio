import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application with payment integration, user authentication, and real-time inventory management.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com",
      live: "https://example.com",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      title: "AI Chat Application",
      description: "Real-time chat application with AI-powered responses using OpenAI API, featuring group chats and file sharing.",
      tags: ["Next.js", "OpenAI", "WebSocket", "PostgreSQL"],
      github: "https://github.com",
      live: "https://example.com",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Task Management System",
      description: "Collaborative task management tool with drag-and-drop interface, deadline tracking, and team collaboration features.",
      tags: ["React", "TypeScript", "Firebase", "Tailwind"],
      github: "https://github.com",
      live: "https://example.com",
      gradient: "from-green-500 to-teal-500",
    },
    {
      title: "Portfolio Dashboard",
      description: "Analytics dashboard for tracking portfolio performance with real-time data visualization and insights.",
      tags: ["Vue.js", "D3.js", "Express", "MySQL"],
      github: "https://github.com",
      live: "https://example.com",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="glass-card border-border hover:border-primary/50 transition-all duration-300 group overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
              
              <CardHeader>
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="bg-primary/10 text-primary border-primary/20"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="gap-4">
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="group/btn"
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4 group-hover/btn:text-primary transition-colors" />
                    Code
                  </a>
                </Button>
                <Button
                  asChild
                  size="sm"
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
                >
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
