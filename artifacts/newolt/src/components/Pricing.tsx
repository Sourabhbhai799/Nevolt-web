import { motion } from 'framer-motion';

export function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden border-t border-white/5 bg-background py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.12),transparent_58%)]" />
      <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative container mx-auto max-w-5xl px-6 text-center"
      >
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
          Simple pricing
        </p>
        <h2 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-7xl">
          Affortable prices starts from{' '}
          <span className="text-primary drop-shadow-[0_0_28px_hsl(var(--primary)/0.25)]">29$</span>
        </h2>
      </motion.div>
    </section>
  );
}
