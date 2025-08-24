import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Firstchoice Supplies",
    description:
      "Corporate website developed with Next.js and Tailwind CSS. Focused on server-side rendering, performance optimization, and SEO.",
    image: "/projects/firstchoice.png",
    tags: ["Next.js", "Tailwind CSS", "AppScript", "SEO", "JavaScript"],
    demoUrl: "https://www.firstchoice.supplies/",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Otomatiks (Robotics & AI Academy)",
    description:
      "Educational academy website built with Next.js, Tailwind CSS, Contentful CMS, and App Script. Automated enquiries with Pabbly Connect.",
    image: "/projects/otomatiks.png",
    tags: ["Next.js", "Tailwind CSS", "Contentful CMS", "AppScript", "SEO"],
    demoUrl: "https://otomatiks.com/",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Robotica 2025",
    description:
      "Event website built with React.js and Bootstrap. Integrated Razorpay payments, enquiry forms, and optimized for cross-device usage.",
    image: "/projects/robotica.png",
    tags: ["ReactJS", "Bootstrap", "JavaScript", "AppScript", "Razorpay"],
    demoUrl: "https://www.robotica.org.in/",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Aishwarya Academy",
    description:
      "Coaching centre website developed using React.js and Bootstrap with Contentful CMS for course management and AppScript for automation.",
    image: "/projects/aishwarya.png",
    tags: ["ReactJS", "Bootstrap", "Contentful CMS", "AppScript"],
    demoUrl: "https://aishwaryaacademy.in/",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "QBee Academy",
    description:
      "E-learning platform developed with React.js and Bootstrap. Integrated Contentful CMS for course updates and SEO optimization.",
    image: "/projects/qbee.png",
    tags: ["ReactJS", "Bootstrap", "Contentful CMS", "SEO"],
    demoUrl: "https://qbeeacademy.in/",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "SK Kids Play School",
    description:
      "Play school website with HTML5, CSS3, Bootstrap. Designed a child-friendly interface with programs, gallery, and admissions sections.",
    image: "/projects/skkids.png",
    tags: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "SEO"],
    demoUrl: "https://www.skkidsplayschool.com/",
    githubUrl: "#",
  },
  {
    id: 7,
    title: "Shanthosh Vidyalaya School",
    description:
      "School website designed with modern responsive UI, showcasing programs, gallery, and admissions info.",
    image: "/projects/shanthosh.png",
    tags: ["ReactJS", "Bootstrap", "SEO", "JavaScript"],
    demoUrl: "https://shanthoshvidyalaya.vercel.app/",
    githubUrl: "#",
  },
  {
    id: 8,
    title: "E-Learning Platform (Full Stack - Study)",
    description:
      "Full-stack e-learning platform for study purpose. Built with React and backend integration for dynamic courses.",
    image: "/projects/elearning.png",
    tags: ["ReactJS", "Full Stack", "SEO", "Bootstrap"],
    demoUrl: "https://e-learning-steel-two.vercel.app/",
    githubUrl: "#",
  },
  {
    id: 9,
    title: "Otomatiks Course Shop",
    description:
      "E-learning website for Otomatiks courses with online enrollments and responsive design.",
    image: "/projects/course.png",
    tags: ["ReactJS", "E-Learning", "JavaScript", "SEO"],
    demoUrl: "https://www.otomatikscourse.shop/",
    githubUrl: "#",
  },
  {
    id: 10,
    title: "Farming Website",
    description:
      "Personal farming website showcasing agricultural activities and content.",
    image: "/projects/farming.png",
    tags: ["Next.js", "Tailwind CSS", "JavaScript"],
    demoUrl: "https://arun-govindhasamy.vercel.app/",
    githubUrl: "#",
  },
  {
    id: 11,
    title: "Portfolio Website",
    description:
      "Personal portfolio website showcasing skills, projects, and contact info.",
    image: "/projects/portfolio.png",
    tags: ["Next.js", "Tailwind CSS", "JavaScript"],
    demoUrl: "https://www.arungovindhasamy.life/",
    githubUrl: "#",
  },
  {
    id: 12,
    title: "Graphics Design Portfolio",
    description:
      "A curated Pinterest portfolio showcasing graphic design works, branding, and visuals.",
    image: "/projects/graphics.png",
    tags: ["Design", "Branding", "UI/UX"],
    demoUrl: "https://in.pinterest.com/arungwork63/",
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
