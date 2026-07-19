import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, Code, Briefcase, Award, FileBadge, Github, Terminal, Mail } from 'lucide-react';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home', icon: <Home className="h-4 w-4" /> },
    { name: 'About', href: '#about', icon: <User className="h-4 w-4" /> },
    { name: 'Skills', href: '#skills', icon: <Code className="h-4 w-4" /> },
    { name: 'Projects', href: '#projects', icon: <Briefcase className="h-4 w-4" /> },
    { name: 'Achievements', href: '#achievements', icon: <Award className="h-4 w-4" /> },
    { name: 'Certifications', href: '#certifications', icon: <FileBadge className="h-4 w-4" /> },
    { name: 'Profiles', href: '#profiles', icon: <Github className="h-4 w-4" /> },
    { name: 'Hackathons', href: '#hackathons', icon: <Terminal className="h-4 w-4" /> },
    { name: 'Contact', href: '#contact', icon: <Mail className="h-4 w-4" /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navLinks.map(link => link.href.substring(1));
      let currentSection = sections[0];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 200) {
          currentSection = section;
        }
      }
      setActiveSection(currentSection);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.getElementById(href.substring(1));
    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed left-0 right-0 top-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-background/80 py-4 backdrop-blur-md border-b border-border/50' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#home" onClick={(e) => scrollTo(e, '#home')} className="group flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-cyan-500 font-display text-lg font-bold text-white shadow-lg transition-transform group-hover:scale-105">
              MY
            </div>
            <span className="font-display text-xl font-bold tracking-tight text-white">Monika Yadav</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className={`flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-cyan-400 ${
                  activeSection === link.href.substring(1) ? 'text-cyan-400' : 'text-muted-foreground'
                }`}
              >
                {link.icon}
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-md bg-secondary/10 text-white lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-background/95 border-b border-border backdrop-blur-md lg:hidden overflow-hidden"
          >
            <nav className="container mx-auto flex flex-col px-4 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  className={`flex items-center gap-3 py-3 text-sm font-medium border-b border-border/50 last:border-0 ${
                    activeSection === link.href.substring(1) ? 'text-cyan-400' : 'text-muted-foreground'
                  }`}
                >
                  <span className="text-primary">{link.icon}</span>
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
