const scopeItems = [
  {
    title: "Somatic & Psychophysiological Syndromes",
    body: "Chronic functional pain, idiopathic tension, unmapped somatic burning, and nervous system hypervigilance.",
  },
  {
    title: "Complex Motor Reflexes & Bracing",
    body: "Involuntary pelvic floor guarding (vaginismus), chronic systemic bracing, and functional structural blocks.",
  },
  {
    title: "Relational & Developmental Trauma",
    body: "Resolving early life attachment wounds, chronic boundary suppression, and environmental invalidation that manifests physically in adulthood.",
  },
  {
    title: "Nervous System Recalibration",
    body: "Shifting out of rigid, self-confirming survival states (fight, flight, freeze) into psychological agility and agency.",
  },
];

export default function DetailsSection() {
  return (
    <>
      {/* Who I Am & What I Do */}
      <section className="bg-background border-b border-border">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-4">
              <p className="uppercase tracking-[0.25em] text-[11px] font-semibold text-espresso/60 mb-5">
                Who I Am | What I Do
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-espresso leading-[1.15]">
                An integrative practice at the edge of neuroscience and lived experience.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6 flex items-center">
              <p className="text-chocolate/90 text-lg md:text-xl leading-[1.7] max-w-[58ch]">
                I am an integrative psychotherapist specializing in the intersection of structural neuroscience, computational neurobiology, and lived somatic reality. My practice targets chronic, non-organic psychophysiological symptoms | conditions where the body expresses unresolved neurobiological data because emotional or relational safety has compromised the nervous system's flexibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Scope */}
      <section className="bg-secondary/40 border-b border-border">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-4">
              <p className="uppercase tracking-[0.25em] text-[11px] font-semibold text-espresso/60 mb-5">
                Clinical Scope of Practice
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-espresso leading-[1.15]">
                Specialized depth, broad reach.
              </h2>
              <p className="text-chocolate/80 leading-[1.8] mt-6 max-w-[36ch]">
                While I specialize deeply in pelvic conditions, my practice supports women navigating a broad spectrum of mind-body dysregulation.
              </p>
            </div>

            <ul className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
              {scopeItems.map((item, i) => (
                <li key={item.title} className="space-y-3">
                  <p className="font-serif text-espresso/40 text-sm tracking-wider">
                    0{i + 1}
                  </p>
                  <h3 className="font-serif text-xl md:text-2xl text-espresso leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-chocolate/85 leading-[1.75]">
                    {item.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Where I Practice */}
      <section className="bg-background border-b border-border">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-4">
              <p className="uppercase tracking-[0.25em] text-[11px] font-semibold text-espresso/60 mb-5">
                Where I Practice
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-espresso leading-[1.15]">
                Sydney, Australia.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6 space-y-10">
              <div className="border-t border-espresso/15 pt-6">
                <p className="uppercase tracking-[0.2em] text-[11px] font-semibold text-espresso/60 mb-3">
                  Clinical Practice
                </p>
                <p className="font-serif text-2xl md:text-3xl text-espresso leading-snug">
                  Sydney, Australia | In-person and online consultation.
                </p>
              </div>
              <div className="border-t border-espresso/15 pt-6">
                <p className="uppercase tracking-[0.2em] text-[11px] font-semibold text-espresso/60 mb-3">
                  Referrals
                </p>
                <p className="font-serif text-2xl md:text-3xl text-espresso leading-snug">
                  Co-managing patients alongside Gynaecologists, Pelvic Floor Physiotherapists, Urologists, and Pain Specialists.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href="/for-providers"
                  className="inline-flex items-center gap-3 px-7 py-4 bg-espresso text-background text-sm font-medium tracking-[0.1em] uppercase hover:bg-chocolate transition-colors"
                >
                  For Referring Clinicians
                  <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
