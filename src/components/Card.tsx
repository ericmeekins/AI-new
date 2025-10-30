// src/components/Card.tsx
"use client";

import Link from "next/link";

type CardProps = {
  slug: string;
  title: string;
  author: string;
  date: string;
  excerpt: string;
};

export function Card({ slug, title, author, date, excerpt }: CardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="block rounded-2xl bg-white/40 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <p className="text-sm text-slate-500">{date}</p>
      <h2 className="mt-2 text-xl font-semibold">{title}</h2>
      <p className="mt-3 text-sm text-slate-600 line-clamp-3">{excerpt}</p>
      <p className="mt-4 text-xs text-slate-500 flex items-center gap-2">
        <span className="inline-block h-1 w-1 rounded-full bg-slate-400" />
        {author}
      </p>
    </Link>
  );
}
