import type { ReactNode } from "react";

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
    title: "Imagery Rescripting",
    description: (
      <>
        To gently re-enter and update early memories or relational experiences that may be maintaining a heightened sense of physiological vulnerability.
      </>
    ),
  },
  {
    title: "Resource Therapy (Parts Work)",
    description: (
      <>
        Founded by Australian psychologist <strong className="text-foreground font-medium">Professor Gordon Emmerson</strong>, Resource Therapy is a trauma-informed, psychodynamic framework deeply rooted in relational and attachment concepts. In chronic illness, physical symptoms can manifest as a somatic defense mechanism, the body speaking what a part cannot voice. By safely addressing underlying attachment wounds and internal conflicts, we aim to reduce systemic tension driving physical pain.
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

export default function DetailsSection() {
  return (
    <section className="bg-background border-b border-border">
      <div className="max-w-[1100px] mx-auto px-5 md:px-8 py-6 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 lg:gap-8">
          <div className="lg:col-span-3 space-y-2">
            <p className="uppercase tracking-[0.25em] text-[10px] md:text-[11px] font-medium text-muted-foreground">
              Approach
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-tight">
              The Approach
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-6 max-w-[680px]">
            <p className="text-muted-foreground text-[15px] md:text-base leading-[1.75]">
              My approach draws on:
            </p>
            <ul className="space-y-6">
              {pillars.map((p, i) => (
                <li key={i}>
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
  );
}
