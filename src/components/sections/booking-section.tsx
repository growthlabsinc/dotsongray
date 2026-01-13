"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Calendar, Clock, Video } from "lucide-react";
import { InlineWidget } from "react-calendly";

const benefits = [
  "Personalized insight into your situation",
  "One actionable strategy you can use immediately",
  "Zero pressure — just compassionate support",
  "Clarity on whether coaching is right for you",
];

export function BookingSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section id="booking" className="section bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <Badge
              variant="secondary"
              className="mb-4 bg-sage-100 text-sage-700 border-sage-200"
            >
              Free 15-Minute Call
            </Badge>

            <h2 className="text-3xl md:text-4xl lg:text-5xl text-sage-900 mb-4">
              Let&apos;s talk about what you&apos;re going through
            </h2>

            <p className="text-lg text-sage-600 mb-8">
              In just 15 minutes, you&apos;ll get clarity on your biggest caregiving
              challenge and discover if coaching is right for you. No pressure,
              just support.
            </p>

            {/* Benefits list */}
            <ul className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-sage-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-sage-700">{benefit}</span>
                </motion.li>
              ))}
            </ul>

            {/* Call details */}
            <div className="flex flex-wrap gap-6 text-sm text-sage-600">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-sage-500" />
                <span>15 minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <Video className="w-4 h-4 text-sage-500" />
                <span>Zoom video call</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-sage-500" />
                <span>Flexible scheduling</span>
              </div>
            </div>
          </motion.div>

          {/* Calendly Embed Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-cream-50 rounded-2xl p-4 lg:p-6 border border-cream-200"
          >
            <div className="text-center mb-4">
              <h3 className="text-2xl text-sage-800 mb-2">
                Care Clarity Session
              </h3>
              <p className="text-sage-600">
                Choose a time that works for you
              </p>
            </div>

            {/* Calendly Embed */}
            <div className="bg-white rounded-xl overflow-hidden border border-cream-200">
              {isMounted ? (
                <InlineWidget
                  url="https://calendly.com/traci-dotsongray/30min"
                  styles={{ height: "650px", minWidth: "320px" }}
                  pageSettings={{
                    backgroundColor: "ffffff",
                    primaryColor: "5a8a5a",
                    textColor: "2c3f2c",
                    hideEventTypeDetails: false,
                    hideLandingPageDetails: false,
                    hideGdprBanner: true,
                  }}
                />
              ) : (
                <div className="h-[650px] flex flex-col items-center justify-center">
                  <Calendar className="w-16 h-16 text-sage-300 mb-4" />
                  <p className="text-sage-600 mb-6">
                    Loading scheduling calendar...
                  </p>
                  <Button
                    size="lg"
                    className="bg-sage-600 hover:bg-sage-700"
                    asChild
                  >
                    <a
                      href="https://calendly.com/traci-dotsongray/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Schedule on Calendly
                    </a>
                  </Button>
                </div>
              )}
            </div>

            <p className="text-sm text-sage-500 mt-4 text-center">
              Can&apos;t find a time? Email me at{" "}
              <a
                href="mailto:traci@dotsongray.com"
                className="text-sage-700 hover:underline"
              >
                traci@dotsongray.com
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
