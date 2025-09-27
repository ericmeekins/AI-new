import { ActionSection } from "@/components/ActionSection";
import { Cards } from "@/components/Cards";
import { Faq } from "@/components/Faq";
import { HeroSection } from "@/components/HeroSection";
import { LatestPosts } from "@/components/LatestPosts";

export default function Home() {
  return (
    <>
      {/* Trigger deployment */}
      <HeroSection />
      <Cards />
      <ActionSection />
      <Faq />
      <LatestPosts />
    </>
  );
} 