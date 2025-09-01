"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChevronDown, Bell, UserCircle } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
            <span className="text-white font-bold text-sm">AI</span>
          </div>
          <span className="font-bold text-xl">AI Insights</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
            <Link href="/blog" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Blog
            </Link>
            <Link href="/about-us" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              About Us
            </Link>
            <Link href="/contact-us" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Contact Us
            </Link>
            <div className="flex items-center gap-4">
              <Bell className="h-6 w-6 text-gray-600 cursor-pointer" />
              <UserCircle className="h-8 w-8 text-gray-600 cursor-pointer" />
            </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-6 mt-8">
                <Link href="/blog" className="text-lg font-medium text-gray-800 hover:text-purple-600 transition-colors">
                  Blog
                </Link>
                <Link href="/about-us" className="text-lg font-medium text-gray-800 hover:text-purple-600 transition-colors">
                  About Us
                </Link>
                <Link href="/contact-us" className="text-lg font-medium text-gray-800 hover:text-purple-600 transition-colors">
                  Contact Us
                </Link>
                <div className="border-t pt-6">
                  <div className="flex items-center gap-4">
                    <UserCircle className="h-8 w-8 text-gray-600" />
                    <span className="font-medium">您的账户</span>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

