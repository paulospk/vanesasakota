import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

import DetailsSection from "@/components/DetailsSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Trauma, Anxiety &amp; PTSD Therapy | Psychotherapist Sydney</title>
        <meta name="description" content="Therapy in Sydney CBD for anxiety, PTSD, phobias, social anxiety, chronic pain, chronic fatigue and stress-responsive physical symptoms. PACFA registered." />
        <meta name="keywords" content="anxiety therapy Sydney, PTSD treatment Sydney, trauma therapy Sydney, generalised anxiety disorder, social anxiety disorder therapy, phobia therapy Sydney, chronic pain therapy, chronic fatigue therapy, vaginismus treatment, teenage counselling Sydney, resource therapy, integrative psychotherapy Sydney" />
        <link rel="canonical" href="https://www.vanesasakota.com.au/" />
        <meta property="og:title" content="Trauma, Anxiety &amp; PTSD Therapy | Psychotherapist Sydney" />
        <meta property="og:description" content="Therapy in Sydney CBD for anxiety, PTSD, phobias, social anxiety, chronic pain, chronic fatigue and stress-responsive physical symptoms. PACFA registered." />
        <meta property="og:url" content="https://www.vanesasakota.com.au/" />
        <meta property="og:image" content="https://www.vanesasakota.com.au/og-image.jpg" />
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
              <p>I draw on established tools like Cognitive Behavioural Therapy, alongside an integrative approach grounded in what we know about the nervous system, working with autonomic regulation, the different parts of you, and the deeper patterns keeping symptoms in place.</p>
              <h3 className="font-serif text-lg md:text-xl text-foreground pt-2">Special Interest</h3>
              <p>I have a particular interest in working with people whose symptoms have felt stuck or treatment-resistant, even after trying everything else.</p>
              <p>In practice, this often means looking at the physiological footprint of psychological stress: HPA axis dysregulation, allostatic load and pathways linked to nociplastic pain, alongside the relational patterns that keep the nervous system stuck in a threat response.</p>
            <p>This way of understanding healing has been shaped by the work of leading voices in the trauma field today, including Bessel van der Kolk and Peter Levine. My goal isn't just to help you manage symptoms, but to understand what's driving them.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experienced Working With */}
      <section className="bg-background border-b border-border">
        <div className="max-w-[1100px] mx-auto px-5 md:px-8 py-10 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 lg:gap-8">
            <div className="lg:col-span-3 space-y-2">
              <p className="uppercase tracking-[0.25em] text-[10px] md:text-[11px] font-medium text-muted-foreground">
                Focus
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground tracking-tight leading-tight">
                Experienced Working With
              </h2>
            </div>
            <div className="lg:col-span-7 max-w-[680px] space-y-8 text-[15px] md:text-base leading-[1.75] text-muted-foreground">
              <p>I work with adults across a broad range of experiences, including:</p>

              <div
                className="space-y-2 rounded-[14px] p-5 md:p-6"
                style={{ backgroundColor: "hsl(var(--tint-sage))" }}
              >
                <h3 className="font-serif text-lg md:text-xl text-foreground">Mood &amp; Anxiety</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong className="text-foreground font-medium">Anxiety</strong> and <strong className="text-foreground font-medium">depression</strong>, including <strong className="text-foreground font-medium">OCD</strong> and <strong className="text-foreground font-medium">specific phobias</strong></li>
                  <li><strong className="text-foreground font-medium">Chronic stress</strong> and <strong className="text-foreground font-medium">burnout</strong></li>
                  <li><strong className="text-foreground font-medium">Grief</strong>, <strong className="text-foreground font-medium">loss</strong>, feeling stuck or confused, and <strong className="text-foreground font-medium">rumination</strong></li>
                </ul>
              </div>

              <div
                className="space-y-2 rounded-[14px] p-5 md:p-6"
                style={{ backgroundColor: "hsl(var(--tint-terracotta))" }}
              >
                <h3 className="font-serif text-lg md:text-xl text-foreground">Trauma &amp; the Body</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong className="text-foreground font-medium">Trauma</strong>, including <strong className="text-foreground font-medium">developmental trauma</strong></li>
                  <li><strong className="text-foreground font-medium">Nociplastic pain</strong>, including <strong className="text-foreground font-medium">chronic pelvic pain</strong>, <strong className="text-foreground font-medium">vulvodynia</strong>, and <strong className="text-foreground font-medium">vaginismus</strong></li>
                  <li><strong className="text-foreground font-medium">Perinatal mental health</strong></li>
                </ul>
              </div>

              <div
                className="space-y-2 rounded-[14px] p-5 md:p-6"
                style={{ backgroundColor: "hsl(var(--tint-blush))" }}
              >
                <h3 className="font-serif text-lg md:text-xl text-foreground">Behavioural &amp; Relational Patterns</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong className="text-foreground font-medium">Addiction</strong> and unwanted behavioural patterns</li>
                  
                  <li><strong className="text-foreground font-medium">Body-focused repetitive behaviours</strong>, including <strong className="text-foreground font-medium">skin-picking</strong></li>
                  <li><strong className="text-foreground font-medium">Relationship difficulties</strong></li>
                </ul>
              </div>

              <div
                className="space-y-2 rounded-[14px] p-5 md:p-6"
                style={{ backgroundColor: "hsl(var(--tint-sand))" }}
              >
                <h3 className="font-serif text-lg md:text-xl text-foreground">Self &amp; Identity</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong className="text-foreground font-medium">Self-esteem</strong>, <strong className="text-foreground font-medium">self-criticism</strong>, and <strong className="text-foreground font-medium">perfectionism</strong></li>
                  <li><strong className="text-foreground font-medium">Internal conflict</strong> and difficulty managing <strong className="text-foreground font-medium">overwhelming emotions</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DetailsSection />

      {/* Taking the first step */}
      <section className="bg-background border-b border-border">
        <div className="max-w-[1100px] mx-auto px-5 md:px-8 py-10 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 lg:gap-8">
            <div className="lg:col-span-3 space-y-2">
              <p className="uppercase tracking-[0.25em] text-[10px] md:text-[11px] font-medium text-muted-foreground">
                Beginning
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground tracking-tight leading-tight">
                Taking the first step
              </h2>
            </div>
            <div className="lg:col-span-7 max-w-[680px] space-y-4 text-[15px] md:text-base leading-[1.75] text-muted-foreground">
              <p>Starting therapy can feel like a big decision, and there's no perfect time to begin. Whatever has brought you here, whether it has been building for a while, or feels new, it's enough of a reason to consider reaching out.</p>
              <p>There's no right or wrong pace to this work, just a genuine curiosity and readiness for change.</p>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default Index;
