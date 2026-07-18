import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

import DetailsSection from "@/components/DetailsSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Vanesa Sakota | Psychotherapist Sydney CBD</title>
        <meta name="description" content="In-person psychotherapy in Sydney CBD for anxiety, trauma, chronic stress, chronic pelvic pain, vulvodynia, vaginismus and stress-responsive skin conditions. PACFA registered." />
        <link rel="canonical" href="https://vanesasakota.com.au/" />
        <meta property="og:title" content="Vanesa Sakota | Psychotherapist Sydney CBD" />
        <meta property="og:description" content="In-person psychotherapy in Sydney CBD for anxiety, trauma, chronic stress and stress-sensitive physical conditions. PACFA registered." />
        <meta property="og:url" content="https://vanesasakota.com.au/" />
        <meta property="og:image" content="https://vanesasakota.com.au/og-image.jpg" />
      </Helmet>
      <Navbar />
      <HeroSection />

      {/* About Vanesa */}
      <section className="bg-background border-b border-border">
        <div className="max-w-[1100px] mx-auto px-5 md:px-8 py-10 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 lg:gap-8">
            <div className="lg:col-span-3 space-y-2">
              <p className="uppercase tracking-[0.25em] text-[10px] md:text-[11px] font-medium text-muted-foreground">
                Profile
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground tracking-tight leading-tight">
                About Vanesa
              </h2>
            </div>
            <div className="lg:col-span-7 max-w-[680px] space-y-4 text-[15px] md:text-base leading-[1.75] text-muted-foreground">
              <p>
                I've been drawn to understanding people for as long as I can remember: how we think, why we do what we do, what sits underneath our behaviour. It was never really a decision so much as a pull, so I studied psychology straight out of high school at Griffith University in Brisbane.
              </p>
              <p>
                But when I finished my degree, I made a choice that ended up shaping everything that came after: I decided I wasn't ready to practise. I was in my early twenties, and I couldn't picture myself sitting across from someone decades into a life I hadn't yet lived, and offering them something real. I trusted that instinct, and I moved to Sydney instead, without a clear plan beyond knowing there was more life to live first.
              </p>
              <p>
                What followed was seven years in health tech, as part of a startup building medical software, where I eventually became Head of Product. It was an intense, formative chapter: pitching to investors, travelling globally, building something from the ground up, succeeding faster than I expected to. Eventually that chapter came to an end, and I found myself needing to rebuild and recalibrate. In that process, I realised the pull back to psychology had never really left. It had just been waiting.
              </p>
              <p>
                Too much time had passed for a straightforward Master's in Psychology, so I chose a Master of Psychotherapy and Counselling at Western Sydney University instead, a decision I'm genuinely glad I made. Unlike more conventional training, this program was highly experiential and trauma-informed, with a real emphasis on developing the person of the therapist, not just accumulating techniques. It asked as much of me personally as it did academically, and I think that's exactly what makes for good therapy: the person doing the work has to have done their own work too. I completed the degree in 2023 and have been in private practice since.
              </p>
              <h3 className="font-serif text-2xl md:text-3xl text-foreground leading-tight pt-6">
                How I work
              </h3>
              <p>
                From a psychotherapeutic perspective, these symptoms often sit at the intersection of a sensitive nervous system, (early) relational experiences, and the ways the body handles unprocessed emotional stress. My approach explores how stress, history, and the body's natural defences may be reinforcing one another, rather than treating mind and body as separate.
              </p>
            </div>

          </div>
        </div>
      </section>

      <DetailsSection />

      {/* Education & Memberships */}
      <section className="bg-background border-b border-border">
        <div className="max-w-[1100px] mx-auto px-5 md:px-8 py-10 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 lg:gap-8">
            <div className="lg:col-span-3 space-y-2">
              <p className="uppercase tracking-[0.25em] text-[10px] md:text-[11px] font-medium text-muted-foreground">
                Credentials
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground tracking-tight leading-tight">
                Education &amp; Memberships
              </h2>
            </div>
            <div className="lg:col-span-7 max-w-[680px]">
              <ul className="divide-y divide-border/60">
                <li className="py-4 first:pt-0">
                  <p className="text-[15px] md:text-base text-foreground">Master of Psychotherapy and Counselling</p>
                  <p className="uppercase tracking-[0.2em] text-[10px] md:text-[11px] font-medium text-muted-foreground mt-2">Western Sydney University, 2023 — Dean&rsquo;s Merit List</p>
                </li>
                <li className="py-4">
                  <p className="text-[15px] md:text-base text-foreground">Bachelor of Science in Psychology</p>
                  <p className="uppercase tracking-[0.2em] text-[10px] md:text-[11px] font-medium text-muted-foreground mt-2">Griffith University, 2012</p>
                </li>
                <li className="py-4">
                  <p className="text-[15px] md:text-base text-foreground">Certified Practising</p>
                  <p className="uppercase tracking-[0.2em] text-[10px] md:text-[11px] font-medium text-muted-foreground mt-2">Psychotherapy and Counselling Federation of Australia (PACFA)</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default Index;
