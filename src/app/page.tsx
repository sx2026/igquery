import dynamic from "next/dynamic";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import HomeClient from "@/components/home/HomeClient";
import LandingSections from "@/components/home/LandingSections";

const FAQ = dynamic(() => import("@/components/home/FAQ"));

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-grow">
        <Hero />
        <HomeClient />
        <LandingSections />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}
