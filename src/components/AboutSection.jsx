import {
  Monitor,
  Brush,
  Settings,
  Zap,
  Camera,
  BookOpen,
  Users,
  CalendarCheck,
} from "lucide-react";


export const AboutSection = () => {
 const DesignationData = [
  {
    id: 1,
    icon: Monitor, 
    title: "React & Next.js Website Development",
    description:
      "Building modern, responsive, and high-performance websites using React and Next.js to enhance user experience and scalability.",
  },
  {
    id: 2,
    icon: Brush, 
    title: "Business Branding / Graphic Design",
    description:
      "Creating visually appealing logos, social media graphics, and branding materials to establish a strong business identity.",
  },
  {
    id: 3,
    icon: BookOpen, 
    title: "Curriculum Development",
    description:
      "Designing structured, student-friendly curriculum content for schools and organizations focusing on hands-on learning.",
  },
  {
    id: 4,
    icon: Users, 
    title: "Internship Training",
    description:
      "Offering practical, industry-aligned internship training programs to prepare students for real-world challenges.",
  },
  {
    id: 5,
    icon: CalendarCheck, 
    title: "Event Management",
    description:
      "Organizing seamless and engaging events, from planning to execution, for educational, corporate, and public occasions.",
  },
  {
    id: 6,
    icon: Settings, 
    title: "Design Engineering (Electrical AutoCAD)",
    description:
      "Providing precise electrical design solutions using AutoCAD to ensure efficient and safe circuit layouts for various projects.",
  },
  {
    id: 7,
    icon: Zap, 
    title: "Electrical Services",
    description:
      "Expert electrical installation, maintenance, and repair services for residential, commercial, and small-scale industrial setups.",
  },
  {
    id: 8,
    icon: Camera, 
    title: "Photography Services",
    description:
      "Capturing beautiful moments with professional photography services for functions, events, and natural landscapes.",
  },
  
];


  // Designation Card Component
  const Card = ({ icon: Icon, title, description }) => (
    <div className="gradient-border p-6 card-hover min-w-full">
      <div className="flex items-start gap-2 md:gap-4">
        <div className="p-2 md:p-3 rounded-full bg-primary/10">
          <Icon className="h-4 w-4 md:h-6 md:w-6 text-primary" />
        </div>
        <div className="text-left">
          <h4 className="font-semibold text-md md:text-lg">{title}</h4>
          <p className="text-muted-foreground text-justify leading-normal text-sm">{description}</p>
        </div>
      </div>
    </div>
  );

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold animate-fade-in">
             FrontEnd Developer (React Js)
            </h3>

            <p className="text-justify indent-10 md:text-lg tracking-tight text-muted-foreground animate-fade-in-delay-1">
             Seeking a responsible position to apply my skills and experience in an innovative organization that offers
opportunities for professional growth.

            </p>

            <p className="text-justify indent-10 md:text-lg tracking-tight text-muted-foreground animate-fade-in-delay-2">
             Over 4+ years of experience in front-end technologies, including HTML, CSS, JavaScript, ReactJS, Redux,
React Router, Bootstrap, Tailwind CSS, Next.js, CMS, and SEO.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center animate-fade-in-delay-3">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="https://www.canva.com/design/DAGPZ28zKoU/-FySt1oYRIb9efY192ZrRw/view"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 animate-fade-in-delay-4"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right Scrollable Designation Cards */}
          <div className="relative h-auto md:h-[460px] overflow-visible md:overflow-hidden">
            <div className="space-y-6 pr-2 will-change-transform md:animate-auto-scroll">
              {DesignationData.map((item) => (
                <Card
                  key={item.id}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
