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
      <section className="bg-secondary/40 border-b border-border">
        <div className="max-w-[1100px] mx-auto px-5 md:px-8 py-12 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="uppercase tracking-[0.25em] text-[11px] font-semibold text-accent mb-4">
                Credentials
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-primary leading-tight">
                Education &amp; Memberships
              </h2>
            </div>
            <div className="lg:col-span-7 max-w-[680px]">
              <ul className="space-y-6 text-base md:text-lg leading-[1.8]">
                <li className="text-muted-foreground">
                  <span className="text-primary font-medium">Master of Psychotherapy and Counselling</span>
                  <span className="px-2 text-accent">|</span>
                  Western Sydney University, 2023 (Dean&rsquo;s Merit List)
                </li>
                <li className="text-muted-foreground">
                  <span className="text-primary font-medium">Bachelor of Science in Psychology</span>
                  <span className="px-2 text-accent">|</span>
                  Griffith University, 2012
                </li>
                <li className="text-muted-foreground">
                  <span className="text-primary font-medium">Certificate, Clinical Resource Therapy</span>
                  <span className="px-2 text-accent">|</span>
                  Resource Therapy International, 2023
                </li>
                <li className="text-muted-foreground">
                  <span className="text-primary font-medium">Registered Member</span>
                  <span className="px-2 text-accent">|</span>
                  Psychotherapy and Counselling Federation of Australia (PACFA)
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
