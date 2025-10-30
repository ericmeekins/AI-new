// src/app/blog/page.tsx
import { Card } from "@/components/Card";
import { posts } from "@/lib/posts";
import { JetBrains_Mono } from "next/font/google";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export default function Blog() {
  return (
    <div
      className={
        "container flex flex-col items-center gap-16 " +
        jetbrainsMono.variable
      }
    >
      <div className="mt-16 flex flex-col items-center">
        <h1 className="text-5xl font-bold">Blog</h1>
        <p className="mt-4 text-xl">
          Here you can find all the articles of the blog.
        </p>
      </div>

      <div className="mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Card
            key={post.slug}
            slug={post.slug}
            title={post.title}
            author={post.author}
            date={post.date}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </div>
  );
}
