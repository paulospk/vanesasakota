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

      {/* Education & Memberships */}
      <section className="border-b border-border">
        <div className="max-w-[1100px] mx-auto px-5 md:px-8 py-8 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <h2 className="font-serif text-2xl md:text-3xl text-foreground">
                Education &amp; Memberships
              </h2>
            </div>
            <div className="lg:col-span-7 max-w-[680px]">
              <ul className="space-y-6">
                <li>
                  <p className="text-foreground">Master of Psychotherapy and Counselling</p>
                  <p className="text-muted-foreground text-sm mt-1">Western Sydney University, 2023 (Dean&rsquo;s Merit List)</p>
                </li>
                <li>
                  <p className="text-foreground">Bachelor of Science in Psychology</p>
                  <p className="text-muted-foreground text-sm mt-1">Griffith University, 2012</p>
                </li>
                <li>
                  <p className="text-foreground">Certificate, Clinical Resource Therapy</p>
                  <p className="text-muted-foreground text-sm mt-1">Resource Therapy International, 2023</p>
                </li>
                <li>
                  <p className="text-foreground">Registered Member</p>
                  <p className="text-muted-foreground text-sm mt-1">Psychotherapy and Counselling Federation of Australia (PACFA)</p>
                </li>
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
