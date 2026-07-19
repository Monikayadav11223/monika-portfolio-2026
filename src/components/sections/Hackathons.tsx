import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { Terminal, CalendarDays, MapPin } from 'lucide-react';

export const Hackathons = () => {
  const events = [
    { title: "Technoverse Hackathon 2026", organizer: "Cognizant", date: "May 29, 2026", status: "Upcoming" },
    { title: "Ardethon Hackathon", organizer: "ABES Engineering College", date: "October 28, 2024", status: "Completed" },
    { title: "HackwithChandigarh 2.0", organizer: "Chandigarh University", date: "2024", status: "Participated" },
  ];

  return (
    <section id="hackathons" className="py-24 relative z-10 bg-background/50 backdrop-blur-sm border-y border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading title="COMPETITIONS">Hackathons</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <RevealOnScroll key={index} delay={index * 0.1}>
              <div className="h-full rounded-2xl bg-card border border-border p-8 flex flex-col relative overflow-hidden group hover:border-primary/50 transition-colors">
                <div className="absolute -right-6 -top-6 text-primary/5 group-hover:text-primary/10 transition-colors transform group-hover:scale-110 duration-500">
                  <Terminal className="w-32 h-32" />
                </div>
                <div className="mb-6 inline-flex p-3 rounded-xl bg-primary/10 border border-primary/20 text-primary relative z-10">
                  <Terminal className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 relative z-10">{event.title}</h3>
                <div className="space-y-2 mb-6 relative z-10">
                  <p className="text-muted-foreground text-sm flex items-center gap-2"><MapPin className="h-4 w-4" />{event.organizer}</p>
                  <p className="text-muted-foreground text-sm flex items-center gap-2"><CalendarDays className="h-4 w-4" />{event.date}</p>
                </div>
                <div className="mt-auto pt-6 border-t border-border/50 relative z-10">
                  <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-md border ${
                    event.status === 'Upcoming' ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20' :
                    event.status === 'Completed' ? 'bg-green-500/10 text-green-400 border-green-500/20' :
                    'bg-primary/10 text-primary border-primary/20'
                  }`}>
                    {event.status}
                  </span>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};
