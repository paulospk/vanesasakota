import type { ReactNode } from "react";

const pillars: { title: ReactNode; description: ReactNode }[] = [
  {
    title: "Emotional Awareness & Expression Therapy (EAET)",
    description: "processing hidden emotional stressors",
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
  {
    title: "Brainspotting",
    description: "releasing bound physical tension",
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
              Because these presentations involve overlapping physical and emotional layers, I draw on a range of evidence-based, mind-body approaches within a supportive psychological framework — adapting the modality to what each person's experience calls for:
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
              What I offer is a space that's steady, intentional, and unhurried — room to notice, reflect, and explore the connection between body and mind at your own pace.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
