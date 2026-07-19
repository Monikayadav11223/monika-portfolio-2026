import React, { useEffect, useRef, useState } from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { motion, useInView } from 'framer-motion';
import { Trophy, Medal, Code2, Flame } from 'lucide-react';

export const Achievements = () => {
  const achievements = [
    { title: "Diploma Gold Medalist", icon: <Trophy className="h-8 w-8" />, color: "from-yellow-400 to-amber-600", textColor: "text-amber-400" },
    { title: "Gold Medal — High Jump", icon: <Medal className="h-8 w-8" />, color: "from-primary to-purple-600", textColor: "text-primary" },
    { title: "Gold Medal — Shot Put", icon: <Medal className="h-8 w-8" />, color: "from-cyan-400 to-blue-600", textColor: "text-cyan-400" },
    { title: "Problems Solved on LeetCode", count: 302, suffix: "+", icon: <Code2 className="h-8 w-8" />, color: "from-[#FFA116] to-orange-600", textColor: "text-[#FFA116]" },
    { title: "CodeChef Rating", count: 1211, icon: <Flame className="h-8 w-8" />, color: "from-[#5B4638] to-amber-900", textColor: "text-amber-600" },
  ];

  return (
    <section id="achievements" className="py-24 relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading title="MILESTONES">Achievements</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, index) => (
            <RevealOnScroll key={index} delay={index * 0.1}>
              <div className="relative group overflow-hidden rounded-2xl bg-card border border-border p-8 hover:border-primary/30 transition-colors text-center flex flex-col items-center justify-center min-h-[220px]">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                <div className={`mb-5 inline-flex items-center justify-center rounded-xl bg-background border border-border p-4 shadow-lg ${item.textColor} group-hover:scale-110 transition-transform duration-500`}>
                  {item.icon}
                </div>
                {item.count ? (
                  <div className="mb-2 flex items-baseline justify-center gap-1 font-display">
                    <Counter value={item.count} />
                    {item.suffix && <span className={`text-4xl font-bold ${item.textColor}`}>{item.suffix}</span>}
                  </div>
                ) : (
                  <div className="mb-2 font-display">
                    <span className={`text-2xl font-bold ${item.textColor}`}>First Place</span>
                  </div>
                )}
                <h3 className="text-white font-medium text-lg mt-2">{item.title}</h3>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

const Counter = ({ value }: { value: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const incrementTime = (duration / end) * 2;
      const timer = setInterval(() => {
        start += Math.ceil(end / 50);
        if (start >= end) { setCount(end); clearInterval(timer); }
        else { setCount(start); }
      }, incrementTime);
      return () => clearInterval(timer);
    }
  }, [value, isInView]);

  return <span ref={ref} className="text-4xl md:text-5xl font-bold text-white tracking-tight">{count}</span>;
};
