import { Helmet } from "react-helmet-async";

import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>About Vanesa Sakota | Integrative Psychotherapist Sydney CBD</title>
        <meta name="description" content="Vanesa Sakota is a PACFA-registered psychotherapist in Sydney CBD with a Master of Psychotherapy from Western Sydney University." />
        <link rel="canonical" href="https://www.vanesasakota.com.au/about" />
        <meta property="og:title" content="About Vanesa Sakota | Integrative Psychotherapist Sydney CBD" />
        <meta property="og:description" content="PACFA-registered psychotherapist in Sydney CBD. Master of Psychotherapy, Western Sydney University. Integrative mind-body approach." />
        <meta property="og:url" content="https://www.vanesasakota.com.au/about" />
      </Helmet>
      <Navbar />


      {/* Hero */}
      <section className="bg-hero border-b border-border">
        <div className="max-w-[1000px] mx-auto px-5 md:px-8 py-10 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
            <div className="space-y-4 md:space-y-5 animate-fade-up">
              <p className="uppercase tracking-[0.25em] text-[10px] md:text-[11px] font-medium text-muted-foreground">
                About
              </p>
              <h1 className="font-serif text-3xl md:text-5xl tracking-tight text-foreground leading-[1.05]">
                About Vanesa
              </h1>
              <div className="space-y-4 text-muted-foreground text-[15px] md:text-base leading-[1.7]">
                <p>
                  Vanesa takes pride in the long-term therapeutic alliances she builds with her clients, grounded in trust and collaboration.
                </p>
                <p>
                  Driven by a lifelong curiosity about human behaviour, Vanesa completed her undergraduate training in <strong className="font-semibold text-foreground">Psychology</strong> at <strong className="font-semibold text-foreground">Griffith University</strong> in <strong className="font-semibold text-foreground">2008</strong>. Believing that effective therapy requires both academic rigour and lived maturity, she intentionally took time to gain real-world experience before entering clinical practice.
                </p>
                <p>
                  This journey led to a dynamic <strong className="font-semibold text-foreground">10 year tenure in MedTech</strong>, where Vanesa served as <strong className="font-semibold text-foreground">Head of Product</strong> for an <strong className="font-semibold text-foreground">Australian medical software startup</strong>. Leading international teams, and navigating high-stakes environments, provided her with a unique understanding of systemic pressure, high-performance burnout, and personal recalibration.
                </p>
                <p>
                  With over a decade since completing undergraduate training, a Masters of Psychology pathway was no longer straightforward - instead pursuing a <strong className="font-semibold text-foreground">Master of Psychotherapy and Counselling</strong> at <strong className="font-semibold text-foreground">Western Sydney University</strong>, completed in 2023. This was a rigorous, highly experiential program grounded in evidence based trauma-informed practice and the critical development of <em>the person of the therapist</em>.
                </p>
                <p>
                  Trained directly by academic and psychotherapist Mrs <strong className="font-semibold text-foreground">Penny Gardner</strong>, the author of <em>A Safe Place for Change</em>, and under the ongoing clinical supervision of psychologist <strong className="font-semibold text-foreground">Philipa Thornton</strong> for clinical parts work, Vanesa draws on rich real-world context, clinical rigour and deep empathy to her private practice.
                </p>
                <p>
                  Outside of practice, Vanesa prioritises time with family and loved ones, staying active through strength training, and getting out in nature as much as possible.
                </p>
              </div>
            </div>
            <div className="animate-fade-up" style={{ animationDelay: "100ms" }}>
              <picture>
                <source srcSet="/images/room-1040.webp" type="image/webp" />
                <img
                  src="/images/room-1040.jpg"
                  alt="Vanesa Sakota's therapy room"
                  width={1040}
                  height={1387}
                  loading="lazy"
                  decoding="async"
                  className="w-full aspect-[4/3] object-cover"
                />
              </picture>

            </div>
          </div>
        </div>
      </section>

      {/* Education & Memberships */}
      <section>
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
                  <p className="uppercase tracking-[0.2em] text-[10px] md:text-[11px] font-medium text-muted-foreground mt-2">Western Sydney University, 2023: Dean&rsquo;s Merit List</p>
                </li>
                <li className="py-4">
                  <p className="text-[15px] md:text-base text-foreground">Bachelor of Psychology</p>
                  <p className="uppercase tracking-[0.2em] text-[10px] md:text-[11px] font-medium text-muted-foreground mt-2">Griffith University, 2012</p>
                </li>
                <li className="py-4">
                  <p className="text-[15px] md:text-base text-foreground">Registered Psychotherapist</p>
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

export default About;
