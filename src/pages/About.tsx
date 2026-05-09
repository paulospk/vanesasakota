import profileImg from "@/assets/profile-hero.jpg";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="bg-hero border-b border-border">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="space-y-5 animate-fade-up max-w-[800px]">
              <p className="uppercase tracking-[0.2em] text-xs font-semibold text-muted-foreground">
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

      {/* About Vanesa - Highlights */}
      <section className="max-w-[1200px] mx-auto px-5 md:px-8 py-16 md:py-24 border-b border-border">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 lg:gap-16">
          <div className="lg:col-span-3"></div>
          <div className="lg:col-span-7 max-w-[800px]">
            <ul className="space-y-5 text-muted-foreground leading-relaxed">
              <li>
                <span className="font-semibold text-foreground">Specialization:</span> The intersection of somatic distress and psychological health.
              </li>
              <li>
                <span className="font-semibold text-foreground">Approach:</span> Bridging top-down (CBT/ACT) and bottom-up (Brainspotting/EMDR/Parts Work Somatic) interventions.
              </li>
              <li>
                <span className="font-semibold text-foreground">Background:</span> Master of Psychotherapy with a career background in Medical Technology leadership.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education & Memberships */}
      <section className="max-w-[1200px] mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 lg:gap-16">
          <div className="lg:col-span-3">
            <h2 className="font-serif text-2xl text-foreground mb-4">Education &amp; Memberships</h2>
          </div>
          <div className="lg:col-span-7 text-muted-foreground leading-relaxed max-w-[800px]">
            <ul className="space-y-3 list-disc pl-5 marker:text-muted-foreground/60">
              <li>Master of Psychotherapy and Counselling - Western Sydney University (NSW), 2023</li>
              <li>Bachelor of Science in Psychology - Griffith University (QLD), 2012</li>
              <li>Certificate, Clinical Resource Therapy - Resource Therapy International (2023)</li>
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
