const frameworkCards = [
  {
    title: "Top-Down: Cognitive Behavioural Therapy",
    body: "Focusing on the conscious mind. We work together to identify and reframe the thought patterns that inadvertently maintain autonomic arousal, helping to lower the body’s “volume” on distress.",
  },
  {
    title: "Bottom-Up: Neuro-Experiential Processing",
    body: "Focusing on the subcortical brain. As a derivative of EMDR, Brainspotting accesses the deep physiological layers where somatic memory is stored, allowing for processing that “talk therapy” alone cannot reach.",
  },
  {
    title: "Systemic: Resource Therapy (Parts Work)",
    body: "Focusing on internal harmony. We engage with the specific “parts” of the personality that hold physical symptoms, facilitating a sense of internal safety and systemic regulation.",
  },
];

export default function DetailsSection() {
  return (
    <>
      {/* The Mind-Body Interface */}
      <section className="bg-muted/30 border-y border-border">
        <div className="max-w-[1100px] mx-auto px-5 md:px-8 py-6 md:py-10">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-5 lg:gap-12">
            <div className="lg:col-span-3">
              <p className="uppercase tracking-widest text-xs font-semibold text-muted-foreground mb-3">
                Clinical Focus
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-tight">
                The Mind-Body Interface
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg max-w-[700px]">
                We now understand that many chronic symptoms—including pelvic floor pain, IBS, and stress-sensitive skin—have a significant psychophysiological component. When symptoms persist despite clear medical investigations, it indicates the nervous system is playing a primary role in maintaining them. My practice provides targeted somatic resolution to address these underlying drivers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Framework & Integrative Interventions */}
      <section className="border-b border-border">
        <div className="max-w-[1100px] mx-auto px-5 md:px-8 py-8 md:py-10">
          <div className="max-w-3xl mb-8 md:mb-10">
            <p className="uppercase tracking-widest text-xs font-semibold text-muted-foreground mb-3">
              Therapeutic Approach
            </p>
            <h2 className="font-serif text-2xl md:text-4xl text-foreground leading-snug mb-4">
              Clinical Framework &amp; Integrative Interventions
            </h2>
            <p className="text-muted-foreground text-base md:text-lg" style={{ lineHeight: 1.6 }}>
              Bridging the gap between neurobiological evidence and the human experience of healing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {frameworkCards.map((card) => (
              <article
                key={card.title}
                className="bg-[hsl(35_30%_97%)] border border-[hsl(210_20%_88%)] rounded-sm p-7 md:p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="font-serif text-xl md:text-[1.375rem] text-foreground mb-4 leading-snug">
                  {card.title}
                </h3>
                <p className="text-muted-foreground text-[0.95rem]" style={{ lineHeight: 1.6 }}>
                  {card.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Referrals & Contact */}
      <section id="book" className="border-t border-border bg-hero">
        <div className="max-w-[1100px] mx-auto px-5 md:px-8 py-6 md:py-10">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="uppercase tracking-widest text-xs font-semibold text-muted-foreground mb-3">
                Get in Touch
              </p>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground leading-snug">
                Referrals & Enquiries
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4 text-muted-foreground leading-relaxed max-w-[65ch]">
                <p>
                  I welcome enquiries from GPs, gynaecologists, dermatologists, physiotherapists, and other clinicians. If you are working with a patient whose symptoms have not fully resolved through conventional treatment, please feel free to get in touch to discuss whether a referral may be appropriate.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <p className="uppercase tracking-widest text-xs font-semibold text-muted-foreground mb-2">Phone</p>
                  <p className="text-sm text-foreground">0405 933 722</p>
                </div>
                <div>
                  <p className="uppercase tracking-widest text-xs font-semibold text-muted-foreground mb-2">Email</p>
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
