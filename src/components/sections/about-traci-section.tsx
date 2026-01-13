"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Clock, Award } from "lucide-react";

const credentials = [
  { icon: Award, label: "Certified Coach" },
  { icon: Users, label: "200+ Clients" },
  { icon: Clock, label: "8 Years Experience" },
  { icon: Heart, label: "Former Caregiver" },
];

export function AboutTraciSection() {
  return (
    <section id="about" className="section bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_768/u_https://assets.cdn.filesafe.space/fvFDhgw4kk0kZ2UfpQCE/media/692241506652aa882cefc3f2.jpeg"
                alt="Coach Traci"
                fill
                className="object-cover"
              />
            </div>

            {/* Credentials badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-6 left-4 right-4 md:left-8 md:right-8"
            >
              <div className="bg-white rounded-xl p-4 shadow-lg border border-cream-200">
                <div className="grid grid-cols-4 gap-2">
                  {credentials.map((cred, index) => {
                    const Icon = cred.icon;
                    return (
                      <div
                        key={index}
                        className="text-center"
                      >
                        <div className="w-10 h-10 rounded-full bg-sage-50 flex items-center justify-center mx-auto mb-1">
                          <Icon className="w-5 h-5 text-sage-600" />
                        </div>
                        <span className="text-xs text-sage-600 leading-tight block">
                          {cred.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <Badge
              variant="secondary"
              className="mb-4 bg-terracotta-50 text-terracotta-700 border-terracotta-200"
            >
              Your Guide
            </Badge>

            <h2 className="text-3xl md:text-4xl lg:text-5xl text-sage-900 mb-6">
              Hi, I&apos;m Coach Traci
            </h2>

            <div className="space-y-4 text-sage-700">
              <p>
                I became a caregiver coach because I lived it. For years, I cared for
                my parents with deep love and devotion — often to my own detriment.
              </p>

              <p>
                That path led to an emergency surgery that saved my life. In its wake,
                I realized a profound truth:{" "}
                <span className="font-medium text-sage-800">
                  you cannot pour from an empty cup.
                </span>
              </p>

              <p>
                My healing became my transformation — from unselfish care for others
                to genuine self-care and self-love for myself. Today, I help other
                family caregivers make that same shift: from surviving to living,
                from depletion to balance, from guilt to grace.
              </p>

              <p>
                Through my{" "}
                <span className="italic text-sage-800">Care Without Losing Yourself</span>{" "}
                coaching framework, I create safe spaces where caregivers feel seen,
                supported, and empowered to honor their own wellbeing as sacred.
              </p>
            </div>

            {/* Quote */}
            <div className="mt-8 p-6 bg-sage-50 rounded-xl border-l-4 border-sage-500">
              <p className="text-lg text-sage-800 italic font-serif">
                &ldquo;When you care for yourself first, your love becomes sustainable,
                not sacrificial.&rdquo;
              </p>
              <p className="text-sage-600 text-sm mt-2">— Coach Traci</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
