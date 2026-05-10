import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ClinicalOrientation from "@/components/ClinicalOrientation";
import DetailsSection from "@/components/DetailsSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ClinicalOrientation />
      <DetailsSection />

      {/* Education & Memberships */}
      <section className="border-b border-border">
        <div className="max-w-[1100px] mx-auto px-5 md:px-8 py-8 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="uppercase tracking-[0.2em] text-xs font-semibold text-muted-foreground mb-3">
                Credentials
              </p>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground">
                Education &amp; Memberships
              </h2>
            </div>
            <div className="lg:col-span-7 text-muted-foreground leading-relaxed max-w-[680px]">
              <ul className="space-y-3">
                <li className="border-b border-border/60 pb-3">Master of Psychotherapy and Counselling — Western Sydney University, 2023</li>
                <li className="border-b border-border/60 pb-3">Bachelor of Science in Psychology — Griffith University, 2012</li>
                <li className="border-b border-border/60 pb-3">Certificate, Clinical Resource Therapy — Resource Therapy International, 2023</li>
                <li className="pb-3">Registered Member, Psychotherapy and Counselling Federation of Australia (PACFA)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default Index;
