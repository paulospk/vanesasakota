import profileImg from "@/assets/vanesa-portrait.png";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="bg-hero border-b border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-8 pt-12 pb-8 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 animate-fade-up">
              <p className="uppercase tracking-widest text-xs font-semibold text-muted-foreground">
                About Vanesa
              </p>
              <h1 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground leading-[1.1]">
                A Different Kind of Conversation.
              </h1>
              <p className="text-muted-foreground text-lg max-w-[55ch]">
                Creating a safe, clinical, and supportive space to explore what lies beneath the surface.
              </p>
            </div>
            <div className="animate-fade-up" style={{ animationDelay: "100ms" }}>
              <div className="relative">
                <div className="absolute -inset-3 border border-border -z-10 translate-x-3 translate-y-3" />
                <img
                  src={profileImg}
                  alt="Vanesa Sakota"
                  className="w-full aspect-[4/5] object-cover object-top grayscale"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Vanesa */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-10 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 className="font-serif text-2xl text-foreground mb-4">About Vanesa</h2>
          </div>
          <div className="lg:col-span-8 space-y-5 text-muted-foreground leading-relaxed max-w-[65ch]">
            <p>
              Therapy offers a space to explore what's beneath the surface — the emotional patterns, physical symptoms, and experiences that are often difficult to put into words. My work focuses on the connection between mind and body: the way unresolved experiences can show up as chronic pain, tension, fatigue, stress-sensitive skin conditions, pelvic pain, and a nervous system that never quite settles.
            </p>
            <p>
              I work with adults navigating these presentations alongside trauma, relationship issues, anxiety and depression.
            </p>
            <p>
              I draw on Clinical Resource Therapy, Brainspotting and CBT to work across both conscious and unconscious processes — addressing thoughts and beliefs, as well as the deeper emotional and somatic material that often drives symptoms and patterns.
            </p>
            <p>
              There is no perfect moment to begin. A part of you however has brought you here, and that may be worth paying attention to. Please don't hesitate to reach out if you have any questions.
            </p>
          </div>
        </div>
      </section>

      {/* Background & Training */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pb-10 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 className="font-serif text-2xl text-foreground mb-4">Background &amp; Training</h2>
          </div>
          <div className="lg:col-span-8 space-y-5 text-muted-foreground leading-relaxed max-w-[65ch]">
            <p>
              My path into psychotherapy was not conventional. Before training as a psychotherapist, I spent years working in start-ups and medical technology — high-pressure environments that gave me a close understanding of what chronic stress actually does to people over time.
            </p>
            <p>
              I completed a Bachelor of Science in Psychology at Griffith University in Queensland, before returning to New South Wales to complete a Master of Psychotherapy and Counselling at Western Sydney University. I am trained in Brainspotting, Clinical Resource Therapy, and CBT, and am currently supervised by Philippa Thornton, psychologist and leading Resource Therapy practitioner. I have been in private practice for three years, working online and from rooms in Sydney's Eastern Suburbs.
            </p>
          </div>
        </div>
      </section>

      {/* Education & Memberships */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pb-10 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 className="font-serif text-2xl text-foreground mb-4">Education &amp; Memberships</h2>
          </div>
          <div className="lg:col-span-8 text-muted-foreground leading-relaxed max-w-[65ch]">
            <ul className="space-y-3 list-disc pl-5 marker:text-muted-foreground/60">
              <li>Master of Psychotherapy and Counselling — Western Sydney University (NSW)</li>
              <li>Bachelor of Science in Psychology — Griffith University (QLD)</li>
              <li>Certificate, Clinical Resource Therapy — Resource Therapy International (2023)</li>
              <li>Registered Member, Psychotherapy and Counselling Federation of Australia (PACFA)</li>
              <li>Affiliate Member, Australian Psychological Society (APS)</li>
            </ul>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default About;
