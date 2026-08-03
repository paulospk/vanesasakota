import { Helmet } from "react-helmet-async";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const pillars: { title: ReactNode; description: ReactNode }[] = [
  {
    title: "Emotional Awareness & Expression Therapy (EAET)",
    description: (
      <>
        Developed specifically for chronic pain by leading mind-body medicine pioneers <strong className="text-foreground font-medium">Dr. Howard Schubiner</strong> and <strong className="text-foreground font-medium">Dr. Mark Lumley</strong>, EAET is a neuro-somatic framework. Instead of focusing on adapting to discomfort, EAET works by identifying and safely processing hidden emotional stressors in order to deactivate the central nervous system's chronic threat response.
      </>
    ),
  },
  {
    title: "Clinical Parts Therapy",
    description: (
      <>
        Founded by Australian psychologist <strong className="text-foreground font-medium">Professor Gordon Emmerson</strong> as Resource Therapy, this is a trauma-informed, psychodynamic framework deeply rooted in relational and attachment concepts. In chronic illness, physical symptoms can manifest as a somatic defense mechanism, the body speaking what a part cannot voice. By safely addressing underlying attachment wounds and internal conflicts, we aim to reduce systemic tension driving physical pain.
      </>
    ),
  },
  {
    title: "Imagery Rescripting",
    description: (
      <>
        To gently re-enter and update early memories or relational experiences that may be maintaining a heightened sense of physiological vulnerability.
      </>
    ),
  },
  {
    title: "Brainspotting",
    description: (
      <>
        A brain-body trauma therapy related to EMDR, using a fixed eye position to access what talking alone doesn't always reach.
      </>
    ),
  },
  {
    title: "Grounding Frameworks (CBT & ACT)",
    description: (
      <>
        To support this deeper processing, I integrate elements of <strong className="text-foreground font-medium">CBT</strong> and <strong className="text-foreground font-medium">ACT</strong> as vital grounding frameworks. While EAET and Parts Work target symptom resolution, CBT and ACT provide the essential structural support. They offer practical tools to navigate daily stress, defuse from overwhelming thoughts, and build the psychological flexibility needed to feel safe in your body.
      </>
    ),
  },
];

const Approach = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>The Approach | Vanesa Sakota Psychotherapy Sydney</title>
        <meta name="description" content="An integrative mind-body psychotherapy approach drawing on EAET, Clinical Parts Therapy, Imagery Rescripting, Brainspotting, CBT and ACT." />
        <link rel="canonical" href="https://www.vanesasakota.com.au/approach" />
        <meta property="og:title" content="The Approach | Vanesa Sakota Psychotherapy Sydney" />
        <meta property="og:description" content="An integrative mind-body psychotherapy approach drawing on EAET, Clinical Parts Therapy, Imagery Rescripting, Brainspotting, CBT and ACT." />
        <meta property="og:url" content="https://www.vanesasakota.com.au/approach" />
      </Helmet>
      <Navbar />

      {/* Hero */}
      <section className="bg-hero border-b border-border">
        <div className="max-w-[1000px] mx-auto px-5 md:px-8 py-10 md:py-20">
          <div className="space-y-4 md:space-y-5 animate-fade-up max-w-[720px]">
            <p className="uppercase tracking-[0.25em] text-[10px] md:text-[11px] font-medium text-muted-foreground">
              Approach
            </p>
            <h1 className="font-serif text-3xl md:text-5xl tracking-tight text-foreground leading-[1.05]">
              The Approach
            </h1>
            <p className="text-muted-foreground text-[15px] md:text-base leading-[1.7]">
              My approach draws on:
            </p>
          </div>
        </div>
      </section>

      {/* Modalities */}
      <section>
        <div className="max-w-[1000px] mx-auto px-5 md:px-8 py-10 md:py-20">
          <div className="max-w-[680px]">
            <ul className="space-y-6">
              {pillars.map((p, i) => (
                <li key={i}>
                  <h2 className="font-serif text-xl md:text-2xl text-foreground leading-snug mb-2">
                    {p.title}
                  </h2>
                  <p className="text-muted-foreground text-[15px] md:text-base leading-[1.75]">
                    {p.description}
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

export default Approach;
