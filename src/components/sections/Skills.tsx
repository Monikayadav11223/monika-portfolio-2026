import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';

export const Skills = () => {
  const skillCategories = [
    { title: "Frontend Development", skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Bootstrap", "Tailwind CSS", "Responsive Design"] },
    { title: "Backend & Database", skills: ["Node.js", "Express.js", "PHP", "MongoDB", "MySQL"] },
    { title: "Programming Languages", skills: ["C++", "Python", "Java (Basic)", "SQL"] },
    { title: "Tools & Technologies", skills: ["Git", "GitHub", "VS Code", "Vercel", "Render", "Postman", "AWS (Basic)"] },
    { title: "Core Subjects", skills: ["Data Structures & Algorithms", "Operating Systems", "DBMS", "Computer Networks"] },
  ];

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading title="MY SKILLS">Technical Arsenal</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <RevealOnScroll key={index} delay={index * 0.1}>
              <div className="h-full rounded-2xl bg-card/50 backdrop-blur-sm border border-border p-6 hover:border-primary/50 transition-colors group">
                <h3 className="font-display text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-cyan-400 group-hover:shadow-[0_0_10px_rgba(34,211,238,0.8)] transition-shadow"></span>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIndex) => (
                    <span key={sIndex} className="px-3 py-1.5 rounded-lg text-sm font-medium bg-background border border-border text-muted-foreground hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-all cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};
