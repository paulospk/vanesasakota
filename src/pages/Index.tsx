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
        <div className="max-w-[1000px] mx-auto px-5 md:px-8 py-10 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 lg:gap-8">
            <div className="lg:col-span-3 space-y-2">
              <p className="uppercase tracking-[0.25em] text-[10px] md:text-[11px] font-medium text-muted-foreground">
                About
              </p>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground tracking-tight leading-tight">
                About Vanesa
              </h2>
            </div>
            <div className="lg:col-span-7 max-w-[640px] space-y-4 text-[14px] md:text-[15px] leading-[1.75] text-muted-foreground">
              <p>
                Vanesa is an integrative psychotherapist based in Sydney. She holds a Master of Psychotherapy and Counselling and a Bachelor of Science in Psychology, following a previous career in medical technology.
              </p>
              <p>
                Vanesa completed her clinical training and placements in Sydney, developing a practice that bridges traditional talk therapy with somatic and nervous system resolution.
              </p>
              <p>
                Her framework integrated top-down evidence-based modalities (CBT/ACT), as well as bottom-up somatic approaches such as Somatic Experiencing, Brain Spotting and Resource Therapy, a highly targeted Parts Work modality.
              </p>
              <p>
                She has a special interest in psychophysiological manifestations of chronic stress, trauma, and early life adversity, with a particular focus on pelvic floor guarding (including vaginismus, vulvodynia, and chronic pelvic pain) and the brain-skin axis (including eczema, psoriasis, and stress-related hair loss). Moreover, Vanesa specializes in broader functional and stress-responsive presentations where symptoms persist despite clear medical investigations.
              </p>
              <p>
                Vanesa takes pride in providing a grounded, highly collaborative, and relational therapeutic space aimed at assisting the nervous system in stepping down from chronic defense states.
              </p>
              <p>
                Outside of her practice, she enjoys family time, writing and a tough reformer pilates class.
              </p>
            </div>
          </div>
        </div>
      </section>

      <DetailsSection />

      {/* Education & Memberships */}
      <section className="bg-background border-b border-border">
        <div className="max-w-[1000px] mx-auto px-5 md:px-8 py-10 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 lg:gap-8">
            <div className="lg:col-span-3 space-y-2">
              <p className="uppercase tracking-[0.25em] text-[10px] md:text-[11px] font-medium text-muted-foreground">
                Credentials
              </p>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground tracking-tight leading-tight">
                Education &amp; Memberships
              </h2>
            </div>
            <div className="lg:col-span-7 max-w-[640px]">
              <ul className="divide-y divide-border/60">
                <li className="py-4 first:pt-0">
                  <p className="text-[15px] md:text-base text-foreground">Master of Psychotherapy and Counselling</p>
                  <p className="uppercase tracking-[0.2em] text-[10px] md:text-[11px] font-medium text-muted-foreground mt-2">Western Sydney University, 2023 — Dean&rsquo;s Merit List</p>
                </li>
                <li className="py-4">
                  <p className="text-[15px] md:text-base text-foreground">Bachelor of Science in Psychology</p>
                  <p className="uppercase tracking-[0.2em] text-[10px] md:text-[11px] font-medium text-muted-foreground mt-2">Griffith University, 2012</p>
                </li>
                <li className="py-4">
                  <p className="text-[15px] md:text-base text-foreground">Certificate, Clinical Resource Therapist</p>
                  <p className="uppercase tracking-[0.2em] text-[10px] md:text-[11px] font-medium text-muted-foreground mt-2">Resource Therapy International, 2023</p>
                </li>
                <li className="py-4">
                  <p className="text-[15px] md:text-base text-foreground">Certified Practising</p>
                  <p className="uppercase tracking-[0.2em] text-[10px] md:text-[11px] font-medium text-muted-foreground mt-2">Psychotherapy and Counselling Federation of Australia (PACFA)</p>
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
