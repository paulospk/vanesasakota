import profileImg from "@/assets/profile.jpg";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="bg-hero border-b border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 animate-fade-up">
              <p className="uppercase tracking-widest text-xs font-semibold text-muted-foreground">
                About Vanesa
              </p>
              <h1 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground leading-[1.1]">
                A Warm, Evidence-Based Approach to Therapy
              </h1>
              <p className="text-muted-foreground text-lg max-w-[55ch]">
                Creating a safe and supportive space where you can explore your thoughts, feelings, and experiences without judgement.
              </p>
            </div>
            <div className="animate-fade-up" style={{ animationDelay: "100ms" }}>
              <div className="relative">
                <div className="absolute -inset-3 border border-border -z-10 translate-x-3 translate-y-3" />
                <img
                  src={profileImg}
                  alt="Vanesa Sakota"
                  className="w-full aspect-[4/5] object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Background */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 className="font-serif text-2xl text-foreground mb-4">Background & Training</h2>
          </div>
          <div className="lg:col-span-8 space-y-5 text-muted-foreground leading-relaxed max-w-[65ch]">
            <p>
              Vanesa Sakota is a qualified psychotherapist and counsellor with a deep commitment to helping individuals navigate life's challenges. She holds a Bachelor of Science in Psychology from the University of Sydney and a Master of Arts in Psychotherapy and Counseling from Western Sydney University.
            </p>
            <p>
              Throughout her training, Vanesa developed expertise in a range of therapeutic modalities including Cognitive Behavioural Therapy (CBT), Acceptance and Commitment Therapy (ACT), psychodynamic psychotherapy, and person-centred counselling. She draws on these approaches flexibly, tailoring her work to each client's unique needs and goals.
            </p>
            <p>
              Vanesa has accumulated extensive clinical experience across community mental health settings, private practice, and employee assistance programs. She has worked with individuals from diverse cultural backgrounds and across a wide spectrum of presenting concerns.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4">
              <h2 className="font-serif text-2xl text-foreground mb-4">Therapeutic Philosophy</h2>
            </div>
            <div className="lg:col-span-8 space-y-5 text-muted-foreground leading-relaxed max-w-[65ch]">
              <p>
                Vanesa believes that the therapeutic relationship is at the heart of meaningful change. She strives to create a warm, empathic, and non-judgemental environment where clients feel genuinely heard and understood.
              </p>
              <p>
                Her approach is integrative — blending evidence-based techniques with a deep respect for each individual's lived experience. Whether you're dealing with anxiety, depression, relationship difficulties, grief, or simply seeking personal growth, Vanesa works collaboratively with you to uncover patterns, build resilience, and develop practical strategies for lasting wellbeing.
              </p>
              <p>
                Vanesa is passionate about destigmatising mental health and making therapy accessible. She recognises that reaching out for support takes courage and honours that bravery in every session.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="border-t border-border bg-hero">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
          <h2 className="font-serif text-2xl text-foreground mb-8">Qualifications & Memberships</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">Education</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-foreground">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                  Master of Arts in Psychotherapy and Counseling — Western Sydney University
                </li>
                <li className="flex items-start gap-2 text-sm text-foreground">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                  Bachelor of Science in Psychology — University of Sydney
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">Professional Memberships</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-foreground">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                  Psychotherapy and Counselling Federation of Australia (PACFA)
                </li>
                <li className="flex items-start gap-2 text-sm text-foreground">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                  Australian Counselling Association (ACA)
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
