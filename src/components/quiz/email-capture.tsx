"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock, Mail, ArrowRight } from "lucide-react";

interface EmailCaptureProps {
  onSubmit: (email: string, firstName: string) => void;
  isLoading?: boolean;
}

export function EmailCapture({ onSubmit, isLoading }: EmailCaptureProps) {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      onSubmit(email, firstName);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md mx-auto"
    >
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Mail className="w-8 h-8 text-sage-600" />
        </div>
        <h2 className="text-2xl md:text-3xl text-sage-900 mb-2">
          Your results are ready!
        </h2>
        <p className="text-sage-600">
          Enter your email to see your Burnout Barometer score and get personalized
          recommendations.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="firstName" className="text-sage-700">
            First Name (optional)
          </Label>
          <Input
            id="firstName"
            type="text"
            placeholder="Your first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="mt-1 border-cream-300 focus:border-sage-500 focus:ring-sage-500"
          />
        </div>

        <div>
          <Label htmlFor="email" className="text-sage-700">
            Email Address *
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 border-cream-300 focus:border-sage-500 focus:ring-sage-500"
          />
        </div>

        <Button
          type="submit"
          size="lg"
          disabled={!email || isLoading}
          className="w-full bg-terracotta-500 hover:bg-terracotta-600 text-white group"
        >
          {isLoading ? (
            "Loading..."
          ) : (
            <>
              See My Results
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </Button>
      </form>

      <div className="flex items-center justify-center gap-2 mt-4 text-sm text-sage-500">
        <Lock className="w-4 h-4" />
        <span>We&apos;ll never share your email. Unsubscribe anytime.</span>
      </div>
    </motion.div>
  );
}
