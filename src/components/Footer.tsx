"use client";

import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
              <span className="text-white font-bold text-sm">AI</span>
            </div>
            <span className="font-bold text-xl">AI Insights</span>
          </div>
          <div className="text-sm text-gray-400 flex space-x-4">
            <Link href="/about-us" className="hover:text-white transition-colors">About Us</Link>
            <Link href="/contact-us" className="hover:text-white transition-colors">Contact Us</Link>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
        <Separator className="bg-gray-700 my-6" />
        <div className="text-center text-sm text-gray-400">
          <span>© {new Date().getFullYear()} AI Insights. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
}

