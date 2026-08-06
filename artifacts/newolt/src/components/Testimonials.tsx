import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "We set this up in an afternoon and our table turnover improved 20% in the first week. We finally ditched our clunky tablet POS.",
    author: "Maria K.",
    role: "Owner, Café Solano",
    location: "Austin, TX"
  },
  {
    quote: "The visual menu completely changed how people order. They see a picture of the truffle fries and instantly add it to their cart. Best ROI ever.",
    author: "David Chen",
    role: "Manager, Nightmarket Eatery",
    location: "New York, NY"
  },
  {
    quote: "I was paying $150 a month for POS software we barely used. Newolt gave us everything we actually needed for a fraction of the cost.",
    author: "Sarah Jenkins",
    role: "Founder, Daily Grind Coffee",
    location: "Portland, OR"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-[#080808] border-t border-white/5">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 rounded-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-lg text-white/90 leading-relaxed mb-8 italic">
                  "{t.quote}"
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center font-bold text-white border border-white/20">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-white">{t.author}</h4>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
