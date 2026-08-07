import React from 'react';
import { Zap, Instagram, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#050505] pt-20 pb-10 border-t border-white/10 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8 mb-16">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
                <Zap className="w-5 h-5 text-primary" fill="currentColor" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">Newolt</span>
            </div>
            <p className="text-muted-foreground max-w-xs">
              Smarter Menus. Happier Restaurants.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-semibold mb-2">Platform</h4>
            <a href="#features" onClick={(e) => scrollTo(e, '#features')} className="text-muted-foreground hover:text-white transition-colors w-fit">Features</a>
            <a href="#how-it-works" onClick={(e) => scrollTo(e, '#how-it-works')} className="text-muted-foreground hover:text-white transition-colors w-fit">How It Works</a>
            <a href="#pricing" onClick={(e) => scrollTo(e, '#pricing')} className="text-muted-foreground hover:text-white transition-colors w-fit">Pricing</a>
            <a href="mailto:nevoltnow@gmail.com" className="text-muted-foreground hover:text-white transition-colors w-fit">Contact</a>
          </div>

          {/* Social / Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex items-center gap-4 mb-6">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-white hover:border-white/30 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-white hover:border-white/30 transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-white hover:border-white/30 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <a href="mailto:hello@newolt.com" className="text-primary hover:underline">hello@newolt.com</a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Newolt. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
