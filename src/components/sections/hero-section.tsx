"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Users } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream-50 via-cream-100 to-sage-50" />

      {/* Subtle decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-sage-100/50 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-terracotta-100/30 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <Badge
              variant="secondary"
              className="mb-6 bg-sage-100 text-sage-700 border-sage-200"
            >
              <Users className="w-3 h-3 mr-1" />
              Trusted by 200+ caregivers
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl text-sage-900 mb-6 leading-tight">
              You&apos;re holding everything together...{" "}
              <span className="text-terracotta-500 italic">but who&apos;s holding you?</span>
            </h1>

            <p className="text-lg md:text-xl text-sage-700 mb-8 max-w-xl mx-auto lg:mx-0">
              Caring for your aging parent shouldn&apos;t cost you your health,
              relationships, or sense of self. It&apos;s time to care without losing yourself.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-sage-600 hover:bg-sage-700 text-white group"
                asChild
              >
                <Link href="#quiz">
                  Take the Burnout Quiz
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-sage-300 text-sage-700 hover:bg-sage-50"
                asChild
              >
                <Link href="#booking">
                  Book a Free Call
                </Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-sage-600">
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-terracotta-400" />
                <span>Compassionate support</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-sage-400 rounded-full" />
                <span>12-week program</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-sage-400 rounded-full" />
                <span>Community included</span>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_768/u_https://assets.cdn.filesafe.space/fvFDhgw4kk0kZ2UfpQCE/media/692241506652aa882cefc3f2.jpeg"
                alt="Coach Traci - Caregiver Coach"
                fill
                className="object-cover"
                priority
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-sage-900/20 to-transparent" />
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg border border-cream-200"
            >
              <p className="text-sage-800 font-medium text-sm">
                &ldquo;When you care for yourself first, your love becomes sustainable, not sacrificial.&rdquo;
              </p>
              <p className="text-sage-500 text-xs mt-2">— Coach Traci</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
