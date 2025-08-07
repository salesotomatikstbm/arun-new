import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              ARUN
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              G
            </span>
          </h1>

          <p className="text-md md:text-lg text-justify md:text-center inline-grid text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
          I'm Arun, a React Developer with 4 years of experience. I specialize in building dynamic and scalable web applications. Passionate about crafting seamless user experiences, I am ready to take on any development challenge.
     </p>

          <div className="pt-4 opacity-0 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-18 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
            <a href="#services" 
               className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 animate-fade-in-delay-4">
                Get Our Services
               </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <a href="#about" className="flex flex-col items-center">
          <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
        </a>
      </div>
    </section>
  );
};
