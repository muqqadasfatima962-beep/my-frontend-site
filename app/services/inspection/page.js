import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InspectionContent from "@/components/InspectionContent";

export default function ServiceInspectionPage() {
  return (
    <div className="bg-white min-h-screen">
      <TopBar />
      <Navbar />
      <InspectionContent />
      <Footer />
    </div>
  );
}