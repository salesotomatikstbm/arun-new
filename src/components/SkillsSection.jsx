import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Version Control
  { name: "Git", level: 85, category: "version control" },
  { name: "GitHub", level: 85, category: "version control" },

  // Core
  { name: "HTML5", level: 95, category: "core" },
  { name: "CSS3", level: 85, category: "core" },
  { name: "JavaScript", level: 90, category: "core" },
    { name: "Node Js", level: 70, category: "core" },
      { name: "NPM", level: 70, category: "core" },
  { name: "Java", level: 80, category: "core" },
  { name: "Python", level: 70, category: "core" },

  // Library
  { name: "ReactJS", level: 85, category: "library" },
  { name: "Redux", level: 70, category: "library" },
  { name: "React Router DOM", level: 75, category: "library" },

  // Framework
  { name: "Next.js", level: 85, category: "framework" },
  { name: "Tailwind CSS", level: 80, category: "framework" },
  { name: "Bootstrap", level: 80, category: "framework" },

  // Database
  { name: "SQL", level: 75, category: "database" },
  { name: "DynamoDB", level: 60, category: "database" },

  // Graphic Design / Tools
  { name: "Canva", level: 90, category: "graphic design" },
  { name: "Photoshop", level: 70, category: "graphic design" },
  { name: "Curserai", level: 60, category: "graphic design" },
  { name: "VS Code", level: 90, category: "graphic design" },
  { name: "Pabbly Connect", level: 65, category: "graphic design" },
  { name: "Odoo CRM", level: 70, category: "graphic design" },
];

const categories = [
  "all",
  "version control",
  "core",
  "library",
  "framework",
  "database",
  "graphic design",
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
