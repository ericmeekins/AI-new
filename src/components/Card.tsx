"use client";

import Link from "next/link";
import {
  Card as UICard,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Calendar, User } from "lucide-react";

interface CardProps {
  slug: string;
  title: string;
  author: string;
  date: string;
  excerpt: string;
}

export function Card({ slug, title, author, date, excerpt }: CardProps) {
  return (
    <UICard className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
      <Link href={`/blog/${slug}`} className="block">
        <CardHeader>
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
            <Calendar className="w-4 h-4" />
            <time dateTime={date}>
              {new Date(date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </time>
          </div>
          <CardTitle className="text-lg font-semibold group-hover:text-purple-600 transition-colors line-clamp-2">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 text-sm line-clamp-3">{excerpt}</p>
        </CardContent>
        <CardFooter>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <User className="w-4 h-4" />
            <span>{author}</span>
          </div>
        </CardFooter>
      </Link>
    </UICard>
  );
}





