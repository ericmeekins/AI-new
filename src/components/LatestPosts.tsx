import { Card } from "@/components/Card";
import { posts } from "@/lib/posts";
import Link from "next/link";

export function LatestPosts() {
  const latestPosts = posts.slice(0, 5);

  return (
    <section className="container py-16">
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-4xl font-bold">Latest Articles</h2>
        <p className="text-lg text-muted-foreground">
          Check out the latest articles from our blog.
        </p>
      </div>
      <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {latestPosts.map((post) => (
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
      <div className="mt-8 flex justify-center">
        <Link href="/blog" className="text-primary hover:underline">
          View all articles &rarr;
        </Link>
      </div>
    </section>
  );
}
