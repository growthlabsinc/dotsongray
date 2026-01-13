"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface QuizOptionProps {
  value: number;
  label: string;
  selected: boolean;
  onSelect: (value: number) => void;
}

export function QuizOption({ value, label, selected, onSelect }: QuizOptionProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      onClick={() => onSelect(value)}
      className={cn(
        "w-full p-4 text-left rounded-xl border-2 transition-all duration-200",
        "hover:border-sage-300 hover:bg-sage-50",
        selected
          ? "border-sage-500 bg-sage-50 shadow-sm"
          : "border-cream-200 bg-white"
      )}
    >
      <div className="flex items-center gap-3">
        <div
          className={cn(
            "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors",
            selected ? "border-sage-500 bg-sage-500" : "border-cream-300"
          )}
        >
          {selected && <Check className="w-4 h-4 text-white" />}
        </div>
        <span className="text-sage-800">{label}</span>
      </div>
    </motion.button>
  );
}
