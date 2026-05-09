const frameworkCards = [
  {
    title: "Top-Down (CBT)",
    body: "Cognitive strategies to down-regulate autonomic arousal.",
  },
  {
    title: "Bottom-Up (Neuro-Experiential)",
    body: "Utilising subcortical processing (Brainspotting) to resolve stored somatic memory.",
  },
  {
    title: "Systemic (Parts Work)",
    body: "Engaging with internal 'Resource States' that hold traumatic affect to facilitate systemic regulation.",
  },
];

export default function DetailsSection() {
  return (
    <>
      {/* The Mind-Body Interface */}
      <section className="bg-muted/30 border-y border-border">
        <div className="max-w-[1100px] mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="max-w-2xl mb-12 md:mb-16">
            <p className="uppercase tracking-[0.2em] text-xs font-semibold text-muted-foreground mb-3">
              Clinical Focus
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-tight">
              The Mind-Body Interface
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-12">
            {[
              {
                title: "The Symptom Loop",
                body: "Chronic symptoms often persist because the nervous system is stuck in a state of 'high alert,' even after medical tests show the hardware is healthy.",
              },
              {
                title: "Central Sensitization",
                body: "We target the subcortical brain where 'non-organic' pain and distress signals are maintained.",
              },
              {
                title: "Clinical Resolution",
                body: "By utilising top-down and bottom-up interventions, we help the system 'unlearn' these persistent patterns.",
              },
            ].map((item) => (
              <div key={item.title} className="text-left space-y-3">
                <h3 className="font-serif text-xl text-foreground leading-snug">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-[0.95rem]">
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          <div>
            <a href="/for-providers" className="ghost-link">
              Explore the Evidence Base →
            </a>
          </div>
        </div>
      </section>

      {/* Clinical Framework & Integrative Interventions */}
      <section className="border-b border-border">
        <div className="max-w-[1100px] mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="max-w-3xl mb-12 md:mb-16">
            <p className="uppercase tracking-[0.2em] text-xs font-semibold text-muted-foreground mb-3">
              Therapeutic Approach
            </p>
            <h2 className="font-serif text-2xl md:text-4xl text-foreground leading-snug mb-4">
              Clinical Framework
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Applying neurobiological evidence to resolve the physiological drivers of persistent symptoms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 border-t border-border pt-10">
            {frameworkCards.map((card) => (
              <article key={card.title} className="space-y-3">
                <h3 className="font-serif text-xl md:text-[1.375rem] text-foreground leading-snug">
                  {card.title}
                </h3>
                <p className="text-muted-foreground text-[0.95rem] leading-relaxed">
                  {card.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Referrals & Contact */}
      <section id="book" className="border-t border-border bg-hero">
        <div className="max-w-[1100px] mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="uppercase tracking-[0.2em] text-xs font-semibold text-muted-foreground mb-3">
                Get in Touch
              </p>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground leading-snug">
                Referrals & Enquiries
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4 text-muted-foreground leading-relaxed max-w-[65ch]">
                <p>
                  I welcome enquiries from GPs, specialists, and allied health professionals. If a patient's progress has plateaued under conventional treatment and you suspect autonomic dysregulation or psychophysiological factors are contributing to their symptoms, please reach out to discuss a referral.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <p className="uppercase tracking-[0.2em] text-xs font-semibold text-muted-foreground mb-2">Phone</p>
                  <p className="text-sm text-foreground">0405 933 722</p>
                </div>
                <div>
                  <p className="uppercase tracking-[0.2em] text-xs font-semibold text-muted-foreground mb-2">Email</p>
                  <a href="mailto:vanesa@vanesasakota.com.au" className="text-sm text-foreground hover:opacity-70 transition-opacity break-all">
                    vanesa@vanesasakota.com.au
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
