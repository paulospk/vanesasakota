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
                Vanesa is a psychotherapist based in Sydney. She holds a Master of Psychotherapy and Counselling and a Bachelor of Science in Psychology, following a previous career in medical technology. She completed her training and placements in Sydney, developing a practice that integrates traditional talk therapy with trauma-informed somatic and mind-body approaches.
              </p>
              <p>
                Vanesa works with people experiencing persistent physical symptoms where stress physiology, emotional processes, and nervous system patterns may be contributing to symptom intensity, persistence, or distress. This includes complex symptom presentations that are not fully explained by medical investigations, as well as stress-sensitive conditions where symptoms are medically defined but influenced by nervous system arousal and stress load.
              </p>
              <p>
                She has a particular interest in pelvic pain presentations, including vulvodynia, vaginismus, and chronic pelvic pain, where pelvic floor muscle guarding, threat responses, and central sensitisation processes may be relevant. She also works with stress-responsive skin and hair conditions such as eczema, psoriasis, and stress-related hair loss, where symptom flares often correlate with stress physiology and emotional load.
              </p>
              <p>
                Her work draws on evidence-based therapies such as CBT and ACT, alongside somatic and parts-based modalities such as Resource Therapy and Brainspotting. She engages in ongoing clinical supervision to stay current and grounded in her practice.
              </p>
              <p>
                Vanesa offers a grounded, collaborative, and relational therapeutic space that supports emotional steadiness, flexibility, and meaningful change over time.
              </p>
              <p>
                When she is not with her clients, she enjoys time with family, writing, and getting to a Pilates class.
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
