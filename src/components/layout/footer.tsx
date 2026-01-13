import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-sage-900 text-cream-100">
      {/* Final CTA Section */}
      <div className="container py-16 text-center">
        <h2 className="text-3xl md:text-4xl text-cream-50 mb-4">
          Ready to care without losing yourself?
        </h2>
        <p className="text-cream-200 mb-8 max-w-2xl mx-auto">
          Take the first step toward sustainable caregiving. You deserve support too.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-terracotta-500 hover:bg-terracotta-600 text-white"
            asChild
          >
            <Link href="#quiz">Take the Burnout Quiz</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-cream-300 text-cream-100 hover:bg-cream-100/10"
            asChild
          >
            <Link href="#booking">Book a Free Call</Link>
          </Button>
        </div>
      </div>

      <Separator className="bg-sage-700" />

      {/* Footer Links */}
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-cream-200">
            <span className="font-serif text-xl text-cream-100">Coach Traci</span>
            <span className="text-sage-400">|</span>
            <span className="text-sm">Care Without Losing Yourself</span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-cream-300">
            <Link href="#program" className="hover:text-cream-100 transition-colors">
              Program
            </Link>
            <Link href="#about" className="hover:text-cream-100 transition-colors">
              About
            </Link>
            <Link href="#testimonials" className="hover:text-cream-100 transition-colors">
              Stories
            </Link>
            <Link href="#faq" className="hover:text-cream-100 transition-colors">
              FAQ
            </Link>
          </div>

          <div className="text-sm text-cream-400">
            © {new Date().getFullYear()} Coach Traci. All rights reserved.
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-sage-400 flex items-center justify-center gap-1">
          Made with <Heart className="w-4 h-4 text-terracotta-400 fill-terracotta-400" /> for caregivers everywhere
        </div>
      </div>
    </footer>
  );
}
