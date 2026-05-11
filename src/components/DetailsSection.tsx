

const helpItems = [
  {
    title: "Pelvic Health",
    description:
      "Somatic manifestations in the pelvic floor, including vulvodynia, vaginismus, and chronic pelvic pain. The nervous system's learned protective responses can maintain symptoms long after an initial trigger has resolved.",
  },
  {
    title: "Psychodermatology",
    description:
      "Stress-responsive skin conditions including eczema, psoriasis, alopecia, and chronic pruritus (itch), supported by an understanding of the neuro-immune pathways linking psychological states and skin reactivity.",
  },
  {
    title: "Chronic Pain & Musculoskeletal Tension",
    description:
      "Working with adaptive bracing patterns, tension-type headaches, and chronic musculoskeletal pain understood through a biopsychosocial and nervous system lens, rather than as structural damage or learned protective physiology.",
  },
  {
    title: "Other",
    description:
      "I also work with a broader range of stress-sensitive and psychophysiological presentations, including nervous system dysregulation, autonomic hypervigilance, somatic anxiety, and persistent physical symptoms that lack a clear structural or organic medical explanation.",
  },
];

export default function DetailsSection() {
  return (
    <>
      {/* What I Help With */}
      <section className="bg-muted/30 border-b border-border">
        <div className="max-w-[1100px] mx-auto px-5 md:px-8 py-8 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-tight">
                What I can help with
              </h2>
            </div>
            <div className="lg:col-span-7">
              <ul className="grid grid-cols-1 gap-y-5 max-w-[640px]">
                {helpItems.map((item) => (
                  <li
                    key={item.title}
                    className="border-b border-border/60 pb-4"
                  >
                    <h3 className="font-serif text-xl md:text-2xl text-foreground leading-snug mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-base leading-relaxed">
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
