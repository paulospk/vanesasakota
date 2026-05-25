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
                Vanesa is a psychotherapist based in Sydney. She holds a Master of Psychotherapy and Counselling and a Bachelor of Science in Psychology, following a previous career in medical technology. She completed her training and placements in Sydney, developing a practice that integrates traditional psychotherapy with trauma-informed somatic and mind-body approaches.
              </p>
              <p>
                She works with adults experiencing anxiety, trauma, chronic stress, and persistent physical symptoms. She has a particular interest in psychophysiological and stress-sensitive conditions, including chronic pelvic pain, vulvodynia, vaginismus, functional neurological symptoms, and stress-responsive skin conditions.
              </p>
              <p>
                Her work draws on evidence-based therapies such as CBT and ACT, alongside somatic and parts-based approaches including Resource Therapy and Brainspotting. She engages in ongoing clinical supervision and professional development to support safe, ethical, and effective practice.
              </p>
              <p>
                Vanesa offers a collaborative and relational therapeutic space that supports emotional steadiness, greater self-understanding, and meaningful change over time.
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
