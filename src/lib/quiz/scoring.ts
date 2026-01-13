export type BurnoutLevel = "minimal" | "mild" | "moderate" | "severe";

export interface QuizResult {
  level: BurnoutLevel;
  score: number;
  maxScore: number;
  percentage: number;
  title: string;
  description: string;
  recommendations: string[];
  primaryCta: "quiz" | "booking";
  color: string;
}

export function calculateBurnoutScore(answers: number[]): QuizResult {
  const totalScore = answers.reduce((sum, val) => sum + val, 0);
  const maxScore = 50;
  const percentage = (totalScore / maxScore) * 100;

  if (totalScore <= 15) {
    return {
      level: "minimal",
      score: totalScore,
      maxScore,
      percentage,
      title: "Minimal Burnout",
      description:
        "You're doing remarkably well in your caregiving journey. You've found ways to maintain balance and protect your wellbeing. Keep nurturing these healthy patterns.",
      recommendations: [
        "Continue your current self-care practices — they're working",
        "Build your support network proactively for future needs",
        "Consider preventive coaching to maintain this healthy balance",
      ],
      primaryCta: "quiz",
      color: "sage",
    };
  } else if (totalScore <= 25) {
    return {
      level: "mild",
      score: totalScore,
      maxScore,
      percentage,
      title: "Mild Burnout",
      description:
        "You're showing early signs of caregiver stress. Now is the perfect time to address these patterns before they intensify. Small changes can make a big difference.",
      recommendations: [
        "Establish clearer boundaries with family members",
        'Schedule regular "non-negotiable" self-care time',
        "Start building a caregiving support team",
      ],
      primaryCta: "booking",
      color: "sage",
    };
  } else if (totalScore <= 35) {
    return {
      level: "moderate",
      score: totalScore,
      maxScore,
      percentage,
      title: "Moderate Burnout",
      description:
        "You're carrying a heavy load, and it's showing. This level of stress isn't sustainable. You deserve support, and getting help is a sign of strength, not weakness.",
      recommendations: [
        "Immediate focus on boundary setting is essential",
        "Explore respite care options to give yourself breaks",
        "Professional coaching support is strongly recommended",
      ],
      primaryCta: "booking",
      color: "terracotta",
    };
  } else {
    return {
      level: "severe",
      score: totalScore,
      maxScore,
      percentage,
      title: "Severe Burnout",
      description:
        "Your wellbeing requires immediate attention. What you're experiencing is not sustainable, and you cannot care for others if you don't care for yourself first. Please reach out for support.",
      recommendations: [
        "Your wellbeing requires immediate attention",
        "You deserve support — this is not sustainable",
        "A clarity call could be your first step to getting help",
      ],
      primaryCta: "booking",
      color: "terracotta",
    };
  }
}

export function getLevelColor(level: BurnoutLevel): string {
  switch (level) {
    case "minimal":
      return "#5a8a5a"; // sage-500
    case "mild":
      return "#7ba67b"; // sage-400
    case "moderate":
      return "#e08d6e"; // terracotta-400
    case "severe":
      return "#d46d4a"; // terracotta-500
  }
}

export function getLevelPosition(level: BurnoutLevel): number {
  switch (level) {
    case "minimal":
      return 12.5;
    case "mild":
      return 37.5;
    case "moderate":
      return 62.5;
    case "severe":
      return 87.5;
  }
}
