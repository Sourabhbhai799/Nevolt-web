import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-background border-t border-white/5">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">Simple, Transparent Pricing</h2>
          <p className="text-muted-foreground">Power your entire restaurant without breaking the bank.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Starter Plan */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 rounded-3xl"
          >
            <h3 className="text-2xl font-bold text-white mb-2">Starter</h3>
            <div className="mb-6 flex items-baseline gap-2">
              <span className="text-5xl font-bold text-white">Free</span>
            </div>
            <p className="text-muted-foreground mb-8">Perfect for food trucks and pop-ups.</p>
            
            <ul className="space-y-4 mb-8">
              {['Digital QR Menu', 'Accept Cash Payments', 'Basic Order Management', 'Standard Support'].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-white/80">
                  <Check className="w-5 h-5 text-primary shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Pro Plan */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card p-10 rounded-3xl border-primary/30 relative overflow-hidden"
          >
            <div className="absolute top-5 right-5 bg-primary/20 text-primary text-xs font-bold px-3 py-1 rounded-full border border-primary/30">
              MOST POPULAR
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
            <div className="mb-6 flex items-baseline gap-2">
              <span className="text-5xl font-bold text-white">$29</span>
              <span className="text-muted-foreground">/month</span>
            </div>
            <p className="text-muted-foreground mb-8">For growing restaurants that need more power.</p>
            
            <ul className="space-y-4 mb-8">
              {['Everything in Starter', 'Stripe Integration for Cards', 'Kitchen Display System (KDS)', 'Visual Menus with Photos', 'Priority Support'].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-white/80">
                  <Check className="w-5 h-5 text-primary shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Have multiple locations? <a href="mailto:hello@newolt.com" className="text-primary hover:underline font-medium">Contact for Enterprise</a>
          </p>
        </div>
      </div>
    </section>
  );
}
