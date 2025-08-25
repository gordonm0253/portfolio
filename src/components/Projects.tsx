import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink} from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Cornell Guessr",
      description: "Cornell-themed GeoGuessr clone with a React Typescript frontend, Google Maps API for interactive guessing, and Firebase for authentication and user statistics",
      tech: ["React", "HTML/CSS", "TypeScript", "Firebase", "Express.js", "Node.js"],
      github: "#",
      live: "#",
    },
    {
      title: "Pathfinder",
      description: "Full stack travel planning platform with MERN stack, using ML-driven trip recommendations and real-time itinerary suggestions.",
      tech: ["React", "TypeScript", "MongoDB", "HTML/CSS", "Express.js", "Node.js"],
      github: "#",
      live: "#",
    },
    {
      title: "Cornell TTC",
      description: "React website for the Cornell Table Tennis Club with smooth animations, improved navigation, and feedback-driven UI refinements.",
      tech: ["React", "JavaScript", "HTML/CSS"],
      github: "#",
      live: "#",
    },
    {
      title: "Critter World",
      description: "Multithreaded simulation where programmable critters evolve on a hex grid as they eat, fight, and reproduce.",
      tech: ["Java", "JavaFX"],
      github: "#",
      live: "#",
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className= "gradient-card border-0 hover:shadow-glow transition-all duration-300 group"
            >
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-2xl font-bold text-accent group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-foreground/80 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="outline" 
                      className="border-primary/30 text-primary"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
              
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

/* to add links
<div className="flex gap-4 pt-4">
                  <Button 
                    variant="default" 
                    size="sm" 
                    className="shadow-orange"
                    asChild
                  >
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      View Code
                    </a>
                  </Button>
                </div>
*/

export default Projects;