const specializations = [
  {
    title: "Female Pelvic Pain & Dysfunction",
    description: "Including Vulvodynia, Vaginismus, and Chronic Pelvic Pain Syndrome (CPPS).",
  },
  {
    title: "Nociplastic Pain",
    description: "Addressing central and peripheral sensitization.",
  },
  {
    title: "Somatic Guarding",
    description: "Resolving the neurobiological \"bracing\" patterns often linked to chronic stress or social-evaluative threat.",
  },
  {
    title: "Stress-Induced Systemic Symptoms",
    description: "Managing the \"Dance of the Neuro-Immune-Endocrine Axis\" and HPA axis downregulation.",
  },
];

const clinicalApproach = [
  {
    title: "Inhibit Cytokine Signaling",
    description: "Reducing the inflammatory markers associated with chronic \"shame-stress.\"",
  },
  {
    title: "Resolve Somatic Guarding",
    description: "Using somatic-orientated techniques to de-escalate the body's defensive postures.",
  },
  {
    title: "Address Epigenetic & Developmental Factors",
    description: "Exploring the history of sensitization to prevent symptom recurrence.",
  },
];

export default function DetailsSection() {
  return (
    <>
      {/* Clinical Specialization */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="uppercase tracking-widest text-xs font-semibold text-muted-foreground mb-3">
              Clinical Specialization
            </p>
            <h2 className="font-serif text-2xl md:text-3xl text-foreground leading-snug">
              The Mind-Body Interface
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-8">
            <p className="text-muted-foreground leading-relaxed max-w-[65ch]">
              I specialize in the treatment of psychophysiological symptoms and nongenetic chronic pain—physical conditions that are not organic in nature but are driven by nervous system dysregulation. I provide targeted support for complex presentations that often fall between the gaps of traditional medicine:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {specializations.map((item) => (
                <div key={item.title} className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                    <h3 className="font-serif text-lg text-foreground">{item.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed pl-3.5">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Approach */}
      <section className="border-t border-border bg-hero">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="uppercase tracking-widest text-xs font-semibold text-muted-foreground mb-3">
                My Clinical Approach
              </p>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground leading-snug">
                Soma-Cognitive Resolution
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-8">
              <p className="text-muted-foreground leading-relaxed max-w-[65ch]">
                For referring specialists, my work serves as a functional adjunct to medical treatment. I utilize an integrative, evidence-based framework to:
              </p>
              <div className="space-y-6">
                {clinicalApproach.map((item) => (
                  <div key={item.title} className="space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="mt-2 w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                      <h3 className="font-serif text-lg text-foreground">{item.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed pl-3.5 max-w-[60ch]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-[65ch] pt-2">
                I collaborate closely with GPs and specialists to ensure a shared, comprehensive understanding of a patient's clinical pathway.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Background & Training */}
      <section className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="uppercase tracking-widest text-xs font-semibold text-muted-foreground mb-3">
                Background &amp; Training
              </p>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground leading-snug">
                A Unique Perspective on Health
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-6 text-muted-foreground leading-relaxed max-w-[65ch]">
              <p>
                My transition into psychotherapy followed a significant career in the technology sector, providing me with a unique perspective on the high-pressure environments that often contribute to autonomic dysregulation.
              </p>
              <div className="pt-2">
                <h3 className="font-serif text-lg text-foreground mb-3">Education &amp; Memberships</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                    <span>Master of Psychotherapy and Counselling – Western Sydney University</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                    <span>Bachelor of Science (Psychology) – Griffith University</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                    <span>Registered Member: Psychotherapy and Counselling Federation of Australia (PACFA)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                    <span>Member: Australian Psychological Society (APS)</span>
                  </li>
                </ul>
              </div>
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
              <p className="text-muted-foreground leading-relaxed max-w-[65ch]">
                I welcome inquiries from medical practitioners seeking a psychotherapeutic partner for patients with unexplained or treatment-resistant somatic symptoms.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <p className="uppercase tracking-widest text-xs font-semibold text-muted-foreground mb-2">Location</p>
                  <p className="text-sm text-foreground leading-relaxed">
                    121 Crown Street<br />
                    Darlinghurst NSW 2010
                  </p>
                </div>
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
              <a
                href="mailto:vanesa@vanesasakota.com.au"
                className="inline-block bg-foreground text-card px-8 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Book a Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
