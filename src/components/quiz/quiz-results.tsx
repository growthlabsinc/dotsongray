"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight, Check, Calendar, RotateCcw } from "lucide-react";
import { QuizResult, getLevelPosition } from "@/lib/quiz/scoring";
import { cn } from "@/lib/utils";

interface QuizResultsProps {
  result: QuizResult;
  firstName?: string;
  onRetake: () => void;
}

export function QuizResults({ result, firstName, onRetake }: QuizResultsProps) {
  const greeting = firstName ? `${firstName}, your` : "Your";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto"
    >
      {/* Result Header */}
      <div className="text-center mb-8">
        <Badge
          variant="secondary"
          className={cn(
            "mb-4",
            result.color === "sage"
              ? "bg-sage-100 text-sage-700 border-sage-200"
              : "bg-terracotta-100 text-terracotta-700 border-terracotta-200"
          )}
        >
          {result.score} / {result.maxScore} points
        </Badge>

        <h1 className="text-3xl md:text-4xl text-sage-900 mb-2">
          {greeting} result: <span className={cn(
            result.color === "sage" ? "text-sage-600" : "text-terracotta-600"
          )}>{result.title}</span>
        </h1>
      </div>

      {/* Barometer Visualization */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-cream-200 mb-8">
        <p className="text-sm text-sage-500 mb-4 text-center">
          Your Burnout Barometer Score
        </p>

        <div className="relative">
          {/* Barometer bar */}
          <div className="h-6 rounded-full bg-gradient-to-r from-sage-300 via-yellow-300 via-orange-400 to-red-500 overflow-hidden">
            {/* Indicator */}
            <motion.div
              initial={{ left: "0%" }}
              animate={{ left: `${getLevelPosition(result.level)}%` }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
              className="absolute top-0 w-6 h-6 bg-white rounded-full shadow-lg border-2 border-sage-600"
              style={{ transform: "translateX(-50%)" }}
            />
          </div>

          {/* Labels */}
          <div className="flex justify-between text-xs text-sage-500 mt-2">
            <span>Minimal</span>
            <span>Mild</span>
            <span>Moderate</span>
            <span>Severe</span>
          </div>
        </div>
      </div>

      {/* Description */}
      <Card className="mb-8 border-cream-200">
        <CardContent className="p-6">
          <p className="text-sage-700 leading-relaxed">{result.description}</p>
        </CardContent>
      </Card>

      {/* Recommendations */}
      <div className="mb-8">
        <h2 className="text-xl text-sage-800 mb-4">
          Your Personalized Recommendations
        </h2>
        <div className="space-y-3">
          {result.recommendations.map((rec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              className="flex items-start gap-3 p-4 bg-cream-50 rounded-xl"
            >
              <div className="w-6 h-6 rounded-full bg-sage-500 flex items-center justify-center flex-shrink-0">
                <Check className="w-4 h-4 text-white" />
              </div>
              <span className="text-sage-700">{rec}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTAs */}
      <div className="space-y-4">
        {result.primaryCta === "booking" ? (
          <>
            <Button
              size="lg"
              className="w-full bg-terracotta-500 hover:bg-terracotta-600 text-white group"
              asChild
            >
              <Link href="/#booking">
                <Calendar className="mr-2 w-5 h-5" />
                Book Your Free Clarity Call
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <p className="text-center text-sm text-sage-500">
              A 15-minute call to discuss your situation and next steps
            </p>
          </>
        ) : (
          <>
            <Button
              size="lg"
              className="w-full bg-sage-600 hover:bg-sage-700 text-white group"
              asChild
            >
              <Link href="/#program">
                Learn About the Program
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </>
        )}

        <Button
          variant="outline"
          size="lg"
          onClick={onRetake}
          className="w-full border-sage-300 text-sage-700"
        >
          <RotateCcw className="mr-2 w-4 h-4" />
          Retake Quiz
        </Button>
      </div>

      {/* Share prompt */}
      <p className="text-center text-sm text-sage-500 mt-8">
        Know someone who might need this quiz?{" "}
        <Link href="/#quiz" className="text-sage-700 underline underline-offset-2">
          Share it with them
        </Link>
      </p>
    </motion.div>
  );
}
