"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Heart, Scale, Frown } from "lucide-react";

const painPoints = [
  {
    icon: Heart,
    title: "The guilt never stops",
    description:
      "You feel guilty taking time for yourself, guilty when you lose patience, guilty that you can't do more. The weight of it is exhausting.",
  },
  {
    icon: Scale,
    title: "Everyone needs something from you",
    description:
      "Your parent, your kids, your job, your spouse... there's nothing left for you. You're running on empty and no one seems to notice.",
  },
  {
    icon: Frown,
    title: "This isn't what you expected",
    description:
      "You love your parent deeply, but you didn't sign up to lose yourself in the process. Some days, you don't recognize who you've become.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export function PainPointsSection() {
  return (
    <section className="section bg-cream-50">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-sage-900 mb-4">
            If this sounds familiar, you&apos;re not alone
          </h2>
          <p className="text-lg text-sage-600">
            These feelings don&apos;t make you a bad caregiver. They make you human.
          </p>
        </motion.div>

        {/* Pain Point Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {painPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full bg-white border-cream-200 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 lg:p-8">
                    <div className="w-12 h-12 rounded-full bg-terracotta-50 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-terracotta-500" />
                    </div>
                    <h3 className="text-xl lg:text-2xl text-sage-800 mb-3">
                      {point.title}
                    </h3>
                    <p className="text-sage-600 leading-relaxed">
                      {point.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Validation Message */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12 text-lg text-sage-700 italic"
        >
          Caring for an aging parent is one of the hardest things you&apos;ll ever do.
          <br className="hidden md:block" />
          You deserve support, not judgment.
        </motion.p>
      </div>
    </section>
  );
}
