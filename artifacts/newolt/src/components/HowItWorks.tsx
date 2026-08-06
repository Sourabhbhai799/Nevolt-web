import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: "01",
    title: "Share Your Menu",
    description: "Tell us your dishes, prices, and photos. We build and digitize everything for you."
  },
  {
    number: "02",
    title: "Get Your QR Code",
    description: "We set up your branded digital menu and send you custom QR codes ready to print."
  },
  {
    number: "03",
    title: "Start Taking Orders",
    description: "Place the QR at tables. Customers scan and order. You cook and earn."
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-[#080808] border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            From Setup to First Order in <span className="text-primary">Under 24 Hours</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            No complicated software to learn. We handle the heavy lifting so you can focus on the food.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-white/10">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary/50 to-emerald-500/50"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-12 md:gap-6 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative pt-8 md:pt-0"
              >
                <div className="w-24 h-24 rounded-full bg-[#0a0a0a] border-4 border-[#080808] mx-auto md:mx-0 flex items-center justify-center relative shadow-[0_0_30px_rgba(212,175,55,0.1)] mb-8 md:mt-0 mt-[-48px]">
                  <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white to-white/40 font-mono">
                    {step.number}
                  </span>
                </div>
                
                <div className="text-center md:text-left pr-4">
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
