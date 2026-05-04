const presentations = [
  {
    title: "Female pelvic pain",
    description: "Including vulvodynia, vaginismus, and chronic pelvic pain syndrome.",
  },
  {
    title: "Stress-sensitive skin conditions",
    description: "Including eczema, psoriasis, chronic urticaria, and alopecia areata.",
  },
  {
    title: "And others",
    description:
      "Many chronic and treatment-resistant somatic presentations share the same underlying psychophysiological mechanisms, regardless of the system involved.",
  },
];

export default function DetailsSection() {
  return (
    <>
      {/* Clinical Specialisation */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="uppercase tracking-widest text-xs font-semibold text-muted-foreground mb-3">
              Clinical Specialisation
            </p>
            <h2 className="font-serif text-2xl md:text-3xl text-foreground leading-snug">
              The Mind-Body Interface
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-8">
            <p className="text-muted-foreground leading-relaxed max-w-[65ch]">
              Research is increasingly clear that many chronic physical symptoms have a significant psychophysiological component. I work with adults whose symptoms persist despite clear investigations, providing psychological support that addresses the nervous system drivers underlying their presentation.
            </p>
            <div>
              <p className="text-foreground font-medium mb-5">
                Presentations I commonly work with include:
              </p>
              <ul className="space-y-5">
                {presentations.map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                    <div className="space-y-1">
                      <h3 className="font-serif text-lg text-foreground">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed max-w-[65ch]">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Referrals & Contact */}
      <section id="book" className="border-t border-border bg-hero">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="uppercase tracking-widest text-xs font-semibold text-muted-foreground mb-3">
                Referrals &amp; Contact
              </p>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground leading-snug">
                Get in Touch
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-8">
              <div className="space-y-4 text-muted-foreground leading-relaxed max-w-[65ch]">
                <p>
                  I welcome enquiries from medical practitioners seeking a psychotherapeutic partner for patients with unexplained or treatment-resistant somatic symptoms.
                </p>
                <p>
                  I currently work online via Zoom. I am actively establishing permanent rooms in Sydney's Eastern Suburbs in 2026 and will update this page when a location is confirmed.
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
