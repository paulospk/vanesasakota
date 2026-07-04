import type { ReactNode } from "react";

const pillars: { title: ReactNode; description: ReactNode }[] = [
  {
    title: "Emotional Awareness & Expression Therapy (EAET)",
    description: "processing hidden emotional stressors",
  },
  {
    title: "Somatic Experiencing & Brainspotting",
    description: "releasing bound physical tension",
  },
  {
    title: "Resource Therapy (Parts Work)",
    description: "understanding internal conflict and protection",
  },
  {
    title: "Imagery Rescripting",
    description: "updating early memories held in the body",
  },
  {
    title: "Grounding Frameworks (CBT & ACT)",
    description: "practical tools for daily stability",
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
              Because these presentations involve overlapping physical and emotional layers, it can be helpful to look beyond traditional talk therapy alone. My practice gently incorporates evidence-based, mind-body approaches within a supportive psychological framework, choosing and adapting modalities according to what each person's unique experience calls for:
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
            <p className="text-muted-foreground text-[15px] md:text-base leading-[1.75]">
              What I aim to offer is a space that is steady, intentional, and unhurried, where there is room to notice, to reflect, and to explore the connection between the body and the mind at a pace that feels safe and sustainable for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
