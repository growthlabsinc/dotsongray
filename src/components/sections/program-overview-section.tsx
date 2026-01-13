"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Shield, MessageCircle, Sparkles } from "lucide-react";

const phases = [
  {
    number: 1,
    title: "Awareness & Acceptance",
    weeks: "Weeks 1-3",
    icon: Lightbulb,
    color: "sage",
    description: "Understand your patterns, recognize burnout signs, and release impossible expectations.",
    highlights: [
      "See your caregiving load clearly",
      "Release guilt and self-pressure",
      "Learn grounding practices for overwhelm",
    ],
  },
  {
    number: 2,
    title: "Boundaries & Balance",
    weeks: "Weeks 4-6",
    icon: Shield,
    color: "terracotta",
    description: "Create healthy limits that protect your energy without sacrificing your relationships.",
    highlights: [
      "Boundaries without shame",
      "Rebuild daily rhythms",
      "Accept help without guilt",
    ],
  },
  {
    number: 3,
    title: "Communication & Connection",
    weeks: "Weeks 7-9",
    icon: MessageCircle,
    color: "sage",
    description: "Navigate difficult conversations with your parent, siblings, and healthcare team.",
    highlights: [
      "Language that soothes and connects",
      "Navigate family dynamics",
      "Stay loving without burning out",
    ],
  },
  {
    number: 4,
    title: "Renewal & Resilience",
    weeks: "Weeks 10-12",
    icon: Sparkles,
    color: "terracotta",
    description: "Reconnect with your identity and build sustainable foundations for the long road ahead.",
    highlights: [
      "Rediscover joy and purpose",
      "Build long-term resilience",
      "Integration and moving forward",
    ],
  },
];

export function ProgramOverviewSection() {
  return (
    <section id="program" className="section bg-cream-50">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <Badge
            variant="secondary"
            className="mb-4 bg-sage-100 text-sage-700 border-sage-200"
          >
            12-Week Hybrid Program
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-sage-900 mb-4">
            Care Without Losing Yourself
          </h2>
          <p className="text-lg text-sage-600 max-w-2xl mx-auto">
            A balanced blend of bite-sized learning, reflection, and compassionate
            community support. Self-paced pre-work plus weekly 30-minute group sessions.
          </p>
        </motion.div>

        {/* Program Timeline */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-cream-300 -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              const colorClasses =
                phase.color === "sage"
                  ? {
                      badge: "bg-sage-100 text-sage-700 border-sage-200",
                      icon: "bg-sage-500 text-white",
                      number: "text-sage-600",
                    }
                  : {
                      badge: "bg-terracotta-100 text-terracotta-700 border-terracotta-200",
                      icon: "bg-terracotta-500 text-white",
                      number: "text-terracotta-600",
                    };

              return (
                <motion.div
                  key={phase.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full bg-white border-cream-200 hover:shadow-lg transition-shadow relative">
                    {/* Phase number circle */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 lg:left-1/2">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${colorClasses.icon}`}
                      >
                        {phase.number}
                      </div>
                    </div>

                    <CardHeader className="pt-8 pb-2 text-center">
                      <Badge variant="outline" className={`mx-auto mb-3 ${colorClasses.badge}`}>
                        {phase.weeks}
                      </Badge>
                      <div className={`w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center ${colorClasses.icon}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl text-sage-800">{phase.title}</h3>
                    </CardHeader>

                    <CardContent className="text-center">
                      <p className="text-sage-600 text-sm mb-4">{phase.description}</p>
                      <ul className="space-y-2 text-left">
                        {phase.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-sage-500">
                            <span className="w-1.5 h-1.5 rounded-full bg-sage-400 mt-2 flex-shrink-0" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* What's Included */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-wrap justify-center gap-4 md:gap-8 text-sm text-sage-600">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-sage-400 rounded-full" />
              Weekly group sessions
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-sage-400 rounded-full" />
              Self-paced learning modules
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-sage-400 rounded-full" />
              Private community access
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-sage-400 rounded-full" />
              Caregiver Decision Compass
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
