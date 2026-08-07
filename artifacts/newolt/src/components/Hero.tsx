import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { LeadModal } from './LeadModal';
import { ChevronRight, TrendingUp } from 'lucide-react';

export function Hero() {
  const [orders, setOrders] = useState(14829);

  useEffect(() => {
    const interval = setInterval(() => {
      setOrders(prev => prev + Math.floor(Math.random() * 3));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[100dvh] flex items-center pt-24 pb-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay" />
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-medium mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              The smart alternative to others
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-white mb-6">
              Low effort. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">Low expense.</span> <br />
              Higher Revenue.
            </h1>
            
            <p className="text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
              No expensive hardware. No app needed. Just you, your restaurant, and any device — that's it. Get a beautifully crafted digital menu that makes customers order more.
            </p>
            
            <div className="flex">
              <LeadModal>
                <Button size="lg" className="h-14 px-8 text-base shadow-lg shadow-primary/20 bg-primary text-primary-foreground hover:bg-primary/90">
                  Request Your Menu Demo
                </Button>
              </LeadModal>
            </div>
            
            <div className="mt-10 flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                <img src="https://i.pravatar.cc/100?img=1" alt="User" className="w-8 h-8 rounded-full border-2 border-background" />
                <img src="https://i.pravatar.cc/100?img=2" alt="User" className="w-8 h-8 rounded-full border-2 border-background" />
                <img src="https://i.pravatar.cc/100?img=3" alt="User" className="w-8 h-8 rounded-full border-2 border-background" />
              </div>
              <p>Join hundreds of smart restaurateurs.</p>
            </div>
          </motion.div>

          {/* Visual Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative lg:ml-auto w-full max-w-lg"
          >
            {/* Main Image Frame */}
            <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-white/5 aspect-[4/5] shadow-2xl shadow-black/50 rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=80" 
                alt="Restaurant QR ordering" 
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500 mix-blend-luminosity hover:mix-blend-normal"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>

            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }} 
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-12 -right-8 glass-card p-4 rounded-xl shadow-xl flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-emerald-500" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Orders Received</p>
                <p className="text-xl font-bold text-white font-mono">{orders.toLocaleString()}</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }} 
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-16 -left-12 glass-card px-5 py-3 rounded-full shadow-xl flex items-center gap-2 border-primary/20"
            >
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-white">No hardware required</span>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
