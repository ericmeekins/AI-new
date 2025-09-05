"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export function ActionSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-600 to-blue-500 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
            Ready to Dive Deeper into AI?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Explore our extensive collection of articles and tutorials. Join our community and start your AI journey today. It's completely free.
          </p>
          <div className="flex justify-center">
            <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              <Link href="/blog">
                Explore All Articles
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}




