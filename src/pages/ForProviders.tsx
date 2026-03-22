import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const researchData = [
  {
    domain: "Epigenetics & Development",
    source: "National Scientific Council on the Developing Child (2010), Working Paper 10",
    significance: 'Early-life stress creates "chemical signatures" on DNA that program the immune system for lifelong inflammatory hyper-reactivity.',
  },
  {
    domain: "Shame & Inflammation",
    source: "Dickerson, S.S., et al. (2004), Psychosomatic Medicine",
    significance: "Demonstrates that social shame specifically induces a measurable spike in pro-inflammatory cytokine activity (sTNFαRII).",
  },
  {
    domain: "Vulvodynia & Stress",
    source: "Harlow, B.L., et al. (2014), Journal of Women's Health",
    significance: "Childhood maltreatment or severe family stress is associated with a 4-fold increased risk of developing adult vulvodynia.",
  },
  {
    domain: "Vaginismus & Reflex",
    source: "ter Kuile, et al. (2015) / van der Velde, J., et al. (2001)",
    significance: 'Confirms that involuntary pelvic floor muscle activity is a "threat-avoidance" reflex rather than a purely structural defect.',
  },
  {
    domain: "Nociplastic Pain",
    source: "Fitzcharles, M.A., et al. (2021), The Lancet",
    significance: "Defines a third category of pain arising from altered nociception despite no clear evidence of tissue damage, requiring a nervous-system-led approach.",
  },
];

const ForProviders = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="bg-hero border-b border-border">
        <div className="max-w-4xl mx-auto px-6 md:px-8 py-16 md:py-24">
          <div className="space-y-6 animate-fade-up">
            <p className="uppercase tracking-widest text-xs font-semibold text-muted-foreground">
              For Referring Providers
            </p>
            <h1 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground leading-[1.1]">
              The Neurobiology of Somatic Guarding
            </h1>
            <p className="text-muted-foreground text-lg max-w-[65ch]">
              As an Integrative Psychotherapist, I work at the intersection of the nervous system, social-evaluative threat (shame/stress), and chronic psychophysiological symptoms. My practice specializes in the resolution of chronic pain and tension that may lack a clear organic or structural cause, yet presents with significant physical distress.
            </p>
          </div>
        </div>
      </section>

      {/* Clinical Pathway */}
      <section className="border-b border-border">
        <div className="max-w-4xl mx-auto px-6 md:px-8 py-16 md:py-20">
          <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-foreground mb-4">
            The Clinical Pathway
          </h2>
          <p className="text-muted-foreground mb-10 max-w-[65ch]">
            From Psychological Threat to Physical Pain
          </p>
          <p className="text-muted-foreground mb-10 max-w-[65ch]">
            For patients presenting with conditions such as vulvodynia, vaginismus, chronic pelvic pain, or idiopathic dermatological sensitivity, the underlying mechanism is often one of <strong className="text-foreground">Central and Peripheral Sensitization</strong>.
          </p>
          <p className="text-muted-foreground mb-8">
            My clinical framework follows the biological sequence of the <strong className="text-foreground">Neuro-Immune-Endocrine Axis</strong>:
          </p>

          <div className="space-y-8">
            {[
              {
                number: "01",
                title: "Social-Evaluative Threat (Chronic Shame/Stress)",
                description: 'High-shame states are processed by the brain as threats to social survival. This triggers a sustained "threat" response in the Hypothalamic-Pituitary-Adrenal (HPA) axis.',
              },
              {
                number: "02",
                title: "Immune Upregulation",
                description: "This threat state signals the release of pro-inflammatory cytokines (specifically IL-1β, IL-6, and TNF-α).",
              },
              {
                number: "03",
                title: "Peripheral Sensitization",
                description: "These cytokines interact with peripheral nerve fibers, lowering the firing threshold of nociceptors. This results in allodynia (pain from non-painful stimuli) and hyperalgesia.",
              },
              {
                number: "04",
                title: "Somatic Guarding",
                description: "The musculoskeletal system responds with involuntary "guarding" reflexes—such as pelvic floor hypertonicity—creating a self-perpetuating feedback loop of pain, tension, and inflammation.",
              },
            ].map((step) => (
              <div key={step.number} className="flex gap-6 items-start">
                <span className="font-serif text-3xl text-primary/40 font-bold leading-none mt-1 shrink-0">
                  {step.number}
                </span>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Evidence Table */}
      <section className="bg-accent/30 border-b border-border">
        <div className="max-w-4xl mx-auto px-6 md:px-8 py-16 md:py-20">
          <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-foreground mb-4">
            Evidence-Based Support
          </h2>
          <p className="text-muted-foreground mb-10">
            Research highlights for referring clinicians on inflammatory and epigenetic drivers in psychophysiological conditions.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-border">
              <thead>
                <tr className="bg-foreground text-card">
                  <th className="text-left px-4 py-3 font-semibold">Domain</th>
                  <th className="text-left px-4 py-3 font-semibold">Primary Research & Source</th>
                  <th className="text-left px-4 py-3 font-semibold">Clinical Significance</th>
                </tr>
              </thead>
              <tbody>
                {researchData.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-card" : "bg-background"}>
                    <td className="px-4 py-3 font-medium text-foreground align-top border-b border-border whitespace-nowrap">
                      {row.domain}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground align-top border-b border-border">
                      {row.source}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground align-top border-b border-border">
                      {row.significance}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Clinical Approach */}
      <section className="border-b border-border">
        <div className="max-w-4xl mx-auto px-6 md:px-8 py-16 md:py-20">
          <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-foreground mb-4">
            My Clinical Approach
          </h2>
          <p className="text-muted-foreground mb-10">
            Somatic Resolution & Parts Work
          </p>
          <p className="text-muted-foreground mb-10 max-w-[65ch]">
            I utilize an integrative approach that combines Somatic Resolution and Parts Work to de-escalate the internal "threat" state. By addressing the psychological "parts" that hold these survival narratives, we can:
          </p>

          <div className="space-y-6">
            {[
              {
                title: "Downregulate the HPA Axis",
                description: "Reducing the systemic stress load.",
              },
              {
                title: "Inhibit Cytokine Signaling",
                description: "Lowering the inflammatory "noise" that sensitizes peripheral nerves.",
              },
              {
                title: "Resolve Somatic Guarding",
                description: "Allowing the pelvic floor and affected tissues to return to a state of functional ease and safety.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-accent/30 border border-border">
            <p className="text-foreground text-sm leading-relaxed">
              I am happy to collaborate with you on shared patients to provide a comprehensive, multi-modal treatment plan. Please feel free to reach out at{" "}
              <a href="mailto:vanesa@vanesasakota.com.au" className="text-primary hover:underline">
                vanesa@vanesasakota.com.au
              </a>{" "}
              or call{" "}
              <a href="tel:0405933722" className="text-primary hover:underline">
                0405 933 722
              </a>.
            </p>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default ForProviders;
