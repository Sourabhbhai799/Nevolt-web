import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { LeadModal } from './LeadModal';
import { ArrowRight } from 'lucide-react';

export function LeadCapture() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] to-[#111111]" />
      
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card p-12 md:p-20 rounded-[3rem] border-white/10 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
          
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Want a Custom QR Menu for Your Restaurant?
          </h2>
          
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join hundreds of restaurants already saving thousands. Get your menu set up in 24 hours. No credit card required to start.
          </p>
          
          <LeadModal>
            <Button size="lg" className="h-16 px-10 text-lg shadow-2xl shadow-primary/30 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full group">
              Request Your Free Menu Demo
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </LeadModal>
          
        </motion.div>
      </div>
    </section>
  );
}
