import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DetailsSection from "@/components/DetailsSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <DetailsSection />
      <FooterSection />
    </div>
  );
};

export default Index;
