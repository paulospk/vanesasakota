import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

type Topic = {
  number: string;
  title: string;
  paragraphs: string[];
};

const topics: Topic[] = [
  {
    number: "01",
    title: "Adverse Childhood Experiences (ACEs)",
    paragraphs: [
      "The Adverse Childhood Experiences (ACE) Study drew attention to the relationship between childhood adversity and long-term health outcomes. It helped shift conversations about health by highlighting how early life experiences can influence physical and psychological wellbeing across the lifespan.",
      "While adversity alone does not determine future health, the study contributed to a growing recognition that experiences such as chronic stress, neglect, instability, and trauma may have lasting physiological as well as psychological effects.",
    ],
  },
  {
    number: "02",
    title: "Psychoneuroimmunology (PNI)",
    paragraphs: [
      "Psychoneuroimmunology explores the interaction between the nervous system, immune system, endocrine system, and psychological processes.",
      "This field has challenged traditional assumptions that emotional and physical health operate independently. Research suggests that stress, emotions, immune functioning, and physiology are interconnected and continuously influencing one another.",
    ],
  },
  {
    number: "03",
    title: "Stress Physiology & the HPA Axis",
    paragraphs: [
      "The body's stress response is essential for survival. When we perceive threat, a complex network involving the nervous system and endocrine system helps prepare us to respond.",
      "Research into stress physiology has expanded our understanding of how prolonged activation of these systems may influence sleep, energy, inflammation, pain, emotional wellbeing, and physical symptoms. This work has contributed significantly to modern understandings of chronic stress and its impact on health.",
    ],
  },
  {
    number: "04",
    title: "Pain Science & Central Sensitisation",
    paragraphs: [
      "Contemporary pain research has transformed our understanding of how pain is experienced.",
      "Pain is now understood as an output of the nervous system rather than a direct measure of tissue damage alone. In some cases, the nervous system can become increasingly sensitised, amplifying pain signals and bodily sensations.",
      "This research has provided important insights into chronic pain conditions and persistent symptoms that cannot always be fully explained by structural findings.",
    ],
  },
  {
    number: "05",
    title: "Attachment, Relationships & Regulation",
    paragraphs: [
      "Human beings develop and regulate within relationships.",
      "Research into attachment, interpersonal neurobiology, and therapeutic alliance highlights the role that connection, safety, belonging, and relational experiences can play in emotional and physiological wellbeing.",
      "These perspectives help us understand how relationships may influence both resilience and vulnerability across the lifespan.",
    ],
  },
];

const emergingAreas = [
  "Chronic pelvic pain",
  "Vulvodynia and vaginismus",
  "Psychodermatology",
  "Persistent physical symptoms",
  "Functional neurological symptoms",
  "Trauma and chronic illness",
  "Nervous system regulation",
  "Chronic stress and inflammation",
  "Mind-body approaches to pain and symptom management",
];

const books: { title: string; author: string; description: string }[] = [
  {
    title: "The Body Keeps the Score",
    author: "Bessel van der Kolk",
    description: "An influential exploration of how trauma reshapes the brain, body, and nervous system, and the pathways through which healing can occur.",
  },
  {
    title: "When the Body Says No",
    author: "Gabor Maté",
    description: "Examines the links between chronic stress, emotional suppression, and the development of physical illness.",
  },
  {
    title: "The Myth of Normal",
    author: "Gabor Maté",
    description: "A wide-ranging look at how modern culture, stress, and early experience shape long-term health and wellbeing.",
  },
  {
    title: "Waking the Tiger",
    author: "Peter Levine",
    description: "Introduces a somatic understanding of trauma and the body's innate capacity to discharge and recover from overwhelming experiences.",
  },
  {
    title: "The Way Out",
    author: "Alan Gordon",
    description: "A practical guide to understanding neuroplastic pain and the role of the nervous system in chronic symptoms.",
  },
  {
    title: "Explain Pain",
    author: "David Butler & Lorimer Moseley",
    description: "An accessible primer on modern pain science and how the nervous system shapes the experience of pain.",
  },
  {
    title: "Attached",
    author: "Amir Levine & Rachel Heller",
    description: "An approachable introduction to attachment theory and how early relational patterns influence adult relationships.",
  },
];

