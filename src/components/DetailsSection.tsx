import type { ReactNode } from "react";

const helpItems: { title: string; description: ReactNode }[] = [
  {
    title: "Pelvic Health & Somatic Protection",
    description: (
      <>
        I work with the complex intersection of the nervous system and pelvic health, including <strong className="text-foreground font-medium">vulvodynia, vaginismus, and chronic pelvic pain</strong>. Often, the body learns a <strong className="text-foreground font-medium">protective response</strong> that continues long after a physical injury has healed. We work to gently update these neuroplastic patterns, moving the body from a state of bracing back toward safety and ease.
      </>
    ),
  },
  {
    title: "The Mind-Skin Connection",
    description: (
      <>
        Skin conditions like <strong className="text-foreground font-medium">eczema, psoriasis, and chronic itching</strong> often act as a mirror for our internal stress states. By understanding the <strong className="text-foreground font-medium">neuro-immune pathways</strong> that connect our emotions to our skin's reactivity, we can address the underlying inflammatory responses that traditional topicals might miss.
      </>
    ),
  },
  {
    title: "Chronic Pain & Adaptive Bracing",
    description: (
      <>
        <strong className="text-foreground font-medium">Chronic pain, tension headaches, and persistent musculoskeletal tension</strong> are frequently the result of the body's attempt to protect itself from perceived threat. By shifting the lens from structural damage to <strong className="text-foreground font-medium">learned protective physiology</strong>, we can begin to release the adaptive bracing patterns that keep the body in a cycle of pain.
      </>
    ),
  },
  {
    title: "Psychophysiological Resolution",
    description: (
      <>
        Beyond these specific areas, I support individuals navigating a broad range of <strong className="text-foreground font-medium">stress-sensitive symptoms</strong>. If your symptoms feel non-organic or change based on your environment and emotional state, we focus on resolving the underlying <strong className="text-foreground font-medium">autonomic dysregulation</strong> at the root of the presentation.
      </>
    ),
  },
];

export default function DetailsSection() {
  return (
    <>
      {/* Clinical Focus */}
      <section className="bg-muted/30 border-b border-border">
        <div className="max-w-[1100px] mx-auto px-5 md:px-8 py-8 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-tight">
                Clinical Focus
              </h2>
            </div>
            <div className="lg:col-span-7">
              <ul className="grid grid-cols-1 gap-y-10 max-w-[640px]">
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

      {/* Grounded in research */}
      <section className="border-b border-border">
        <div className="max-w-[1100px] mx-auto px-5 md:px-8 py-8 md:py-20">
          <div className="max-w-[720px] space-y-6">
            <p className="uppercase tracking-[0.2em] text-xs font-semibold text-muted-foreground">
              Evidence base
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-snug">
              Grounded in research
            </h2>
            <div className="space-y-5 text-muted-foreground text-base md:text-lg leading-[1.8]">
              <p>
                My approach draws on the foundational work of Peter Levine (Somatic Experiencing), Bessel van der Kolk (trauma and the body), Gabor Maté (stress and disease), and Stephen Porges (Polyvagal Theory), alongside contemporary research in psychoneuroimmunology and central sensitisation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
