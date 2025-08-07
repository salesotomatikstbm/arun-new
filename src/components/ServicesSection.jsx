import React from "react";
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

const ServicesSection = () => {
  // Services Data
  const Services = [
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

  // Service Card
const ServiceCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="gradient-border p-6 card-hover rounded-2xl min-w-full flex flex-col items-center gap-4">
      {/* Icon on top */}
      <div className="p-3 rounded-full bg-primary/10 transition duration-300">
        <Icon className="h-8 w-8 text-primary" />
      </div>

      {/* Title */}
      <h4 className="font-semibold text-lg">{title}</h4>

      {/* Description */}
      <p className="text-muted-foreground text-justify text-sm leading-normal">
        {description}
      </p>
    </div>
  );
};


  return (
    <section id="services" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Our <span className="text-primary">Services</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          We provide high-quality Mobile App Development, Web Development,
          Backend Services, and Document Solutions to help businesses grow and
          succeed efficiently.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
