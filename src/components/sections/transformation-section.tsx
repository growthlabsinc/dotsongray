"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, Sun } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const transformations = [
  {
    title: "Set boundaries",
    description: "Without drowning in guilt",
  },
  {
    title: "Have difficult conversations",
    description: "That actually work",
  },
  {
    title: "Find moments of peace",
    description: "Even in the chaos",
  },
  {
    title: "Reconnect with yourself",
    description: "Beyond caregiving",
  },
  {
    title: "Build resilience",
    description: "For the hard days",
  },
  {
    title: "Accept help",
    description: "Without feeling like a failure",
  },
];

export function TransformationSection() {
  return (
    <section className="section bg-sage-50 overflow-hidden">
      <div className="container">
        {/* Mobile-first: Quote card at top */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 lg:mb-16"
        >
          <Badge
            variant="secondary"
            className="mb-4 bg-sage-100 text-sage-700 border-sage-200"
          >
            <Sun className="w-3 h-3 mr-1" />
            The Transformation
          </Badge>

          {/* Quote Card */}
          <Card className="max-w-lg mx-auto border-sage-200 bg-white shadow-lg">
            <CardContent className="p-6 md:p-8">
              <Sparkles className="w-8 h-8 text-sage-400 mx-auto mb-4" />
              <p className="text-xl md:text-2xl text-sage-800 font-serif italic leading-relaxed">
                &ldquo;Imagine waking up and actually looking forward to the day&rdquo;
              </p>
              <div className="mt-6 pt-4 border-t border-sage-100">
                <div className="flex items-center justify-center gap-8">
                  <div className="text-center">
                    <p className="text-2xl md:text-3xl font-serif text-terracotta-500">93%</p>
                    <p className="text-xs text-sage-500">reduced guilt</p>
                  </div>
                  <div className="w-px h-10 bg-sage-200" />
                  <div className="text-center">
                    <p className="text-2xl md:text-3xl font-serif text-terracotta-500">89%</p>
                    <p className="text-xs text-sage-500">feel more peace</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-sage-900 mb-4">
            Imagine caring for your parent{" "}
            <span className="text-sage-600 italic block sm:inline">without losing yourself</span>
          </h2>

          <p className="text-lg text-sage-600 max-w-2xl mx-auto">
            It&apos;s possible to be a loving, devoted caregiver while also honoring
            your own needs. Here&apos;s what that looks like:
          </p>
        </motion.div>

        {/* Transformation Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {transformations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="h-full border-sage-200 bg-white hover:shadow-md transition-shadow">
                <CardContent className="p-4 md:p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-sage-500 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-sage-800">{item.title}</p>
                      <p className="text-sm text-sage-500">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
