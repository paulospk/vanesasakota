import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

import DetailsSection from "@/components/DetailsSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Vanesa Sakota | Psychotherapist Sydney CBD</title>
        <meta name="description" content="In-person psychotherapy in Sydney CBD for anxiety, trauma, chronic stress, chronic pelvic pain, vulvodynia, vaginismus and stress-responsive skin conditions. PACFA registered." />
        <link rel="canonical" href="https://vanesasakota.com.au/" />
        <meta property="og:title" content="Vanesa Sakota | Psychotherapist Sydney CBD" />
        <meta property="og:description" content="In-person psychotherapy in Sydney CBD for anxiety, trauma, chronic stress and stress-sensitive physical conditions. PACFA registered." />
        <meta property="og:url" content="https://vanesasakota.com.au/" />
        <meta property="og:image" content="https://vanesasakota.com.au/og-image.jpg" />
      </Helmet>
      <Navbar />
      <HeroSection />

      {/* About Vanesa */}
      <section className="bg-background border-b border-border">
        <div className="max-w-[1100px] mx-auto px-5 md:px-8 py-10 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 lg:gap-8">
            <div className="lg:col-span-3 space-y-2">
              <p className="uppercase tracking-[0.25em] text-[10px] md:text-[11px] font-medium text-muted-foreground">
                Profile
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground tracking-tight leading-tight">
                About Vanesa
              </h2>
            </div>
            <div className="lg:col-span-7 max-w-[680px] space-y-4 text-[15px] md:text-base leading-[1.75] text-muted-foreground">
              <p>
                I am a registered psychotherapist working with adults experiencing <strong className="text-foreground font-medium">anxiety</strong>, <strong className="text-foreground font-medium">trauma</strong>, <strong className="text-foreground font-medium">chronic stress</strong>, and <strong className="text-foreground font-medium">persistent physical symptoms not fully explained by medical testing</strong>.
              </p>
              <p>
                My clinical focus centers on psychophysiological and stress-sensitive conditions, including <strong className="text-foreground font-medium">chronic pelvic pain</strong>, <strong className="text-foreground font-medium">vulvodynia</strong>, <strong className="text-foreground font-medium">vaginismus</strong>, and stress-responsive skin conditions such as <strong className="text-foreground font-medium">psoriasis</strong>, <strong className="text-foreground font-medium">eczema</strong>, <strong className="text-foreground font-medium">atopic dermatitis</strong>, <strong className="text-foreground font-medium">hives</strong>, etc. These presentations frequently highlight a complex interplay between the nervous system, early experience, and somatic expression, requiring a careful and measured therapeutic approach.
              </p>
              <p>
                My practice integrates trauma-informed, mind-body approaches alongside Emotional Awareness and Expression Therapy (EAET), targeted Parts Work, and grounding cognitive frameworks. These modalities are applied within a structured biopsychosocial framework, ensuring that treatment considers the whole person rather than addressing a presenting symptom in isolation.
              </p>
              <p>
                The therapeutic space I maintain is intentional, relational, and unhurried, prioritizing clinical steadiness, self-awareness, and the pacing necessary for safe and sustainable integration.
              </p>
            </div>
          </div>
        </div>
      </section>

      <DetailsSection />

      {/* Education & Memberships */}
      <section className="bg-background border-b border-border">
        <div className="max-w-[1100px] mx-auto px-5 md:px-8 py-10 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 lg:gap-8">
            <div className="lg:col-span-3 space-y-2">
              <p className="uppercase tracking-[0.25em] text-[10px] md:text-[11px] font-medium text-muted-foreground">
                Credentials
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground tracking-tight leading-tight">
                Education &amp; Memberships
              </h2>
            </div>
            <div className="lg:col-span-7 max-w-[680px]">
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
