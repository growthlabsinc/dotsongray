import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { PainPointsSection } from "@/components/sections/pain-points-section";
import { TransformationSection } from "@/components/sections/transformation-section";
import { ProgramOverviewSection } from "@/components/sections/program-overview-section";
import { AboutTraciSection } from "@/components/sections/about-traci-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { QuizCtaSection } from "@/components/sections/quiz-cta-section";
import { BookingSection } from "@/components/sections/booking-section";
import { FaqSection } from "@/components/sections/faq-section";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <PainPointsSection />
        <TransformationSection />
        <ProgramOverviewSection />
        <AboutTraciSection />
        <TestimonialsSection />
        <QuizCtaSection />
        <BookingSection />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}
