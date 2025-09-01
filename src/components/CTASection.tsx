import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Master AI?
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Start your journey into artificial intelligence today with our comprehensive collection of articles, tutorials, and insights.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/blog"
            className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            Start Reading
          </a>
          <a
            href="#features"
            className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
