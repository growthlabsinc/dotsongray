export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    value: number;
    label: string;
  }[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "When you wake up in the morning, you feel...",
    options: [
      { value: 1, label: "Rested and ready for the day" },
      { value: 2, label: "A bit tired but okay" },
      { value: 3, label: "Exhausted before the day even starts" },
      { value: 4, label: "Like you didn't sleep at all" },
      { value: 5, label: "Physically unable to get out of bed some days" },
    ],
  },
  {
    id: 2,
    question: "When your parent calls with another request, your first feeling is...",
    options: [
      { value: 1, label: "Happy to help" },
      { value: 2, label: "Slightly inconvenienced but willing" },
      { value: 3, label: "Dread mixed with obligation" },
      { value: 4, label: "Resentment that you try to push down" },
      { value: 5, label: "Rage or complete numbness" },
    ],
  },
  {
    id: 3,
    question: "How often do you feel guilty about your caregiving?",
    options: [
      { value: 1, label: "Rarely" },
      { value: 2, label: "Sometimes" },
      { value: 3, label: "Often" },
      { value: 4, label: "Almost constantly" },
      { value: 5, label: "The guilt is overwhelming" },
    ],
  },
  {
    id: 4,
    question: "When someone asks 'How are you?' (not about caregiving)...",
    options: [
      { value: 1, label: "I can easily share about my life and interests" },
      { value: 2, label: "I have some things to share" },
      { value: 3, label: "I struggle to think of anything besides caregiving" },
      { value: 4, label: "I don't remember who I was before this" },
      { value: 5, label: "I've completely lost my sense of self" },
    ],
  },
  {
    id: 5,
    question: "Your relationships with friends and family (not your care recipient)...",
    options: [
      { value: 1, label: "Are thriving" },
      { value: 2, label: "Are mostly maintained" },
      { value: 3, label: "Have suffered somewhat" },
      { value: 4, label: "Are barely hanging on" },
      { value: 5, label: "Have essentially ended" },
    ],
  },
  {
    id: 6,
    question: "In the past month, how often have you done something just for yourself?",
    options: [
      { value: 1, label: "Several times a week" },
      { value: 2, label: "Once a week" },
      { value: 3, label: "A few times" },
      { value: 4, label: "Once or twice" },
      { value: 5, label: "I can't remember the last time" },
    ],
  },
  {
    id: 7,
    question: "When someone asks you to do something you don't want to do...",
    options: [
      { value: 1, label: "I can comfortably say no" },
      { value: 2, label: "I can usually set boundaries" },
      { value: 3, label: "I struggle but sometimes manage" },
      { value: 4, label: "I almost always say yes out of guilt" },
      { value: 5, label: "I don't even consider saying no as an option" },
    ],
  },
  {
    id: 8,
    question: "When you think about the future of caregiving...",
    options: [
      { value: 1, label: "I feel prepared and hopeful" },
      { value: 2, label: "I'm cautiously optimistic" },
      { value: 3, label: "I feel uncertain and anxious" },
      { value: 4, label: "I feel hopeless" },
      { value: 5, label: "I can't think about it without panicking" },
    ],
  },
  {
    id: 9,
    question: "Have you experienced stress-related physical symptoms (headaches, insomnia, stomach issues)?",
    options: [
      { value: 1, label: "Rarely or never" },
      { value: 2, label: "Occasionally" },
      { value: 3, label: "Regularly" },
      { value: 4, label: "Frequently" },
      { value: 5, label: "Constantly" },
    ],
  },
  {
    id: 10,
    question: "How close do you feel to a breaking point?",
    options: [
      { value: 1, label: "Nowhere close — I'm managing well" },
      { value: 2, label: "I have plenty of capacity left" },
      { value: 3, label: "I'm stretched but holding on" },
      { value: 4, label: "I'm getting dangerously close" },
      { value: 5, label: "I feel like I'm already there" },
    ],
  },
];
