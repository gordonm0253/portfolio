import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const skills = [
    "Java", "Python", "OCaml", "JavaScript", "Typescript", "HTML/CSS", "React", "Node.js", "Express.js", "SQL"
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            About Me
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-foreground/90">
              Hi! I'm Gordon, a student at Cornell Unversity studying computer science. My interests include software development, machine learning, and computational biology.
            </p>
            <p className="text-lg leading-relaxed text-foreground/90">
              Outside of classes, I work at the <a className = "underline text-accent" href = "https://aprilweilab.github.io/" target = "_blank">Wei Lab</a> in the Department of Computational Biology, and am also a course consultant for CS 2800 (Discrete Structures).
              I also enjoy competitive programming, and am a part of the Cornell ICPC team.
            </p>
          </div>

          <Card className="gradient-card shadow-orange border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-accent">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="px-4 py-2 bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
              
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;