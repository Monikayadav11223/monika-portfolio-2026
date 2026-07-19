import React from 'react';
import { motion } from 'framer-motion';
import { useTypingEffect } from '@/hooks/use-typing-effect';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';
import { SiLeetcode, SiCodechef } from 'react-icons/si';
import profileImage from '@assets/monika.jpeg';

export const Hero = () => {
  const roles = ["Full Stack Developer", "AI Enthusiast", "Problem Solver", "React Developer"];
  const typedText = useTypingEffect(roles);

  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium text-sm tracking-wide mb-6 uppercase"
            >
              Welcome to my portfolio
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-white text-3xl md:text-4xl font-medium mb-2"
            >
              Hello, I'm
            </motion.h2>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-cyan-400 to-primary bg-[length:200%_auto] animate-gradient"
            >
              Monika Yadav
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl md:text-2xl text-cyan-400 font-medium h-[40px] mb-6 flex items-center justify-center lg:justify-start"
            >
              <span className="text-white mr-2">I am a</span> {typedText}
              <span className="inline-block w-1 h-6 ml-1 bg-cyan-400 animate-pulse"></span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-muted-foreground max-w-[600px] mb-8 text-lg leading-relaxed"
            >
              Driven CS student building AI-powered apps and scalable full-stack web products. Passionate about crafting exceptional digital experiences and solving complex problems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10"
            >
              <a href="#resume" className="group relative inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(124,58,237,0.4)] overflow-hidden">
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                <span className="relative z-10 flex items-center gap-2"><FaDownload /> Download Resume</span>
              </a>
              <a href="#projects" className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card/50 backdrop-blur-sm px-8 py-3.5 text-sm font-semibold text-white transition-all hover:border-cyan-400/50 hover:bg-cyan-950/20 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]">
                View Projects
              </a>
              <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card/50 backdrop-blur-sm px-8 py-3.5 text-sm font-semibold text-white transition-all hover:border-primary/50 hover:bg-primary/10 hover:shadow-[0_0_20px_rgba(124,58,237,0.15)]">
                Contact Me
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-5"
            >
              <SocialLink href="https://github.com/Monikayadav11223" icon={<FaGithub className="h-6 w-6" />} color="hover:text-white" hoverShadow="hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
              <SocialLink href="https://www.linkedin.com/in/webdeveloper-monika-yadav/" icon={<FaLinkedin className="h-6 w-6" />} color="hover:text-[#0077B5]" hoverShadow="hover:shadow-[0_0_15px_rgba(0,119,181,0.4)]" />
              <SocialLink href="https://leetcode.com/u/fine_bats_55/" icon={<SiLeetcode className="h-6 w-6" />} color="hover:text-[#FFA116]" hoverShadow="hover:shadow-[0_0_15px_rgba(255,161,22,0.4)]" />
              <SocialLink href="https://www.codechef.com/users/fine_bats_55" icon={<SiCodechef className="h-6 w-6" />} color="hover:text-[#5B4638]" hoverShadow="hover:shadow-[0_0_15px_rgba(91,70,56,0.4)]" />
              <SocialLink href="mailto:monikayadav11223@gmail.com" icon={<FaEnvelope className="h-6 w-6" />} color="hover:text-cyan-400" hoverShadow="hover:shadow-[0_0_15px_rgba(34,211,238,0.4)]" />
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center items-center h-[400px] lg:h-[600px]"
          >
            <div className="absolute w-[320px] h-[320px] lg:w-[480px] lg:h-[480px] rounded-full border border-primary/20 flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary via-transparent to-cyan-400 opacity-30 blur-xl"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 rounded-full border border-dashed border-cyan-400/40"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 rounded-full border border-dashed border-primary/40"
              />
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 w-[260px] h-[260px] lg:w-[380px] lg:h-[380px] rounded-full overflow-hidden border-4 border-background shadow-[0_0_40px_rgba(124,58,237,0.3)] group"
              >
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
                <img
                  src={profileImage}
                  alt="Monika Yadav"
                  className="w-full h-full object-cover object-center grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-110"
                />
              </motion.div>
            </div>

            {/* Open to Opportunities Badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              className="absolute bottom-[10%] right-0 lg:-right-4 bg-card/80 backdrop-blur-md border border-border p-4 rounded-2xl shadow-xl flex items-center gap-3 z-20"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
              </span>
              <div>
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Status</p>
                <p className="text-sm text-white font-bold">Open to Opportunities</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const SocialLink = ({ href, icon, color, hoverShadow }: { href: string; icon: React.ReactNode; color: string; hoverShadow: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className={`flex h-12 w-12 items-center justify-center rounded-full bg-card border border-border text-muted-foreground transition-all duration-300 hover:-translate-y-1 ${color} hover:border-current ${hoverShadow}`}
  >
    {icon}
  </a>
);
