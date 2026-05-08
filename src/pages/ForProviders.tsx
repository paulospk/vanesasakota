import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

type Section = {
  number: string;
  title: string;
  paragraphs: string[];
  subsections?: { heading: string; body: string }[];
  references: string[];
};

const partOne: Section[] = [
  {
    number: "01",
    title: "Early Life Experience & the Stress-Response System",
    paragraphs: [
      "Research over the past two decades has established that adverse childhood experiences and chronic early stress have lasting effects on how the nervous system develops and responds to threat across the lifespan. These are not psychological effects in the colloquial sense - they are measurable biological changes that shape stress reactivity, immune sensitivity, and pain processing in adulthood.",
      "This body of evidence helps explain why a significant proportion of patients presenting with chronic somatic symptoms carry a history of early adversity, and why treatment approaches that address only the symptom level frequently show limited long-term results.",
    ],
    references: [
      "National Scientific Council on the Developing Child - \"Early Experiences Can Alter Gene Expression\" (2010)",
      "McEwen, B.S. - \"Brain on stress\" PNAS (2012)",
      "Shonkoff, J.P. et al. - \"Lifelong effects of early childhood adversity\" Pediatrics (2012)",
    ],
  },
  {
    number: "02",
    title: "Chronic Stress & the Body",
    paragraphs: [
      "The HPA axis - the body's primary stress-response system - is well understood to have downstream effects on immune function, inflammation, pain signalling, and tissue health when chronically activated. Sustained psychological stress, relational threat, and unresolved experience have all been shown to maintain this activation state.",
      "This provides a biological framework for understanding why conditions such as chronic pelvic pain, persistent skin conditions, and treatment-resistant fatigue are increasingly recognised as having a significant psychophysiological component - even when investigations return clear results.",
    ],
    references: [
      "Dhabhar, F.S. - \"Effects of stress on immune function\" Immunologic Research (2014)",
      "Slavich, G.M. & Irwin, M.R. - \"From stress to inflammation and major depressive disorder\" Psychological Bulletin (2014)",
    ],
  },
  {
    number: "03",
    title: "Nociplastic Pain",
    paragraphs: [
      "In 2017, the International Association for the Study of Pain formally recognised nociplastic pain as a third mechanistic category of pain - arising from altered nervous system processing rather than identifiable tissue damage or nerve injury. It frequently co-occurs with fatigue, sleep disruption, and psychological distress, and does not reliably respond to tissue-level interventions.",
      "For patients who have received clear investigations, this framework offers a clinically grounded explanation - and points toward the interventions most likely to be effective.",
    ],
    references: [
      "Fitzcharles, M.A. et al. - \"Nociplastic pain\" The Lancet (2021)",
      "Woolf, C.J. - \"Central sensitization\" Pain (2011)",
    ],
  },
];

