import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

type Section = {
  number: string;
  title: string;
  intro: string;
  mechanisms?: string[];
  clinicalRelevance?: string;
  subsections?: { heading: string; body: string; bullets?: string[] }[];
  references: { citation: string; url: string }[];
};

const partOne: Section[] = [
  {
    number: "01",
    title: "Epigenetics & Early Life Stress",
    intro:
      "Adverse childhood experiences (ACEs) and early relational stress do not remain in the past — they leave measurable biological traces that shape immune reactivity, stress sensitivity, and pain processing across the lifespan. Epigenetic modifications — changes in gene expression without altering the DNA sequence itself — are the primary mechanism through which early experience becomes embodied, conditioning the stress-response system long before any adult stressor occurs.",
    mechanisms: [
      "Early stress alters methylation of stress-response genes — including NR3C1, the glucocorticoid receptor gene — reducing the body's capacity to regulate cortisol effectively across the lifespan.",
      "Adverse early environments recalibrate the HPA axis to a state of chronic high sensitivity, establishing a threat-ready baseline that persists into adulthood.",
      "Epigenetic changes can be transmitted intergenerationally, meaning vulnerability to stress-driven illness may be biologically inherited.",
      "Early relational adversity alters the structural development of key brain regions involved in pain processing and interoception: the insula, amygdala, and anterior cingulate cortex.",
      "These changes are responsive to experience — including therapeutic experience. Parts-based and somatic therapies that address early relational trauma work directly at the level of this underlying biological dysregulation.",
    ],
    clinicalRelevance:
      "Many women presenting with chronic pelvic pain, vulvodynia, or somatic skin conditions carry a history of early relational adversity, attachment disruption, or chronic threat exposure. This is not a psychological explanation that minimises the physical — it is a biological explanation of how early experience programmes the body's stress, immune, and pain systems. It is also the reason why symptom-level medical interventions so frequently plateau.",
    references: [
      {
        citation:
          "National Scientific Council on the Developing Child (2010). Early Experiences Can Alter Gene Expression and Affect Long-Term Development. Working Paper 10.",
        url: "https://developingchild.harvard.edu/resources/early-experiences-can-alter-gene-expression-and-affect-long-term-development/",
      },
      {
        citation: "McEwen, B.S. (2012). Brain on stress: how the social environment gets under the skin. PNAS.",
        url: "https://doi.org/10.1073/pnas.1121254109",
      },
      {
        citation: "Shonkoff, J.P., et al. (2012). The lifelong effects of early childhood adversity and toxic stress. Pediatrics.",
        url: "https://doi.org/10.1542/peds.2011-2663",
      },
    ],
  },
  {
    number: "02",
    title: "The HPA Axis & Inflammation",
    intro:
      "The hypothalamic-pituitary-adrenal (HPA) axis is the body's primary stress-response system. Conditioned by early experience, it determines how the body responds to perceived threat in adulthood. When chronically activated — by ongoing stress, relational threat, or social-evaluative pressure — it drives a sustained inflammatory state with significant downstream consequences for immune function, pain processing, and tissue health.",
    mechanisms: [
      "Acute stress activates the HPA axis, releasing cortisol to regulate inflammation — an adaptive short-term response.",
      "Chronic or repeated stress leads to cortisol dysregulation: blunted responsiveness, circadian disruption, and loss of anti-inflammatory control.",
      "Dysregulated cortisol leads to elevated pro-inflammatory cytokines — including IL-6, TNF-α, and IL-1β — which sensitise peripheral nerves and lower the threshold for pain signalling.",
      "Sympathetic nervous system fibres synapse directly onto mast cells, meaning psychological threat states drive local inflammatory responses in tissue independently of the central stress axis.",
      "Social-evaluative threat states — shame, chronic vigilance, relational stress — are particularly potent HPA activators and have been shown to reliably elevate inflammatory markers in controlled research conditions.",
    ],
    clinicalRelevance:
      "In women presenting with chronic pelvic pain, vulvodynia, vaginismus, or inflammatory skin conditions, HPA dysregulation is increasingly understood as a central mechanism — not an incidental finding. The inflammatory state it produces is not simply a response to physical pathology; in many cases, it is the pathology. This is the biological basis for treating the stress-response system as the primary therapeutic target.",
    references: [
      {
        citation: "Dhabhar, F.S. (2014). Effects of stress on immune function: the good, the bad, and the beautiful. Immunologic Research.",
        url: "https://doi.org/10.1007/s12026-014-8517-0",
      },
      {
        citation:
          "Dickerson, S.S., & Kemeny, M.E. (2004). Acute stressors and cortisol responses: a theoretical integration and synthesis of laboratory research. Psychological Bulletin.",
        url: "https://doi.org/10.1037/0033-2909.130.3.355",
      },
      {
        citation:
          "Slavich, G.M., & Irwin, M.R. (2014). From stress to inflammation and major depressive disorder: a social signal transduction theory of depression. Psychological Bulletin.",
        url: "https://doi.org/10.1037/a0035302",
      },
    ],
  },
  {
    number: "03",
    title: "Nociplastic Pain",
    intro:
      "Nociplastic pain is the third mechanistic category of pain, formally recognised by the International Association for the Study of Pain (IASP) in 2017. It refers to pain arising from altered nociception — without clear evidence of tissue damage or nerve injury — as a result of central nervous system sensitisation. It is the clinical endpoint of the biological sequence described above: early stress programmes the HPA axis, chronic HPA dysregulation drives inflammation, and sustained inflammation sensitises the central nervous system until pain becomes self-generating.",
    mechanisms: [
      "The nervous system becomes sensitised: normal sensory input is amplified and misinterpreted as threatening or painful.",
      "Associated with allodynia (pain from non-painful stimuli) and hyperalgesia (amplified pain response to painful stimuli).",
      "The insular cortex — already altered by early adversity — becomes hyperreactive, generating threat-biased interpretation of bodily sensations.",
      "Does not respond reliably to tissue-level interventions because the driver is central, not peripheral.",
      "Commonly co-occurs with fatigue, sleep disruption, cognitive symptoms, and psychological distress — reflecting shared underlying nervous system dysregulation.",
    ],
    clinicalRelevance:
      "Nociplastic pain reframes the clinical picture for many women who have been told their investigations are normal. The pain is real, often severe, and neurobiologically explicable — but the site of pathology is the nervous system, not the tissue. Psychological and somatic therapies that downregulate the threat response and address the underlying drivers of sensitisation are therefore not alternative treatments — they are the mechanism-matched intervention.",
    references: [
      {
        citation: "Fitzcharles, M.A., et al. (2021). Nociplastic pain: towards an understanding of prevalent pain conditions. The Lancet.",
        url: "https://doi.org/10.1016/S0140-6736(21)00392-5",
      },
      {
        citation: "Woolf, C.J. (2011). Central sensitization: implications for the diagnosis and treatment of pain. Pain.",
        url: "https://doi.org/10.1016/j.pain.2010.09.030",
      },
      {
        citation:
          "Yunus, M.B. (2015). Central sensitivity syndromes: a unified concept for fibromyalgia and other similar maladies. Current Rheumatology Reviews.",
        url: "https://doi.org/10.2174/157339711102150702111250",
      },
    ],
  },
];

