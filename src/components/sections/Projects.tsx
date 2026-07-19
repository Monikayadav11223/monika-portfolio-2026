import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { ExternalLink, Github } from 'lucide-react';
import notegeniusImg from '@assets/project_notegenius.jpg';
import learn2jobImg from '@assets/project_learn2job_real.png';
import imageoptImg from '@assets/project_imageoptimizer_real.png';
import glamourImg from '@assets/project_glamour_real.png';
import sportsImg from '@assets/project_sports_real.png';

export const Projects = () => {
  const projects = [
    {
      title: "NoteGenius AI",
      description: "AI-powered exam notes generator using Gemini AI. Features JWT authentication, secure user profiles, and Stripe payment integration for premium subscriptions.",
      image: notegeniusImg,
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Gemini AI", "JWT", "Stripe"],
      github: "https://github.com/Monikayadav11223",
      live: "https://github.com/Monikayadav11223",
    },
    {
      title: "Learn2Job Portal",
      description: "Comprehensive educational platform offering course management, dynamic assessments, and progress tracking with an intuitive student dashboard.",
      image: learn2jobImg,
      tags: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/Monikayadav11223",
      live: "https://github.com/Monikayadav11223",
    },
    {
      title: "Smart Image Optimizer Pro",
      description: "Client-side image compression and format conversion tool utilizing the Browser Canvas API. Features drag-and-drop support and instant preview.",
      image: imageoptImg,
      tags: ["React.js", "Vite", "Tailwind CSS", "Framer Motion", "Canvas API"],
      github: "https://github.com/Monikayadav11223",
      live: "https://github.com/Monikayadav11223",
    },
    {
      title: "Glamour Collection",
      description: "Premium fashion e-commerce website with product showcase, category filtering, and a responsive shopping experience.",
      image: glamourImg,
      tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      github: "https://github.com/Monikayadav11223",
      live: "https://github.com/Monikayadav11223",
    },
    {
      title: "Sports Tournament Management",
      description: "System for organizing tournaments, managing teams, generating fixtures, and tracking live match results with an intuitive UI.",
      image: sportsImg,
      tags: ["React.js", "CSS3", "Firebase"],
      github: "https://github.com/Monikayadav11223",
      live: "https://github.com/Monikayadav11223",
    },
  ];

  return (
    <section id="projects" className="py-24 relative z-10 bg-background/50 backdrop-blur-sm border-y border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading title="PORTFOLIO">Featured Projects</SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <RevealOnScroll key={index} delay={index * 0.1}>
              <div className="group h-full rounded-2xl bg-card border border-border overflow-hidden transition-all hover:border-primary/50 hover:shadow-[0_10px_40px_-15px_rgba(124,58,237,0.3)] hover:-translate-y-2 flex flex-col">
                <div className="relative aspect-video overflow-hidden border-b border-border">
                  <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 flex items-center justify-center gap-4">
                    <a href={project.github} target="_blank" rel="noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-primary transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 delay-100">
                      <Github className="h-5 w-5" />
                    </a>
                    <a href={project.live} target="_blank" rel="noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-cyan-500 transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 delay-150">
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                </div>

                <div className="p-6 md:p-8 flex-grow flex flex-col">
                  <h3 className="font-display text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/50">
                    {project.tags.map((tag, tIndex) => (
                      <span key={tIndex} className="text-xs font-medium text-cyan-400 bg-cyan-400/10 px-2.5 py-1 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};
