import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { Award, CheckCircle2, FileText } from 'lucide-react';

export const Certifications = () => {
  const certs = [
    { title: "Deloitte Data Analytics Job Simulation", issuer: "Forage", date: "May 2026" },
    { title: "Generative AI Essentials", issuer: "TCS iON", date: "April 2026" },
    { title: "AI and Cybersecurity Awareness", issuer: "TCS iON", date: "April 2026" },
    { title: "Python Certification", issuer: "Infosys / GeeksforGeeks / NIELIT Haridwar", date: "Completed" },
    { title: "Web Development Course", issuer: "Udemy", date: "2025" },
    { title: "Git & Version Control Expert Talk", issuer: "Pod.ai", date: "Completed" },
  ];

  return (
    <section id="certifications" className="py-24 relative z-10 bg-background/50 backdrop-blur-sm border-y border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading title="LEARNING">Certifications</SectionHeading>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          <div className="space-y-8 md:space-y-12">
            {certs.map((cert, index) => {
              const isEven = index % 2 === 0;
              return (
                <RevealOnScroll key={index} delay={index * 0.1}>
                  <div className={`relative flex flex-col md:flex-row items-start md:items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                    {/* Timeline dot */}
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-background border-2 border-cyan-400 md:-translate-x-1/2 translate-y-6 md:translate-y-0 z-10 shadow-[0_0_10px_rgba(34,211,238,0.5)]" />

                    <div className={`ml-12 md:ml-0 w-full md:w-1/2 ${isEven ? 'md:pl-12' : 'md:pr-12'}`}>
                      <div className="p-6 rounded-2xl bg-card border border-border hover:border-cyan-400/50 transition-colors group relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="flex items-center gap-2 mb-2 text-cyan-400 text-sm font-medium">
                          <CheckCircle2 className="h-4 w-4" />
                          <span>{cert.date}</span>
                        </div>
                        <h3 className="text-lg md:text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                          {cert.title}
                        </h3>
                        <p className="text-muted-foreground text-sm flex items-center gap-1.5">
                          <Award className="h-4 w-4" />
                          {cert.issuer}
                        </p>
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>

        {/* View All Certificates Button */}
        <RevealOnScroll delay={0.3}>
          <div className="mt-16 flex justify-center">
            <a
              href="/certificates.pdf"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 rounded-2xl border border-primary/30 bg-primary/10 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-primary hover:border-primary hover:shadow-[0_0_30px_rgba(124,58,237,0.4)] hover:-translate-y-1"
            >
              <FileText className="h-5 w-5 text-primary group-hover:text-white transition-colors" />
              View All Certificates
              <span className="ml-1 rounded-full bg-primary/20 px-2 py-0.5 text-xs font-medium text-primary group-hover:bg-white/20 group-hover:text-white transition-colors">
                PDF
              </span>
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
