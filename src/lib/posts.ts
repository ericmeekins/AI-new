export type Post = {
  slug: string;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  content: string;
};

export const posts: Post[] = [
  // ① 新的 PPLX 推广文放最前面
  {
    slug: "pplx-ai-search",
    title: "Perplexity Pro — The AI Search Tool That’s Changing the Game",
    author: "AI Insights Team",
    date: "2025-10-30",
    excerpt:
      "Discover how Perplexity Pro combines real-time web search and GPT-level intelligence to deliver accurate, cited, and up-to-date answers instantly.",
    content: `
      <h2>🚀 Discover Perplexity Pro — The AI Search Tool That’s Changing the Game</h2>
      <p>Tired of wasting time switching between Google, ChatGPT, and endless tabs just to get one clear answer? Perplexity Pro gives you real-time, cited, reliable answers — in one place.</p>

      <h3>Why it’s different</h3>
      <ul>
        <li>🔍 Real-time web results with sources</li>
        <li>⚡ GPT-level reasoning, fast</li>
        <li>📚 Built-in citations so you can trust the answer</li>
        <li>💬 Conversation memory for follow-ups</li>
      </ul>

      <p>Whether you're a content creator, student, or researcher, Perplexity Pro saves you hours of jumping between tabs.</p>

      <p><strong>👉 Try it here:</strong> <a href="https://pplx.ai/wilsonwils75983" target="_blank" rel="nofollow noopener sponsored">https://pplx.ai/wilsonwils75983</a></p>

      <p>Try it once and you’ll never go back to ordinary searching.</p>
    `,
  },

  // ② 下面才是你原来那篇 “Understanding Large Language Models…”
  {
    slug: "understanding-large-language-models",
    title: "Understanding Large Language Models: A Comprehensive Guide",
    author: "AI Insights Team",
    date: "2024-08-01",
    excerpt:
      "A deep dive into the architecture, capabilities, and future of modern Large Language Models (LLMs).",
    content: `
      <h2>Introduction to LLMs</h2>
      <p>Large Language Models (LLMs) are at the forefront of the current AI revolution. But what exactly are they? This post will demystify LLMs, from their technical foundations to their incredible applications.</p>

      <h2>Core Concepts</h2>
      <p>This section would contain the actual, detailed content of your blog post. To meet AdSense requirements, this needs to be high-quality, original content of a substantial length (ideally 800+ words).</p>

      <h2>Conclusion</h2>
      <p>A summary of the key points.</p>
    `,
  },

  {
    slug: "getting-started-with-generative-ai",
    title: "Getting Started with Generative AI for Content Creation",
    author: "AI Insights Team",
    date: "2024-08-03",
    excerpt:
      "A beginner's guide to using generative AI for creating stunning images, compelling text, and innovative ideas.",
    content: `
      <h2>What is Generative AI?</h2>
      <p>Generative AI refers to artificial intelligence systems capable of generating novel content, such as text, images, or music.</p>
      <h2>Practical Applications</h2>
      <p>...</p>
    `,
  },

  {
    slug: "what-is-ai-a-beginners-guide",
    title: "AI for Everyone: A Simple Guide to Understanding Artificial Intelligence",
    author: "AI Insights Team",
    date: "2024-08-05",
    excerpt:
      "What exactly is AI? This guide breaks down the core concepts of Artificial Intelligence in a simple, easy-to-understand way, no technical background required.",
    content: `
      <h2>Have You Met AI?</h2>
      <p>...</p>
    `,
  },

  // 下面这些我就不全展开了，保持你原来的顺序
  {
    slug: "navigating-the-ai-learning-landscape",
    title: "Where to Learn About AI: Your Guide to the Best Resources",
    author: "AI Insights Team",
    date: "2024-08-06",
    excerpt:
      "Feeling curious about AI but not sure where to start? We map out the best channels to learn about AI, from structured online courses to daily news sources.",
    content: `
      <h2>The AI Knowledge Quest</h2>
      <p>...</p>
    `,
  },
  {
    slug: "how-ai-is-changing-your-life",
    title: "The AI Revolution in Your Pocket: How AI is Changing Daily Life",
    author: "AI Insights Team",
    date: "2024-08-08",
    excerpt:
      "AI isn't just in labs; it's in your home, your car, and your phone. Discover the profound ways AI is already impacting your daily routines and what changes to expect next.",
    content: `
      <h2>AI: The Silent Partner in Your Day</h2>
      <p>...</p>
    `,
  },
  // ...（继续照你原来的那些：mastering-ai-tools、sharing-your-ai-knowledge、ai-types-explained … 一直到最后）
];

export const getPostBySlug = (slug: string): Post | undefined => {
  return posts.find((post) => post.slug === slug);
};
