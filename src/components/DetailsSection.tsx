export default function DetailsSection() {
  return (
    <>
      {/* The Mind-Body Interface */}
      <section className="bg-muted/30 border-y border-border">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-5 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-5 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="uppercase tracking-widest text-xs font-semibold text-muted-foreground mb-3">
                Clinical Focus
              </p>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground leading-snug">
                The Mind-Body Interface
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg" style={{ maxWidth: "700px" }}>
                We now understand that many chronic physical symptoms—including pelvic floor dysfunction, stress-sensitive skin, and persistent fatigue—have a significant psychophysiological component. When symptoms persist despite clear medical investigations, it often indicates that the nervous system and unresolved psychological experiences are playing a meaningful role in maintaining them. My practice provides evidence-based psychological support that addresses these underlying drivers, working at the interface of the mind and body to facilitate sustainable healing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Referrals & Contact */}
      <section id="book" className="border-t border-border bg-hero">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-6 md:py-24">
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
