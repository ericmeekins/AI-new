import { ActionSection } from "@/components/ActionSection";
import { Cards } from "@/components/Cards";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="flex-1">
      <Header />
      <HeroSection />
      <Cards />
      <ActionSection />
      <Faq />
      <Footer />
    </div>
  );
} 