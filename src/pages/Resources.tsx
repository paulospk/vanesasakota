import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";


type Entry = {
  title: string;
  meta: string;
  body: string;
  tag: string;
  href?: string;
  secondaryHref?: { label: string; url: string };
};

const seminal: Entry[] = [
  {
    title: "Adverse Childhood Experiences (ACE) Study",
    meta: "Felitti, Anda et al. · Kaiser Permanente / CDC · 1998",
    body: "A study of 17,000 people found that difficult early experiences like neglect, instability, and abuse quietly shape the body's biology over decades, showing up later as heart disease, autoimmune conditions, and chronic pain. Not metaphorically. Physiologically.",
    tag: "Early experience",
    href: "https://pubmed.ncbi.nlm.nih.gov/9635069/",
  },
  {
    title: "Polyvagal Theory",
    meta: "Stephen Porges · 1994–present",
    body: "The nervous system is always listening, scanning for cues of safety or danger beneath conscious awareness. When it concludes the environment isn't safe, it shifts into protective states: shutdown, dissociation, exhaustion. Symptoms, in this view, are the body doing its job.",
    tag: "Nervous system · safety",
    href: "https://onlinelibrary.wiley.com/doi/10.1111/j.1469-8986.1995.tb01213.x",
  },
  {
    title: "Psychoneuroimmunology (PNI)",
    meta: "Ader & Cohen · 1975",
    body: "For a long time, the mind and the immune system were treated as separate systems. This field established they aren't. Psychological experience produces measurable changes in immune and endocrine function. The mind-body divide was always more assumption than anatomy.",
    tag: "Mind–body",
    href: "https://pubmed.ncbi.nlm.nih.gov/1162023/",
  },
  {
    title: "The HPA axis and chronic stress",
    meta: "Selye · 1936–1950",
    body: "Stress has a biology, one that evolved to help us survive short-term threat. The problem is what happens when that system never switches off. Sustained activation produces neurological and physiological wear that accumulates quietly, until it doesn't.",
    tag: "Stress biology",
    href: "https://pubmed.ncbi.nlm.nih.gov/9722327/",
  },
  {
    title: "Central sensitisation",
    meta: "Woolf · 1983 · Yunus · 2007",
    body: "In some people, the nervous system becomes sensitised, amplifying signals of pain and threat even when there's no new injury or cause. The tissue is fine. The alarm system isn't. This helps explain conditions like fibromyalgia, chronic pelvic pain, and IBS that investigations consistently fail to account for.",
    tag: "Chronic symptoms",
    href: "https://pubmed.ncbi.nlm.nih.gov/6656869/",
    secondaryHref: { label: "Yunus, 2007", url: "https://pubmed.ncbi.nlm.nih.gov/17350675/" },
  },
];

const current: Entry[] = [
  {
    title: "Allostatic load",
    meta: "McEwen & Stellar · 1993 · ongoing",
    body: "Stress has a cumulative cost. Each experience of threat or dysregulation adds to a running biological total across the cardiovascular, immune, and endocrine systems. This is why removing a current stressor doesn't automatically restore someone to baseline. The body keeps the score over time.",
    tag: "Stress biology · endocrine",
  },
  {
    title: "The HPA axis and emotional memory",
    meta: "McEwen, Sapolsky, de Kloet · 1990s–present",
    body: "Cortisol doesn't just respond to stress in the moment. It also shapes how stress gets remembered. Research has traced how chronic cortisol exposure alters memory encoding in the hippocampus and amygdala, making threat feel more present and more likely. Relevant to trauma, persistent anxiety, and why some presentations resist treatment.",
    tag: "Endocrine · stress · memory",
  },
  {
    title: "The brain–skin axis",
    meta: "Arck, Paus et al. · 2006–present",
    body: "The skin and the nervous system develop from the same embryonic tissue, and they never stop communicating. Psychological stress has measurable effects on skin inflammation, barrier function, and immune behaviour. This helps explain the stress-responsiveness of conditions like eczema, rosacea, psoriasis, and acne.",
    tag: "Skin · nervous system · endocrine",
  },
  {
    title: "Interoception and predictive processing",
    meta: "Critchley, Seth, Khalsa · 2000s–present",
    body: "The brain doesn't wait to receive signals from the body. It actively predicts them. When that predictive model has been shaped by chronic threat or early adversity, symptoms can emerge from the model itself rather than from new physical events. Which also means the model can change.",
    tag: "Perception · prediction",
  },
  {
    title: "Relational neuroscience and co-regulation",
    meta: "Cozolino, Siegel, Schore · 1990s–present",
    body: "The nervous system develops inside relationship and continues to be regulated through it. Attunement, safety, and relational repair are not just psychological experiences. They are biological events with measurable neurological correlates.",
    tag: "Regulation · relationship",
  },
];

