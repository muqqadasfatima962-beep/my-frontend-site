import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import ContactHero from "@/components/ContactHero";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
      <TopBar />
      <Navbar />
      <ContactHero />
      <ContactSection />
      <Footer />
    </div>
  );
}