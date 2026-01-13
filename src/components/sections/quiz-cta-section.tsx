"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight, Clock, Lock, Sparkles } from "lucide-react";

const features = [
  { icon: Clock, text: "10 questions, 2 minutes" },
  { icon: Sparkles, text: "Instant personalized results" },
  { icon: Lock, text: "100% confidential" },
];

export function QuizCtaSection() {
  return (
    <section id="quiz" className="section bg-gradient-to-br from-terracotta-50 via-cream-50 to-sage-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <Badge
            variant="secondary"
            className="mb-6 bg-terracotta-100 text-terracotta-700 border-terracotta-200"
          >
            Free Assessment
          </Badge>

          <h2 className="text-3xl md:text-4xl lg:text-5xl text-sage-900 mb-4">
            How burned out are you?{" "}
            <span className="italic text-terracotta-600">Really?</span>
          </h2>

          <p className="text-lg text-sage-600 mb-8 max-w-2xl mx-auto">
            Take the Burnout Barometer Quiz and discover where you fall on the
            caregiver burnout spectrum — plus get personalized recommendations
            for your next step.
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-2 text-sage-600"
                >
                  <Icon className="w-4 h-4 text-terracotta-500" />
                  <span className="text-sm">{feature.text}</span>
                </div>
              );
            })}
          </div>

          {/* CTA Button */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              size="lg"
              className="bg-terracotta-500 hover:bg-terracotta-600 text-white text-lg px-8 py-6 h-auto group"
              asChild
            >
              <Link href="/quiz">
                Take the Burnout Quiz
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>

          <p className="text-sm text-sage-500 mt-4">
            Get your results delivered to your inbox instantly
          </p>
        </motion.div>

        {/* Visual element - Barometer preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 max-w-xl mx-auto"
        >
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-cream-200">
            <p className="text-sm text-sage-500 mb-3 text-center">
              The Burnout Barometer
            </p>
            <div className="relative h-4 rounded-full bg-gradient-to-r from-sage-300 via-yellow-300 via-orange-400 to-red-500 overflow-hidden">
              <motion.div
                initial={{ left: "0%" }}
                animate={{ left: ["0%", "60%", "40%", "75%", "55%"] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
                className="absolute top-0 w-4 h-4 bg-white rounded-full shadow-md border-2 border-sage-600"
                style={{ transform: "translateX(-50%)" }}
              />
            </div>
            <div className="flex justify-between text-xs text-sage-500 mt-2">
              <span>Minimal</span>
              <span>Mild</span>
              <span>Moderate</span>
              <span>Severe</span>
            </div>
            <p className="text-center text-sage-600 text-sm mt-4">
              Where do you fall?
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
