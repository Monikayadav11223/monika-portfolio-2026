import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { MapPin, GraduationCap, BookOpen, Calendar, BookOpenCheck } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-24 relative z-10 bg-background/50 backdrop-blur-sm border-y border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading title="ABOUT ME">Get To Know Me</SectionHeading>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Text column — must be a direct grid child to get col-span */}
          <div className="lg:col-span-5">
            <RevealOnScroll delay={0.1}>
              <div className="prose prose-invert max-w-none space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I am <strong className="text-white font-semibold">Monika Yadav</strong>, a passionate and detail-oriented Computer Science and Engineering student at ABES Engineering College.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  My journey in tech is driven by a deep curiosity for how things work and a desire to build solutions that make an impact. I specialize in Full Stack Web Development and have a strong foundation in AI integration.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Whether it's building a complex SaaS platform, training a custom AI model, or optimizing database queries, I approach every challenge with enthusiasm and a commitment to writing clean, maintainable code.
                </p>
              </div>
            </RevealOnScroll>
          </div>

          {/* Cards column */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
            <InfoCard icon={<MapPin className="h-6 w-6 text-primary" />} label="Location" value="Ghaziabad, Uttar Pradesh" delay={0.2} />
            <InfoCard icon={<GraduationCap className="h-6 w-6 text-cyan-400" />} label="College" value="ABES Engineering College" delay={0.3} />
            <InfoCard icon={<BookOpen className="h-6 w-6 text-primary" />} label="Degree" value="Bachelor of Technology" delay={0.4} />
            <InfoCard icon={<BookOpenCheck className="h-6 w-6 text-cyan-400" />} label="Branch" value="Computer Science & Engineering" delay={0.5} />
            <InfoCard icon={<Calendar className="h-6 w-6 text-primary" />} label="Current Semester" value="7th Semester" delay={0.6} />
            <InfoCard icon={<GraduationCap className="h-6 w-6 text-cyan-400" />} label="Graduation" value="2027" delay={0.7} />
          </div>
        </div>
      </div>
    </section>
  );
};

const InfoCard = ({ icon, label, value, delay }: { icon: React.ReactNode; label: string; value: string; delay: number }) => (
  <RevealOnScroll delay={delay}>
    <div className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-colors group">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-background border border-border group-hover:shadow-[0_0_15px_rgba(124,58,237,0.2)] transition-shadow">
        {icon}
      </div>
      <div>
        <p className="text-sm font-medium text-muted-foreground mb-1">{label}</p>
        <p className="font-semibold text-white">{value}</p>
      </div>
    </div>
  </RevealOnScroll>
);
