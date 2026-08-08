import { motion } from "framer-motion";
import {
  BadgeCheck,
  Banknote,
  Check,
  ChefHat,
  CreditCard,
  LayoutDashboard,
  QrCode,
  ReceiptText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { LeadModal } from "@/components/LeadModal";

const plans = [
  {
    name: "Starter",
    price: 49,
    description: "Everything you need to launch a smarter ordering experience.",
    features: [
      {
        icon: QrCode,
        title: "QR Digital Menu",
        description:
          "A polished digital menu featuring high-quality food images.",
      },
      {
        icon: Banknote,
        title: "Cash Order Support",
        description:
          "Secure cash ordering with a 60-second timer verification flow.",
      },
      {
        icon: LayoutDashboard,
        title: "Owner Dashboard",
        description:
          "Confirm orders and track restaurant revenue from one place.",
      },
    ],
  },
  {
    name: "Pro / Growth",
    price: 79,
    description: "Built for growing restaurants ready to automate every order.",
    popular: true,
    features: [
      {
        icon: Check,
        title: "Everything in Starter",
        description:
          "All menu, cash order, and owner dashboard features included.",
      },
      {
        icon: CreditCard,
        title: "Stripe Integration",
        description:
          "Seamless online card and digital payments for every customer.",
      },
      {
        icon: ChefHat,
        title: "Kitchen Display System",
        description:
          "Real-time KDS integration keeps every order moving smoothly.",
      },
      {
        icon: ReceiptText,
        title: "Digital Receipts & Billing",
        description:
          "Send clear, convenient digital receipts directly to customers.",
      },
    ],
  },
];

export function Pricing() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden border-t border-white/5 bg-background py-24 sm:py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,hsl(var(--primary)/0.14),transparent_38%)]" />
      <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

      <div className="relative container mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
            Simple pricing
          </p>
          <h2 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Choose the plan that fits your restaurant
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Straightforward monthly pricing for a faster, more profitable
            ordering experience.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mt-10 flex w-fit max-w-full items-center gap-3 rounded-2xl border border-primary/35 bg-primary/10 px-5 py-4 text-left shadow-[0_0_35px_hsl(var(--primary)/0.12)] sm:rounded-full sm:px-7"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/20">
            <BadgeCheck className="h-5 w-5" aria-hidden="true" />
          </span>
          <p className="text-sm font-bold tracking-wide text-white sm:text-base">
            No setup fees. <span className="text-primary">No contracts.</span>{" "}
            Cancel anytime.
          </p>
        </motion.div>

        <div className="mx-auto mt-14 grid max-w-5xl items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
          {plans.map((plan, index) => (
            <motion.article
              key={plan.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.12 + index * 0.1 }}
              className={`group relative flex flex-col overflow-hidden rounded-3xl border p-7 transition-transform duration-300 hover:-translate-y-1 sm:p-9 ${
                plan.popular
                  ? "border-primary/60 bg-gradient-to-b from-primary/[0.12] to-white/[0.025] shadow-[0_24px_80px_hsl(var(--primary)/0.13)]"
                  : "border-white/10 bg-white/[0.025] shadow-2xl shadow-black/20"
              }`}
            >
              {plan.popular && (
                <div className="absolute right-0 top-0 rounded-bl-2xl border-b border-l border-primary/30 bg-primary px-5 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-primary-foreground">
                  Most Popular
                </div>
              )}

              <div className={plan.popular ? "pt-6 sm:pt-2" : ""}>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                  {plan.name}
                </p>
                <div className="mt-4 flex items-end gap-2">
                  <span className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
                    ${plan.price}
                  </span>
                  <span className="pb-2 text-sm font-medium text-muted-foreground">
                    / month
                  </span>
                </div>
                <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">
                  {plan.description}
                </p>
              </div>

              <div className="my-8 h-px bg-gradient-to-r from-white/15 via-white/5 to-transparent" />

              <ul className="flex-1 space-y-6">
                {plan.features.map((feature) => {
                  const Icon = feature.icon;

                  return (
                    <li key={feature.title} className="flex gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary transition-colors duration-300 group-hover:border-primary/35">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <div>
                        <h3 className="font-semibold text-white">
                          {feature.title}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>

              <LeadModal isDemoRequest>
                <Button
                  size="lg"
                  variant={plan.popular ? "default" : "outline"}
                  className={`mt-9 h-13 w-full rounded-xl text-base ${
                    plan.popular
                      ? "shadow-lg shadow-primary/20"
                      : "border-white/15 bg-white/[0.03] hover:border-primary/35 hover:bg-primary/10"
                  }`}
                >
                  Get Started with {plan.name}
                </Button>
              </LeadModal>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
