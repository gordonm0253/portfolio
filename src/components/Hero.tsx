import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      />
      <div className="absolute inset-0 gradient-hero opacity-80" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-float">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient animate-glow">
            Gordon Mei
          </h1>
          <h1 className="text-xl mb-10 max-w-2xl mx-auto text-foreground/80">
            Computer Science Student @ Cornell
          </h1>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick = {() => scrollToSection("projects")} variant="default" size="lg" className="shadow-orange">
            View My Work
          </Button>
          <Button onClick = {() => scrollToSection("contact")} variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Get In Touch
          </Button>
        </div>
      </div>
      
    </section>
  );
};

export default Hero;