const partTwo: Section[] = [
  {
    number: "04",
    title: "Female Pelvic Pain: Vulvodynia & Vaginismus",
    intro:
      "Vulvodynia and vaginismus are among the most underdiagnosed and undertreated conditions in women's health. Despite affecting an estimated 8–16% of women, they are frequently dismissed, misattributed, or treated solely at the tissue level with limited long-term success. Current evidence supports a psychophysiological model of aetiology in which the mechanisms described in Part One — epigenetic conditioning, HPA dysregulation, and central sensitisation — are primary drivers.",
    subsections: [
      {
        heading: "Vulvodynia",
        body: "Vulvodynia is defined as chronic vulvar pain lasting more than three months without an identifiable cause. The pain — burning, stinging, rawness, or aching — is real and often severe, but investigations consistently return clear results. It is best understood as a nociplastic pain condition localised to the vulvar region, driven by peripheral nerve sensitisation and central pain amplification.",
        bullets: [
          "Childhood maltreatment and severe family stress are associated with a four-fold increased risk of developing adult vulvodynia.",
          "Women with vulvodynia show elevated inflammatory markers and altered cytokine profiles consistent with HPA dysregulation.",
          "Psychological factors — anxiety, catastrophising, shame — amplify pain through top-down modulation of nociception.",
          "Parts-based, somatic, and trauma-informed psychotherapy are effective treatment modalities, particularly where medical and physiotherapy interventions have plateaued.",
        ],
      },
      {
        heading: "Vaginismus",
        body: "Vaginismus is characterised by involuntary pelvic floor muscle contraction in response to anticipated or actual vaginal penetration. It is now best understood not as a muscular disorder but as a conditioned threat-avoidance reflex mediated by the autonomic nervous system — the pelvic floor responding to perceived danger in the same way any muscle group would under threat.",
        bullets: [
          "Research confirms the muscle activity is a reflex — an automatic protective response — rather than a structural abnormality of the pelvic floor.",
          "The reflex is maintained by the same neurological pathways involved in threat detection: the amygdala, insula, and sympathetic nervous system.",
          "Treatment approaches that address the underlying psychological and nervous system drivers show strong outcomes.",
          "Pelvic floor physiotherapy is most effective when delivered alongside psychological support that addresses the threat response maintaining the reflex.",
        ],
      },
    ],
    references: [
      {
        citation:
          "Harlow, B.L., et al. (2014). Prevalence of symptoms consistent with a diagnosis of vulvodynia. American Journal of Obstetrics and Gynecology.",
        url: "https://doi.org/10.1016/j.ajog.2014.02.009",
      },
      {
        citation:
          "Ter Kuile, M.M., et al. (2010). Therapist-aided exposure for women with lifelong vaginismus. Journal of Consulting and Clinical Psychology.",
        url: "https://doi.org/10.1037/a0019004",
      },
      {
        citation: "Stockdale, C.K., & Lawson, H.W. (2014). 2013 Vulvodynia Guideline update. Journal of Lower Genital Tract Disease.",
        url: "https://doi.org/10.1097/LGT.0000000000000021",
      },
    ],
  },
  {
    number: "05",
    title: "Psychodermatoses",
    intro:
      "Psychodermatoses refers to skin conditions in which psychological and physiological processes are closely and bidirectionally intertwined. The skin and the nervous system share a common embryological origin — both develop from the ectoderm — and remain in close communication throughout life. The skin is not merely a passive physical barrier; it is a living sensory interface that reflects and responds to the body's internal psychological and physiological state.",
    subsections: [
      {
        heading: "The stress-skin pathway",
        body: "The same upstream mechanisms outlined in Part One drive cutaneous inflammation through several overlapping pathways:",
        bullets: [
          "HPA dysregulation → loss of cortisol's anti-inflammatory regulation → elevated cytokines → unchecked skin inflammation.",
          "Sympathetic nervous system activation → direct mast cell degranulation via sympathetic nerve fibres → local release of histamine, IL-4, IL-13, IL-6, and TNF-α.",
          "Peripheral HPA axis: keratinocytes, melanocytes, and Langerhans cells produce their own CRH and ACTH locally — meaning the skin can generate and sustain inflammatory responses independently of central stress activation.",
          "Central sensitisation of interoception: a hyperreactive insula amplifies bodily signals including itch and pain, producing chronic pruritus and sensory amplification that persists beyond the original trigger.",
        ],
      },
      {
        heading: "The bidirectional loop",
        body: "Visible skin symptoms — particularly on exposed areas — generate shame, anxiety, social avoidance, and attentional hypervigilance. These psychological responses increase autonomic activation, worsen interoceptive conflict, and drive further inflammation. Symptoms sustain themselves even in the absence of new stressors, creating a self-perpetuating cycle in which psychological distress and physical symptoms mutually reinforce one another.",
      },
      {
        heading: "Conditions with strong psychodermatological evidence",
        body: "",
        bullets: [
          "Eczema / atopic dermatitis — stress-driven barrier dysfunction and Th2 immune dysregulation.",
          "Psoriasis — HPA dysregulation and elevated IL-17, IL-23 in the context of chronic stress and social threat.",
          "Chronic urticaria — autonomic nervous system dysregulation and mast cell hypersensitivity.",
          "Alopecia areata — neuroimmune pathway activation and T-cell mediated follicular inflammation.",
          "Excoriation disorder — compulsive behaviour with strong autonomic and parts-based psychological drivers.",
          "Chronic pruritus — nociplastic in nature; driven by central sensitisation rather than peripheral pathology.",
          "Acne — stress-driven androgen and sebum dysregulation with significant psychological amplification.",
        ],
      },
    ],
    references: [
      {
        citation:
          "Arck, P.C., & Paus, R. (2006). From the brain-skin connection to the mind-skin connection and back. Experimental Dermatology.",
        url: "https://doi.org/10.1111/j.1600-0625.2006.00420.x",
      },
      {
        citation: "Jafferany, M., & Franca, K. (2016). Psychodermatology: basics concepts. Acta Dermato-Venereologica.",
        url: "https://doi.org/10.2340/00015555-2376",
      },
      {
        citation: "Heller, M.M., et al. (2011). Mind-body treatments for psoriasis. American Journal of Clinical Dermatology.",
        url: "https://doi.org/10.2165/11594880-000000000-00000",
      },
    ],
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

    <p className="text-muted-foreground leading-relaxed mb-8 max-w-[70ch]">{section.intro}</p>

    {section.mechanisms && (
      <div className="mb-8">
        <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-widest">
          Key mechanisms
        </h4>
        <ul className="space-y-3">
          {section.mechanisms.map((m, i) => (
            <li key={i} className="flex gap-3 items-start text-muted-foreground text-sm leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
              <span>{m}</span>
            </li>
          ))}
        </ul>
      </div>
    )}

    {section.subsections?.map((sub, i) => (
      <div key={i} className="mb-8">
        <h4 className="font-serif text-xl text-foreground mb-3">{sub.heading}</h4>
        {sub.body && <p className="text-muted-foreground leading-relaxed mb-4 max-w-[70ch]">{sub.body}</p>}
        {sub.bullets && (
          <ul className="space-y-3">
            {sub.bullets.map((b, j) => (
              <li key={j} className="flex gap-3 items-start text-muted-foreground text-sm leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    ))}

    {section.clinicalRelevance && (
      <div className="mb-8 p-6 bg-accent/30 border border-border">
        <h4 className="font-semibold text-foreground mb-2 text-sm uppercase tracking-widest">
          Clinical relevance
        </h4>
        <p className="text-foreground text-sm leading-relaxed">{section.clinicalRelevance}</p>
      </div>
    )}

    <div>
      <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-widest">References</h4>
      <ul className="space-y-3">
        {section.references.map((r, i) => (
          <li key={i} className="text-sm text-muted-foreground leading-relaxed">
            {r.citation}{" "}
            <a
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline break-all"
            >
              {r.url}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </article>
);

const ForProviders = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="bg-hero border-b border-border">
        <div className="max-w-4xl mx-auto px-6 md:px-8 py-16 md:py-24 text-center">
          <div className="space-y-6 animate-fade-up">
            <p className="uppercase tracking-widest text-xs font-semibold text-muted-foreground">
              Mind-Body Evidence
            </p>
            <h1 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground leading-[1.1]">
              A Clinical Resource for Referring Providers
            </h1>
            <p className="text-muted-foreground text-lg max-w-[70ch] mx-auto">
              This page summarises current evidence on the psychophysiological mechanisms underlying chronic somatic symptoms in women. It is structured in two parts: the foundational biological mechanisms that drive these conditions, followed by the specific clinical presentations where this evidence is most directly relevant. It is intended as a resource for integrative GPs, gynaecologists, dermatologists, and other clinicians working with patients whose symptoms have not fully resolved through conventional medical treatment.
            </p>
          </div>
        </div>
      </section>

      {/* Part One */}
      <section className="border-b border-border">
        <div className="max-w-4xl mx-auto px-6 md:px-8 py-16 md:py-20">
          <p className="uppercase tracking-widest text-xs font-semibold text-muted-foreground mb-3">
            Part One
          </p>
          <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-foreground mb-6">
            The Mechanism
          </h2>
          <p className="text-muted-foreground mb-12 max-w-[70ch] leading-relaxed">
            The following three sections outline the biological sequence through which early life experience shapes the stress-response system, drives chronic inflammation, and ultimately produces altered pain and sensory processing. Understanding this sequence is foundational to understanding why psychological and somatic intervention is not an adjunct to treatment — it is the treatment.
          </p>

          <div className="space-y-12">
            {partOne.map((s) => (
              <SectionBlock key={s.number} section={s} />
            ))}
          </div>
        </div>
      </section>

      {/* Part Two */}
      <section className="bg-accent/20 border-b border-border">
        <div className="max-w-4xl mx-auto px-6 md:px-8 py-16 md:py-20">
          <p className="uppercase tracking-widest text-xs font-semibold text-muted-foreground mb-3">
            Part Two
          </p>
          <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-foreground mb-6">
            Clinical Applications
          </h2>
          <p className="text-muted-foreground mb-12 max-w-[70ch] leading-relaxed">
            The following conditions represent clinical presentations where the psychophysiological pathway described above is well evidenced, and where psychological intervention has demonstrated meaningful outcomes — particularly where medical treatment has plateaued.
          </p>

          <div className="space-y-12">
            {partTwo.map((s) => (
              <SectionBlock key={s.number} section={s} />
            ))}
          </div>
        </div>
      </section>

      {/* Referrals */}
      <section className="border-b border-border">
        <div className="max-w-4xl mx-auto px-6 md:px-8 py-16 md:py-20">
          <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-foreground mb-6">
            Referrals
          </h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed max-w-[70ch]">
            <p>
              I welcome referrals from GPs, gynaecologists, dermatologists, physiotherapists, and other clinicians working with women who present with chronic somatic symptoms where investigations have returned clear results.
            </p>
            <p>
              My approach is integrative and relational, drawing on Clinical Resource Therapy (parts-based work), somatic processing, and cognitive-behavioural frameworks. I work with stable, self-directed clients who are ready to explore the psychological and nervous system dimension of their symptoms.
            </p>
            <p>
              I am happy to provide brief case consultation or liaise directly regarding shared patients. Please feel welcome to reach out to discuss whether a referral is appropriate.
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
