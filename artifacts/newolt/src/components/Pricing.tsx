import React from 'react';
import { motion } from 'framer-motion';
import { Check, Plus } from 'lucide-react';

const coreFeatures = [
  'Digital QR Menu',
  'Accept Cash & Card Payments',
  'Live Kitchen Dashboard',
  'Visual Menus with Food Photos',
  'Zero Hardware Required',
  'Priority Support',
];

const addOns = [
  'Multi-location Management',
  'Custom Branded Menu Domain',
  'Advanced Analytics & Reports',
  'WhatsApp Order Notifications',
  'Loyalty & Coupon System',
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-background border-t border-white/5">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-muted-foreground">
            Power your entire restaurant without breaking the bank.
          </p>
        </div>

        {/* Main Plan Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-10 rounded-3xl border-primary/30 relative overflow-hidden mb-8"
        >
          {/* Gold top bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
            <div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-bold text-white">$29</span>
                <span className="text-muted-foreground text-lg">/month</span>
              </div>
              <p className="text-muted-foreground">
                Everything your restaurant needs, starting at just $29/month.
              </p>
            </div>
            <button className="shrink-0 bg-primary hover:bg-primary/90 text-background font-bold px-8 py-4 rounded-xl transition-all text-sm tracking-wide">
              Get Started
            </button>
          </div>

          <ul className="grid sm:grid-cols-2 gap-4">
            {coreFeatures.map((feature, i) => (
              <li key={i} className="flex items-center gap-3 text-white/80">
                <Check className="w-5 h-5 text-primary shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Add-ons Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="glass-card p-10 rounded-3xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-full bg-secondary/20 border border-secondary/30 flex items-center justify-center">
              <Plus className="w-4 h-4 text-secondary" />
            </div>
            <h3 className="text-xl font-bold text-white">Add-ons Available</h3>
          </div>
          <p className="text-muted-foreground mb-6 text-sm">
            Extend your plan with powerful features tailored to your restaurant's growth.
          </p>
          <ul className="grid sm:grid-cols-2 gap-4">
            {addOns.map((addon, i) => (
              <li key={i} className="flex items-center gap-3 text-white/70">
                <div className="w-5 h-5 rounded-full bg-secondary/20 border border-secondary/40 flex items-center justify-center shrink-0">
                  <Plus className="w-3 h-3 text-secondary" />
                </div>
                <span>{addon}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <div className="text-center mt-10">
          <p className="text-muted-foreground">
            Have multiple locations?{' '}
            <a href="mailto:hello@newolt.com" className="text-primary hover:underline font-medium">
              Contact for Enterprise
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
