import React from 'react';
import { motion } from 'framer-motion';
import { QrCode, UtensilsCrossed, Banknote, Image as ImageIcon, Laptop } from 'lucide-react';

const features = [
  {
    icon: <QrCode className="w-6 h-6 text-primary" />,
    title: "Instant QR Scanning",
    description: "Customers scan, browse, and order. Zero app downloads. Zero friction."
  },
  {
    icon: <UtensilsCrossed className="w-6 h-6 text-emerald-500" />,
    title: "Live Kitchen Dashboard",
    description: "Orders fly to your kitchen the moment they're placed. Real-time, always."
  },
  {
    icon: <Banknote className="w-6 h-6 text-primary" />,
    title: "Stripe & Cash Integration",
    description: "Accept digital payments or good old cash. Your choice, their convenience."
  },
  {
    icon: <ImageIcon className="w-6 h-6 text-emerald-500" />,
    title: "Visual Menus That Sell",
    description: "Beautiful food photos and descriptions that make customers order more."
  },
  {
    icon: <Laptop className="w-6 h-6 text-primary" />,
    title: "Zero Hardware Cost",
    description: "Runs on any phone, tablet, or laptop. Your existing device is enough."
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-background relative border-t border-white/5">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4"
          >
            Everything Your Restaurant Needs.<br/>
            <span className="text-muted-foreground">Nothing You Don't.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`glass-card p-8 rounded-2xl group hover:-translate-y-1 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 ${i === 3 || i === 4 ? 'lg:col-span-1.5' : ''}`}
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