const partTwo: Section[] = [
  {
    number: "04",
    title: "Female Pelvic Pain: Vulvodynia & Vaginismus",
    paragraphs: [
      "Vulvodynia and vaginismus are among the most underdiagnosed and undertreated conditions in women's health. Despite affecting an estimated 8–16% of women, they are frequently dismissed, misattributed, or treated solely at the tissue level with limited long-term success. Current evidence supports a psychophysiological model in which the mechanisms described in Part One - early stress conditioning, HPA dysregulation, and central sensitisation - are recognised as primary drivers.",
    ],
    subsections: [
      {
        heading: "Vulvodynia",
        body: "Vulvodynia is defined as chronic vulvar pain lasting more than three months without an identifiable cause. It is best understood as a nociplastic pain condition localised to the vulvar region, driven by peripheral nerve sensitisation and central pain amplification. Psychological factors - including anxiety, catastrophising, and shame - are known to amplify pain through top-down modulation of nociception. Parts-based, somatic, and trauma-informed psychotherapy are effective treatment modalities, particularly where medical and physiotherapy interventions have plateaued.",
      },
      {
        heading: "Vaginismus",
        body: "Vaginismus is characterised by involuntary pelvic floor muscle contraction in response to anticipated or actual vaginal penetration. It is now best understood not as a muscular disorder but as a conditioned threat-avoidance reflex mediated by the autonomic nervous system. Treatment approaches that address the underlying psychological and nervous system drivers show strong outcomes. Pelvic floor physiotherapy is most effective when delivered alongside psychological support that addresses the threat response maintaining the reflex.",
      },
    ],
    references: [
      "Harlow, B.L. et al. - prevalence of vulvodynia, American Journal of Obstetrics and Gynecology (2014)",
      "Ter Kuile, M.M. et al. - therapist-aided exposure for vaginismus, Journal of Consulting and Clinical Psychology (2010)",
    ],
  },
  {
    number: "05",
    title: "Stress-Sensitive Skin Conditions",
    paragraphs: [
      "The skin and the nervous system share a common embryological origin and remain in close communication throughout life. The skin is not merely a passive physical barrier - it is a living sensory interface that reflects and responds to the body's internal psychological and physiological state. This bidirectional relationship is the basis of psychodermatology, a field that is increasingly recognised within dermatology as clinically relevant.",
      "The same upstream mechanisms outlined in Part One drive cutaneous inflammation through several overlapping pathways. HPA dysregulation reduces the skin's anti-inflammatory capacity. Sympathetic nervous system activation drives local inflammatory responses in tissue. Central sensitisation produces chronic pruritus and sensory amplification that persists beyond the original trigger.",
      "Conditions with strong psychodermatological evidence include eczema and atopic dermatitis, psoriasis, chronic urticaria, alopecia areata, acne, and chronic pruritus. Visible skin symptoms - particularly on exposed areas - can generate shame, anxiety, and social avoidance, which increase autonomic activation and drive further inflammation. Symptoms can sustain themselves even in the absence of new stressors, creating a self-perpetuating cycle in which psychological distress and physical symptoms reinforce one another.",
    ],
    references: [
      "Arck, P.C. & Paus, R. - from the brain-skin connection to the mind-skin connection, Experimental Dermatology (2006)",
      "Jafferany, M. & Franca, K. - psychodermatology basics, Acta Dermato-Venereologica (2016)",
      "Heller, M.M. et al. - mind-body treatments for psoriasis, American Journal of Clinical Dermatology (2011)",
    ],
  },
  {
    number: "06",
    title: "Other Presentations",
    paragraphs: [
      "The psychophysiological mechanisms described in Part One are not limited to pelvic or dermatological conditions. The same pathways - early stress conditioning, HPA dysregulation, and central sensitisation - are increasingly recognised across a broad range of chronic somatic presentations where investigations return clear results and symptoms persist.",
      "This includes functional gastrointestinal conditions such as IBS and functional dyspepsia, chronic headache and migraine, fibromyalgia, chronic fatigue, and stress-related presentations across other systems.",
      "Clinicians working with patients in these categories are welcome to make contact to discuss whether a referral may be appropriate.",
    ],
    references: [],
  },
];

const SectionBlock = ({ section }: { section: Section }) => (
  <article className="border-t border-border pt-12 first:border-t-0 first:pt-0">
    <div className="flex gap-6 items-baseline mb-6">
      <span className="font-serif text-3xl text-primary/40 font-bold leading-none shrink-0">
        {section.number}
      </span>
      <h3 className="font-serif text-2xl md:text-3xl tracking-tight text-foreground">
        {section.title}
      </h3>
    </div>

    <div className="space-y-5 mb-8">
      {section.paragraphs.map((p, i) => (
        <p key={i} className="text-muted-foreground leading-relaxed">
          {p}
        </p>
      ))}
    </div>

    {section.subsections?.map((sub, i) => (
      <div key={i} className="mb-8">
        <h4 className="font-serif text-xl text-foreground mb-3">{sub.heading}</h4>
        <p className="text-muted-foreground leading-relaxed">{sub.body}</p>
      </div>
    ))}

    {section.references.length > 0 && (
      <div>
        <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-widest">
          Key references to verify on PubMed
        </h4>
        <ul className="space-y-2">
          {section.references.map((r, i) => (
            <li key={i} className="text-sm text-muted-foreground leading-relaxed">
              {r}
            </li>
          ))}
        </ul>
      </div>
    )}
  </article>
);

