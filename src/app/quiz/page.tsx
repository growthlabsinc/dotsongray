"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { QuizOption } from "@/components/quiz/quiz-option";
import { QuizProgress } from "@/components/quiz/quiz-progress";
import { EmailCapture } from "@/components/quiz/email-capture";
import { QuizResults } from "@/components/quiz/quiz-results";
import { quizQuestions } from "@/lib/quiz/questions";
import { calculateBurnoutScore, QuizResult } from "@/lib/quiz/scoring";
import { ArrowLeft, ArrowRight, Clock, Shield } from "lucide-react";

type QuizStep = "intro" | "questions" | "email" | "results";

export default function QuizPage() {
  const [step, setStep] = useState<QuizStep>("intro");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [result, setResult] = useState<QuizResult | null>(null);

  const handleStartQuiz = () => {
    setStep("questions");
    setCurrentQuestion(0);
    setAnswers([]);
  };

  const handleSelectAnswer = (value: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = value;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setStep("email");
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleEmailSubmit = (submittedEmail: string, submittedFirstName: string) => {
    setEmail(submittedEmail);
    setFirstName(submittedFirstName);
    const quizResult = calculateBurnoutScore(answers);
    setResult(quizResult);
    setStep("results");
  };

  const handleRetake = () => {
    setStep("intro");
    setCurrentQuestion(0);
    setAnswers([]);
    setEmail("");
    setFirstName("");
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream-50 to-sage-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-cream-50/95 backdrop-blur-sm border-b border-cream-200">
        <div className="container flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-serif text-sage-800">
            Coach Traci
          </Link>
          {step === "questions" && (
            <div className="flex-1 max-w-xs mx-4">
              <QuizProgress
                current={currentQuestion + 1}
                total={quizQuestions.length}
              />
            </div>
          )}
          <Button variant="ghost" size="sm" asChild>
            <Link href="/">Exit Quiz</Link>
          </Button>
        </div>
      </header>

      <main className="container py-12 md:py-16">
        <AnimatePresence mode="wait">
          {/* Intro Screen */}
          {step === "intro" && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="max-w-2xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl text-sage-900 mb-4">
                The Caregiver Burnout Barometer
              </h1>
              <p className="text-lg text-sage-600 mb-8">
                10 honest questions to understand where you really are on the
                burnout spectrum — and what to do about it.
              </p>

              <div className="flex flex-wrap justify-center gap-6 mb-10">
                <div className="flex items-center gap-2 text-sage-600">
                  <Clock className="w-5 h-5 text-terracotta-500" />
                  <span>Takes 2 minutes</span>
                </div>
                <div className="flex items-center gap-2 text-sage-600">
                  <Shield className="w-5 h-5 text-terracotta-500" />
                  <span>100% confidential</span>
                </div>
              </div>

              <Button
                size="lg"
                onClick={handleStartQuiz}
                className="bg-terracotta-500 hover:bg-terracotta-600 text-white text-lg px-8 py-6 h-auto group"
              >
                Begin the Quiz
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <p className="text-sm text-sage-500 mt-6">
                Your results will be delivered to your inbox
              </p>
            </motion.div>
          )}

          {/* Questions Screen */}
          {step === "questions" && (
            <motion.div
              key={`question-${currentQuestion}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-xl mx-auto"
            >
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl text-sage-900 mb-2">
                  {quizQuestions[currentQuestion].question}
                </h2>
                <p className="text-sage-500 text-sm">
                  Select the option that best describes you
                </p>
              </div>

              <div className="space-y-3 mb-8">
                {quizQuestions[currentQuestion].options.map((option) => (
                  <QuizOption
                    key={option.value}
                    value={option.value}
                    label={option.label}
                    selected={answers[currentQuestion] === option.value}
                    onSelect={handleSelectAnswer}
                  />
                ))}
              </div>

              <div className="flex justify-between">
                <Button
                  variant="ghost"
                  onClick={handlePrevious}
                  disabled={currentQuestion === 0}
                  className="text-sage-600"
                >
                  <ArrowLeft className="mr-2 w-4 h-4" />
                  Back
                </Button>

                <Button
                  onClick={handleNext}
                  disabled={answers[currentQuestion] === undefined}
                  className="bg-sage-600 hover:bg-sage-700 text-white"
                >
                  {currentQuestion === quizQuestions.length - 1 ? (
                    "See Results"
                  ) : (
                    <>
                      Next
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>
              </div>
            </motion.div>
          )}

          {/* Email Capture Screen */}
          {step === "email" && (
            <motion.div
              key="email"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <EmailCapture onSubmit={handleEmailSubmit} />
            </motion.div>
          )}

          {/* Results Screen */}
          {step === "results" && result && (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <QuizResults
                result={result}
                firstName={firstName}
                onRetake={handleRetake}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
