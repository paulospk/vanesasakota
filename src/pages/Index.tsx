import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

import DetailsSection from "@/components/DetailsSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />

      {/* About Vanesa */}
      <section className="bg-background border-b border-border">
        <div className="max-w-[1100px] mx-auto px-5 md:px-8 py-6 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 lg:gap-8">
            <div className="lg:col-span-3">
              <p className="uppercase tracking-[0.25em] text-[11px] font-semibold text-muted-foreground mb-4">
                About
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-tight">
                About Vanesa
              </h2>
            </div>
            <div className="lg:col-span-7 max-w-[680px] space-y-4 text-base md:text-lg leading-[1.8] text-muted-foreground">
              <p>
                Vanesa is an integrative psychotherapist based in Sydney. She graduated with a Master of Psychotherapy and Counselling and a Bachelor of Science in Psychology, following a previous seven-year career as a Head of Product within the medical technology sector.
              </p>
              <p>
                Vanesa completed her clinical training and placements in Sydney, developing a practice that bridges traditional talk therapy with somatic and nervous system resolution. Her framework combines top-down evidence-based modalities, including Cognitive Behavioural Therapy (CBT) and Acceptance and Commitment Therapy (ACT), with bottom-up somatic approaches—specifically Resource Therapy (Parts Work), Somatic Experiencing, and polyvagal principles—to address complex psychophysiological distress.
              </p>
              <p>
                She has a special interest in the physiological manifestations of chronic stress, trauma, and early life adversity, with a particular focus on pelvic floor neuro-muscular guarding (including vaginismus, vulvodynia, and chronic pelvic pain) and the brain-skin axis (including eczema, psoriasis, and stress-related hair loss). Moreover, Vanesa specializes in broader functional and stress-responsive presentations where symptoms persist despite clear medical investigations.
              </p>
              <p>
                Vanesa takes pride in providing a grounded, highly collaborative, and relational therapeutic space aimed at assisting the nervous system in stepping down from chronic defense states. Outside of her clinical practice, she enjoys modern classic design, writing, and reformer pilates.
              </p>
            </div>
          </div>
        </div>
      </section>

      <DetailsSection />

      {/* Education & Memberships */}
      <section className="bg-background border-b border-border">
        <div className="max-w-[1100px] mx-auto px-5 md:px-8 py-6 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 lg:gap-8">
            <div className="lg:col-span-3">
              <p className="uppercase tracking-[0.25em] text-[11px] font-semibold text-muted-foreground mb-4">
                Credentials
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-tight">
                Education &amp; Memberships
              </h2>
            </div>
            <div className="lg:col-span-7 max-w-[680px]">
              <ul className="space-y-6 text-base md:text-lg leading-[1.8]">
                <li className="text-muted-foreground">
                  <span className="text-foreground font-medium">Master of Psychotherapy and Counselling</span>
                  <span className="px-2 text-muted-foreground">|</span>
                  Western Sydney University, 2023 (Dean&rsquo;s Merit List)
                </li>
                <li className="text-muted-foreground">
                  <span className="text-foreground font-medium">Bachelor of Science in Psychology</span>
                  <span className="px-2 text-muted-foreground">|</span>
                  Griffith University, 2012
                </li>
                <li className="text-muted-foreground">
                  <span className="text-foreground font-medium">Certificate, Clinical Resource Therapist</span>
                  <span className="px-2 text-muted-foreground">|</span>
                  Resource Therapy International, 2023
                </li>
                <li className="text-muted-foreground">
                  <span className="text-foreground font-medium">Certified Practising</span>
                  <span className="px-2 text-muted-foreground">|</span>
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
