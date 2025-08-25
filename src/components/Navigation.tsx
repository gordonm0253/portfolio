import { Button } from "@/components/ui/button";

const Navigation = () => {

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className= "fixed top-0 w-full z-50 transition-all duration-300 bg-background/95 backdrop-blur-sm shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-gradient">
            Gordon Mei
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection("hero")}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("about")}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("projects")}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Projects
            </button>
          </div>
          
          <Button 
            variant="default" 
            size="sm"
            className="shadow-orange"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;