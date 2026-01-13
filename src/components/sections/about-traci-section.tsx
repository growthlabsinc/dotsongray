"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import {
  Heart,
  Users,
  Clock,
  Award,
  Sparkles,
  BookOpen,
  HandHeart,
  Quote,
} from "lucide-react";

const credentials = [
  { icon: Award, label: "Certified Coach", description: "ICF Accredited" },
  { icon: Users, label: "200+ Clients", description: "Transformed lives" },
  { icon: Clock, label: "8+ Years", description: "Of experience" },
  { icon: Heart, label: "Caregiver", description: "Personal journey" },
];

const journeySteps = [
  {
    title: "The Caregiver",
    description:
      "For years, I cared for my parents with deep love and devotion — often to my own detriment. I put everyone else first, thinking that's what good caregivers do.",
  },
  {
    title: "The Wake-Up Call",
    description:
      "That path led to an emergency surgery that saved my life. In its wake, I realized a profound truth: you cannot pour from an empty cup.",
  },
  {
    title: "The Transformation",
    description:
      "My healing became my mission — from unselfish care for others to genuine self-care and self-love. I learned that caring for myself made me a better caregiver.",
  },
];

export function AboutTraciSection() {
  return (
    <section id="about" className="section bg-gradient-to-b from-white to-cream-50">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <Badge
            variant="secondary"
            className="mb-4 bg-terracotta-100 text-terracotta-700 border-terracotta-200"
          >
            <Sparkles className="w-3 h-3 mr-1" />
            Your Guide
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-sage-900">
            Hi, I&apos;m Coach Traci
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 order-2 lg:order-1"
          >
            <Card className="overflow-hidden border-cream-200 shadow-xl">
              <div className="relative aspect-[4/5]">
                <Image
                  src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_768/u_https://assets.cdn.filesafe.space/fvFDhgw4kk0kZ2UfpQCE/media/692241506652aa882cefc3f2.jpeg"
                  alt="Coach Traci - Caregiver Coach"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sage-900/40 via-transparent to-transparent" />

                {/* Name overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-2xl font-serif mb-1">Traci Dotson-Gray</h3>
                  <p className="text-white/80 text-sm">Certified Caregiver Coach</p>
                </div>
              </div>

              <CardContent className="p-0">
                {/* Credentials Grid */}
                <div className="grid grid-cols-4 divide-x divide-cream-200">
                  {credentials.map((cred, index) => {
                    const Icon = cred.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="p-4 text-center hover:bg-sage-50 transition-colors cursor-default"
                      >
                        <div className="w-10 h-10 rounded-full bg-sage-100 flex items-center justify-center mx-auto mb-2">
                          <Icon className="w-5 h-5 text-sage-600" />
                        </div>
                        <p className="text-xs font-medium text-sage-800">{cred.label}</p>
                        <p className="text-xs text-sage-500">{cred.description}</p>
                      </motion.div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Quote Card Below Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6"
            >
              <Card className="border-sage-200 bg-sage-50">
                <CardContent className="p-6">
                  <Quote className="w-8 h-8 text-sage-300 mb-3" />
                  <p className="text-lg text-sage-800 italic font-serif leading-relaxed">
                    &ldquo;When you care for yourself first, your love becomes sustainable,
                    not sacrificial.&rdquo;
                  </p>
                  <Separator className="my-4 bg-sage-200" />
                  <p className="text-sage-600 text-sm font-medium">— Coach Traci</p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 order-1 lg:order-2"
          >
            <Tabs defaultValue="story" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8 bg-cream-100 p-1">
                <TabsTrigger
                  value="story"
                  className="data-[state=active]:bg-white data-[state=active]:text-sage-800 data-[state=active]:shadow-sm"
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  My Story
                </TabsTrigger>
                <TabsTrigger
                  value="journey"
                  className="data-[state=active]:bg-white data-[state=active]:text-sage-800 data-[state=active]:shadow-sm"
                >
                  <Heart className="w-4 h-4 mr-2" />
                  My Journey
                </TabsTrigger>
                <TabsTrigger
                  value="approach"
                  className="data-[state=active]:bg-white data-[state=active]:text-sage-800 data-[state=active]:shadow-sm"
                >
                  <HandHeart className="w-4 h-4 mr-2" />
                  My Approach
                </TabsTrigger>
              </TabsList>

              <TabsContent value="story" className="mt-0">
                <Card className="border-cream-200">
                  <CardContent className="p-6 md:p-8">
                    <div className="space-y-4 text-sage-700 leading-relaxed">
                      <p className="text-lg">
                        I became a caregiver coach because{" "}
                        <span className="font-semibold text-sage-800">I lived it.</span>
                      </p>
                      <p>
                        For years, I cared for my parents with deep love and devotion —
                        often to my own detriment. I thought putting myself last was what
                        good daughters do. I was wrong.
                      </p>
                      <p>
                        That path led to an emergency surgery that saved my life. In its
                        wake, I realized a profound truth:{" "}
                        <span className="font-semibold text-terracotta-600 italic">
                          you cannot pour from an empty cup.
                        </span>
                      </p>
                      <p>
                        Today, I help other family caregivers make that same shift I made:
                        from surviving to living, from depletion to balance, from guilt to grace.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="journey" className="mt-0">
                <Card className="border-cream-200">
                  <CardContent className="p-6 md:p-8">
                    <div className="space-y-6">
                      {journeySteps.map((step, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.15 }}
                          className="flex gap-4"
                        >
                          <div className="flex flex-col items-center">
                            <div className="w-10 h-10 rounded-full bg-terracotta-100 flex items-center justify-center text-terracotta-600 font-semibold text-sm">
                              {index + 1}
                            </div>
                            {index < journeySteps.length - 1 && (
                              <div className="w-0.5 h-full bg-cream-200 mt-2" />
                            )}
                          </div>
                          <div className="pb-6">
                            <h4 className="font-semibold text-sage-800 mb-2">
                              {step.title}
                            </h4>
                            <p className="text-sage-600 leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="approach" className="mt-0">
                <Card className="border-cream-200">
                  <CardContent className="p-6 md:p-8">
                    <div className="space-y-4 text-sage-700 leading-relaxed">
                      <p className="text-lg">
                        Through my{" "}
                        <span className="font-semibold text-sage-800 italic">
                          Care Without Losing Yourself
                        </span>{" "}
                        coaching framework, I create safe spaces where caregivers feel:
                      </p>

                      <div className="grid sm:grid-cols-3 gap-4 my-6">
                        {[
                          { word: "Seen", desc: "Your struggles are valid" },
                          { word: "Supported", desc: "You're not alone anymore" },
                          { word: "Empowered", desc: "To honor your own wellbeing" },
                        ].map((item, index) => (
                          <Card key={index} className="border-sage-200 bg-sage-50/50">
                            <CardContent className="p-4 text-center">
                              <p className="text-xl font-serif text-sage-800 mb-1">
                                {item.word}
                              </p>
                              <p className="text-sm text-sage-600">{item.desc}</p>
                            </CardContent>
                          </Card>
                        ))}
                      </div>

                      <p>
                        My coaching isn&apos;t about adding more to your plate. It&apos;s about
                        helping you find the space to breathe, set boundaries without
                        guilt, and rediscover who you are beyond caregiving.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8"
            >
              <Card className="border-terracotta-200 bg-gradient-to-r from-terracotta-50 to-cream-50">
                <CardContent className="p-6">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-3xl md:text-4xl font-serif text-terracotta-600">93%</p>
                      <p className="text-sm text-sage-600 mt-1">Report reduced guilt</p>
                    </div>
                    <div className="border-x border-cream-300">
                      <p className="text-3xl md:text-4xl font-serif text-terracotta-600">200+</p>
                      <p className="text-sm text-sage-600 mt-1">Caregivers helped</p>
                    </div>
                    <div>
                      <p className="text-3xl md:text-4xl font-serif text-terracotta-600">8+</p>
                      <p className="text-sm text-sage-600 mt-1">Years coaching</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
