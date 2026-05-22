import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DetailsSection from "@/components/DetailsSection";
import FooterSection from "@/components/FooterSection";

const credentials = [
  { title: "Master of Psychotherapy and Counselling", detail: "Western Sydney University, 2023 | Dean's Merit List" },
  { title: "Bachelor of Science in Psychology", detail: "Griffith University, 2012" },
  { title: "Certificate, Clinical Resource Therapy", detail: "Resource Therapy International, 2023" },
  { title: "Certified Practising", detail: "Psychotherapy and Counselling Federation of Australia (PACFA)" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <DetailsSection />

      {/* Credentials */}
      <section className="bg-secondary/40 border-b border-border">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-4">
              <p className="uppercase tracking-[0.25em] text-[11px] font-semibold text-espresso/60 mb-5">
                Credentials
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-espresso leading-[1.15]">
                Education & Memberships
              </h2>
            </div>
            <ul className="lg:col-span-7 lg:col-start-6 divide-y divide-espresso/15 border-t border-espresso/15">
              {credentials.map((c) => (
                <li key={c.title} className="py-6">
                  <p className="font-serif text-xl md:text-2xl text-espresso leading-snug">
                    {c.title}
                  </p>
                  <p className="text-chocolate/80 text-sm mt-2 tracking-wide">
                    {c.detail}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default Index;
