import type { ReactNode } from "react";

const pillars: { title: string; description: ReactNode }[] = [
  {
    title: "Top-Down Integration",
    description: (
      <>
        Utilizing <strong className="text-foreground font-medium">CBT and ACT</strong> to address thought patterns, core beliefs, and psychological flexibility.
      </>
    ),
  },
  {
    title: "The Relational Bridge",
    description: (
      <>
        Incorporating <strong className="text-foreground font-medium">Resource Therapy</strong> to identify and re-resource internal states stuck in defensive or protective roles.
      </>
    ),
  },
  {
    title: "Bottom-Up Resolution",
    description: (
      <>
        Utilizing <strong className="text-foreground font-medium">Polyvagal Theory and Somatic Experiencing</strong> to map the neurobiology of safety while renegotiating the body&rsquo;s physiological stress response.
      </>
    ),
  },
];

const helpItems: { title: string; description: ReactNode }[] = [
  {
    title: "Pelvic Health & Somatic Protection",
    description: (
      <>
        Working with the nervous system&rsquo;s <strong className="text-foreground font-medium">protective responses</strong> in conditions like <strong className="text-foreground font-medium">vaginismus</strong>, <strong className="text-foreground font-medium">vulvodynia</strong> and <strong className="text-foreground font-medium">chronic pelvic pain</strong>.
      </>
    ),
  },
  {
    title: "The Mind-Skin Connection",
    description: (
      <>
        Working with <strong className="text-foreground font-medium">emotional and psychological factors</strong> that can influence stress-responsive conditions like <strong className="text-foreground font-medium">eczema</strong>, <strong className="text-foreground font-medium">psoriasis</strong>, <strong className="text-foreground font-medium">stress-related hair loss</strong> and <strong className="text-foreground font-medium">vitiligo</strong>.
      </>
    ),
  },
  {
    title: "Psychophysiological Resolution",
    description: (
      <>
        Working with <strong className="text-foreground font-medium">functional and psychophysiological symptoms</strong>: real experiences that fall outside structural or organic diagnosis.
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
                My practice operates on a <strong className="text-foreground font-medium">dual-pathway framework</strong>. By bridging cognitive insight with somatic and parts-based resolution, we address the nervous system from both directions to resolve symptoms not organic in nature.
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
              Grounded in Research
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-[1.8]">
              This work draws on established frameworks in <strong className="text-foreground font-medium">somatic psychotherapy</strong>, <strong className="text-foreground font-medium">polyvagal theory</strong>, <strong className="text-foreground font-medium">psychoneuroimmunology</strong>, and <strong className="text-foreground font-medium">central sensitisation</strong>, alongside a growing body of clinical research into the mind-body connection.
            </p>
            <div className="pt-2">
              <a
                href="/for-providers"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background text-sm font-medium tracking-wide hover:opacity-90 transition-opacity"
              >
                Explore the evidence
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
