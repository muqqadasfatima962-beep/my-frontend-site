import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import AboutContent from "@/components/AboutContent";
import TeamAndIndustrySection from "@/components/TeamAndIndustrySection";

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      <TopBar />
      <Navbar />
      <AboutSection />
      <AboutContent />
      <TeamAndIndustrySection />
      <Footer />
    </div>
  );
}