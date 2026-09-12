import TopBar from "../../components/TopBar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ServiceContent from "../../components/ServiceContent";
export default function servicesPage() {
  return (
    <div className="bg-white min-h-screen">
      <TopBar />
      <Navbar />
      <ServiceContent/>
      <Footer />
    </div>
  );
}