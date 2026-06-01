import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Entry = {
  title: string;
  meta: string;
  body: string;
  tag: string;
};

const seminal: Entry[] = [
  {
    title: "Adverse Childhood Experiences (ACE) Study",
    meta: "Felitti, Anda et al. · Kaiser Permanente / CDC · 1998",
    body: "A landmark epidemiological study of over 17,000 adults, establishing a dose-response relationship between early adversity and adult physical health outcomes, including cardiovascular disease, autoimmune conditions, chronic pain, and more. The study reframed health-risk behaviours as adaptations to overwhelming early environments rather than individual failings.",
    tag: "Early experience",
  },
  {
    title: "Polyvagal Theory",
    meta: "Stephen Porges · 1994–present",
    body: "Porges proposed that the autonomic nervous system continuously and unconsciously scans the environment for cues of safety, a process he termed neuroception. Chronic symptoms including fatigue, dissociation, and pain are understood as protective nervous system states rather than pathology.",
    tag: "Nervous system · safety",
  },
  {
    title: "Psychoneuroimmunology (PNI)",
    meta: "Ader & Cohen · 1975 · expanded field",
    body: "The discovery of bidirectional communication between the nervous, endocrine, and immune systems established a biological basis for the mind–body relationship. Psychological experience produces measurable physiological change | a finding that underpins much of what followed.",
    tag: "Mind–body",
  },
  {
    title: "The HPA axis and chronic stress",
    meta: "McEwen, Selye, Sapolsky · various",
    body: "Research into the hypothalamic-pituitary-adrenal axis mapped the biological mechanisms by which sustained stress | via cortisol, adrenaline, and inflammatory pathways | becomes dysregulating over time. The foundation for understanding why chronic stress produces illness rather than simply discomfort.",
    tag: "Stress biology",
  },
  {
    title: "Central sensitisation",
    meta: "Woolf · 1983 · expanded by Yunus and others",
    body: "A sensitised nervous system amplifies signals | including pain and threat detection | in the absence of new tissue damage. Central to understanding fibromyalgia, IBS, chronic pelvic pain, chronic fatigue, and stress-responsive skin conditions. A neurological rather than imagined phenomenon.",
    tag: "Chronic symptoms",
  },
];

const current: Entry[] = [
  {
    title: "Allostatic load",
    meta: "McEwen & Stellar · 1993 · ongoing",
    body: "The cumulative biological cost of repeated or chronic stress, measurable across cardiovascular, metabolic, and immune systems. Useful for understanding why reducing a current stressor does not automatically undo physiological dysregulation | the body maintains a running total.",
    tag: "Stress biology",
  },
  {
    title: "The brain–skin axis",
    meta: "Arck, Paus et al. · 2006–present",
    body: "Dermatological and neurological research has established direct pathways between psychological stress and skin inflammation | altering barrier function, immune cell behaviour, and neuropeptide levels. Relevant to psoriasis, eczema, rosacea, acne, and stress-related alopecia.",
    tag: "Skin & nervous system",
  },
  {
    title: "Interoception and predictive processing",
    meta: "Critchley, Seth, Khalsa · 2000s–present",
    body: "The brain actively predicts bodily signals rather than passively receiving them. When that predictive model is shaped by chronic threat or early adversity, symptoms emerge as a function of the model itself | which means the model can be updated through treatment.",
    tag: "Perception · prediction",
  },
  {
    title: "Relational neuroscience and co-regulation",
    meta: "Cozolino, Siegel, Schore · various",
    body: "The nervous system develops within relationship and continues to regulate through it. Attunement, safety, and relational repair are not simply interpersonal | they are biological events with measurable neurological correlates.",
    tag: "Regulation · relationship",
  },
];

type Book = {
  cover: string;
  title: string;
  author: string;
  description: string;
  href: string;
};

const accessible: Book[] = [
  {
    cover: "https://covers.openlibrary.org/b/isbn/9780143127741-L.jpg",
    title: "The Body Keeps the Score",
    author: "Bessel van der Kolk",
    description: "How trauma reshapes brain, body, and self | and the range of approaches that support recovery.",
    href: "https://www.booktopia.com.au/the-body-keeps-the-score-bessel-van-der-kolk/book/9780143127741.html",
  },
  {
    cover: "https://covers.openlibrary.org/b/isbn/9780805073690-L.jpg",
    title: "Why Zebras Don't Get Ulcers",
    author: "Robert Sapolsky",
    description: "The biology of stress | why the human capacity for anticipation and rumination produces particular vulnerability to chronic stress illness.",
    href: "https://www.booktopia.com.au/why-zebras-don-t-get-ulcers-robert-m-sapolsky/book/9780805073690.html",
  },
  {
    cover: "https://covers.openlibrary.org/b/isbn/9780470923351-L.jpg",
    title: "When the Body Says No",
    author: "Gabor Maté",
    description: "The connection between emotional suppression, chronic stress, and serious illness | approached with compassion and clinical depth.",
    href: "https://www.booktopia.com.au/when-the-body-says-no-gabor-mat-/book/9780470923351.html",
  },
];

const deeper: Book[] = [
  {
    cover: "https://covers.openlibrary.org/b/isbn/9781556432330-L.jpg",
    title: "Waking the Tiger",
    author: "Peter Levine",
    description: "Somatic experiencing | how trauma is stored in the body and how the body's own processes can facilitate its resolution.",
    href: "https://www.booktopia.com.au/waking-the-tiger-peter-a-levine/book/9781556432330.html",
  },
  {
    cover: "https://covers.openlibrary.org/b/isbn/9780393707878-L.jpg",
    title: "The Pocket Guide to the Polyvagal Theory",
    author: "Stephen Porges",
    description: "An accessible introduction to neuroception, autonomic states, and the conditions that support healing.",
    href: "https://www.booktopia.com.au/the-pocket-guide-to-the-polyvagal-theory-stephen-w-porges/book/9780393707878.html",
  },
];