const TopicBlock = ({ topic }: { topic: Topic }) => (
  <article className="border-t border-border/60 pt-8 md:pt-12 first:border-t-0 first:pt-0">
    <div className="mb-5 md:mb-6 flex items-baseline gap-3 md:gap-4">
      <span className="uppercase tracking-[0.25em] text-[10px] md:text-[11px] font-medium text-muted-foreground tabular-nums">
        {topic.number}
      </span>
      <h3 className="font-serif text-xl md:text-2xl tracking-tight text-foreground leading-tight">
        {topic.title}
      </h3>
    </div>
    <div className="space-y-4 md:space-y-5">
      {topic.paragraphs.map((p, i) => (
        <p key={i} className="text-[14px] md:text-[15px] text-muted-foreground leading-[1.75]">
          {p}
        </p>
      ))}
    </div>
  </article>
);

const ForProviders = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Mind-Body Research & Resources | Vanesa Sakota Psychotherapy Sydney</title>
        <meta name="description" content="A curated collection of research, perspectives, and recommended reading on trauma, stress physiology, attachment, pain science, and mind-body health." />
        <link rel="canonical" href="https://vanesasakota.com.au/for-providers" />
        <meta property="og:title" content="Mind-Body Research & Resources | Vanesa Sakota Psychotherapy" />
        <meta property="og:description" content="Research and reading on trauma, stress physiology, attachment, and mind-body health." />
        <meta property="og:url" content="https://vanesasakota.com.au/for-providers" />
      </Helmet>
      <Navbar />

      {/* Hero */}
      <section className="bg-hero border-b border-border">
        <div className="max-w-[1000px] mx-auto px-5 md:px-8 py-10 md:py-20">
          <div className="max-w-2xl space-y-4 md:space-y-5 animate-fade-up">
            <p className="uppercase tracking-[0.25em] text-[10px] md:text-[11px] font-medium text-muted-foreground">
              Resources
            </p>
            <h1 className="font-serif text-3xl md:text-5xl tracking-tight text-foreground leading-[1.05]">
              Mind-Body Research &amp; Resources
            </h1>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-background border-b border-border">
        <div className="max-w-[1000px] mx-auto px-5 md:px-8 py-10 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 lg:gap-8">
            <div className="lg:col-span-3 space-y-2">
              <p className="uppercase tracking-[0.25em] text-[10px] md:text-[11px] font-medium text-muted-foreground">
                Introduction
              </p>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground tracking-tight leading-tight">
                The way we understand health and illness continues to evolve.
              </h2>
            </div>
            <div className="lg:col-span-7 max-w-[680px] space-y-4 text-[15px] md:text-base leading-[1.75] text-muted-foreground">
              <p>
                Historically, medicine and psychology were often viewed as separate domains. Increasingly, however, research across neuroscience, stress physiology, psychoneuroimmunology, trauma studies, pain science, attachment theory, and behavioural medicine points towards a more integrated understanding of human health.
              </p>
              <p>
                The resources below are not intended to provide definitive explanations for any individual's symptoms. Rather, they represent influential perspectives that have helped shape contemporary thinking about the relationship between the body, mind, nervous system, relationships, and environment.
              </p>
              <p>
                These ideas continue to inform my own clinical practice and may be useful for those interested in understanding symptoms through a broader biopsychosocial lens.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Foundational Perspectives */}
      <section className="bg-background border-b border-border">
        <div className="max-w-[1000px] mx-auto px-5 md:px-8 py-10 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 lg:gap-8">
            <div className="lg:col-span-3 space-y-2">
              <p className="uppercase tracking-[0.25em] text-[10px] md:text-[11px] font-medium text-muted-foreground">
                Research
              </p>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground tracking-tight leading-tight">
                Foundational Perspectives
              </h2>
            </div>
            <div className="lg:col-span-7 max-w-[680px] space-y-10 md:space-y-14">
              <p className="text-[15px] md:text-base text-muted-foreground leading-[1.75]">
                The following areas of research have significantly influenced contemporary understandings of persistent symptoms, stress-related illness, trauma, and recovery.
              </p>
              <div className="space-y-10 md:space-y-14">
                {topics.map((t) => (
                  <TopicBlock key={t.number} topic={t} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Research & Emerging Areas */}
      <section className="bg-background border-b border-border">
        <div className="max-w-[1000px] mx-auto px-5 md:px-8 py-10 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 lg:gap-8">
            <div className="lg:col-span-3 space-y-2">
              <p className="uppercase tracking-[0.25em] text-[10px] md:text-[11px] font-medium text-muted-foreground">
                Emerging
              </p>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground tracking-tight leading-tight">
                Current Research &amp; Emerging Areas
              </h2>
            </div>
            <div className="lg:col-span-7 max-w-[680px] space-y-6">
              <p className="text-[15px] md:text-base text-muted-foreground leading-[1.75]">
                Research continues to expand our understanding of the complex relationship between stress, physiology, emotions, behaviour, and health.
              </p>
              <p className="text-[15px] md:text-base text-muted-foreground leading-[1.75]">
                Areas of particular interest include:
              </p>
              <ul className="space-y-3 text-muted-foreground text-[15px] md:text-base leading-[1.75]">
                {emergingAreas.map((area) => (
                  <li key={area} className="flex items-start gap-3">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" />
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Books & Recommended Reading */}
      <section className="bg-background border-b border-border">
        <div className="max-w-[1000px] mx-auto px-5 md:px-8 py-10 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 lg:gap-8">
            <div className="lg:col-span-3 space-y-2">
              <p className="uppercase tracking-[0.25em] text-[10px] md:text-[11px] font-medium text-muted-foreground">
                Reading
              </p>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground tracking-tight leading-tight">
                Books &amp; Recommended Reading
              </h2>
            </div>
            <div className="lg:col-span-7 max-w-[680px] space-y-6">
              <p className="text-[15px] md:text-base text-muted-foreground leading-[1.75]">
                The books below have contributed significantly to contemporary discussions around trauma, stress physiology, attachment, chronic symptoms, and mind-body health. They are offered as educational resources for those wishing to explore these topics in greater depth.
              </p>
              <ul className="divide-y divide-border/60">
                {books.map((b) => (
                  <li key={b.title} className="py-5 first:pt-0 space-y-1.5">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <p className="font-serif text-lg md:text-xl text-foreground leading-snug">{b.title}</p>
                      <p className="uppercase tracking-[0.2em] text-[10px] md:text-[11px] font-medium text-muted-foreground">
                        {b.author}
                      </p>
                    </div>
                    <p className="text-[14px] md:text-[15px] text-muted-foreground leading-[1.75]">{b.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final Note */}
      <section>
        <div className="max-w-[1000px] mx-auto px-5 md:px-8 py-10 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 lg:gap-8">
            <div className="lg:col-span-3 space-y-2">
              <p className="uppercase tracking-[0.25em] text-[10px] md:text-[11px] font-medium text-muted-foreground">
                A Note
              </p>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground tracking-tight leading-tight">
                Every person's experience is unique.
              </h2>
            </div>
            <div className="lg:col-span-7 max-w-[680px] space-y-4 text-[15px] md:text-base leading-[1.75] text-muted-foreground">
              <p>
                While research can provide useful frameworks for understanding symptoms, no single model fully explains human suffering or recovery. My intention is not to reduce people to theories, diagnoses, or research findings, but to remain curious about the many biological, psychological, relational, and environmental factors that may be shaping their experience.
              </p>
              <p>
                This broader perspective sits at the heart of how I approach psychotherapy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default ForProviders;
