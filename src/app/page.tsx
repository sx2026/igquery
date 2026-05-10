import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import HomeClient from "@/components/home/HomeClient";
import { HomeProviders } from "@/components/home/HomeProviders";
import dynamic from "next/dynamic";

const LandingSections = dynamic(() => import("@/components/home/LandingSections"), {
  ssr: true,
});

const FAQ = dynamic(() => import("@/components/home/FAQ"), {
  ssr: true,
});

const Footer = dynamic(() => import("@/components/layout/Footer"), {
  ssr: true,
});

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-grow">
        <Hero />
        <HomeProviders>
          <HomeClient />
        </HomeProviders>
        <LandingSections />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}
