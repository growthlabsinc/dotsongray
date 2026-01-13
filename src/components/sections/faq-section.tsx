"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "I don't have time for coaching — I'm already overwhelmed.",
    answer:
      "I understand completely. That's exactly why this program is designed with caregivers in mind. The weekly sessions are only 30 minutes, and the self-paced modules are bite-sized so you can work through them in small moments. Many caregivers tell me that this time investment actually gives them time back because they learn to set boundaries and stop overcommitting. You deserve 30 minutes a week for yourself.",
  },
  {
    question: "Will this work for my specific situation?",
    answer:
      "The Care Without Losing Yourself program is designed for adult children caring for aging parents, regardless of the specific health condition. Whether your parent has dementia, chronic illness, mobility issues, or is simply aging, the core challenges of guilt, burnout, boundaries, and family dynamics are universal. That said, everyone's situation is unique — that's why I offer a free 15-minute clarity call to discuss your specific needs.",
  },
  {
    question: "What if my family doesn't support me getting help?",
    answer:
      "This is more common than you might think. Many caregivers face resistance from siblings or family members who don't understand what they're going through. Part of the program actually addresses navigating family dynamics and communicating your needs. You don't need anyone's permission to take care of yourself. In fact, getting support often helps improve family relationships because you're showing up from a healthier place.",
  },
  {
    question: "How is this different from therapy?",
    answer:
      "While therapy focuses on processing past experiences and mental health treatment, coaching is action-oriented and future-focused. We work on practical skills like boundary-setting, communication strategies, and building sustainable routines. Many caregivers benefit from both — they complement each other well. If you're dealing with depression, anxiety, or trauma, I recommend having a therapist alongside coaching support.",
  },
  {
    question: "What's included in the 12-week program?",
    answer:
      "The program includes: weekly 30-minute group coaching sessions via Zoom, self-paced learning modules for each week, the Caregiver Decision Compass tool, access to our private community of fellow caregivers, downloadable worksheets and reflection guides, and email support between sessions. You'll have everything you need to make lasting changes in how you approach caregiving.",
  },
  {
    question: "What if I need to pause because of a caregiving crisis?",
    answer:
      "Life happens — especially for caregivers. If you need to step away due to a crisis, we'll work together to find a solution. You can catch up on recorded sessions, and you're always welcome to rejoin a future cohort at no additional cost. Your wellbeing comes first, and I'll never make you feel guilty for putting your caregiving responsibilities first when truly needed.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="section bg-cream-50">
      <div className="container max-w-3xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-sage-900 mb-4">
            Questions you might have
          </h2>
          <p className="text-lg text-sage-600">
            If you don&apos;t see your question here, feel free to reach out directly.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-xl border border-cream-200 px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left text-sage-800 hover:text-sage-900 hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sage-600 pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Additional help */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-sage-600">
            Still have questions?{" "}
            <a
              href="mailto:traci@dotsongray.com"
              className="text-sage-700 font-medium hover:text-sage-800 underline underline-offset-4"
            >
              Send me an email
            </a>{" "}
            or{" "}
            <a
              href="#booking"
              className="text-sage-700 font-medium hover:text-sage-800 underline underline-offset-4"
            >
              book a free call
            </a>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
}
