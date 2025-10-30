// src/app/blog/[slug]/page.tsx
import { getPostBySlug } from "@/lib/posts";
import { notFound } from "next/navigation";

type PageProps = {
  params: {
    slug: string;
  };
};

export default function BlogPostPage({ params }: PageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  return (
    <div className="container mx-auto max-w-3xl py-16">
      <p className="text-sm text-slate-500">{post.date}</p>
      <h1 className="mt-2 text-4xl font-bold">{post.title}</h1>
      <p className="mt-3 text-slate-500">By {post.author}</p>

      {/* 摘要 */}
      {post.excerpt ? (
        <p className="mt-6 rounded-xl bg-slate-50/60 p-4 text-slate-700">
          {post.excerpt}
        </p>
      ) : null}

      {/* 正文是 html，所以要 dangerouslySetInnerHTML */}
      <div
        className="prose prose-slate mt-10 max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
}