const EntryCard = ({ entry }: { entry: Entry }) => (
  <article className="border border-border bg-card rounded-lg p-6 md:p-7 space-y-3">
    <h3 className="font-serif text-xl md:text-2xl text-foreground leading-snug">{entry.title}</h3>
    <p className="uppercase tracking-[0.2em] text-[10px] md:text-[11px] font-medium text-muted-foreground">
      {entry.meta}
    </p>
    <p className="text-muted-foreground text-[14px] md:text-[15px] leading-[1.75]">{entry.body}</p>
    <div className="pt-1">
      <span className="inline-block text-[11px] tracking-[0.15em] uppercase font-medium text-foreground bg-hero border border-border rounded-full px-3 py-1">
        {entry.tag}
      </span>
    </div>
  </article>
);

const BookRow = ({ book }: { book: Book }) => (
  <article className="grid grid-cols-[100px_1fr] md:grid-cols-[140px_1fr] gap-5 md:gap-8 items-start border-t border-border/60 pt-6 first:border-t-0 first:pt-0">
    <img
      src={book.cover}
      alt={`${book.title} cover`}
      loading="lazy"
      className="w-full h-auto rounded-sm shadow-sm border border-border/60"
    />
    <div className="space-y-2">
      <h4 className="font-serif text-xl md:text-2xl text-foreground leading-snug">{book.title}</h4>
      <p className="uppercase tracking-[0.2em] text-[10px] md:text-[11px] font-medium text-muted-foreground">
        {book.author}
      </p>
      <p className="text-muted-foreground text-[14px] md:text-[15px] leading-[1.75]">{book.description}</p>
    </div>
  </article>
);


const Resources = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Resource Library | Vanesa Sakota Psychotherapy Sydney</title>
        <meta
          name="description"
          content="A biopsychosocial resource library: seminal research, current thinking, and recommended reading on chronic stress, trauma, and mind–body health."
        />
        <link rel="canonical" href="https://vanesasakota.com.au/resources" />
        <meta property="og:title" content="Resource Library | Vanesa Sakota Psychotherapy" />
        <meta
          property="og:description"
          content="Seminal research, current thinking, and recommended reading on whole-person health."
        />
        <meta property="og:url" content="https://vanesasakota.com.au/resources" />
      </Helmet>
      <Navbar />

      {/* Hero */}
      <section className="bg-hero border-b border-border">
        <div className="max-w-[1000px] mx-auto px-5 md:px-8 py-10 md:py-20">
          <div className="max-w-2xl space-y-4 md:space-y-5 animate-fade-up">
            <p className="uppercase tracking-[0.25em] text-[10px] md:text-[11px] font-medium text-muted-foreground">
              Resource library
            </p>
            <h1 className="font-serif text-3xl md:text-5xl tracking-tight text-foreground leading-[1.05]">
              A biopsychosocial lens
            </h1>
            <p className="text-muted-foreground text-[15px] md:text-base leading-[1.75] max-w-[640px]">
              Seminal research, current thinking, and recommended reading that inform a whole-person view of health
              | one that holds biological, psychological, and social dimensions together rather than apart.
            </p>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="border-b border-border">
        <div className="max-w-[1000px] mx-auto px-5 md:px-8 py-10 md:py-16">
          <Tabs defaultValue="seminal" className="w-full">
            <TabsList className="bg-hero border border-border h-auto p-1 mb-8 md:mb-10 flex-wrap">
              <TabsTrigger
                value="seminal"
                className="text-xs md:text-sm tracking-wide px-4 py-2 data-[state=active]:bg-foreground data-[state=active]:text-background"
              >
                Seminal work
              </TabsTrigger>
              <TabsTrigger
                value="current"
                className="text-xs md:text-sm tracking-wide px-4 py-2 data-[state=active]:bg-foreground data-[state=active]:text-background"
              >
                Current research
              </TabsTrigger>
              <TabsTrigger
                value="reading"
                className="text-xs md:text-sm tracking-wide px-4 py-2 data-[state=active]:bg-foreground data-[state=active]:text-background"
              >
                Reading
              </TabsTrigger>
            </TabsList>

            <TabsContent value="seminal" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                {seminal.map((e) => (
                  <EntryCard key={e.title} entry={e} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="current" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                {current.map((e) => (
                  <EntryCard key={e.title} entry={e} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="reading" className="mt-0">
              <div className="space-y-12 md:space-y-16">
                <div className="space-y-6 md:space-y-8">
                  <h3 className="font-serif text-2xl md:text-3xl text-foreground leading-tight">
                    Accessible reading
                  </h3>
                  <div className="space-y-6 md:space-y-8">
                    {accessible.map((b) => (
                      <BookRow key={b.title} book={b} />
                    ))}
                  </div>
                </div>
                <div className="space-y-6 md:space-y-8">
                  <h3 className="font-serif text-2xl md:text-3xl text-foreground leading-tight">
                    Deeper reading
                  </h3>
                  <div className="space-y-6 md:space-y-8">
                    {deeper.map((b) => (
                      <BookRow key={b.title} book={b} />
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default Resources;
