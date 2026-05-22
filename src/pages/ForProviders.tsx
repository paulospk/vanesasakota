import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const ForProviders = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="bg-hero border-b border-border">
        <div className="max-w-[1100px] mx-auto px-5 md:px-8 py-12 md:py-24">
          <div className="max-w-3xl space-y-6 animate-fade-up">
            <p className="uppercase tracking-[0.2em] text-xs font-semibold text-muted-foreground">
              For Referring Clinicians
            </p>
            <h1 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground leading-[1.1]">
              Clinical Approach | The Neurobiology of Somatic Resolution
            </h1>
            <p className="text-muted-foreground text-lg leading-[1.7]">
              In contemporary clinical practice, the traditional divide between mind and body is obsolete. When localized physical interventions, lifestyle adjustments, or standard talking therapies plateau, it is typically because chronic somatic symptoms are top-down survival responses maintained by the central nervous system.
            </p>
            <p className="text-muted-foreground leading-[1.7]">
              Our clinical framework maps Parts Work (Internal Family Systems) onto contemporary Predictive Coding neuroscience. We treat chronic symptoms not as structural defects or "stored trauma," but as rigid, frozen predictive models executed by the brain.
            </p>
          </div>
        </div>
      </section>

      {/* The Shift */}
      <section className="border-b border-border">
        <div className="max-w-[1000px] mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="space-y-6 max-w-3xl">
            <p className="uppercase tracking-[0.2em] text-xs font-semibold text-muted-foreground">
              The Shift
            </p>
            <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-foreground leading-tight">
              Prediction, Not Storage
            </h2>
            <p className="text-muted-foreground leading-[1.8]">
              Recent breakthroughs in computational and systems neuroscience (Kotler, Mannino, Fox, & Friston, 2026) clarify that the body does not literally store trauma in tissue. Rather, trauma erodes the brain's metastability | its capacity to fluidly adapt, shift, and respond to context.
            </p>
            <p className="text-muted-foreground leading-[1.8]">
              The nervous system becomes trapped in a loop of circular inference: the brain over-weights danger predictions, projects a threat downward, senses the body's defensive arousal, and takes that arousal as absolute proof that danger persists. The body is the messenger, not the archive.
            </p>
            <p className="text-muted-foreground leading-[1.8]">
              We divide non-organic presentations into two primary neural pathways to direct targeted, in-session intervention.
            </p>
          </div>

          {/* Pathway 1 */}
          <article className="mt-16 md:mt-20 max-w-3xl">
            <p className="uppercase tracking-[0.2em] text-xs font-semibold text-muted-foreground mb-3">
              Pathway 01
            </p>
            <h3 className="font-serif text-2xl md:text-3xl tracking-tight text-foreground mb-2">
              Localized Sensory Alarms
            </h3>
            <p className="text-sm text-muted-foreground italic mb-8">
              Vulvodynia, unmapped burning, chronic pain
            </p>

            <div className="space-y-8">
              <div>
                <h4 className="uppercase tracking-[0.2em] text-xs font-semibold text-foreground mb-3">
                  The Neurobiology | Somatotopic Smudging & Lost Sensory Attenuation
                </h4>
                <p className="text-muted-foreground leading-[1.8]">
                  When high-volume affective distress (such as chronic boundary suppression or hidden rage) is suppressed by the prefrontal cortex, the brain's predictive engine must still account for this subcortical arousal. Lacking a clear emotional outlet, it misallocates precision | translating the ambiguous internal "noise" into a highly specific physical map of localized tissue alarm.
                </p>
              </div>
              <div>
                <h4 className="uppercase tracking-[0.2em] text-xs font-semibold text-foreground mb-3">
                  Therapeutic Resolution | Unblending & Predictive Recalibration
                </h4>
                <p className="text-muted-foreground leading-[1.8]">
                  By guiding the patient to safely unblend from the panic of the sensation and voice the experience directly from that somatic space, we shift the nervous system from avoidance to approach. This novel sensorimotor feedback allows the subcortical brain to accurately identify and discharge the hidden emotional drivers, updating its predictive map and clearing the physical tissue alarm.
                </p>
              </div>
            </div>
          </article>

          {/* Pathway 2 */}
          <article className="mt-16 md:mt-20 max-w-3xl">
            <p className="uppercase tracking-[0.2em] text-xs font-semibold text-muted-foreground mb-3">
              Pathway 02
            </p>
            <h3 className="font-serif text-2xl md:text-3xl tracking-tight text-foreground mb-2">
              Complex Motor Bracing
            </h3>
            <p className="text-sm text-muted-foreground italic mb-8">
              Vaginismus, chronic spasm, postural guarding
            </p>

            <div className="space-y-8">
              <div>
                <h4 className="uppercase tracking-[0.2em] text-xs font-semibold text-foreground mb-3">
                  The Neurobiology | Maladaptive Active Inference
                </h4>
                <p className="text-muted-foreground leading-[1.8]">
                  The brain conserves processing power by taking predictive models of safety and containment learned in early caregiver attachment dynamics and applying them to adult scenarios. If early relational boundaries were chronically violated or volatile, the subcortical brain locks in a heavily weighted prior: "Closeness and vulnerability equal intrusion."
                </p>
              </div>
              <div>
                <h4 className="uppercase tracking-[0.2em] text-xs font-semibold text-foreground mb-3">
                  Therapeutic Resolution | The Relational Corrective Experience
                </h4>
                <p className="text-muted-foreground leading-[1.8]">
                  In adulthood, physical intimacy or deep vulnerability pulls up this historical script. The brain projects the childhood threat model downward, executing a literal motor defense to physically enforce a boundary | such as the pelvic floor clamping shut. Healing requires using the therapeutic alliance to retrain expectations and build somatic agency, showing the nervous system that it possesses adult autonomy to choose its boundaries in real time, rendering the involuntary physical shield obsolete.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Reference Matrix */}
      <section className="bg-accent/20 border-b border-border">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="max-w-3xl mb-12">
            <p className="uppercase tracking-[0.2em] text-xs font-semibold text-muted-foreground mb-4">
              At a Glance
            </p>
            <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-foreground leading-tight">
              Specialist Reference Matrix
            </h2>
          </div>

          {/* Desktop table */}
          <div className="hidden md:block overflow-hidden rounded-sm border border-border bg-background">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-border bg-accent/30">
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/70 w-1/4">
                    Presentation Type
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/70 w-1/4">
                    Primary Neural Pathway
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/70 w-1/4">
                    The Predictive Meaning
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/70 w-1/4">
                    In-Session Objective
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm text-muted-foreground">
                <tr className="border-b border-border align-top">
                  <td className="px-6 py-6">
                    <div className="font-semibold text-foreground mb-1">Somatic Sensation</div>
                    <div className="italic text-xs">Vulvodynia, localized burning, idiopathic pain</div>
                  </td>
                  <td className="px-6 py-6 leading-[1.7]">
                    Hyper-focused interoceptive volume; sensory smudging.
                  </td>
                  <td className="px-6 py-6 leading-[1.7]">
                    Brain translates a suppressed, un-vocalized emotional charge into a localized tissue alarm.
                  </td>
                  <td className="px-6 py-6 leading-[1.7]">
                    <span className="font-semibold text-foreground">Expression & Processing:</span> Decoding the sensory noise into its underlying emotional driver, allowing the brain to resolve the prediction error and clear the physical map.
                  </td>
                </tr>
                <tr className="align-top">
                  <td className="px-6 py-6">
                    <div className="font-semibold text-foreground mb-1">Motor Behavior / Reflex</div>
                    <div className="italic text-xs">Vaginismus, chronic bracing, protective spasms</div>
                  </td>
                  <td className="px-6 py-6 leading-[1.7]">
                    Maladaptive Active Inference executing a top-down motor defense.
                  </td>
                  <td className="px-6 py-6 leading-[1.7]">
                    Brain uses the musculoskeletal system to enforce a protective boundary that was historically unsafe to navigate.
                  </td>
                  <td className="px-6 py-6 leading-[1.7]">
                    <span className="font-semibold text-foreground">Relational Corrective Experience:</span> Utilizing the safe container of therapy to re-negotiate boundaries, restoring global metastability and flexible control.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile stacked cards */}
          <div className="md:hidden space-y-5">
            {[
              {
                title: "Somatic Sensation",
                sub: "Vulvodynia, localized burning, idiopathic pain",
                pathway: "Hyper-focused interoceptive volume; sensory smudging.",
                meaning: "Brain translates a suppressed, un-vocalized emotional charge into a localized tissue alarm.",
                objLabel: "Expression & Processing:",
                obj: "Decoding the sensory noise into its underlying emotional driver, allowing the brain to resolve the prediction error and clear the physical map.",
              },
              {
                title: "Motor Behavior / Reflex",
                sub: "Vaginismus, chronic bracing, protective spasms",
                pathway: "Maladaptive Active Inference executing a top-down motor defense.",
                meaning: "Brain uses the musculoskeletal system to enforce a protective boundary that was historically unsafe to navigate.",
                objLabel: "Relational Corrective Experience:",
                obj: "Utilizing the safe container of therapy to re-negotiate boundaries, restoring global metastability and flexible control.",
              },
            ].map((row) => (
              <div key={row.title} className="rounded-sm border border-border bg-background p-6 space-y-5">
                <div>
                  <div className="font-serif text-xl text-foreground">{row.title}</div>
                  <div className="italic text-xs text-muted-foreground mt-1">{row.sub}</div>
                </div>
                <div>
                  <div className="uppercase tracking-[0.18em] text-[10px] font-semibold text-foreground/70 mb-1">Primary Neural Pathway</div>
                  <p className="text-sm text-muted-foreground leading-[1.7]">{row.pathway}</p>
                </div>
                <div>
                  <div className="uppercase tracking-[0.18em] text-[10px] font-semibold text-foreground/70 mb-1">Predictive Meaning</div>
                  <p className="text-sm text-muted-foreground leading-[1.7]">{row.meaning}</p>
                </div>
                <div>
                  <div className="uppercase tracking-[0.18em] text-[10px] font-semibold text-foreground/70 mb-1">In-Session Objective</div>
                  <p className="text-sm text-muted-foreground leading-[1.7]">
                    <span className="font-semibold text-foreground">{row.objLabel}</span> {row.obj}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Referral Guidelines */}
      <section className="border-b border-border">
        <div className="max-w-[1000px] mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="max-w-3xl space-y-6">
            <p className="uppercase tracking-[0.2em] text-xs font-semibold text-muted-foreground">
              For Medical Partners
            </p>
            <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-foreground leading-tight">
              Referral Guidelines
            </h2>
            <p className="text-muted-foreground leading-[1.8]">
              We co-manage patients alongside Gynaecologists, Pelvic Floor Physiotherapists, and Pain Specialists.
            </p>
          </div>

          <div className="mt-12 max-w-3xl">
            <h3 className="uppercase tracking-[0.2em] text-xs font-semibold text-foreground mb-6">
              Ideal Indications for Referral
            </h3>
            <ul className="space-y-5">
              {[
                "Patients presenting with idiopathic somatic symptoms or pelvic pain where organic pathology has been fully investigated.",
                "Patients whose physical progress in specialized physiotherapy is blocked or limited by underlying hypervigilance, anxiety, or histories of relational or developmental trauma.",
                "Patients who experience sudden structural or sensory flare-ups directly linked to interpersonal stressors, career transitions, or life changes.",
              ].map((item, i) => (
                <li key={i} className="flex gap-4 text-muted-foreground leading-[1.8]">
                  <span className="font-serif text-foreground/60 mt-1 shrink-0">0{i + 1}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <blockquote className="mt-16 max-w-3xl border-l-2 border-foreground/30 pl-6 md:pl-8">
            <p className="uppercase tracking-[0.2em] text-xs font-semibold text-foreground mb-3">
              Clinical Outcome
            </p>
            <p className="font-serif text-xl md:text-2xl text-foreground leading-[1.5] tracking-tight">
              We do not attempt to "excavate" structural scars. Instead, by expanding network flexibility and retraining predictive loops, we restore the nervous system's dynamic equilibrium, allowing concurrent physical and medical therapies to achieve long-term success.
            </p>
          </blockquote>
        </div>
      </section>

      {/* Contact */}
      <section>
        <div className="max-w-[1000px] mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="max-w-3xl space-y-6">
            <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-foreground">
              Discuss a referral
            </h2>
            <p className="text-muted-foreground leading-[1.8]">
              I'm happy to have a brief conversation before a referral is made, or to liaise about shared patients. Please reach out directly.
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-3 pt-4 text-sm">
              <a href="mailto:vanesa@vanesasakota.com.au" className="text-foreground border-b border-foreground/40 pb-1 hover:border-foreground transition-colors">
                vanesa@vanesasakota.com.au
              </a>
              <a href="tel:0405933722" className="text-foreground border-b border-foreground/40 pb-1 hover:border-foreground transition-colors">
                0405 933 722
              </a>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default ForProviders;
