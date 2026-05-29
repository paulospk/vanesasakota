import type { ReactNode } from "react";

const pillars: { title: ReactNode; description: ReactNode }[] = [
  {
    title: (
      <>
        Cognitive Processes | <em className="font-bold italic">Top Down</em>
      </>
    ),
    description: (
      <>
        Drawing on <strong className="text-foreground font-medium">Cognitive Behavioural Therapy (CBT)</strong> and <strong className="text-foreground font-medium">Acceptance and Commitment Therapy (ACT)</strong>, treatment addresses thought patterns, core beliefs, and psychological flexibility that can influence symptom-related distress and everyday functioning.
      </>
    ),
  },
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
    title: (
      <>
        Autonomic & Physiological Processes | <em className="font-bold italic">Bottom Up</em>
      </>
    ),
    description: (
      <>
        Drawing on <strong className="text-foreground font-medium">Somatic Experiencing</strong> and contemporary understandings of autonomic nervous system functioning, treatment focuses on increasing awareness of physiological stress responses, supporting the body&rsquo;s capacity for regulation, and assisting the nervous system in shifting out of chronic threat states.
      </>
    ),
  },
];


export default function DetailsSection() {
  return (
    <>
      {/* The Systems Approach */}
      <section className="bg-background border-b border-border">
        <div className="max-w-[1100px] mx-auto px-5 md:px-8 py-6 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 lg:gap-8">
            <div className="lg:col-span-3">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-tight">
                An Integrative Systems Approach
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-6 max-w-[680px]">
              <ul className="space-y-6">
                {pillars.map((p, i) => (
                  <li key={i} className="border-l-2 border-border pl-6">
                    <h3 className="font-serif text-xl md:text-2xl text-foreground leading-snug mb-2">
                      {p.title}
                    </h3>
                    <p className="text-muted-foreground text-[15px] md:text-base leading-[1.75]">
                      {p.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* I Commonly Work With */}
      <section className="bg-background border-b border-border">
        <div className="max-w-[1100px] mx-auto px-5 md:px-8 py-6 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 lg:gap-8">
            <div className="lg:col-span-3">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-tight">
                I Commonly Work With
              </h2>
            </div>
            <div className="lg:col-span-7 max-w-[680px]">
              <ul className="space-y-3 text-muted-foreground text-[15px] md:text-base leading-[1.75]">
                <li className="flex items-start gap-3">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" />
                  <span>Persistent physical symptoms not fully explained by medical testing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" />
                  <span>Chronic pelvic pain</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" />
                  <span>Vulvodynia and vaginismus</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" />
                  <span>Psychodermatoses — stress-sensitive skin conditions (eczema, psoriasis, rosacea, acne, and stress-induced hair shedding or alopecia)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" />
                  <span>Trauma and chronic stress</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* Evidence Base */}
      <section className="bg-background border-b border-border">
        <div className="max-w-[1100px] mx-auto px-5 md:px-8 py-6 md:py-12">
          <div className="max-w-[760px] space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-snug">
              Grounded in Evidence
            </h2>
            <p className="text-muted-foreground text-[15px] md:text-base leading-[1.75]">
              My approach is informed by established frameworks across <strong className="text-foreground font-medium">somatic psychotherapy</strong>, <strong className="text-foreground font-medium">polyvagal theory</strong>, <strong className="text-foreground font-medium">psychoneuroimmunology</strong>, and <strong className="text-foreground font-medium">central sensitisation</strong>. Contemporary clinical research offers valuable insight into how trauma, chronic stress, and adversity can interact with physical biology, mapping the complex pathways between mind and body.
            </p>
            <p className="text-muted-foreground text-[15px] md:text-base leading-[1.75]">
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

    </>
  );
}
