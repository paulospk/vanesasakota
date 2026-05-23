import type { ReactNode } from "react";

const pillars: { title: string; description: ReactNode }[] = [
  {
    title: "Cognitive Processes",
    description: (
      <>
        Drawing on <strong className="text-foreground font-medium">Cognitive Behavioural Therapy (CBT)</strong> and <strong className="text-foreground font-medium">Acceptance and Commitment Therapy (ACT)</strong>, treatment addresses thought patterns, core beliefs, and psychological flexibility that can influence symptom-related distress and everyday functioning.
      </>
    ),
  },
  {
    title: "Emotional & Relational Processes",
    description: (
      <>
        Using <strong className="text-foreground font-medium">Resource Therapy (Parts Work)</strong>, we explore internal emotional states and protective patterns that may have developed in response to historical stress, adversity, or a lack of environmental safety. The goal is to support greater self-awareness, emotional integration, and more adaptive responding.
      </>
    ),
  },
  {
    title: "Autonomic & Physiological Processes",
    description: (
      <>
        Drawing on <strong className="text-foreground font-medium">Somatic Experiencing</strong> and contemporary understandings of autonomic nervous system functioning, treatment focuses on increasing awareness of physiological stress responses, supporting the body&rsquo;s capacity for regulation, and assisting the nervous system in shifting out of chronic threat states.
      </>
    ),
  },
];

const helpItems: { title: string; description: ReactNode }[] = [
  {
    title: "Pelvic Health & Somatic Protection",
    description: (
      <>
        Working with the nervous system&rsquo;s involuntary <strong className="text-foreground font-medium">protective responses</strong> and muscular guarding patterns in conditions such as <strong className="text-foreground font-medium">vaginismus</strong>, <strong className="text-foreground font-medium">vulvodynia</strong>, and <strong className="text-foreground font-medium">chronic pelvic pain</strong>.
      </>
    ),
  },
  {
    title: "The Mind-Skin Connection",
    description: (
      <>
        Addressing the psychological, emotional, and <strong className="text-foreground font-medium">neurogenic inflammatory factors</strong> that can influence stress-responsive conditions such as <strong className="text-foreground font-medium">eczema</strong>, <strong className="text-foreground font-medium">psoriasis</strong>, <strong className="text-foreground font-medium">stress-related hair loss</strong>, and <strong className="text-foreground font-medium">vitiligo</strong>.
      </>
    ),
  },
  {
    title: "Functional & Stress-Responsive Presentations",
    description: (
      <>
        Working with <strong className="text-foreground font-medium">functional and psychophysiological symptoms</strong>: very real physical experiences that map to altered nervous system signalling rather than structural or organic disease.
      </>
    ),
  },
];

export default function DetailsSection() {
  return (
    <>
      {/* The Systems Approach */}
      <section className="bg-background border-b border-border">
        <div className="max-w-[1100px] mx-auto px-5 md:px-8 py-12 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-tight">
                An Integrative Systems Approach
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-12 max-w-[680px]">
              <p className="text-muted-foreground text-base md:text-lg leading-[1.8]">
                Persistent physical symptoms are rarely maintained by a single factor. My approach considers the continuous interaction between cognitive, emotional, behavioural, relational, and autonomic processes that may contribute to symptom persistence following appropriate medical assessment.
              </p>
              <p className="text-muted-foreground text-base md:text-lg leading-[1.8]">
                Treatment integrates evidence-based psychotherapy with somatic approaches to help individuals understand symptom patterns, manage symptom-related distress, improve daily functioning, and support long-term recovery while working alongside ongoing medical care.
              </p>
              <ul className="space-y-10">
                {pillars.map((p) => (
                  <li key={p.title} className="border-l-2 border-border pl-6">
                    <h3 className="font-serif text-xl md:text-2xl text-foreground leading-snug mb-2">
                      {p.title}
                    </h3>
                    <p className="text-muted-foreground text-base leading-[1.8]">
                      {p.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Focus */}
      <section className="bg-secondary/40 border-b border-border">
        <div className="max-w-[1100px] mx-auto px-5 md:px-8 py-12 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="uppercase tracking-[0.25em] text-[11px] font-semibold text-muted-foreground mb-4">
                Clinical Focus
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-tight">
                Areas of Practice
              </h2>
            </div>
            <div className="lg:col-span-7">
              <ul className="grid grid-cols-1 gap-y-12 max-w-[680px]">
                {helpItems.map((item) => (
                  <li key={item.title}>
                    <h3 className="font-serif text-xl md:text-2xl text-foreground leading-snug mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-base leading-[1.8]">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Evidence Base */}
      <section className="bg-background border-b border-border">
        <div className="max-w-[1100px] mx-auto px-5 md:px-8 py-12 md:py-24">
          <div className="max-w-[760px] space-y-6">
            <p className="uppercase tracking-[0.25em] text-[11px] font-semibold text-muted-foreground">
              Evidence Base
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-snug">
              Grounded in Science &amp; Research
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-[1.8]">
              This work is informed by established frameworks across <strong className="text-foreground font-medium">somatic psychotherapy</strong>, <strong className="text-foreground font-medium">polyvagal theory</strong>, <strong className="text-foreground font-medium">psychoneuroimmunology</strong>, and <strong className="text-foreground font-medium">central sensitisation</strong>. Contemporary clinical research offers valuable insight into how trauma, chronic stress, and adversity can interact with physical biology, mapping the complex pathways between mind and body.
            </p>
            <p className="text-muted-foreground text-base md:text-lg leading-[1.8]">
              Review the clinical research surrounding how stress responses can manifest physically, how these symptoms are viewed through a whole-person lens, and the frameworks that support physical recovery.
            </p>
            <div className="pt-2">
              <a
                href="/for-providers"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background text-sm font-medium tracking-wide hover:opacity-90 transition-opacity"
              >
                Explore the evidence base
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Referrals */}
      <section className="bg-secondary/40 border-b border-border">
        <div className="max-w-[1100px] mx-auto px-5 md:px-8 py-12 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="uppercase tracking-[0.25em] text-[11px] font-semibold text-muted-foreground mb-4">
                For Clinicians
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-tight">
                Referrals
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-6 max-w-[680px]">
              <p className="text-muted-foreground text-base md:text-lg leading-[1.8]">
                I welcome collaborative referrals from GPs, gynaecologists, dermatologists, physiotherapy specialists, and other clinicians working with patients whose physical symptoms persist following appropriate medical assessment and investigations.
              </p>
              <p className="text-muted-foreground text-base md:text-lg leading-[1.8]">
                Recognising that complex psychophysiological symptoms are best addressed through an integrated, whole-person approach, I value interdisciplinary care and am always happy to liaise regarding shared patient management. Please feel free to reach out directly for a brief initial conversation prior to making a referral.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
