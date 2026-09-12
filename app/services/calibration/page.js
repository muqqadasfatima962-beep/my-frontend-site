import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CalibrationServices from "@/components/CalibrationServices";

export default function ServiceCalibrationPage() {
  return (
    <div className="bg-white min-h-screen">
      <TopBar />
      <Navbar />
      <CalibrationServices />
      <Footer />
    </div>
  );
}