type Book = {
  cover: string;
  title: string;
  author: string;
  description: string;
  href: string;
  tags?: string[];
  buyLabel?: string;
};


const accessible: Book[] = [
  {
    cover: "https://covers.openlibrary.org/b/isbn/9780470923351-L.jpg",
    title: "When the Body Says No",
    author: "Gabor Maté",
    description: "The connection between emotional suppression, chronic stress, and serious illness, approached with compassion and clinical depth.",
    href: "https://www.booktopia.com.au/when-the-body-says-no-gabor-mat-/book/9780470923351.html",
  },
  {
    cover: "https://covers.openlibrary.org/b/isbn/9780143127741-L.jpg",
    title: "The Body Keeps the Score",
    author: "Bessel van der Kolk",
    description: "How trauma reshapes brain, body, and self, and the range of approaches that support recovery.",
    href: "https://www.booktopia.com.au/the-body-keeps-the-score-bessel-van-der-kolk/book/9780143127741.html",
  },
  {
    cover: "https://covers.openlibrary.org/b/isbn/9780805073690-L.jpg",
    title: "Why Zebras Don't Get Ulcers",
    author: "Robert Sapolsky",
    description: "The biology of stress, and why the human capacity for anticipation and rumination produces particular vulnerability to chronic stress illness.",
    href: "https://www.booktopia.com.au/why-zebras-don-t-get-ulcers-robert-m-sapolsky/book/9780805073690.html",
  },
  {
    cover: "https://covers.booktopia.com.au/big/9780648575306/being-me.jpg",
    title: "Being Me: Healing Your Attachment Wounds and Becoming Whole",
    author: "Maree B. Even",
    description: "Uses attachment theory and neuroscience to explain what children need from early relationships to develop a secure sense of self, and what can happen when those needs aren't met. Written accessibly for general readers, it offers a path toward healing disconnection, emotional difficulty, and relational patterns rooted in early experience. Relevant for clients exploring attachment, developmental trauma, and identity.",
    href: "https://www.booktopia.com.au/being-me-maree-b-even/prod9780648575306.html",
  },
];

const deeper: Book[] = [

  {
    cover: "https://covers.openlibrary.org/b/isbn/9781556432330-L.jpg",
    title: "Waking the Tiger",
    author: "Peter Levine",
    description: "Somatic experiencing: how trauma is stored in the body and how the body's own processes can facilitate its resolution.",
    href: "https://www.booktopia.com.au/waking-the-tiger-peter-a-levine/book/9781556432330.html",
  },
  {
    cover: "https://covers.openlibrary.org/b/isbn/9780393707878-L.jpg",
    title: "The Pocket Guide to the Polyvagal Theory",
    author: "Stephen Porges",
    description: "An accessible introduction to neuroception, autonomic states, and the conditions that support healing.",
    href: "https://www.booktopia.com.au/the-pocket-guide-to-the-polyvagal-theory-stephen-w-porges/book/9780393707878.html",
  },
  {
    cover: "https://covers.openlibrary.org/b/id/7333597-L.jpg",
    title: "Explain Pain",
    author: "David Butler & G. Lorimer Moseley",
    description: "An essential, evidence-based exploration of modern pain biology, illustrating how the nervous system learns to protect the body through persistent pain and sensitization.",
    href: "https://www.booktopia.com.au/explain-pain-david-butler/book/9780987342669.html",
  },
];

