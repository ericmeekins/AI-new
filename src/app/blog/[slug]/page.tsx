import { Header } from "@/components/Header";
import { getPostBySlug, posts } from "@/lib/posts";
import { JetBrains_Mono } from "next/font/google";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function Post({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="flex-1">
      <Header />
      <div
        className={
          "prose prose-lg mx-auto mb-16 mt-8 " + jetbrainsMono.variable
        }
      >
        <h1>{post.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: post.content,
          }}
        />
      </div>
    </div>
  );
}
