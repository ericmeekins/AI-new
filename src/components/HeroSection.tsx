"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Sparkles, Users, Brain, Zap } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-300/20 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-blue-300/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-pink-300/20 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
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

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 bg-white/70 backdrop-blur-sm border-purple-200">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Brain className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">In-Depth Articles</h3>
                    <p className="text-sm text-gray-600">Explore complex AI topics</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 bg-white/70 backdrop-blur-sm border-blue-200">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Practical Tutorials</h3>
                    <p className="text-sm text-gray-600">Learn to use AI tools</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Right Content - Demo Interface */}
          <div className="relative">
            {/* Main Demo Card */}
            <Card className="p-6 bg-white/80 backdrop-blur-sm shadow-2xl transform rotate-3">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">Collaboration Board</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
                    <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-gray-500">Co-creating</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="h-16 bg-pink-200 rounded-lg flex items-center justify-center">
                    <span className="text-sm font-medium">To Do</span>
                  </div>
                  <div className="h-16 bg-yellow-200 rounded-lg flex items-center justify-center">
                    <span className="text-sm font-medium">In Progress</span>
                  </div>
                  <div className="h-16 bg-purple-200 rounded-lg flex items-center justify-center">
                    <span className="text-sm font-medium">Done</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>Updated 2 minutes ago</span>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>3 users online</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Floating AI Card */}
            <Card className="absolute -top-4 -right-4 p-4 bg-white shadow-lg transform -rotate-12 w-48">
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-semibold text-sm">AI Assistant</span>
                </div>
                <p className="text-xs text-gray-600">Generating a mind map for you...</p>
                <div className="w-full bg-purple-100 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full w-3/4"></div>
                </div>
              </div>
            </Card>

            {/* Theme selector */}
            <Card className="absolute bottom-4 left-4 p-3 bg-white shadow-lg w-32">
              <div className="space-y-2">
                <span className="text-xs font-semibold">Theme</span>
                <div className="flex space-x-2">
                  <div className="w-6 h-6 bg-purple-500 rounded border-2 border-purple-600"></div>
                  <div className="w-6 h-6 bg-blue-500 rounded"></div>
                  <div className="w-6 h-6 bg-gray-500 rounded"></div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