const EntryCard = ({ entry }: { entry: Entry }) => (
  <article className="border border-border bg-card rounded-lg p-6 md:p-7 space-y-3">
    <h2 className="font-serif text-xl md:text-2xl text-foreground leading-snug">{entry.title}</h2>
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
      <h3 className="font-serif text-xl md:text-2xl text-foreground leading-snug">{book.title}</h3>
      <p className="uppercase tracking-[0.2em] text-[10px] md:text-[11px] font-medium text-muted-foreground">
        {book.author}
      </p>
      <p className="text-muted-foreground text-[14px] md:text-[15px] leading-[1.75]">{book.description}</p>
      {book.tags && book.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-1">
          {book.tags.map((t) => (
            <span
              key={t}
              className="inline-block text-[11px] tracking-[0.15em] uppercase font-medium text-foreground bg-hero border border-border rounded-full px-3 py-1"
            >
              {t}
            </span>
          ))}
        </div>
      )}
      {book.buyLabel && (
        <div className="pt-3">
          <a
            href={book.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-[11px] tracking-[0.2em] uppercase font-medium text-foreground border border-border rounded-full px-4 py-2 hover:bg-hero transition-colors"
          >
            {book.buyLabel}
          </a>
        </div>
      )}
    </div>
  </article>
);



const Resources = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Trauma, Anxiety &amp; Chronic Pain Resources | Sydney</title>
        <meta name="description" content="Curated resources on trauma, anxiety, PTSD, chronic pain, chronic fatigue, phobia and nervous system regulation from a psychotherapist in Sydney CBD." />
        <meta name="keywords" content="trauma therapy Sydney, anxiety therapy Sydney, PTSD treatment Sydney, chronic pain therapy, chronic fatigue therapy, resource therapy, phobia therapy Sydney" />
        <link rel="canonical" href="https://www.vanesasakota.com.au/resources" />
        <meta property="og:title" content="Trauma, Anxiety &amp; Chronic Pain Resources | Sydney" />
        <meta property="og:description" content="Curated resources on trauma, anxiety, PTSD, chronic pain, chronic fatigue, phobia and nervous system regulation from a psychotherapist in Sydney CBD." />
        <meta property="og:url" content="https://www.vanesasakota.com.au/resources" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Resources",
            url: "https://www.vanesasakota.com.au/resources",
            description:
              "Curated books and research on trauma, chronic stress, pain science and nervous system regulation.",
            hasPart: [...accessible, ...deeper].map((book) => ({
              "@type": "Book",
              name: book.title,
              author: { "@type": "Person", name: book.author },
              image: book.cover,
              url: book.href,
            })),
          })}
        </script>
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
              Trauma, anxiety and chronic pain resources
            </h1>
            <p className="text-muted-foreground text-[15px] md:text-base leading-[1.75] max-w-[640px]">
              Seminal research, current thinking, and recommended reading that inform a whole-person view of health,
              one that holds biological, psychological, social, and endocrine dimensions together rather than apart.
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
                  <h2 className="font-serif text-2xl md:text-3xl text-foreground leading-tight">
                    Accessible reading
                  </h2>
                  <div className="space-y-6 md:space-y-8">
                    {accessible.map((b) => (
                      <BookRow key={b.title} book={b} />
                    ))}
                  </div>
                </div>
                <div className="space-y-6 md:space-y-8">
                  <h2 className="font-serif text-2xl md:text-3xl text-foreground leading-tight">
                    Deeper reading
                  </h2>
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
