import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { Mail, MapPin, Send } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading title="GET IN TOUCH">Contact Me</SectionHeading>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <RevealOnScroll delay={0.1}>
            <div>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Let's work together!</h3>
              <p className="text-lg text-muted-foreground mb-8">
                I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              <div className="space-y-6">
                <a href="mailto:monikayadav11223@gmail.com" className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Email me at</p>
                    <p className="text-lg font-semibold text-white group-hover:text-primary transition-colors">monikayadav11223@gmail.com</p>
                  </div>
                </a>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Location</p>
                    <p className="text-lg font-semibold text-white">Ghaziabad, Uttar Pradesh</p>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.3}>
            <div className="rounded-2xl bg-card/50 backdrop-blur-sm border border-border p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-[50px] -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-500/20 rounded-full blur-[50px] translate-y-1/2 -translate-x-1/2" />
              <form className="relative z-10 space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white">Your Name</label>
                    <input type="text" placeholder="John Doe" className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white">Your Email</label>
                    <input type="email" placeholder="john@example.com" className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Subject</label>
                  <input type="text" placeholder="Project Inquiry" className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Message</label>
                  <textarea rows={5} placeholder="Hello, I'd like to talk about..." className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"></textarea>
                </div>
                <button type="button" className="w-full flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(124,58,237,0.4)] mt-4">
                  <Send className="h-4 w-4" /> Send Message
                </button>
              </form>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};
