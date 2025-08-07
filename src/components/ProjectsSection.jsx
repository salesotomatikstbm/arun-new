import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Firstchoice Supplies",
    description:
      "Developed and deployed the Firstchoice Supplies website using Next.js, focusing on server-side rendering and performance optimization.",
    image: "/projects/firstchoice.png",
    tags: ["JavaScript", "Redux", "Next.js", "Tailwind CSS", "Visual Studio Code"],
    demoUrl: "https://www.firstchoice.supplies/",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Aishwarya Academy",
    description:
      "Developed and deployed the Aishwarya Academy website using Next.js, focusing on server-side rendering and performance optimization.",
    image: "/projects/aishwarya.png",
    tags: ["JavaScript", "Redux", "Next.js", "Tailwind CSS", "Visual Studio Code"],
    demoUrl: "https://aishwaryaacademy.in/",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Robotica 2025",
    description:
      "Developed and deployed the Robotica-2025 website using React.js, focusing on server-side rendering and performance optimization.",
    image: "/projects/robotica.png",
    tags: ["JavaScript", "Redux", "Bootstrap CSS", "Visual Studio Code"],
    demoUrl: "https://www.robotica.org.in/",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Otomatiks",
    description:
      "Developed and deployed the Otomatiks website using Next.js, focusing on server-side rendering and performance optimization. Implemented dynamic routing for seamless navigation and responsive layouts.",
    image: "/projects/otomatiks.png",
    tags: ["ReactJS", "JavaScript", "Redux", "Next.js", "Tailwind CSS", "Visual Studio Code"],
    demoUrl: "https://otomatiks.com/",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "QBee Academy",
    description:
      "Designed and developed the QBee Academy website using React.js. Implemented course enrollment, user management, and responsive educational content interfaces.",
    image: "/projects/qbee.png",
    tags: ["ReactJS", "JavaScript", "Redux", "Bootstrap", "Visual Studio Code"],
    demoUrl: "https://qbeeacademy.in/",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each one was carefully crafted
          with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="relative group mb-4">
                  <div className="flex flex-wrap gap-2 overflow-hidden md:max-h-10 md:group-hover:max-h-40 transition-all duration-300 ease-in-out">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className={`py-1 px-2 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground
                                  ${index >= 3 ? "md:hidden md:group-hover:inline-flex" : ""}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.tags.length > 3 && (
                    <div className="text-xs text-muted-foreground mt-2 hidden md:block md:group-hover:hidden">
                      +{project.tags.length - 3} more
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-justify text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/arungovindhasamygithub?tab=repositories"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
