import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrainingServices from "@/components/TrainingServices";
import TrainingPrograms from "@/components/TrainingPrograms";

export default function TrainingServicesPage() {
  return (
    <div className="bg-white min-h-screen">
      <TopBar />
      <Navbar />
      <TrainingServices />
      <TrainingPrograms />
      <Footer />
    </div>
  );
}