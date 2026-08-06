import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const comparisonData = [
  { feature: "Monthly Cost", newolt: "Starts at $29/month", others: "$69–$165+/month" },
  { feature: "Hardware Required", newolt: "None — use your own device", others: "Expensive proprietary terminals" },
  { feature: "Setup Time", newolt: "Under 24 hours", others: "Days to weeks" },
  { feature: "Customer App Required", newolt: "No", others: "Sometimes" },
  { feature: "Contract Lock-in", newolt: "None", others: "Long-term contracts" },
  { feature: "QR Menu Ordering", newolt: "Yes, built-in", others: "Add-on or limited" },
  { feature: "Setup Fee", newolt: "$0", others: "Up to $799" },
];

export function Comparison() {
  return (
    <section id="comparison" className="py-24 bg-background relative border-t border-white/5">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6"
          >
            Why Smart Restaurants Are Switching to Newolt
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block glass-card border-primary/30 px-6 py-3 rounded-full text-primary font-medium shadow-[0_0_20px_rgba(212,175,55,0.15)]"
          >
            Restaurants save an average of $1,200/year switching to Newolt.
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="grid grid-cols-12 border-b border-white/10 bg-white/5">
            <div className="col-span-12 md:col-span-4 p-6 flex items-end">
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Features</span>
            </div>
            <div className="col-span-6 md:col-span-4 p-6 bg-primary/10 border-x border-primary/20 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-primary"></div>
              <span className="text-2xl font-bold text-white tracking-tight">Newolt</span>
            </div>
            <div className="col-span-6 md:col-span-4 p-6 text-center">
              <span className="text-xl font-bold text-muted-foreground tracking-tight opacity-70">Others</span>
            </div>
          </div>

          <div className="divide-y divide-white/5">
            {comparisonData.map((row, i) => (
              <div key={i} className="grid grid-cols-12 hover:bg-white/[0.02] transition-colors">
                <div className="col-span-12 md:col-span-4 p-4 md:p-6 flex items-center">
                  <span className="font-medium text-white/90">{row.feature}</span>
                </div>
                <div className="col-span-6 md:col-span-4 p-4 md:p-6 bg-primary/[0.03] border-x border-primary/10 flex items-center justify-center text-center">
                  <div className="flex flex-col items-center gap-2">
                    <Check className="w-5 h-5 text-primary hidden md:block" />
                    <span className="text-primary-foreground/90 font-medium">{row.newolt}</span>
                  </div>
                </div>
                <div className="col-span-6 md:col-span-4 p-4 md:p-6 flex items-center justify-center text-center opacity-60">
                  <div className="flex flex-col items-center gap-2">
                    <X className="w-5 h-5 text-muted-foreground hidden md:block" />
                    <span className="text-muted-foreground">{row.others}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
