import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Service from "@/components/Service";
import CoreValues from "@/components/CoreValues";
import Clients from "@/components/Clients";
import Footer from "@/components/Footer"; // Footer component import kiya gaya hai

export default function Home() {
  return (
    <main className="w-full min-h-screen overflow-x-hidden">
      <TopBar />
      <Navbar />
      <Hero />
      <Service />
      <CoreValues />
      <Clients />
      <Footer /> {/* Clients section ke bilkul neechay render hoga */}
    </main>
  );
}