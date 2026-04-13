import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import HomeClient from "@/components/home/HomeClient";
import LandingSections from "@/components/home/LandingSections";
import FAQ from "@/components/home/FAQ";
import { HomeProviders } from "@/components/home/HomeProviders";

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
