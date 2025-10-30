// src/lib/posts.ts
export type Post = {
  slug: string;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  content: string;
};

export const posts: Post[] = [
  {
    slug: "pplx-ai-search",
    title: "Perplexity Pro — The AI Search Tool That’s Changing the Game",
    author: "AI Insights Team",
    date: "Oct 30, 2025",
    excerpt:
      "Discover how Perplexity Pro combines real-time web search and GPT-level intelligence to deliver accurate, cited, and up-to-date answers instantly.",
    content: `
      <p>Are you still switching between Google, ChatGPT, and endless tabs just to get one clear answer?</p>
      <p>Perplexity Pro is an AI-powered search engine that gives you real-time, cited, up-to-date answers in one place.</p>
      <h2>Why it’s powerful</h2>
      <ul>
        <li>Real-time web results</li>
        <li>GPT-level reasoning</li>
        <li>Built-in citations</li>
        <li>Conversation memory</li>
      </ul>
      <p>👉 <a href="https://pplx.ai/wilsonwils75983" target="_blank" rel="nofollow noopener sponsored">Try Perplexity Pro here</a></p>
    `,
  },

  // 下面是你原来就有的文章，继续保留
  {
    slug: "understanding-large-language-models",
    title: "Understanding Large Language Models: A Comprehensive Guide",
    author: "AI Insights Team",
    date: "2024-08-01",
    excerpt:
      "A deep dive into the architecture, capabilities, and future of modern Large Language Models (LLMs).",
    content: `
      <h2>Introduction to LLMs</h2>
      <p>Large Language Models (LLMs) are at the forefront...</p>
    `,
  },

  // ... 你后面的文章继续 ...
];

export const getPostBySlug = (slug: string): Post | undefined => {
  return posts.find((post) => post.slug === slug);
};
