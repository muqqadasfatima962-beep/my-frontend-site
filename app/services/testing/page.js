import TopBar from "../../../components/TopBar";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import TestingServices from "../../../components/TestingServices";
export default function TestingServicesPage() {
  return (
    <div className="bg-white min-h-screen">
      <TopBar />
      <Navbar />
      <TestingServices/>
      <Footer />
    </div>
  );
}