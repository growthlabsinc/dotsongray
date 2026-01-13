"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const transformations = [
  "Setting boundaries without drowning in guilt",
  "Having difficult conversations that actually work",
  "Finding moments of peace in the chaos",
  "Reconnecting with who you were before caregiving consumed you",
  "Building resilience that carries you through the hard days",
  "Accepting help without feeling like you've failed",
];

export function TransformationSection() {
  return (
    <section className="section bg-sage-50">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image/Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-sage-200 to-cream-100">
              {/* Decorative shapes */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3/4 h-3/4 rounded-full bg-white/60 flex items-center justify-center">
                  <div className="w-2/3 h-2/3 rounded-full bg-sage-100 flex items-center justify-center">
                    <span className="text-6xl md:text-8xl font-serif text-sage-600 opacity-50">
                      &ldquo;
                    </span>
                  </div>
                </div>
              </div>

              {/* Quote overlay */}
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <p className="text-xl md:text-2xl text-sage-800 text-center font-serif italic">
                  Imagine waking up and actually looking forward to the day
                </p>
              </div>
            </div>

            {/* Stats badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-lg border border-cream-200"
            >
              <div className="text-3xl font-serif text-sage-600">93%</div>
              <div className="text-sm text-sage-500">report reduced guilt</div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-sage-900 mb-6">
              Imagine caring for your parent{" "}
              <span className="text-sage-600 italic">without losing yourself</span>
            </h2>

            <p className="text-lg text-sage-600 mb-8">
              It&apos;s possible to be a loving, devoted caregiver while also honoring
              your own needs. Here&apos;s what that looks like:
            </p>

            {/* Transformation list */}
            <ul className="space-y-4">
              {transformations.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-sage-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sage-700">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
