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

      {/* My Philosophy */}
      <section className="bg-background border-b border-border">
        <div className="max-w-[1100px] mx-auto px-5 md:px-8 py-10 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 lg:gap-8">
            <div className="lg:col-span-3 space-y-2">
              <p className="uppercase tracking-[0.25em] text-[10px] md:text-[11px] font-medium text-muted-foreground">
                Philosophy
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground tracking-tight leading-tight">
                My Philosophy
              </h2>
            </div>
            <div className="lg:col-span-7 max-w-[680px] space-y-4 text-[15px] md:text-base leading-[1.75] text-muted-foreground">
              <p>I believe good therapy looks at the whole person, not just the symptom in front of us. My approach is integrative, grounded in a biopsychosocial lens: your brain, your body, your relationships, and the environment you live in are all part of the picture.</p>
              <p>I draw on established tools like Cognitive Behavioural Therapy, alongside more holistic work that engages the nervous system, the different parts of you, and the deeper patterns keeping symptoms in place. I have a particular interest in supporting people whose symptoms have felt stuck or treatment-resistant, even after trying everything else.</p>
              <p>In practice, this often means addressing the physiological footprint of chronic stress: HPA axis dysregulation, allostatic load, and the psychoneuroimmune pathways linked to central sensitisation and nociplastic pain, alongside the psychological and relational patterns that keep the nervous system stuck in a threat response.</p>
              <p>This way of understanding healing has been shaped by the work of leading voices in the trauma field today, including Bessel van der Kolk and Peter Levine, all pointing to the same truth: healing happens not only in the mind, but in the body, the nervous system, and the story we carry.</p>
              <p>My goal isn't just to help you manage symptoms. It's to get to the root of what's driving them, and support the parts of you that need integration, so you can feel more whole.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Working With */}
      <section className="bg-background border-b border-border">
        <div className="max-w-[1100px] mx-auto px-5 md:px-8 py-10 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 lg:gap-8">
            <div className="lg:col-span-3 space-y-2">
              <p className="uppercase tracking-[0.25em] text-[10px] md:text-[11px] font-medium text-muted-foreground">
                Focus
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground tracking-tight leading-tight">
                Experience Working With
              </h2>
            </div>
            <div className="lg:col-span-7 max-w-[680px] space-y-8 text-[15px] md:text-base leading-[1.75] text-muted-foreground">
              <p>I work with adults across a broad range of experiences, including:</p>

              <div className="space-y-2">
                <h3 className="font-serif text-lg md:text-xl text-foreground">Mood &amp; Anxiety</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Anxiety and depression, including OCD and specific phobias</li>
                  <li>Chronic stress and burnout</li>
                  <li>Grief, loss, feeling stuck or confused, and rumination</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="font-serif text-lg md:text-xl text-foreground">Trauma &amp; the Body</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Trauma, including developmental trauma</li>
                  <li>Nociplastic pain, including chronic pelvic pain, vulvodynia, and vaginismus</li>
                  <li>Perinatal mental health, including preconception support</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="font-serif text-lg md:text-xl text-foreground">Behavioural &amp; Relational Patterns</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Addiction and unwanted behavioural patterns</li>
                  <li>Disordered eating, including binge eating and purging</li>
                  <li>Relationship and attachment difficulties</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="font-serif text-lg md:text-xl text-foreground">Self &amp; Identity</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Self-esteem, self-criticism, and perfectionism</li>
                  <li>Internal conflict and difficulty managing overwhelming emotions</li>
                </ul>
              </div>
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
                  <p className="uppercase tracking-[0.2em] text-[10px] md:text-[11px] font-medium text-muted-foreground mt-2">Western Sydney University, 2023: Dean&rsquo;s Merit List</p>
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
