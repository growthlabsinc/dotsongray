"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Coach Traci patiently and professionally guided me through the final months of my father's life. It was an emotional and stressful time. Traci assisted me with caregiver schedules, meal planning, managing my father's estate, dealing with his dementia, coordinating hospice communication, and handling stressful family communication. I couldn't have done this without her. Once he transitioned, she guided me through the steps of planning the funeral. She kept me grounded and sane when I felt like I was losing my mind and my heart was breaking.",
    name: "Angela M.",
    context: "Caring for father with dementia",
    initials: "AM",
  },
  {
    quote:
      "Traci inspires as she leads by example. I've watched firsthand as she prioritizes herself even while navigating parenting and caregiving. What she offers is knowledge gained firsthand as she's learned to take care of her physical and mental self; and is now eager to encourage others to do the same!",
    name: "Leslie K.",
    context: "Program participant",
    initials: "LK",
  },
  {
    quote:
      "Traci and I were in the same organization; she was the Chaplain and spoke to us about healing. I shared with her, my mother had passed away 2 years prior and I was stuck. My family home was just as it was the day my mother passed away. With both my parents deceased - everything was on me. Traci asked to meet at the house so she could help me. She came in and evaluated my home. As I was standing in the living room of my family home of 50 years crying she hugged me and said, 'it's going to be okay.' She asked for a piece of paper and wrote out a plan with a timeline. Later, she emailed me the plan with resources and solutions for helping me empty out my parents' home and to heal at the same time. It was a journey, but Traci helped to get me through the journey.",
    name: "Kathy D.",
    context: "Estate transition support",
    initials: "KD",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="section bg-sage-50">
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
            Stories from caregivers like you
          </h2>
          <p className="text-lg text-sage-600">
            Real experiences from people who found their way back to themselves
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-white border-cream-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 lg:p-8">
                  {/* Quote icon */}
                  <div className="w-10 h-10 rounded-full bg-terracotta-50 flex items-center justify-center mb-4">
                    <Quote className="w-5 h-5 text-terracotta-500" />
                  </div>

                  {/* Quote text */}
                  <p className="text-sage-700 leading-relaxed mb-6 line-clamp-[8]">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>

                  {/* Author info */}
                  <div className="flex items-center gap-3 pt-4 border-t border-cream-200">
                    <Avatar className="w-10 h-10 bg-sage-100">
                      <AvatarFallback className="bg-sage-100 text-sage-700 text-sm">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-sage-800">{testimonial.name}</p>
                      <p className="text-sm text-sage-500">{testimonial.context}</p>
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