const ForProviders = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="bg-hero border-b border-border">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-6 md:py-10">
          <div className="space-y-6 animate-fade-up">
            <p className="uppercase tracking-widest text-xs font-semibold text-muted-foreground">
              Mind-Body Evidence
            </p>
            <h1 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground leading-[1.1]">
              Mind-Body Evidence
            </h1>
            <p className="text-muted-foreground text-lg">
              This page summarises what the current evidence tells us about the relationship between psychological experience and chronic somatic symptoms.
            </p>
          </div>
        </div>
      </section>

      {/* Part One */}
      <section className="border-b border-border">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-6 md:py-10">
          <p className="uppercase tracking-widest text-xs font-semibold text-muted-foreground mb-3">
            Part One
          </p>
          <h2 className="uppercase tracking-widest text-xs font-semibold text-muted-foreground mb-12">
            The Science
          </h2>

          <div className="space-y-12">
            {partOne.map((s) => (
              <SectionBlock key={s.number} section={s} />
            ))}
          </div>
        </div>
      </section>

      {/* Part Two */}
      <section className="bg-accent/20 border-b border-border">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-6 md:py-10">
          <p className="uppercase tracking-widest text-xs font-semibold text-muted-foreground mb-3">
            Part Two
          </p>
          <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-foreground mb-6">
            Clinical Presentations
          </h2>
          <p className="text-muted-foreground mb-12 leading-relaxed">
            The following conditions represent presentations where the psychophysiological evidence is well established, and where psychological intervention has demonstrated meaningful outcomes - particularly where medical treatment has plateaued.
          </p>

          <div className="space-y-12">
            {partTwo.map((s) => (
              <SectionBlock key={s.number} section={s} />
            ))}
          </div>
        </div>
      </section>

      {/* Key References Table */}
      <section className="border-b border-border">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-6 md:py-10">
          <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-foreground mb-4">
            Key References
          </h2>
          <p className="text-muted-foreground italic mb-8 leading-relaxed">
            The following references are provided for clinicians wishing to explore the evidence base further. DOI links will be added once verified via PubMed.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left font-semibold text-foreground py-3 px-3">Topic</th>
                  <th className="text-left font-semibold text-foreground py-3 px-3">Author</th>
                  <th className="text-left font-semibold text-foreground py-3 px-3">Title</th>
                  <th className="text-left font-semibold text-foreground py-3 px-3">Journal</th>
                  <th className="text-left font-semibold text-foreground py-3 px-3">Year</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                {[
                  ["Early life stress", "National Scientific Council on the Developing Child", "Early Experiences Can Alter Gene Expression and Affect Long-Term Development", "Harvard Working Paper", "2010"],
                  ["Early life stress", "McEwen, B.S.", "Brain on stress: how the social environment gets under the skin", "PNAS", "2012"],
                  ["Early life stress", "Shonkoff, J.P. et al.", "The lifelong effects of early childhood adversity and toxic stress", "Pediatrics", "2012"],
                  ["HPA axis & inflammation", "Dhabhar, F.S.", "Effects of stress on immune function", "Immunologic Research", "2014"],
                  ["HPA axis & inflammation", "Slavich, G.M. & Irwin, M.R.", "From stress to inflammation and major depressive disorder", "Psychological Bulletin", "2014"],
                  ["Nociplastic pain", "Fitzcharles, M.A. et al.", "Nociplastic pain: towards an understanding of prevalent pain conditions", "The Lancet", "2021"],
                  ["Nociplastic pain", "Woolf, C.J.", "Central sensitization: implications for the diagnosis and treatment of pain", "Pain", "2011"],
                  ["Vulvodynia", "Harlow, B.L. et al.", "Prevalence of symptoms consistent with a diagnosis of vulvodynia", "American Journal of Obstetrics and Gynecology", "2014"],
                  ["Vaginismus", "Ter Kuile, M.M. et al.", "Therapist-aided exposure for women with lifelong vaginismus", "Journal of Consulting and Clinical Psychology", "2010"],
                  ["Psychodermatology", "Arck, P.C. & Paus, R.", "From the brain-skin connection to the mind-skin connection", "Experimental Dermatology", "2006"],
                  ["Psychodermatology", "Jafferany, M. & Franca, K.", "Psychodermatology: basics concepts", "Acta Dermato-Venereologica", "2016"],
                  ["Psychodermatology", "Heller, M.M. et al.", "Mind-body treatments for psoriasis", "American Journal of Clinical Dermatology", "2011"],
                ].map((row, i) => (
                  <tr key={i} className="border-b border-border/60 align-top">
                    {row.map((cell, j) => (
                      <td key={j} className="py-3 px-3 leading-relaxed">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Referrals */}
      <section className="border-b border-border">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-6 md:py-10">
          <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-foreground mb-6">
            Referrals
          </h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              I welcome referrals from GPs, gynaecologists, dermatologists, physiotherapists, and other clinicians working with patients who present with chronic somatic symptoms where investigations have returned clear results.
            </p>
            <p>
              My approach is integrative and relational, drawing on Clinical Resource Therapy, Brainspotting, and cognitive-behavioural frameworks. I work with stable, self-directed clients who are ready to explore the psychological and nervous system dimensions of their symptoms.
            </p>
            <p>
              I am happy to provide brief case consultation or liaise directly regarding shared patients. Please feel free to reach out to discuss whether a referral is appropriate.
            </p>
          </div>

          <div className="mt-10 p-6 bg-accent/30 border border-border">
            <p className="text-foreground text-sm leading-relaxed">
              Contact:{" "}
              <a href="mailto:vanesa@vanesasakota.com.au" className="text-primary hover:underline">
                vanesa@vanesasakota.com.au
              </a>{" "}
              ·{" "}
              <a href="tel:0405933722" className="text-primary hover:underline">
                0405 933 722
              </a>
            </p>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default ForProviders;
