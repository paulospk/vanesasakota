import profileImg from "@/assets/profile-about.jpg";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="bg-hero border-b border-border">
        <div className="max-w-[1100px] mx-auto px-5 md:px-8 pt-20 pb-16 md:pt-32 md:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
            <div className="space-y-5 animate-fade-up max-w-[800px]">
              <p className="uppercase tracking-[0.25em] text-[10px] md:text-[11px] font-medium text-muted-foreground">
                About Vanesa
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight text-foreground leading-[1.1]">
                A Different Kind of Conversation
              </h1>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-[52ch]">
                Creating a safe, clinical, and supportive space to explore what lies beneath the surface.
              </p>
            </div>
            <div className="animate-fade-up" style={{ animationDelay: "100ms" }}>
              <img
                src={profileImg}
                alt="Vanesa Sakota"
                className="w-full aspect-[4/5] object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Vanesa */}
      <section className="bg-background border-b border-border">
        <div className="max-w-[1000px] mx-auto px-5 md:px-8 py-10 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 lg:gap-8">
            <div className="lg:col-span-3 space-y-2">
              <p className="uppercase tracking-[0.25em] text-[10px] md:text-[11px] font-medium text-muted-foreground">
                About
              </p>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground tracking-tight leading-tight">
                About Vanesa
              </h2>
            </div>
            <div className="lg:col-span-7 max-w-[640px] space-y-4 text-[14px] md:text-[15px] leading-[1.75] text-muted-foreground">
              <p>
                Vanesa is an integrative psychotherapist based in Sydney. She graduated with a Master of Psychotherapy and Counselling and a Bachelor of Science in Psychology, following a previous seven-year career as a Head of Product within the medical technology sector.
              </p>
              <p>
                Vanesa completed her clinical training and placements in Sydney, developing a practice that bridges traditional talk therapy with somatic and nervous system resolution. Her framework combines top-down evidence-based modalities, including Cognitive Behavioural Therapy (CBT) and Acceptance and Commitment Therapy (ACT), with bottom-up somatic approaches | specifically Resource Therapy (Parts Work), Somatic Experiencing, and polyvagal principles | to address complex psychophysiological distress.
              </p>
              <p>
                She has a special interest in the physiological manifestations of chronic stress, trauma, and early life adversity, with a particular focus on pelvic floor neuro-muscular guarding (including vaginismus, vulvodynia, and chronic pelvic pain) and the brain-skin axis (including eczema, psoriasis, and stress-related hair loss). Moreover, Vanesa specializes in broader functional and stress-responsive presentations where symptoms persist despite clear medical investigations.
              </p>
              <p>
                Vanesa takes pride in providing a grounded, highly collaborative, and relational therapeutic space aimed at assisting the nervous system in stepping down from chronic defense states. Outside of her clinical practice, she enjoys modern classic design, writing, and reformer pilates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Memberships */}
      <section>
        <div className="max-w-[1000px] mx-auto px-5 md:px-8 py-10 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 lg:gap-8">
            <div className="lg:col-span-3 space-y-2">
              <p className="uppercase tracking-[0.25em] text-[10px] md:text-[11px] font-medium text-muted-foreground">
                Credentials
              </p>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground tracking-tight leading-tight">
                Education &amp; Memberships
              </h2>
            </div>
            <div className="lg:col-span-7 max-w-[640px]">
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
                  <p className="text-[15px] md:text-base text-foreground">Certificate, Clinical Resource Therapist</p>
                  <p className="uppercase tracking-[0.2em] text-[10px] md:text-[11px] font-medium text-muted-foreground mt-2">Resource Therapy International, 2023</p>
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

export default About;
