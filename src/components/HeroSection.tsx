"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Sparkles, Brain, Zap } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-300/20 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-blue-300/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-pink-300/20 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 pt-20 pb-16">
        <div className="grid lg:grid-cols-1 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Announcement */}
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              <span>Explore the Future of AI, Today.</span>
              <Link href="/blog" className="text-purple-500 hover:underline">
                Read our latest articles
              </Link>
              <ArrowRight className="w-4 h-4" />
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-gray-900">Welcome to</span>
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  AI Insights Hub
                </span>
                <br />
                <span className="text-gray-900">Your Guide to the</span>
                <span className="bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
                  World of AI
                </span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Your premier source for deep dives, tutorials, and the latest news in the rapidly evolving field of Artificial Intelligence. Join our community of learners and innovators.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex items-center space-x-4">
              <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg">
              <Link href="/blog">
                  Explore The Blog
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}