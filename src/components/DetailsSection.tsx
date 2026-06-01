import type { ReactNode } from "react";

const pillars: { title: ReactNode; description: ReactNode }[] = [
  {
    title: (
      <>
        Emotional Awareness & Expression Therapy (EAET)
      </>
    ),
    description: (
      <>
        Developed specifically for chronic pain by leading mind-body medicine pioneers <strong className="text-foreground font-medium">Dr. Howard Schubiner</strong> and <strong className="text-foreground font-medium">Dr. Mark Lumley</strong>, EAET is a neuro-somatic framework. Instead of focusing on adapting to discomfort, EAET works by identifying and safely processing hidden emotional stressors in order to deactivate the central nervous system's chronic threat response.
      </>
    ),
  },
  {
    title: "Resource Therapy (Advanced Parts Work)",
    description: (
      <>
        Founded by Australian psychologist <strong className="text-foreground font-medium">Professor Gordon Emmerson</strong>, Resource Therapy is a trauma-informed, psychodynamic framework deeply rooted in relational and attachment concepts. In chronic illness, physical symptoms can manifest as a somatic defense mechanism | the body speaking what a state cannot voice. By safely addressing underlying attachment wounds and internal conflicts, we reduce the systemic tension driving physical pain.
      </>
    ),
  },
  {
    title: "Cognitive Behavioural Therapy (CBT) & Acceptance and Commitment Therapy (ACT)",
    description: (
      <>
        To support this deeper processing, I integrate elements of <strong className="text-foreground font-medium">CBT</strong> and <strong className="text-foreground font-medium">ACT</strong> as vital grounding frameworks. While EAET and Parts Work target symptom resolution, CBT and ACT provide the essential structural support. They offer practical tools to navigate daily stress, defuse from catastrophic thoughts about pain, and build the psychological flexibility needed to safely engage with your body's healing process.
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


      {/* Understanding Symptoms Through a Broader Lens */}
      <section className="bg-background border-b border-border">
        <div className="max-w-[1100px] mx-auto px-5 md:px-8 py-6 md:py-12">
          <div className="max-w-[760px] space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-snug">
              Understanding Symptoms Through a Broader Lens
            </h2>
            <p className="text-muted-foreground text-[15px] md:text-base leading-[1.75]">
              Many of the people I work with live with symptoms that do not fit neatly into a single category. Some have clear medical diagnoses. Others have undergone extensive investigations yet continue to experience distressing symptoms that affect daily life.
            </p>
            <p className="text-muted-foreground text-[15px] md:text-base leading-[1.75]">
              My work is informed by a biopsychosocial perspective, which recognises that biological, psychological, and social factors are constantly interacting. Research across fields such as trauma, attachment, stress physiology, psychoneuroimmunology, pain science, and nervous system functioning suggests that our experiences, relationships, emotions, and physiology are deeply interconnected.
            </p>
            <p className="text-muted-foreground text-[15px] md:text-base leading-[1.75]">
              This perspective does not suggest that symptoms are &ldquo;all in the mind&rdquo;. Rather, it encourages a broader and more integrated understanding of how symptoms may develop, persist, or intensify over time.
            </p>
            <p className="text-muted-foreground text-[15px] md:text-base leading-[1.75]">
              For those interested in exploring these ideas further, I have compiled a collection of influential research, contemporary findings, and recommended readings that have helped shape my clinical thinking.
            </p>
            <div className="pt-2">
              <a
                href="/for-providers"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background text-sm font-medium tracking-wide hover:opacity-90 transition-opacity"
              >
                Explore Mind-Body Research &amp; Resources
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </section>


    </>
  );
}
