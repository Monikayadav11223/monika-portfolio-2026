import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode, SiCodechef, SiHackerrank } from 'react-icons/si';
import { ExternalLink } from 'lucide-react';

export const CodingProfiles = () => {
  const profiles = [
    { name: "GitHub", username: "Monikayadav11223", url: "https://github.com/Monikayadav11223", icon: <FaGithub className="h-10 w-10" />, color: "hover:bg-[#24292e]/20 hover:border-[#24292e]", iconColor: "text-white" },
    { name: "LinkedIn", username: "webdeveloper-monika-yadav", url: "https://www.linkedin.com/in/webdeveloper-monika-yadav/", icon: <FaLinkedin className="h-10 w-10" />, color: "hover:bg-[#0077B5]/20 hover:border-[#0077B5]", iconColor: "text-[#0077B5]" },
    { name: "LeetCode", username: "fine_bats_55", url: "https://leetcode.com/u/fine_bats_55/", icon: <SiLeetcode className="h-10 w-10" />, color: "hover:bg-[#FFA116]/20 hover:border-[#FFA116]", iconColor: "text-[#FFA116]", stats: "302+ Problems" },
    { name: "CodeChef", username: "fine_bats_55", url: "https://www.codechef.com/users/fine_bats_55", icon: <SiCodechef className="h-10 w-10" />, color: "hover:bg-[#5B4638]/20 hover:border-[#5B4638]", iconColor: "text-[#5B4638]", stats: "Rating 1211" },
  ];

  return (
    <section id="profiles" className="py-24 relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading title="PROFILES">Coding & Professional</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {profiles.map((profile, index) => (
            <RevealOnScroll key={index} delay={index * 0.1}>
              <a href={profile.url} target="_blank" rel="noreferrer" className={`block p-6 rounded-2xl bg-card border border-border transition-all duration-300 group ${profile.color} hover:-translate-y-2`}>
                <div className="flex justify-between items-start mb-6">
                  <div className={`${profile.iconColor} p-3 rounded-xl bg-background border border-border group-hover:scale-110 transition-transform`}>{profile.icon}</div>
                  <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{profile.name}</h3>
                <p className="text-sm text-muted-foreground truncate mb-3">@{profile.username}</p>
                {profile.stats && <div className="inline-block px-3 py-1 rounded-md bg-background border border-border text-xs font-semibold text-white">{profile.stats}</div>}
              </a>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={0.4}>
          <div className="rounded-2xl bg-card border border-border p-8 md:p-10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
              <SiHackerrank className="h-32 w-32" />
            </div>
            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className="p-3 rounded-xl bg-[#00EA64]/10 border border-[#00EA64]/20 text-[#00EA64]">
                <SiHackerrank className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">HackerRank</h3>
                <p className="text-muted-foreground">Skill Badges & Stars</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 relative z-10">
              <Badge label="C++" stars={5} />
              <Badge label="Problem Solving" />
              <Badge label="Java" />
              <Badge label="Python" />
              <Badge label="SQL" />
              <Badge label="C Language" />
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

const Badge = ({ label, stars }: { label: string; stars?: number }) => (
  <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-background border border-border hover:border-[#00EA64]/50 transition-colors">
    <span className="text-sm font-medium text-white">{label}</span>
    {stars && (
      <div className="flex gap-0.5 text-[#FFA116]">
        {[...Array(stars)].map((_, i) => <span key={i} className="text-xs">★</span>)}
      </div>
    )}
  </div>
);
