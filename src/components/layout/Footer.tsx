import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode, SiCodechef } from 'react-icons/si';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-border/50 bg-background/50 py-12 backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-cyan-500 font-display text-sm font-bold text-white">
              MY
            </div>
            <span className="font-display font-bold text-white">Monika Yadav</span>
          </div>

          <div className="text-center md:text-left text-sm text-muted-foreground">
            <p>Designed & Developed by Monika Yadav ❤️</p>
            <p className="mt-1">© {currentYear} All Rights Reserved.</p>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://github.com/Monikayadav11223" target="_blank" rel="noreferrer" className="text-muted-foreground transition-colors hover:text-white"><FaGithub className="h-5 w-5" /></a>
            <a href="https://www.linkedin.com/in/webdeveloper-monika-yadav/" target="_blank" rel="noreferrer" className="text-muted-foreground transition-colors hover:text-[#0077B5]"><FaLinkedin className="h-5 w-5" /></a>
            <a href="https://leetcode.com/u/fine_bats_55/" target="_blank" rel="noreferrer" className="text-muted-foreground transition-colors hover:text-[#FFA116]"><SiLeetcode className="h-5 w-5" /></a>
            <a href="mailto:monikayadav11223@gmail.com" className="text-muted-foreground transition-colors hover:text-cyan-400"><FaEnvelope className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};
